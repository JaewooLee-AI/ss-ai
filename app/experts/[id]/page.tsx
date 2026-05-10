import { Metadata } from "next";
import { BadgeCheck, MapPin, Briefcase } from "lucide-react";

// Mock fetching function for SEO demonstration
async function getExpert(id: string) {
  // In a real app, query the database
  return {
    id,
    name: "김지원 박사",
    title: "시니어 AI 전략가",
    region: "서울",
    experienceYears: 15,
    bio: "디지털 트랜스포메이션을 15년 이상 이끌어온 전직 임원 출신. 기업 워크플로우에 LLM을 통합하는 분야를 전문으로 합니다.",
    skills: ["AI 전략", "머신러닝", "워크플로우 자동화"],
    verified: true,
  };
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const expert = await getExpert(id);

  return {
    title: `${expert.name} - ${expert.title}`,
    description: expert.bio,
    openGraph: {
      title: `${expert.name} | 상상우리 AI 전문가`,
      description: expert.bio,
      type: "profile",
    },
  };
}

export default async function ExpertDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const expert = await getExpert(id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": expert.name,
    "jobTitle": expert.title,
    "description": expert.bio,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": expert.region,
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Sangsangwoori AI Platform"
    },
    "knowsAbout": expert.skills,
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="glass-panel rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden border border-border/60">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full -z-10 pointer-events-none" />

        <div className="size-32 rounded-3xl bg-secondary flex items-center justify-center text-4xl font-bold text-muted-foreground shrink-0 border border-border/50">
          {expert.name.charAt(0)}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-extrabold tracking-tight">{expert.name}</h1>
            {expert.verified && <BadgeCheck className="size-6 text-primary" />}
          </div>
          <p className="text-xl text-muted-foreground font-medium mb-4">{expert.title}</p>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1.5 bg-background/50 px-3 py-1 rounded-full border border-border/50">
              <MapPin className="size-4" /> {expert.region}
            </span>
            <span className="flex items-center gap-1.5 bg-background/50 px-3 py-1 rounded-full border border-border/50">
              <Briefcase className="size-4" /> {expert.experienceYears}년 경력
            </span>
          </div>

          <div className="prose prose-sm dark:prose-invert max-w-none mb-8">
            <h3 className="text-lg font-semibold text-foreground">소개</h3>
            <p className="text-muted-foreground leading-relaxed">{expert.bio}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">전문 분야 및 스킬</h3>
            <div className="flex flex-wrap gap-2">
              {expert.skills.map((skill) => (
                <span key={skill} className="bg-secondary/50 text-secondary-foreground text-xs font-medium px-2.5 py-1 rounded-md border border-border/50">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
