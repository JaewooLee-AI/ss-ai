import { Metadata } from "next";
import { BookOpen, Video, Newspaper, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "프로젝트 & 미디어",
  description: "상상우리 AI 플랫폼의 사업 현장 스케치, 시니어 AI 인사이트 칼럼, 영상 자료실을 만나보세요.",
};

const SKETCHES = [
  {
    id: "sketch-1",
    title: "강동 디지털동행플라자, 개관 6개월 만에 어르신 3만 명 돌파",
    excerpt:
      "상상우리 AI 강사들이 어르신들과 함께 챗GPT 실습 교육을 진행하며 뜨거운 호응을 얻었습니다. 95점의 만족도와 78% 재방문율이 이를 증명합니다.",
    date: "2026-04-28",
    author: "상상우리 편집팀",
    readTime: "3분",
  },
  {
    id: "sketch-2",
    title: "도봉구 복지관 AI 교육 파견 — 78세 어르신의 미드저니 첫 작품",
    excerpt:
      "\"이게 내가 그린 건지 AI가 그린 건지 모르겠어요. 신기해!\" 도봉구 파견 수업에서 탄생한 따뜻한 이야기를 전합니다.",
    date: "2026-04-15",
    author: "박민지 강사",
    readTime: "4분",
  },
  {
    id: "sketch-3",
    title: "은평구 소상공인 AI 컨설팅 프로보노 1기 성료",
    excerpt:
      "3개월 간의 밀착 컨설팅을 통해 5개 소상공인 업체의 마케팅 효율이 평균 35% 향상됐습니다. 현장의 생생한 목소리를 담았습니다.",
    date: "2026-04-03",
    author: "이상훈 컨설턴트",
    readTime: "5분",
  },
];

const COLUMNS = [
  {
    id: "col-1",
    title: "소상공인이 당장 써먹을 수 있는 ChatGPT 프롬프트 5선",
    excerpt:
      "재고 관리부터 SNS 마케팅 문구 작성까지 — 실제 소상공인 컨설팅 현장에서 검증된 프롬프트를 공개합니다.",
    date: "2026-05-02",
    author: "이상훈 컨설턴트",
    readTime: "6분",
  },
  {
    id: "col-2",
    title: "시니어가 AI를 더 잘 배우는 이유: 경험의 역설",
    excerpt:
      "수십 년간 쌓아온 현장 경험이 오히려 AI 활용 능력을 높여준다는 데이터를 분석하고, 안드라고지(성인 학습) 원리와 연결합니다.",
    date: "2026-04-20",
    author: "김지원 박사",
    readTime: "7분",
  },
  {
    id: "col-3",
    title: "AI 에이전트 시대, 사회적 기업이 살아남는 법",
    excerpt:
      "2026년 디지털 비즈니스 트렌드를 분석하고, 자본력이 부족한 사회적 기업과 소상공인이 AI를 무기로 삼는 전략을 제안합니다.",
    date: "2026-04-10",
    author: "최경민 컨설턴트",
    readTime: "8분",
  },
];

const VIDEOS = [
  {
    id: "vid-1",
    tag: "강의",
    title: "ChatGPT로 내 가게 SNS 마케팅 자동화하기",
    speaker: "최경민 컨설턴트",
    duration: "24분",
  },
  {
    id: "vid-2",
    tag: "인터뷰",
    title: "\"인생 2막은 AI와 함께\" — 65세 강사의 이야기",
    speaker: "이상훈 강사",
    duration: "15분",
  },
  {
    id: "vid-3",
    tag: "강의",
    title: "미드저니 v6 실습: 소상공인 홍보물 10분 만에 만들기",
    speaker: "박민지 강사",
    duration: "31분",
  },
  {
    id: "vid-4",
    tag: "세미나",
    title: "2026 시니어 AI 골든벨 현장 하이라이트",
    speaker: "상상우리 AI",
    duration: "42분",
  },
];

function TagBadge({ label, color }: { label: string; color: string }) {
  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide ${color}`}
    >
      {label}
    </span>
  );
}

export default function MediaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-16 border-b border-border/40 bg-secondary/10">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-6">
            <Newspaper className="size-4" />
            <span>프로젝트 &amp; 미디어</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight break-keep mb-4">
            현장의 이야기, <span className="text-gradient">AI의 가능성</span>
          </h1>
          <p className="text-lg text-muted-foreground break-keep max-w-2xl mx-auto">
            상상우리 AI 강사·컨설턴트들이 만들어가는 현장 스케치, 전문가 인사이트 칼럼, 강의 및 인터뷰 영상을 모아 전합니다.
          </p>
        </div>
      </section>

      {/* 사업 현장 스케치 */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex items-center gap-3 mb-10">
            <Newspaper className="size-6 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight">사업 현장 스케치</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKETCHES.map((post) => (
              <article
                key={post.id}
                className="flex flex-col rounded-3xl border border-border/60 bg-card p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <TagBadge label="현장 스케치" color="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" />
                <h3 className="mt-4 font-bold text-lg leading-snug break-keep line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed break-keep line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground border-t border-border/40 pt-4">
                  <span className="flex items-center gap-1">
                    <User className="size-3" /> {post.author}
                  </span>
                  <span className="flex items-center gap-1 ml-auto">
                    <Clock className="size-3" /> {post.readTime}
                  </span>
                  <span>{post.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 시니어 AI 인사이트 */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex items-center gap-3 mb-10">
            <BookOpen className="size-6 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight">시니어 AI 인사이트</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COLUMNS.map((col) => (
              <article
                key={col.id}
                className="flex flex-col rounded-3xl border border-border/60 bg-card p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <TagBadge label="AI 인사이트" color="bg-primary/10 text-primary" />
                <h3 className="mt-4 font-bold text-lg leading-snug break-keep line-clamp-2">
                  {col.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed break-keep line-clamp-3 flex-1">
                  {col.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground border-t border-border/40 pt-4">
                  <span className="flex items-center gap-1">
                    <User className="size-3" /> {col.author}
                  </span>
                  <span className="flex items-center gap-1 ml-auto">
                    <Clock className="size-3" /> {col.readTime}
                  </span>
                  <span>{col.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 영상 자료실 */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex items-center gap-3 mb-10">
            <Video className="size-6 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight">영상 자료실</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VIDEOS.map((vid) => (
              <div
                key={vid.id}
                className="group flex flex-col rounded-3xl border border-border/60 bg-card overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                {/* Thumbnail placeholder */}
                <div className="relative aspect-video bg-secondary/50 flex items-center justify-center">
                  <div className="size-14 rounded-full bg-background/80 border border-border/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Video className="size-6 text-primary" />
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[11px] font-medium px-1.5 py-0.5 rounded">
                    {vid.duration}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <TagBadge
                    label={vid.tag}
                    color={
                      vid.tag === "강의"
                        ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                        : vid.tag === "인터뷰"
                        ? "bg-purple-500/10 text-purple-600 dark:text-purple-400"
                        : "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                    }
                  />
                  <h3 className="mt-3 font-semibold text-sm leading-snug break-keep line-clamp-2 flex-1">
                    {vid.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground">{vid.speaker}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
