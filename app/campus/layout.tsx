import Link from "next/link";
import { BookOpen, Users, Trophy } from "lucide-react";

export default function CampusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-background">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 border-r border-border/40 bg-card flex-shrink-0">
        <div className="p-6">
          <h2 className="text-lg font-bold tracking-tight text-gradient">AI 캠퍼스</h2>
          <p className="text-xs text-muted-foreground mt-1">마이크로러닝 및 커뮤니티</p>
        </div>
        <nav className="flex flex-row md:flex-col gap-2 px-4 pb-4 overflow-x-auto md:overflow-visible">
          <Link 
            href="/campus/courses/1" 
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary transition-colors text-foreground"
          >
            <BookOpen className="size-4" />
            <span>내 강의실</span>
          </Link>
          <Link 
            href="/campus/community" 
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
          >
            <Users className="size-4" />
            <span>커뮤니티</span>
          </Link>
          <Link 
            href="/campus/achievements" 
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
          >
            <Trophy className="size-4" />
            <span>학습 성취도</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
