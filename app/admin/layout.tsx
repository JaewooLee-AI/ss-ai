import Link from "next/link";
import { LayoutDashboard, FileText, Briefcase, Settings, Users } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-background">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 border-r border-border/40 bg-card flex-shrink-0">
        <div className="p-6">
          <Link href="/admin">
            <h2 className="text-xl font-extrabold tracking-tight text-foreground">
              Admin <span className="text-gradient">Panel</span>
            </h2>
          </Link>
          <p className="text-xs text-muted-foreground mt-1">Sangsangwoori v1.0</p>
        </div>
        
        <nav className="flex flex-row md:flex-col gap-2 px-4 pb-4 overflow-x-auto md:overflow-visible">
          <Link 
            href="/admin" 
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary transition-colors text-foreground"
          >
            <LayoutDashboard className="size-4" />
            <span>대시보드</span>
          </Link>
          <Link 
            href="/admin/matching" 
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
          >
            <Briefcase className="size-4" />
            <span>매칭 칸반보드</span>
          </Link>
          <Link 
            href="/admin/posts" 
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
          >
            <FileText className="size-4" />
            <span>콘텐츠 CMS</span>
          </Link>
          <Link 
            href="/admin/jobs" 
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
          >
            <Briefcase className="size-4" />
            <span>모집 공고 관리</span>
          </Link>
          <Link 
            href="/admin/users" 
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
          >
            <Users className="size-4" />
            <span>회원 및 전문가 관리</span>
          </Link>
          <div className="md:mt-8">
            <Link 
              href="/admin/settings" 
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            >
              <Settings className="size-4" />
              <span>시스템 설정</span>
            </Link>
          </div>
        </nav>
      </aside>

      {/* Main Admin Content */}
      <main className="flex-1 overflow-y-auto bg-background/50">
        <div className="p-6 md:p-10 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
