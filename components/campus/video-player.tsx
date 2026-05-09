"use client";

import { Play, Pause, Volume2, Maximize } from "lucide-react";
import { useState } from "react";

export function VideoPlayer({ title }: { title: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black border border-border/50 group shadow-lg">
      {/* Mock Video Thumbnail / Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 opacity-50 flex items-center justify-center">
        <span className="text-white/20 text-6xl font-bold tracking-tighter">AI Campus</span>
      </div>

      {/* Center Play Button Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300">
          <button 
            onClick={() => setIsPlaying(true)}
            className="size-16 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_oklch(0.55_0.25_260_/_0.5)] pl-1"
          >
            <Play className="size-8" />
          </button>
        </div>
      )}

      {/* Top Title Overlay */}
      <div className="absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <h3 className="text-white font-medium text-sm drop-shadow-md">{title}</h3>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2">
        {/* Progress Bar */}
        <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden cursor-pointer">
          <div className="h-full bg-primary w-1/3 rounded-full relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 size-3 bg-white rounded-full shadow" />
          </div>
        </div>
        
        {/* Controls Row */}
        <div className="flex items-center justify-between text-white mt-1">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-primary transition-colors">
              {isPlaying ? <Pause className="size-5" /> : <Play className="size-5" />}
            </button>
            <button className="hover:text-primary transition-colors">
              <Volume2 className="size-5" />
            </button>
            <span className="text-xs font-medium font-mono opacity-80">01:23 / 04:50</span>
          </div>
          <button className="hover:text-primary transition-colors">
            <Maximize className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
