import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "회사 소개", href: "/about" },
  { name: "전문가 파견", href: "/experts" },
  { name: "솔루션 에이전시", href: "/solutions" },
  { name: "프로젝트 & 미디어", href: "/media" },
  { name: "참여 & 진단", href: "/news" },
  { name: "AI 캠퍼스", href: "/campus/courses/1" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative size-8 rounded-lg overflow-hidden flex items-center justify-center bg-white group-hover:opacity-90 transition-opacity">
              <Image 
                src="/logo.png" 
                alt="Sangsangwoori Logo" 
                fill 
                className="object-cover"
              />
            </div>
            <span className="text-lg font-bold tracking-tight text-gradient">Sangsangwoori AI</span>
          </Link>
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="relative z-10">{item.name}</span>
                {/* 21st.dev style hover background slide effect */}
                <div className="absolute inset-0 z-0 scale-95 rounded-md bg-secondary opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100" />
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" className="hidden sm:inline-flex text-muted-foreground hover:text-foreground">
              로그인
            </Button>
          </Link>
          <Link href="/solutions">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_oklch(0.55_0.25_260_/_0.3)] dark:shadow-[0_0_20px_oklch(0.65_0.25_270_/_0.3)] transition-all">
              도입 문의
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
