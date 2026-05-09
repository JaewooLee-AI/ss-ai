"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <div className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-background">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] right-[0%] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[120px]"
        />
      </div>

      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-border/50 bg-white/5 px-7 py-2 backdrop-blur-md dark:bg-black/5"
        >
          <Sparkles className="size-4 text-primary" />
          <p className="text-sm font-medium">상상우리 AI 플랫폼 1.0</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl break-keep"
        >
          당신의 비즈니스를 혁신하는 <br className="hidden sm:block" />
          <span className="text-gradient">AI와 시니어 전문가.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed break-keep"
        >
          시니어 전문가의 풍부한 경험과 최신 AI 기술을 연결합니다.
          검증된 컨설턴트를 찾거나 당신의 다음 프로젝트를 지금 시작해 보세요.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/experts">
            <Button size="lg" className="h-12 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_oklch(0.55_0.25_260_/_0.3)] dark:shadow-[0_0_20px_oklch(0.65_0.25_270_/_0.3)] group rounded-full">
              전문가 찾기
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg" className="h-12 px-8 text-base rounded-full glass-panel hover:bg-secondary">
              전문가 지원하기
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
