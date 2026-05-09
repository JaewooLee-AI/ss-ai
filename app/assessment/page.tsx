"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BrainCircuit, ArrowRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

const QUESTIONS = [
  {
    id: 1,
    text: "새로운 스마트폰 기능이나 앱이 나오면 어떻게 하시나요?",
    options: [
      { text: "가장 먼저 설치해 보고 기능들을 테스트해 본다.", type: "innovator" },
      { text: "주변에서 좋다고 추천하면 그때 사용해 본다.", type: "adopter" },
      { text: "지금 사용하는 것에 익숙해서 굳이 바꾸려 하지 않는다.", type: "traditional" },
    ]
  },
  {
    id: 2,
    text: "문제가 발생했을 때 당신의 해결 방식은?",
    options: [
      { text: "데이터와 사례를 검색해서 논리적으로 분석한다.", type: "analytical" },
      { text: "주변 사람들에게 묻거나 함께 토론하며 해결한다.", type: "social" },
      { text: "과거의 경험과 직관을 바탕으로 빠르게 결단한다.", type: "intuitive" },
    ]
  },
  {
    id: 3,
    text: "가장 보람을 느끼는 순간은 언제인가요?",
    options: [
      { text: "새로운 기술을 배워서 내 것으로 만들었을 때", type: "innovator" },
      { text: "나의 지식과 경험을 다른 사람에게 가르쳐 줄 때", type: "social" },
      { text: "복잡한 업무 프로세스를 효율적으로 개선했을 때", type: "analytical" },
    ]
  }
];

export default function AssessmentPage() {
  const [step, setStep] = useState(0); // 0: intro, 1~3: questions, 4: result
  const [answers, setAnswers] = useState<string[]>([]);

  const handleStart = () => setStep(1);

  const handleAnswer = (type: string) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);
    if (step < QUESTIONS.length) {
      setStep(step + 1);
    } else {
      setStep(step + 1);
    }
  };

  const resetTest = () => {
    setStep(0);
    setAnswers([]);
  };

  // Simple result calculation logic
  const getResult = () => {
    const counts = answers.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const topType = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b, "innovator");

    switch (topType) {
      case "social":
        return {
          title: "소통형 AI 강사",
          desc: "풍부한 공감 능력과 경험을 바탕으로 기술을 쉽게 풀어 설명하는 데 탁월한 재능이 있습니다. 상상우리 AI 강사 양성 과정이 제격입니다!",
          link: "/campus",
          linkText: "AI 강사 양성 과정 알아보기"
        };
      case "analytical":
        return {
          title: "분석형 AI 컨설턴트",
          desc: "문제의 본질을 꿰뚫어 보고 데이터를 기반으로 솔루션을 도출하는 능력이 뛰어납니다. B2B 소상공인 AI 컨설턴트로 활약해 보세요.",
          link: "/experts",
          linkText: "전문가로 지원하기"
        };
      default:
        return {
          title: "개척형 AI 혁신가",
          desc: "새로운 기술에 대한 호기심이 많고 빠르게 습득하는 능력이 있습니다. 다양한 AI 툴을 섭렵하여 나만의 비즈니스 무기로 만들어 보세요.",
          link: "/campus/courses/1",
          linkText: "기초 AI 강의 수강하기"
        };
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-secondary/10 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden border border-border/50 shadow-lg">
        {/* Decorative blur */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

        {step === 0 && (
          <div className="text-center space-y-6 animate-in fade-in zoom-in duration-500">
            <div className="mx-auto size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <BrainCircuit className="size-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight break-keep">
              시니어 AI 진로 성향 진단 (CIG16)
            </h1>
            <p className="text-muted-foreground text-lg break-keep max-w-lg mx-auto">
              간단한 3개의 질문을 통해 나의 강점을 파악하고, 내게 딱 맞는 인생 2막의 AI 전문가 유형을 알아보세요.
            </p>
            <div className="pt-6">
              <Button size="lg" onClick={handleStart} className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_oklch(0.55_0.25_260_/_0.3)]">
                진단 시작하기 <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
        )}

        {step > 0 && step <= QUESTIONS.length && (
          <div className="animate-in slide-in-from-right-8 fade-in duration-300">
            <div className="mb-8">
              <div className="flex items-center justify-between text-sm font-medium text-muted-foreground mb-4">
                <span>질문 {step} / {QUESTIONS.length}</span>
                <span className="text-primary">{Math.round((step / QUESTIONS.length) * 100)}%</span>
              </div>
              <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-primary h-full transition-all duration-500 ease-out" 
                  style={{ width: `${(step / QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-8 break-keep leading-snug">
              {QUESTIONS[step - 1].text}
            </h2>

            <div className="space-y-4">
              {QUESTIONS[step - 1].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(opt.type)}
                  className="w-full text-left p-5 rounded-2xl border border-border/50 bg-background/50 hover:border-primary/50 hover:bg-primary/5 transition-all text-foreground font-medium group"
                >
                  <div className="flex items-center justify-between">
                    <span className="break-keep">{opt.text}</span>
                    <div className="size-6 rounded-full border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                      <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 text-primary transition-opacity" />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {step > 1 && (
              <button 
                onClick={() => {
                  setStep(step - 1);
                  setAnswers(answers.slice(0, -1));
                }} 
                className="mt-8 flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeft className="size-4 mr-1" /> 이전 질문
              </button>
            )}
          </div>
        )}

        {step > QUESTIONS.length && (
          <div className="text-center animate-in zoom-in fade-in duration-500">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-4">
              진단 결과
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gradient">
              {getResult().title}
            </h2>
            <p className="text-lg text-muted-foreground break-keep max-w-md mx-auto mb-10 leading-relaxed">
              {getResult().desc}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={getResult().link}>
                <Button size="lg" className="w-full sm:w-auto rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_oklch(0.55_0.25_260_/_0.3)]">
                  {getResult().linkText} <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" onClick={resetTest} className="w-full sm:w-auto rounded-full">
                다시 테스트하기
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
