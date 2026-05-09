import { BadgeCheck, MapPin, Wrench } from "lucide-react";
import Link from "next/link";

export interface ExpertProps {
  id: string;
  name: string;
  title: string;
  region: string;
  experienceYears: number;
  bio: string;
  tools: string[];
  verified: boolean;
  avatarUrl?: string;
}

export function ExpertCard({ expert }: { expert: ExpertProps }) {
  return (
    <Link href={`/experts/${expert.id}`} className="group block h-full">
      <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_oklch(0.55_0.25_260_/_0.15)] dark:hover:shadow-[0_20px_40px_-15px_oklch(0.65_0.25_270_/_0.2)]">
        
        {/* Glow border effect on hover */}
        <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        <div className="relative z-10 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-secondary text-xl font-bold text-muted-foreground border border-border/50">
              {expert.avatarUrl ? (
                <img src={expert.avatarUrl} alt={expert.name} className="size-full rounded-2xl object-cover" />
              ) : (
                expert.name.charAt(0)
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-lg text-foreground tracking-tight">{expert.name}</h3>
                {expert.verified && (
                  <BadgeCheck className="size-4 text-primary" aria-label="Verified" />
                )}
              </div>
              <p className="text-sm font-medium text-muted-foreground">{expert.title}</p>
            </div>
          </div>
          <div className="flex flex-col items-end text-xs text-muted-foreground">
            <span className="flex items-center gap-1 font-medium">
              <MapPin className="size-3" /> {expert.region}
            </span>
            <span className="mt-1">{expert.experienceYears}y exp</span>
          </div>
        </div>

        <p className="relative z-10 mt-5 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {expert.bio}
        </p>

        <div className="relative z-10 mt-6 flex flex-wrap gap-2">
          <span className="flex items-center gap-1 rounded-md bg-secondary/50 px-2 py-1 text-xs font-medium text-secondary-foreground">
            <Wrench className="size-3" /> Tools
          </span>
          {expert.tools.map((tool) => (
            <span key={tool} className="rounded-md border border-border/50 px-2 py-1 text-xs text-muted-foreground">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
