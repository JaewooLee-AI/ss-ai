import { CommunityBoard } from "@/components/campus/community-board";
import { Button } from "@/components/ui/button";
import { PlusCircle, Search } from "lucide-react";

export default function CommunityPage() {
  return (
    <div className="p-6 md:p-8 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Peer-to-Peer Learning</h1>
          <p className="text-muted-foreground mt-1">Ask questions, share success stories, and learn together.</p>
        </div>
        <Button className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_oklch(0.55_0.25_260_/_0.3)]">
          <PlusCircle className="mr-2 size-4" /> New Discussion
        </Button>
      </div>

      <div className="flex items-center gap-2 mb-6 p-2 glass-panel rounded-full border border-border/50">
        <div className="pl-3 text-muted-foreground">
          <Search className="size-5" />
        </div>
        <input 
          type="text" 
          placeholder="Search discussions..." 
          className="flex-1 bg-transparent border-none outline-none text-sm px-2 py-1 placeholder:text-muted-foreground/70"
        />
        <Button variant="ghost" size="sm" className="rounded-full">Search</Button>
      </div>

      <CommunityBoard />
    </div>
  );
}
