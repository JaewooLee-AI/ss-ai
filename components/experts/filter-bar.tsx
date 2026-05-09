"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function FilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  const handleFilterChange = (name: string, value: string) => {
    router.push(`/experts?${createQueryString(name, value)}`);
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between p-4 glass-panel rounded-2xl mb-8">
      <div className="flex flex-wrap items-center gap-3">
        <select 
          className="h-9 rounded-full border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          onChange={(e) => handleFilterChange('region', e.target.value)}
          defaultValue={searchParams.get('region') || ""}
        >
          <option value="">전체 지역</option>
          <option value="Seoul">서울</option>
          <option value="Busan">부산</option>
          <option value="Jeju">제주</option>
        </select>
        
        <select 
          className="h-9 rounded-full border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          onChange={(e) => handleFilterChange('expertise', e.target.value)}
          defaultValue={searchParams.get('expertise') || ""}
        >
          <option value="">전체 분야</option>
          <option value="AI Consultant">AI 컨설턴트</option>
          <option value="Data Analyst">데이터 분석가</option>
          <option value="Marketing">마케팅</option>
        </select>

        <select 
          className="h-9 rounded-full border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          onChange={(e) => handleFilterChange('tools', e.target.value)}
          defaultValue={searchParams.get('tools') || ""}
        >
          <option value="">전체 AI 툴</option>
          <option value="ChatGPT">ChatGPT</option>
          <option value="Midjourney">Midjourney</option>
          <option value="Claude">Claude</option>
        </select>
      </div>

      <div className="text-sm text-muted-foreground font-medium">
        엄선된 전문가 리스트
      </div>
    </div>
  );
}
