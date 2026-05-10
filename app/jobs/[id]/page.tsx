import { Metadata } from "next";
import { Building2, MapPin, Calendar, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";

async function getJobPosting(id: string) {
  return {
    id,
    title: "AI 자동화 컨설턴트 (프리랜서)",
    company: "상상우리 파트너스",
    location: "서울 · 원격 혼합",
    type: "프로젝트 계약",
    salary: "프로젝트당 5,000 ~ 8,000만 원",
    datePosted: "2026-05-01",
    validThrough: "2026-06-30",
    description:
      "생성형 AI 및 노코드 툴을 활용하여 소상공인·중소기업 고객의 마케팅 워크플로우를 자동화할 시니어 AI 컨설턴트를 모집합니다.",
    requirements: [
      "10년 이상의 현업 경력 보유",
      "디지털 트랜스포메이션 실적 증빙 가능",
      "Make, Zapier, OpenAI API 실무 경험",
    ],
  };
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const job = await getJobPosting(id);

  return {
    title: `${job.title} — ${job.company}`,
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
    title: job.title,
    description: job.description,
    datePosted: job.datePosted,
    validThrough: job.validThrough,
    employmentType: "CONTRACTOR",
    hiringOrganization: {
      "@type": "Organization",
      name: job.company,
      sameAs: "https://sangsangwoori.com",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "서울",
        addressCountry: "KR",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "KRW",
      value: {
        "@type": "QuantitativeValue",
        value: "계약 기반",
        unitText: "PROJECT",
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mb-8">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mb-4">
          {job.type}
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4 break-keep">
          {job.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-medium">
          <span className="flex items-center gap-1.5">
            <Building2 className="size-4" /> {job.company}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="size-4" /> {job.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="size-4" /> 게시일 {job.datePosted}
          </span>
        </div>
      </div>

      <div className="glass-panel p-6 rounded-2xl mb-8 border border-border/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">보상</p>
          <p className="font-semibold flex items-center gap-1.5">
            <Coins className="size-4 text-primary" /> {job.salary}
          </p>
        </div>
        <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_oklch(0.55_0.25_260_/_0.3)] px-8">
          지원하기
        </Button>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold mb-3">채용 소개</h3>
          <p className="text-muted-foreground leading-relaxed break-keep">
            {job.description}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">지원 자격</h3>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            {job.requirements.map((req, i) => (
              <li key={i} className="break-keep">{req}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
