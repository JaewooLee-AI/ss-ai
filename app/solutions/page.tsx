import { QuoteForm } from "@/components/solutions/quote-form";
import { CheckCircle2, Zap, Cog, Building2 } from "lucide-react";

const packages = [
  {
    id: "basic",
    title: "기초 AI 도입",
    price: "맞춤 견적",
    description: "반복적인 일상 업무에 표준 AI 툴을 통합하고자 하는 소상공인에게 적합합니다.",
    icon: <Zap className="size-6 text-primary" />,
    features: ["ChatGPT Plus 세팅 및 교육", "기초 프롬프트 엔지니어링", "이메일 자동화", "1개월 기술 지원"],
  },
  {
    id: "custom",
    title: "맞춤형 AI 자동화",
    price: "맞춤 견적",
    description: "복잡하고 반복적인 업무를 자동화하려는 에이전시 및 성장하는 팀을 위한 맞춤형 솔루션입니다.",
    icon: <Cog className="size-6 text-primary" />,
    features: ["맞춤형 워크플로우 자동화 (Make/Zapier)", "사내 지식 기반 챗봇", "CRM AI 연동", "3개월 기술 지원"],
    popular: true,
  },
  {
    id: "full",
    title: "엔터프라이즈 전면 도입",
    price: "맞춤 견적",
    description: "전사적 차원의 혁신을 준비하는 조직을 위한 엔드투엔드 AI 컨설팅입니다.",
    icon: <Building2 className="size-6 text-primary" />,
    features: ["Private LLM 구축", "맞춤형 AI 앱 개발", "전사 임직원 교육 세미나", "전담 AI 컨설턴트 배정"],
  },
];

export default function SolutionsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl break-keep">
          소상공인과 사회적 기업을 위한 <br className="hidden sm:block" />
          <span className="text-gradient">맞춤형 AI 솔루션</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto break-keep">
          대기업 수준의 AI 기술을 소상공인과 사회적 임팩트 조직도 누릴 수 있도록 돕습니다.
          귀하의 비즈니스에 맞는 패키지를 선택해 보세요.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
        {packages.map((pkg) => (
          <div 
            key={pkg.id} 
            className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
              pkg.popular 
                ? 'border-primary/50 bg-primary/5 dark:bg-primary/10 shadow-lg' 
                : 'border-border/60 bg-card'
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                인기 패키지
              </div>
            )}
            
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-background rounded-2xl border border-border/50 shadow-sm">
                {pkg.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight">{pkg.title}</h3>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-6 h-10 break-keep">{pkg.description}</p>
            
            <div className="text-3xl font-extrabold tracking-tight mb-6">
              {pkg.price}
            </div>
            
            <div className="space-y-3 flex-1">
              {pkg.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground/80 break-keep">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-secondary/30 rounded-3xl p-6 md:p-12 border border-border/50 overflow-hidden relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full -z-10" />
        
        <div className="flex flex-col">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4 break-keep">
            비즈니스 혁신을 <br/> 시작할 준비가 되셨나요?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 break-keep">
            양식에 맞춰 귀사의 세부 정보와 요구사항을 남겨주세요. 
            상상우리의 AI 컨설턴트가 비즈니스 맞춤형 제안서를 준비해 연락드리겠습니다.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-background flex items-center justify-center border border-border font-bold">1</div>
              <p className="text-sm font-medium">견적 문의 남기기</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-background flex items-center justify-center border border-border font-bold">2</div>
              <p className="text-sm font-medium">무료 디스커버리 콜 진행 (30분)</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-background flex items-center justify-center border border-border font-bold">3</div>
              <p className="text-sm font-medium">맞춤형 제안서 및 로드맵 수령</p>
            </div>
          </div>
        </div>

        <div className="h-full">
          <QuoteForm />
        </div>
      </div>
    </div>
  );
}
