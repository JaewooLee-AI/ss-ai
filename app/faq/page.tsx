"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const FAQ_SECTIONS = [
  {
    category: "강사·컨설턴트 지원",
    items: [
      {
        q: "지원 자격에 나이 제한이 있나요?",
        a: "아니요. 상상우리 AI 강사·컨설턴트 과정은 만 50세 이상의 시니어라면 누구나 지원할 수 있습니다. 특히 20년 이상의 현업 경력을 보유하신 분들을 우선 선발합니다.",
      },
      {
        q: "AI를 전혀 모르는데도 강사가 될 수 있나요?",
        a: "네, 가능합니다. 상상우리 AI 교육개발 프레임워크 기반의 체계적인 양성 과정(기초 → 심화 → 현장 실습)을 통해 AI를 처음 접하시는 분도 강사로 성장할 수 있도록 지원합니다.",
      },
      {
        q: "양성 과정의 기간과 커리큘럼은 어떻게 되나요?",
        a: "총 3개월 과정으로, 1개월은 AI 기초 이론 및 툴 실습(ChatGPT, 미드저니 등), 2개월은 교수법 및 현장 실습으로 구성됩니다. 수료 후에는 서울디지털동행플라자(강동, 동대문, 도봉) 파견 기회가 제공됩니다.",
      },
      {
        q: "수료 후 활동 보수는 어떻게 되나요?",
        a: "강사 파견의 경우 시간당 보수가 지급되며, 컨설턴트는 프로젝트 단위로 계약됩니다. 구체적인 금액은 파견 기관 및 과업 범위에 따라 달라지므로 상담을 통해 안내해 드립니다.",
      },
    ],
  },
  {
    category: "AI 캠퍼스 (LMS)",
    items: [
      {
        q: "AI 캠퍼스는 누구나 이용할 수 있나요?",
        a: "AI 캠퍼스는 상상우리 AI 플랫폼에 등록된 회원이라면 누구나 이용할 수 있습니다. 일부 심화 콘텐츠는 강사·컨설턴트 수료자에게만 공개됩니다.",
      },
      {
        q: "수료증은 어떻게 발급받나요?",
        a: "AI 캠퍼스 내 [학습 성취도] 메뉴에서 이수 완료된 과정의 수료증을 PDF로 다운로드하실 수 있습니다. 수료증에는 이수 과정명, 이수 시간, 발급일이 기재됩니다.",
      },
      {
        q: "모바일로도 학습이 가능한가요?",
        a: "네. 상상우리 AI 캠퍼스는 반응형으로 설계되어 스마트폰과 태블릿에서도 끊김 없이 수강할 수 있습니다. 강의 영상은 3~5분 단위의 마이크로러닝 형식으로 제공됩니다.",
      },
    ],
  },
  {
    category: "B2B 컨설팅 서비스",
    items: [
      {
        q: "컨설팅 신청 후 프로세스가 어떻게 되나요?",
        a: "①견적 문의 접수 → ②전담 코디네이터 유선 상담(요구사항 파악) → ③적합한 시니어 컨설턴트 매칭 → ④3자 미팅(일정·과업 합의) → ⑤컨설팅 진행 및 대시보드 실시간 모니터링 순으로 진행됩니다.",
      },
      {
        q: "소상공인도 이용할 수 있나요?",
        a: "네, 소상공인을 위한 기초 AI 도입 패키지를 제공합니다. 자본 규모에 관계없이 접근할 수 있도록 맞춤 견적으로 운영됩니다.",
      },
      {
        q: "홈페이지 제작 대행 서비스는 어떤 것을 포함하나요?",
        a: "모바일 홈페이지 제작(네이버 모두 등), 기업 소개 페이지 구성, AI 챗봇 연동, SNS 프로필 최적화 등을 포함합니다. Standard/Premium 패키지에 따라 범위가 다르며 솔루션 에이전시 페이지에서 상세 내용을 확인하실 수 있습니다.",
      },
      {
        q: "컨설팅 기간은 얼마나 되나요?",
        a: "기본 컨설팅 기간은 3개월이며, 과업 범위와 고객사 상황에 따라 1개월 단기 집중형부터 6개월 장기 지원까지 유연하게 운영됩니다.",
      },
    ],
  },
  {
    category: "플랫폼 이용",
    items: [
      {
        q: "회원 가입은 어떻게 하나요?",
        a: "현재 상상우리 AI 플랫폼은 초청 기반으로 운영되고 있으며, 공지사항 페이지의 모집 공고를 통해 참여하실 수 있습니다. 2026년 하반기에는 일반 회원가입을 오픈할 예정입니다.",
      },
      {
        q: "개인정보는 안전하게 보호되나요?",
        a: "네. 상상우리 AI 플랫폼은 개인정보보호법 및 정보통신망법을 준수하며, 모든 데이터는 암호화되어 저장됩니다. 자세한 내용은 개인정보처리방침을 확인해 주세요.",
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border/40 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="font-medium text-foreground break-keep group-hover:text-primary transition-colors">
          {q}
        </span>
        <ChevronDown
          className={`size-4 shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-5 text-sm text-muted-foreground leading-relaxed break-keep">
          {a}
        </p>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-16 border-b border-border/40 bg-secondary/10">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary text-muted-foreground text-sm font-medium mb-6">
            <HelpCircle className="size-4" />
            <span>자주 묻는 질문</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight break-keep mb-4">
            궁금한 점을 <span className="text-gradient">모두 해결하세요</span>
          </h1>
          <p className="text-lg text-muted-foreground break-keep max-w-2xl mx-auto">
            강사·컨설턴트 지원부터 B2B 서비스, 플랫폼 이용까지 자주 묻는 질문을 모았습니다.
          </p>
        </div>
      </section>

      {/* FAQ 목록 */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="space-y-12">
            {FAQ_SECTIONS.map((section) => (
              <div key={section.category}>
                <h2 className="text-lg font-bold text-primary mb-2">{section.category}</h2>
                <div className="glass-panel rounded-2xl border border-border/60 px-6">
                  {section.items.map((item) => (
                    <FaqItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center p-8 rounded-3xl bg-secondary/30 border border-border/40">
            <p className="font-semibold mb-2">찾는 내용이 없으신가요?</p>
            <p className="text-sm text-muted-foreground mb-6 break-keep">
              솔루션 문의 폼을 통해 질문을 남겨주시면 담당자가 빠르게 답변드립니다.
            </p>
            <a
              href="/solutions"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              문의하기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
