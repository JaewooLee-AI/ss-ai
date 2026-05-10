import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BrainCircuit, GraduationCap, Building2, BarChart3, Users, Network } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "회사 소개",
  description: "초고령사회 진입과 시니어 AI 생태계 패러다임의 전환. 상상우리 AI 교육콘텐츠연구소의 비전과 철학을 소개합니다.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden border-b border-border/40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-8">
            <BrainCircuit className="size-4" />
            <span>상상우리 AI 교육콘텐츠연구소</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight break-keep leading-tight mb-8">
            초고령사회 진입과 <br className="hidden sm:block" />
            <span className="text-gradient">시니어 AI 생태계</span> 패러다임의 전환
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto break-keep">
            2026년 대한민국은 노인 인구 1,000만 명을 돌파하며 초고령사회에 진입합니다. 
            상상우리는 시니어의 풍부한 경륜을 최첨단 AI 기술과 결합하여 사회적·경제적 부가가치를 창출합니다.
          </p>
        </div>
      </section>

      {/* Mission & Problem Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 break-keep">
                디지털 격차를 넘어 <br/>새로운 기회로
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed break-keep">
                <p>
                  인터넷 통신 기술(ICT)이 일상의 필수 요소로 자리 잡았지만, 수백만 명의 시니어 시민들이 접근성 장벽으로 인해 온라인 환경을 능동적으로 탐색하는 데 어려움을 겪고 있습니다. 이는 개인의 사회적 고립을 심화시키고 경제적 불평등을 야기합니다.
                </p>
                <p>
                  그러나 최근 지표들은 시니어 세대가 강력한 기술 수용 의지를 지니고 있음을 보여줍니다. 2025년을 기점으로 <strong>시니어 10명 중 약 7명(67.7%)이 인공지능 기술을 이용해 본 경험</strong>이 있으며, 챗GPT 등 생성형 AI 서비스 설치 비중이 급증하고 있습니다.
                </p>
                <p>
                  글로벌 차원(IEEE, 유네스코 등)에서도 시니어 계층의 디지털 리터러시는 국가 경쟁력을 좌우하는 핵심 벤치마크로 다루어집니다. 디지털 리터러시는 단순한 기술 습득을 넘어 <strong>사회 참여와 경제적 자립을 위한 기본 권리</strong>입니다.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-panel p-6 rounded-2xl border-border/50 bg-background/50">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart3 className="size-6 text-primary" />
                </div>
                <div className="text-3xl font-extrabold mb-2">67.7%</div>
                <p className="text-sm text-muted-foreground font-medium">시니어 AI 기술 이용 경험</p>
              </div>
              <div className="glass-panel p-6 rounded-2xl border-border/50 bg-background/50 translate-y-0 sm:translate-y-8">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Network className="size-6 text-primary" />
                </div>
                <div className="text-3xl font-extrabold mb-2">IEEE / UNESCO</div>
                <p className="text-sm text-muted-foreground font-medium">글로벌 디지털 역량 표준 준수</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof & Evidence */}
      <section className="py-24 border-y border-border/40">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">현장의 성과로 증명합니다</h2>
          <p className="text-lg text-muted-foreground mb-16 break-keep max-w-2xl mx-auto">
            상상우리가 운영하는 서울디지털동행플라자(서북/서남센터)의 개관 1년 만의 압도적인 성과는 시니어 디지털 전환의 가능성을 확증합니다.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center justify-center p-8 rounded-3xl border border-border/50 bg-card">
              <Users className="size-10 text-primary mb-4" />
              <div className="text-5xl font-extrabold mb-2 text-gradient">80,000+</div>
              <p className="text-foreground font-semibold">누적 방문 어르신</p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-3xl border border-border/50 bg-card">
              <GraduationCap className="size-10 text-primary mb-4" />
              <div className="text-5xl font-extrabold mb-2 text-gradient">200+</div>
              <p className="text-foreground font-semibold">디지털 교육 과정 운영</p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-3xl border border-border/50 bg-card">
              <BarChart3 className="size-10 text-primary mb-4" />
              <div className="text-5xl font-extrabold mb-2 text-gradient">95점 / 78%</div>
              <p className="text-foreground font-semibold">이용자 만족도 및 재방문율</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Business Model */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">통합 웹 플랫폼 핵심 모델</h2>
            <p className="text-lg text-muted-foreground break-keep max-w-2xl mx-auto">
              상상우리의 중장기 비전을 시장에 알리고 실제 비즈니스 확장을 견인하기 위한 3대 핵심 축입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10 group-hover:bg-primary/20 transition-colors" />
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center size-8 rounded-lg bg-background border border-border">1</span>
                시니어 전문가 매칭
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed break-keep">
                철저한 신뢰 기반의 플랫폼. CIG16 진단 도구를 통해 선발된 시니어 AI 강사 및 컨설턴트들의 프로필을 투명하게 공개하고, 수요 기관과 연결합니다.
              </p>
            </div>
            
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10 group-hover:bg-primary/20 transition-colors" />
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center size-8 rounded-lg bg-background border border-border">2</span>
                시니어 친화적 LMS
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed break-keep">
                지속 가능한 학습을 지원하는 교육 인프라. 마이크로러닝 숏폼 영상과 Peer-to-Peer 커뮤니티를 통해 자기주도적 AI 학습 생태계를 조성합니다.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10 group-hover:bg-primary/20 transition-colors" />
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center size-8 rounded-lg bg-background border border-border">3</span>
                디지털 에이전시 (B2B)
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed break-keep">
                자원과 인력이 부족한 사회적 기업 및 소상공인을 대상으로, 시니어 AI 컨설턴트가 비즈니스 현안을 분석하고 맞춤형 AI 솔루션을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI 교육개발 프레임워크 */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">AI 교육개발 프레임워크</h2>
            <p className="text-lg text-muted-foreground break-keep max-w-2xl mx-auto">
              상상우리 AI 교육콘텐츠연구소가 자체 개발한 맞춤형 과정 설계 방법론입니다.
              대상의 특성과 AI 도구를 체계적으로 분석하여 최적의 교육과정을 도출합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                step: "01",
                title: "학습자 분석",
                desc: "CIG16 진단 도구로 시니어 학습자의 디지털 성향, 현업 경력, 학습 목표를 정밀 분석합니다.",
              },
              {
                step: "02",
                title: "AI 툴 매핑",
                desc: "ChatGPT, 미드저니, Make 등 과업에 최적화된 AI 도구를 단독 또는 복합 적용합니다.",
              },
              {
                step: "03",
                title: "마이크로러닝 설계",
                desc: "3~5분 단위의 세분화된 모듈로 시니어의 심리적 부담을 줄이고 현장 틈새 학습을 지원합니다.",
              },
              {
                step: "04",
                title: "현장 피드백 반영",
                desc: "파견 강사 및 컨설턴트의 현장 피드백을 LMS 데이터와 결합하여 과정을 지속 개선합니다.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative flex flex-col p-6 rounded-3xl border border-border/60 bg-card group hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl font-extrabold text-primary/10 mb-4 group-hover:text-primary/20 transition-colors">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed break-keep">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 파트너십 및 주요 연혁 */}
      <section className="py-24 bg-secondary/20 border-y border-border/40">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">파트너십 및 주요 연혁</h2>
            <p className="text-lg text-muted-foreground break-keep max-w-2xl mx-auto">
              정부 부처, 지자체, 공공기관과의 협업으로 쌓아온 검증된 신뢰의 역사입니다.
            </p>
          </div>

          <div className="relative border-l-2 border-primary/20 pl-8 ml-4 space-y-10">
            {[
              {
                year: "2026",
                month: "05",
                event: "상상우리 AI 플랫폼 1.0 정식 오픈",
                detail: "전문가 파견 매칭, AI 캠퍼스(LMS), 솔루션 에이전시 통합 운영 시작",
              },
              {
                year: "2026",
                month: "01",
                event: "서울디지털동행플라자 강동·동대문·도봉 센터 운영 위탁",
                detail: "3개 센터 총 200여 개 교육 과정, 누적 방문 어르신 8만 명 달성",
              },
              {
                year: "2025",
                month: "09",
                event: "강남구 통합 일자리 사업 — 디지털 리터러시 매니저 양성",
                detail: "강남구 소재 소상공인 50개 업체 대상 AI 활용 교육 성료",
              },
              {
                year: "2025",
                month: "04",
                event: "은평구 AI 딥러닝 강사 양성과정 운영",
                detail: "서울 서북권 최초 시니어 전문 AI 강사 양성 프로그램 개설",
              },
              {
                year: "2024",
                month: "11",
                event: "CIG16 시니어 진로 진단 도구 개발 완료",
                detail: "중장년 인생 2막 진로 성향을 16가지 유형으로 분석하는 자체 솔루션 출시",
              },
            ].map((item) => (
              <div key={`${item.year}${item.month}`} className="relative">
                <div className="absolute -left-[42px] flex items-center justify-center size-5 rounded-full bg-primary border-2 border-background" />
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-1">
                  <span className="text-sm font-bold text-primary">
                    {item.year}. {item.month}
                  </span>
                  <h3 className="font-semibold text-foreground break-keep">{item.event}</h3>
                </div>
                <p className="text-sm text-muted-foreground break-keep">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card border-t border-border/40">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            인생 2막의 디지털 전환, <br className="hidden sm:block" />상상우리가 함께합니다.
          </h2>
          <p className="text-lg text-muted-foreground mb-10 break-keep">
            단순한 기업 소개를 넘어, 시니어 전문가 육성과 비즈니스 혁신을 이끄는 상상우리 AI 플랫폼에 지금 바로 참여하세요.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/solutions">
              <Button size="lg" className="w-full sm:w-auto px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_oklch(0.55_0.25_260_/_0.3)]">
                B2B 솔루션 문의
              </Button>
            </Link>
            <Link href="/experts">
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 rounded-full bg-background">
                시니어 전문가 찾아보기 <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
