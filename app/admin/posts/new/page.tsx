"use client";

import { useState } from "react";
import { TiptapEditor } from "@/components/editor/tiptap";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Send } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NewPostPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPublishing, setIsPublishing] = useState(false);

  const handlePublish = async () => {
    if (!title || !content) {
      alert("Please provide both title and content.");
      return;
    }

    setIsPublishing(true);
    
    // In a real app, this would call an API or Server Action to insert into DB
    console.log("Publishing post:", { title, content });
    
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsPublishing(false);
    alert("Post published successfully!");
    router.push("/admin");
  };

  return (
    <div className="max-w-4xl mx-auto pb-20">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link href="/admin">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowLeft className="size-4" />
            </Button>
          </Link>
          <h1 className="text-2xl font-extrabold tracking-tight">Create New Post</h1>
        </div>
        
        <Button 
          onClick={handlePublish} 
          disabled={isPublishing}
          className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
        >
          {isPublishing ? "Publishing..." : (
            <>
              Publish <Send className="ml-2 size-4" />
            </>
          )}
        </Button>
      </div>

      <div className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full text-4xl font-extrabold tracking-tight bg-transparent border-none outline-none placeholder:text-muted-foreground/40 focus:ring-0"
          />
        </div>

        <div className="min-h-[500px]">
          <TiptapEditor content={content} onChange={setContent} />
        </div>
      </div>
    </div>
  );
}
