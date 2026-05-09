"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  companyName: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  package: z.string().min(1, { message: "Please select a package." }),
  needs: z.string().min(10, { message: "Please describe your needs in at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center glass-panel rounded-3xl h-full border-primary/20">
        <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
          <span className="text-primary text-xl">✓</span>
        </div>
        <h3 className="text-2xl font-bold mb-2 break-keep">요청이 접수되었습니다!</h3>
        <p className="text-muted-foreground break-keep">
          관심을 가져주셔서 감사합니다. 상상우리의 AI 전문가가 내용을 검토한 후 24시간 이내에 연락드리겠습니다.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setIsSuccess(false)}>
          다른 문의 남기기
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 p-8 glass-panel rounded-3xl h-full relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="mb-2">
        <h3 className="text-2xl font-bold tracking-tight">견적 문의</h3>
        <p className="text-sm text-muted-foreground mt-1 break-keep">아래 양식을 작성해 주시면 맞춤형 AI 전략을 준비하겠습니다.</p>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium">회사명</label>
        <input
          {...register("companyName")}
          className="w-full h-10 px-3 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition-all"
          placeholder="상상우리"
        />
        {errors.companyName && <p className="text-xs text-destructive">{errors.companyName.message}</p>}
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium">담당자 이메일</label>
        <input
          {...register("email")}
          className="w-full h-10 px-3 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition-all"
          placeholder="hello@sangsangwoori.com"
        />
        {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium">관심 패키지</label>
        <select
          {...register("package")}
          className="w-full h-10 px-3 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition-all appearance-none"
        >
          <option value="">솔루션을 선택해주세요...</option>
          <option value="basic">기초 AI 도입</option>
          <option value="custom">맞춤형 AI 자동화</option>
          <option value="full">엔터프라이즈 전면 도입</option>
        </select>
        {errors.package && <p className="text-xs text-destructive">{errors.package.message}</p>}
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium">상세 요구사항</label>
        <textarea
          {...register("needs")}
          className="w-full min-h-[100px] px-3 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition-all resize-none"
          placeholder="어떤 비즈니스 문제를 해결하고 싶으신가요?"
        />
        {errors.needs && <p className="text-xs text-destructive">{errors.needs.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full mt-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_oklch(0.55_0.25_260_/_0.3)]">
        {isSubmitting ? "제출 중..." : "무료 상담 신청하기"}
      </Button>
    </form>
  );
}
