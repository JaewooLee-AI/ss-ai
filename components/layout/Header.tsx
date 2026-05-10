"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "회사 소개", href: "/about" },
  { name: "전문가 파견", href: "/experts" },
  { name: "솔루션 에이전시", href: "/solutions" },
  { name: "프로젝트 & 미디어", href: "/media" },
  { name: "참여 & 진단", href: "/news" },
  { name: "AI 캠퍼스", href: "/campus/courses/1" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      {/* Main bar */}
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo + Desktop nav */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2.5 group shrink-0" onClick={() => setOpen(false)}>
            <div className="relative size-8 rounded-lg overflow-hidden flex items-center justify-center bg-white group-hover:opacity-90 transition-opacity">
              <Image src="/logo.png" alt="Sangsangwoori Logo" fill className="object-cover" />
            </div>
            <span className="text-base font-bold tracking-tight text-gradient">Sangsangwoori AI</span>
          </Link>

          {/* Desktop nav — only visible at lg+ */}
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

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Link href="/login" className="hidden sm:block">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              로그인
            </Button>
          </Link>
          <Link href="/solutions" className="hidden sm:block">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_oklch(0.55_0.25_260_/_0.3)] dark:shadow-[0_0_20px_oklch(0.65_0.25_270_/_0.3)] transition-all">
              도입 문의
            </Button>
          </Link>

          {/* Hamburger — visible below lg */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            className="lg:hidden flex items-center justify-center size-9 rounded-md hover:bg-secondary transition-colors"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-border/40 bg-background/95 backdrop-blur-xl ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              {item.name}
            </Link>
          ))}

          {/* CTA buttons in mobile menu */}
          <div className="flex gap-3 mt-4 pt-4 border-t border-border/40">
            <Link href="/login" className="flex-1" onClick={() => setOpen(false)}>
              <Button variant="outline" size="sm" className="w-full rounded-full">
                로그인
              </Button>
            </Link>
            <Link href="/solutions" className="flex-1" onClick={() => setOpen(false)}>
              <Button size="sm" className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_oklch(0.55_0.25_260_/_0.3)]">
                도입 문의
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
