"use client";

import { useState } from "react";
import { MoreHorizontal, Plus, Calendar, User, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data for B2B requests
const initialColumns = [
  { id: "new", title: "신규 문의 (New)", items: [
    { id: "req-1", company: "A 소셜 벤처", package: "기초 AI 도입", date: "2026-05-10", needs: "ChatGPT로 고객 응대 이메일 초안을 자동화하고 싶습니다." }
  ]},
  { id: "discovery", title: "초기 상담 (Discovery)", items: [
    { id: "req-2", company: "B 로컬 카페", package: "맞춤형 AI 자동화", date: "2026-05-09", needs: "인스타그램 리뷰를 자동으로 분류하고 싶습니다." },
    { id: "req-3", company: "C 시니어 클럽", package: "기초 AI 도입", date: "2026-05-08", needs: "엑셀 데이터를 더 쉽게 정리하고 싶습니다." }
  ]},
  { id: "proposal", title: "제안 중 (Proposal)", items: [
    { id: "req-4", company: "D 복지재단", package: "엔터프라이즈 전면 도입", date: "2026-05-05", needs: "전 직원 대상 AI 역량 강화 및 챗봇 구축이 필요합니다." }
  ]},
  { id: "matching", title: "전문가 매칭 (Matching)", items: [
    { id: "req-5", company: "E 제조업", package: "맞춤형 AI 자동화", date: "2026-05-02", needs: "수발주 관리 자동화. (매칭: Sanghoon Lee)" }
  ]},
  { id: "closed", title: "계약 완료 (Closed)", items: [
    { id: "req-6", company: "F 법무법인", package: "엔터프라이즈 전면 도입", date: "2026-04-20", needs: "판례 검색 RAG 시스템 구축 완수." }
  ]},
];

export default function MatchingKanbanPage() {
  const [columns] = useState(initialColumns);

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">전문가 매칭 (Kanban)</h1>
          <p className="text-muted-foreground mt-1">B2B 솔루션 견적 문의 파이프라인 관리</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="mr-2 size-4" /> 수동 문의 등록
        </Button>
      </div>

      {/* Kanban Board */}
      <div className="flex gap-6 overflow-x-auto pb-8 h-[calc(100vh-200px)]">
        {columns.map((col) => (
          <div key={col.id} className="flex-shrink-0 w-80 flex flex-col bg-secondary/20 rounded-2xl border border-border/50 overflow-hidden">
            <div className="p-4 border-b border-border/50 bg-card/50 flex items-center justify-between">
              <h3 className="font-bold text-sm">{col.title}</h3>
              <span className="bg-secondary text-secondary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                {col.items.length}
              </span>
            </div>
            
            <div className="p-3 flex-1 overflow-y-auto space-y-3">
              {col.items.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-card p-4 rounded-xl border border-border/60 shadow-sm hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">
                      {item.package}
                    </span>
                    <button className="text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity" aria-label="옵션 보기">
                      <MoreHorizontal className="size-4" />
                    </button>
                  </div>
                  <h4 className="font-bold text-sm mb-1">{item.company}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-3 leading-relaxed">
                    {item.needs}
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground font-medium pt-3 border-t border-border/40">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="size-3" /> {item.date}
                    </div>
                    {col.id === "matching" ? (
                      <div className="flex items-center gap-1.5 text-primary">
                        <User className="size-3" /> 매칭됨
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="size-3" /> 대기 중
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {col.items.length === 0 && (
                <div className="flex flex-col items-center justify-center h-24 text-muted-foreground border-2 border-dashed border-border/50 rounded-xl">
                  <p className="text-xs font-medium">항목이 없습니다.</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
