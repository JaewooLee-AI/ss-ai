import { FilterBar } from "@/components/experts/filter-bar";
import { ExpertCard, ExpertProps } from "@/components/experts/expert-card";

// Mock Data for UI/UX demonstration
const MOCK_EXPERTS: ExpertProps[] = [
  {
    id: "exp-1",
    name: "김지원 박사",
    title: "시니어 AI 전략가",
    region: "서울",
    experienceYears: 15,
    bio: "디지털 트랜스포메이션을 15년 이상 이끌어온 전직 임원 출신. 기업 워크플로우에 LLM을 통합하는 분야를 전문으로 합니다.",
    tools: ["ChatGPT", "Claude", "AutoGPT"],
    verified: true,
  },
  {
    id: "exp-2",
    name: "이상훈",
    title: "데이터 분석 컨설턴트",
    region: "부산",
    experienceYears: 12,
    bio: "예측 모델링 및 비즈니스 인텔리전스 전문가. 머신러닝을 활용해 제조기업의 공급망 최적화를 지원합니다.",
    tools: ["Python", "Tableau", "Midjourney"],
    verified: true,
  },
  {
    id: "exp-3",
    name: "박민지",
    title: "크리에이티브 AI 디렉터",
    region: "서울",
    experienceYears: 8,
    bio: "디자인과 AI의 간극을 잇는 전문가. 마케팅 에이전시와 크리에이티브 스튜디오를 위한 생성형 AI 워크플로우를 전문으로 합니다.",
    tools: ["Midjourney", "Stable Diffusion", "Runway"],
    verified: false,
  },
  {
    id: "exp-4",
    name: "최경민",
    title: "AI 운영 매니저",
    region: "제주",
    experienceYears: 20,
    bio: "수십 년간의 IT 관리 경험을 바탕으로, 지자체와 중소기업을 위한 확장 가능한 AI 솔루션 구축에 집중하고 있습니다.",
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
