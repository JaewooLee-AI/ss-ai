import { Metadata } from "next";
import { Megaphone, CalendarDays, MapPin, ArrowRight, BrainCircuit, HelpCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "공지사항 & 참여 모집",
  description: "상상우리 AI의 공지사항, 사업 참여자 모집 공고, CIG16 진로 진단 및 자주 묻는 질문을 확인하세요.",
};

const ANNOUNCEMENTS = [
  {
    id: "ann-1",
    type: "모집",
    title: "2026 상반기 시니어 AI 강사 양성과정 모집 (강동·동대문·도봉 센터)",
    date: "2026-05-01",
    deadline: "2026-05-31",
    location: "서울 강동 / 동대문 / 도봉",
    href: "/jobs/job-1",
    highlight: true,
  },
  {
    id: "ann-2",
    type: "모집",
    title: "소상공인 AI 컨설팅 프로보노 참여 기업 모집 (1기)",
    date: "2026-04-25",
    deadline: "2026-05-20",
    location: "서울 전 지역 (방문 또는 비대면)",
    href: "/jobs/job-2",
    highlight: true,
  },
  {
    id: "ann-3",
    type: "이벤트",
    title: "2026 시니어 AI 골든벨 대회 — 참가 신청 접수 시작",
    date: "2026-04-18",
    deadline: "2026-05-25",
    location: "강남구 AI 특화센터",
    href: "#",
    highlight: false,
  },
  {
    id: "ann-4",
    type: "공지",
    title: "AI 캠퍼스 시스템 점검 안내 (5월 15일 오전 2~6시)",
    date: "2026-05-08",
    deadline: null,
    location: null,
    href: "#",
    highlight: false,
  },
  {
    id: "ann-5",
    type: "공지",
    title: "상상우리 AI 플랫폼 1.0 정식 오픈 안내",
    date: "2026-04-01",
    deadline: null,
    location: null,
    href: "#",
    highlight: false,
  },
];

const TAG_STYLES: Record<string, string> = {
  모집: "bg-primary/10 text-primary",
  이벤트: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  공지: "bg-secondary text-muted-foreground",
};

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-16 border-b border-border/40 bg-secondary/10">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-6">
            <Megaphone className="size-4" />
            <span>공지사항 &amp; 참여 모집</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight break-keep mb-4">
            함께 만드는 <span className="text-gradient">시니어 AI 생태계</span>
          </h1>
          <p className="text-lg text-muted-foreground break-keep max-w-2xl mx-auto">
            강사 및 컨설턴트 양성 과정 모집, 프로보노 참여 공고, 주요 이벤트 안내를 확인하세요.
          </p>
        </div>
      </section>

      {/* 공지/모집 목록 */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight mb-8">전체 공지</h2>
          <div className="flex flex-col gap-4">
            {ANNOUNCEMENTS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`group block rounded-2xl border p-5 transition-all hover:-translate-y-0.5 hover:shadow-md ${
                  item.highlight
                    ? "border-primary/30 bg-primary/5"
                    : "border-border/60 bg-card"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 shrink-0 inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold ${TAG_STYLES[item.type]}`}
                    >
                      {item.type}
                    </span>
                    <div>
                      <p className="font-semibold text-foreground break-keep group-hover:text-primary transition-colors">
                        {item.title}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <CalendarDays className="size-3" /> 게시 {item.date}
                        </span>
                        {item.deadline && (
                          <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-medium">
                            마감 {item.deadline}
                          </span>
                        )}
                        {item.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="size-3" /> {item.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 self-center hidden sm:block" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-secondary/20 border-t border-border/40">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight mb-8">참여 도구</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* CIG16 */}
            <div className="glass-panel rounded-3xl border border-border/60 p-8 flex flex-col">
              <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <BrainCircuit className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">CIG16 시니어 진로 진단</h3>
              <p className="text-sm text-muted-foreground leading-relaxed break-keep flex-1">
                3개의 질문으로 나의 강점을 파악하고, 내게 딱 맞는 AI 전문가 유형(강사·컨설턴트·혁신가)을 알아보세요.
              </p>
              <Link href="/assessment" className="mt-6">
                <Button className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_oklch(0.55_0.25_260_/_0.3)]">
                  진단 시작하기 <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
            </div>

            {/* FAQ */}
            <div className="glass-panel rounded-3xl border border-border/60 p-8 flex flex-col">
              <div className="size-12 rounded-2xl bg-secondary flex items-center justify-center mb-4">
                <HelpCircle className="size-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">자주 묻는 질문 (FAQ)</h3>
              <p className="text-sm text-muted-foreground leading-relaxed break-keep flex-1">
                강사·컨설턴트 지원 자격, 수료 및 인증, B2B 컨설팅 프로세스 등 자주 묻는 질문들을 모았습니다.
              </p>
              <Link href="/faq" className="mt-6">
                <Button variant="outline" className="w-full rounded-full">
                  FAQ 보기 <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
