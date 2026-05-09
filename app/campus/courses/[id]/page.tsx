import { VideoPlayer } from "@/components/campus/video-player";
import { CheckCircle2, Circle, Clock, PlayCircle } from "lucide-react";

export default async function CoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const modules = [
    { id: 1, title: "생성형 AI의 이해", duration: "3:45", completed: true },
    { id: 2, title: "프롬프트 엔지니어링 기초", duration: "5:20", completed: true, active: true },
    { id: 3, title: "이메일 워크플로우 자동화", duration: "4:15", completed: false },
    { id: 4, title: "마케팅을 위한 미드저니 활용법", duration: "6:00", completed: false },
    { id: 5, title: "강의 요약 및 다음 단계", duration: "2:30", completed: false },
  ];

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">소상공인을 위한 AI 필수 기초</h1>
        <p className="text-sm text-muted-foreground mt-1">강사: 김지원 • 총 5강 • 22분</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Video Player Area */}
        <div className="flex-1">
          <VideoPlayer title="2. 프롬프트 엔지니어링 기초" />
          
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">강의 노트</h2>
            <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
              <p>이번 강의에서는 대규모 언어 모델(LLM)을 효과적으로 활용하기 위한 프롬프트 작성의 핵심 원칙을 배웁니다.</p>
              <ul>
                <li><strong>컨텍스트가 최우선</strong>: 항상 배경 지식을 충분히 제공하세요.</li>
                <li><strong>구체적인 요구사항</strong>: 원하는 출력 형식(예: 표, 요약, 목록 등)을 명확히 명시하세요.</li>
                <li><strong>반복과 수정</strong>: AI와의 대화를 지속하며 원하는 결과가 나올 때까지 프롬프트를 다듬어 보세요.</li>
              </ul>
              <p>배운 내용을 토대로 ChatGPT를 사용하여 이번 주 신제품 마케팅 이메일 초안을 작성하는 실습을 진행해 보세요!</p>
            </div>
          </div>
        </div>

        {/* Right: Curriculum List */}
        <div className="w-full lg:w-80 shrink-0">
          <div className="glass-panel rounded-2xl p-5 border border-border/50 sticky top-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">커리큘럼</h3>
              <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md">2/5 수강 완료</span>
            </div>
            
            <div className="space-y-1">
              {modules.map((mod) => (
                <button 
                  key={mod.id}
                  className={`w-full flex items-start gap-3 p-3 rounded-xl transition-all text-left ${
                    mod.active 
                      ? 'bg-primary/10 border border-primary/20 shadow-sm' 
                      : 'hover:bg-secondary'
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {mod.completed ? (
                      <CheckCircle2 className="size-4 text-primary" />
                    ) : mod.active ? (
                      <PlayCircle className="size-4 text-primary" />
                    ) : (
                      <Circle className="size-4 text-muted-foreground/50" />
                    )}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className={`text-sm font-medium leading-tight ${mod.active ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {mod.title}
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-1 flex items-center gap-1">
                      <Clock className="size-3" /> {mod.duration}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
