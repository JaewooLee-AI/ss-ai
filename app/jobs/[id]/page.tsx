import { Metadata } from "next";
import { Building2, MapPin, Calendar, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock fetching function for SEO demonstration
async function getJobPosting(id: string) {
  return {
    id,
    title: "AI Automation Consultant (Freelance)",
    company: "Sangsangwoori Partners",
    location: "Seoul, Remote Hybrid",
    type: "Contract",
    salary: "₩50M - ₩80M per project",
    datePosted: "2026-05-01",
    validThrough: "2026-06-30",
    description: "We are seeking a senior AI consultant to help our SME clients automate their marketing workflows using generative AI and no-code tools.",
    requirements: [
      "Minimum 10 years of professional experience",
      "Proven track record in digital transformation",
      "Hands-on experience with Make, Zapier, and OpenAI APIs",
    ],
  };
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const job = await getJobPosting(id);

  return {
    title: `${job.title} at ${job.company}`,
    description: job.description,
    openGraph: {
      title: job.title,
      description: job.description,
      type: "article",
    },
  };
}

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = await getJobPosting(id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "datePosted": job.datePosted,
    "validThrough": job.validThrough,
    "employmentType": job.type.toUpperCase(),
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.company,
      "sameAs": "https://sangsangwoori.com"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.location,
        "addressCountry": "KR"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "KRW",
      "value": {
        "@type": "QuantitativeValue",
        "value": "Contract based",
        "unitText": "PROJECT"
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">{job.title}</h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-medium">
          <span className="flex items-center gap-1.5"><Building2 className="size-4" /> {job.company}</span>
          <span className="flex items-center gap-1.5"><MapPin className="size-4" /> {job.location}</span>
          <span className="flex items-center gap-1.5"><Calendar className="size-4" /> Posted {job.datePosted}</span>
        </div>
      </div>

      <div className="glass-panel p-6 rounded-2xl mb-8 border border-border/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">Compensation</p>
          <p className="font-semibold flex items-center gap-1"><DollarSign className="size-4 text-primary" /> {job.salary}</p>
        </div>
        <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_oklch(0.55_0.25_260_/_0.3)] px-8">
          Apply Now
        </Button>
      </div>

      <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none space-y-8">
        <div>
          <h3 className="text-xl font-bold mb-3">Job Description</h3>
          <p className="text-muted-foreground leading-relaxed">{job.description}</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Requirements</h3>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            {job.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
