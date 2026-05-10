import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MobileMenuButton } from "./MobileMenuButton";
import { navItems } from "./nav-items";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">

        {/* 로고 + 데스크톱 네비게이션 */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative size-8 rounded-lg overflow-hidden flex items-center justify-center bg-white group-hover:opacity-90 transition-opacity">
              <Image src="/logo.png" alt="Sangsangwoori Logo" fill className="object-cover" />
            </div>
            <span className="text-base font-bold tracking-tight text-gradient">Sangsangwoori AI</span>
          </Link>

          {/* 데스크톱 전용 — lg(1024px) 이상에서만 표시 */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 z-0 scale-95 rounded-md bg-secondary opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100" />
              </Link>
            ))}
          </nav>
        </div>

        {/* 우측: 버튼 + 모바일 햄버거 */}
        <div className="flex items-center gap-2">
          <Link href="/login" className="hidden sm:block">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              로그인
            </Button>
          </Link>
          <Link href="/solutions" className="hidden lg:block">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_oklch(0.55_0.25_260_/_0.3)] dark:shadow-[0_0_20px_oklch(0.65_0.25_270_/_0.3)] transition-all">
              도입 문의
            </Button>
          </Link>

          {/* 모바일 햄버거 버튼 (클라이언트 컴포넌트) */}
          <MobileMenuButton />
        </div>

      </div>
    </header>
  );
}
