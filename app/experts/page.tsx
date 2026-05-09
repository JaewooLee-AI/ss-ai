import { FilterBar } from "@/components/experts/filter-bar";
import { ExpertCard, ExpertProps } from "@/components/experts/expert-card";

// Mock Data for UI/UX demonstration
const MOCK_EXPERTS: ExpertProps[] = [
  {
    id: "exp-1",
    name: "Dr. Jiwon Kim",
    title: "Senior AI Strategist",
    region: "Seoul",
    experienceYears: 15,
    bio: "Former executive with 15+ years of experience in leading digital transformation. Specializes in integrating LLMs into enterprise workflows.",
    tools: ["ChatGPT", "Claude", "AutoGPT"],
    verified: true,
  },
  {
    id: "exp-2",
    name: "Sanghoon Lee",
    title: "Data Analytics Consultant",
    region: "Busan",
    experienceYears: 12,
    bio: "Expert in predictive modeling and business intelligence. Helping manufacturing companies optimize supply chains using machine learning.",
    tools: ["Python", "Tableau", "Midjourney"],
    verified: true,
  },
  {
    id: "exp-3",
    name: "Minji Park",
    title: "Creative AI Director",
    region: "Seoul",
    experienceYears: 8,
    bio: "Bridging the gap between design and AI. Expert in generative AI workflows for marketing agencies and creative studios.",
    tools: ["Midjourney", "Stable Diffusion", "Runway"],
    verified: false,
  },
  {
    id: "exp-4",
    name: "Kyungmin Choi",
    title: "AI Operations Manager",
    region: "Jeju",
    experienceYears: 20,
    bio: "Decades of IT management experience. Now focusing on deploying scalable AI solutions for local governments and SMEs.",
    tools: ["ChatGPT", "Zapier", "Make"],
    verified: true,
  },
];

export default async function ExpertsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams;
  const region = typeof params.region === 'string' ? params.region : "";
  const expertise = typeof params.expertise === 'string' ? params.expertise : "";
  const tools = typeof params.tools === 'string' ? params.tools : "";

  // Filter mock data based on search params
  const filteredExperts = MOCK_EXPERTS.filter((expert) => {
    if (region && expert.region !== region) return false;
    if (expertise && !expert.title.includes(expertise)) return false; // Simple mock filter logic
    if (tools && !expert.tools.includes(tools)) return false;
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-12 md:px-8">
      <div className="mb-10 text-center sm:text-left">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          전문가 <span className="text-gradient">디렉토리</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground break-keep">
          귀하의 비즈니스를 한 단계 성장시킬 검증된 시니어 AI 전문가를 찾고 연결해 보세요.
        </p>
      </div>

      <FilterBar />

      {filteredExperts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredExperts.map((expert) => (
            <ExpertCard key={expert.id} expert={expert} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="rounded-full bg-secondary p-6">
            <span className="text-4xl">🔍</span>
          </div>
          <h3 className="mt-6 text-xl font-semibold">전문가를 찾을 수 없습니다</h3>
          <p className="mt-2 text-muted-foreground">필터를 조정하여 다시 검색해 보세요.</p>
        </div>
      )}
    </div>
  );
}
