import { MessageSquare, ThumbsUp, Clock } from "lucide-react";
import Link from "next/link";

const mockPosts = [
  {
    id: "post-1",
    author: "홍미영",
    avatar: "홍",
    title: "데이터 분석 프롬프트는 어떻게 구성하시나요?",
    preview: "영업 CSV를 분석하려고 ChatGPT를 사용 중인데 계속 숫자를 지어내네요. 팁 있으신가요?",
    likes: 12,
    replies: 5,
    time: "2시간 전",
    tags: ["프롬프트 엔지니어링", "데이터 분석"],
  },
  {
    id: "post-2",
    author: "이상훈",
    avatar: "이",
    title: "미드저니 v6는 광고 크리에이티브의 게임 체인저입니다.",
    preview: "최근 성공 사례를 공유합니다. 새 v6 모델을 사용하여 에이전시 크리에이티브 비용을 40% 절감했습니다...",
    likes: 34,
    replies: 12,
    time: "5시간 전",
    tags: ["미드저니", "성공 사례"],
  },
  {
    id: "post-3",
    author: "김지원 강사",
    avatar: "K",
    title: "[공지] 이번 주 금요일 오피스 아워",
    content: "안녕하세요 여러분! 이번 주 금요일 오후 3시에 오픈 오피스 아워를 진행합니다. Zapier 관련 질문을 준비해 오세요!",
    likes: 45,
    replies: 3,
    time: "하루 전",
    tags: ["공지", "Q&A"],
    isInstructor: true,
  },
];

export function CommunityBoard() {
  return (
    <div className="flex flex-col gap-4">
      {mockPosts.map((post) => (
        <Link key={post.id} href={`/campus/community/${post.id}`} className="block group">
          <div className="p-5 glass-panel rounded-2xl border border-border/50 transition-all hover:bg-secondary/30 hover:border-border/80">
            <div className="flex items-start gap-4">
              <div className={`shrink-0 size-10 rounded-full flex items-center justify-center font-bold text-sm ${post.isInstructor ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'}`}>
                {post.avatar}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  {post.isInstructor && (
                    <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-primary px-1.5 py-0.5 rounded">
                      강사
                    </span>
                  )}
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {post.preview}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-[11px] font-medium bg-secondary px-2 py-0.5 rounded-full text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="size-3.5" /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="size-3.5" /> {post.replies}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3.5" /> {post.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
