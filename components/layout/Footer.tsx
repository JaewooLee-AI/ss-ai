import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold tracking-tight text-gradient">Sangsangwoori AI</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs break-keep">
              시니어에게 접근하기 쉬운 모던 AI 솔루션을 제공합니다. 초고령사회의 에이지테크 미래를 선도하는 상상우리.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">서비스</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/experts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">전문가 찾기</Link></li>
              <li><Link href="/campus" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AI 캠퍼스</Link></li>
              <li><Link href="/solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">B2B 솔루션 문의</Link></li>
              <li><Link href="/assessment" className="text-sm text-muted-foreground hover:text-foreground transition-colors">나의 AI 성향 진단 (CIG16)</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">상상우리</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">회사 소개</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">채용 안내</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">블로그 (준비중)</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">약관 및 정책</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">개인정보처리방침</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">이용약관</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between border-t border-border/40 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} 상상우리. 모든 권리 보유.
          </p>
          <div className="mt-4 flex space-x-4 sm:mt-0 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">개인정보처리방침</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
