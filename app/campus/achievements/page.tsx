import { Trophy, Download, CheckCircle2, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const COMPLETED_COURSES = [
  {
    id: "c-1",
    title: "생성형 AI 기초: ChatGPT 완전 정복",
    completedAt: "2026-03-15",
    hours: 4.5,
    score: 92,
  },
  {
    id: "c-2",
    title: "프롬프트 엔지니어링 심화",
    completedAt: "2026-04-02",
    hours: 6,
    score: 88,
  },
];

const IN_PROGRESS_COURSES = [
  {
    id: "p-1",
    title: "소상공인을 위한 AI 필수 기초",
    progress: 40,
    totalModules: 5,
    completedModules: 2,
  },
  {
    id: "p-2",
    title: "마케팅을 위한 미드저니 활용법",
    progress: 0,
    totalModules: 4,
    completedModules: 0,
  },
];

const CERTIFICATES = [
  {
    id: "cert-1",
    title: "생성형 AI 기초 수료증",
    issuedAt: "2026-03-15",
    courseTitle: "생성형 AI 기초: ChatGPT 완전 정복",
  },
  {
    id: "cert-2",
    title: "프롬프트 엔지니어링 심화 수료증",
    issuedAt: "2026-04-02",
    courseTitle: "프롬프트 엔지니어링 심화",
  },
];

export default function AchievementsPage() {
  const totalHours = COMPLETED_COURSES.reduce((sum, c) => sum + c.hours, 0);
  const avgScore = Math.round(
    COMPLETED_COURSES.reduce((sum, c) => sum + c.score, 0) / COMPLETED_COURSES.length
  );

  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <Trophy className="size-6 text-primary" />
          학습 성취도
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          이수 현황, 수료증 발급, 학습 통계를 한눈에 확인하세요.
        </p>
      </div>

      {/* 통계 요약 */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        <div className="glass-panel rounded-2xl border border-border/50 p-5 text-center">
          <div className="text-3xl font-extrabold text-gradient">
            {COMPLETED_COURSES.length}
          </div>
          <p className="text-xs text-muted-foreground mt-1 font-medium">수료 과정</p>
        </div>
        <div className="glass-panel rounded-2xl border border-border/50 p-5 text-center">
          <div className="text-3xl font-extrabold text-gradient">{totalHours}h</div>
          <p className="text-xs text-muted-foreground mt-1 font-medium">총 학습 시간</p>
        </div>
        <div className="glass-panel rounded-2xl border border-border/50 p-5 text-center">
          <div className="text-3xl font-extrabold text-gradient">{avgScore}점</div>
          <p className="text-xs text-muted-foreground mt-1 font-medium">평균 평가 점수</p>
        </div>
      </div>

      {/* 수료 과정 */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <CheckCircle2 className="size-5 text-primary" /> 수료 완료
        </h2>
        <div className="flex flex-col gap-3">
          {COMPLETED_COURSES.map((course) => (
            <div
              key={course.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl border border-border/60 bg-card"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-sm">{course.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    수료일 {course.completedAt} · {course.hours}시간 · 점수 {course.score}점
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 학습 중 */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <BookOpen className="size-5 text-muted-foreground" /> 학습 중
        </h2>
        <div className="flex flex-col gap-3">
          {IN_PROGRESS_COURSES.map((course) => (
            <div
              key={course.id}
              className="p-4 rounded-2xl border border-border/60 bg-card"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium text-sm">{course.title}</p>
                <span className="text-xs font-medium text-primary">
                  {course.completedModules}/{course.totalModules} 강
                </span>
              </div>
              <div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-full transition-all"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">{course.progress}% 완료</p>
            </div>
          ))}
        </div>
      </section>

      {/* 수료증 발급 */}
      <section>
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Trophy className="size-5 text-amber-500" /> 수료증 발급
        </h2>
        <div className="flex flex-col gap-3">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 rounded-2xl border border-amber-500/20 bg-amber-500/5"
            >
              <div>
                <p className="font-semibold text-sm">{cert.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {cert.courseTitle} · 발급일 {cert.issuedAt}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="shrink-0 gap-1.5 rounded-full border-amber-500/30 hover:bg-amber-500/10"
              >
                <Download className="size-3.5" /> PDF 다운로드
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
