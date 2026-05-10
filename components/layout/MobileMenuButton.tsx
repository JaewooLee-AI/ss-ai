"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { navItems } from "./nav-items";

export function MobileMenuButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 햄버거 버튼 — lg 미만에서만 표시 */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
        className="lg:hidden flex items-center justify-center size-9 rounded-md hover:bg-secondary transition-colors"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {/* 모바일 드롭다운 — 헤더(h-16 = 64px) 바로 아래 fixed 위치 */}
      <div
        className={`
          fixed inset-x-0 top-16 z-40 lg:hidden
          overflow-hidden
          bg-background/95 backdrop-blur-xl border-b border-border/40
          transition-all duration-300 ease-in-out
          ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
        `}
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

          <div className="flex gap-3 mt-4 pt-4 border-t border-border/40">
            <Link href="/login" className="flex-1" onClick={() => setOpen(false)}>
              <Button variant="outline" size="sm" className="w-full rounded-full">
                로그인
              </Button>
            </Link>
            <Link href="/solutions" className="flex-1" onClick={() => setOpen(false)}>
              <Button
                size="sm"
                className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_oklch(0.55_0.25_260_/_0.3)]"
              >
                도입 문의
              </Button>
            </Link>
          </div>
        </nav>
      </div>

      {/* 딤 오버레이 — 메뉴 열릴 때 배경 클릭으로 닫기 */}
      {open && (
        <div
          className="fixed inset-0 top-16 z-30 lg:hidden bg-black/20"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
