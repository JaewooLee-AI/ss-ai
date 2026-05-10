import { CommunityBoard } from "@/components/campus/community-board";
import { Button } from "@/components/ui/button";
import { PlusCircle, Search } from "lucide-react";

export default function CommunityPage() {
  return (
    <div className="p-6 md:p-8 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">동료 학습 커뮤니티</h1>
          <p className="text-muted-foreground mt-1">질문을 올리고, 성공 사례를 공유하며, 함께 배워요.</p>
        </div>
        <Button className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_oklch(0.55_0.25_260_/_0.3)]">
          <PlusCircle className="mr-2 size-4" /> 새 글쓰기
        </Button>
      </div>

      <div className="flex items-center gap-2 mb-6 p-2 glass-panel rounded-full border border-border/50">
        <div className="pl-3 text-muted-foreground">
          <Search className="size-5" />
        </div>
        <input 
          type="text" 
          placeholder="토론 검색..."
          className="flex-1 bg-transparent border-none outline-none text-sm px-2 py-1 placeholder:text-muted-foreground/70"
        />
        <Button variant="ghost" size="sm" className="rounded-full">검색</Button>
      </div>

      <CommunityBoard />
    </div>
  );
}
