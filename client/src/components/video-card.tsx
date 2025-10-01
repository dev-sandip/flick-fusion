"use client";

import Link from "next/link";
import type { Video } from "@/lib/types";
import { BadgeCheck } from "lucide-react";

interface VideoCardProps {
  video: Video;
  compact?: boolean;
}

export function VideoCard({ video, compact = false }: VideoCardProps) {
  const formatViews = (n: number) => {
    if (n >= 1e6) return (n / 1e6).toFixed(1) + "M";
    if (n >= 1e3) return (n / 1e3).toFixed(1) + "K";
    return "" + n;
  };

  const timeAgo = (ts: number) => {
    const diff = Date.now() - ts;
    const d = Math.floor(diff / 86400000);
    if (d > 0) return d + " day" + (d > 1 ? "s" : "") + " ago";
    const h = Math.floor(diff / 3600000);
    if (h > 0) return h + " hour" + (h > 1 ? "s" : "") + " ago";
    const m = Math.floor(diff / 60000);
    return m + " min ago";
  };

  const verified = Math.random() > 0.6;

  if (compact) {
    return (
      <Link
        href={`/watch/${video.id}`}
        className="flex gap-2 group rounded-lg overflow-hidden hover:bg-accent transition p-2"
      >
        <div className="relative w-40 aspect-video overflow-hidden rounded">
          <img
            src={video.thumbnail || "/placeholder.svg"}
            alt={video.title}
            className="h-full w-full object-cover"
          />
          <span className="absolute bottom-1 right-1 text-[10px] px-1.5 py-0.5 rounded bg-black/70 text-white">
            {video.minutes || "10:00"}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="line-clamp-2 text-sm font-medium">{video.title}</div>
          <div className="mt-1 text-xs text-muted-foreground">
            {video.channel}
          </div>
          <div className="text-xs text-muted-foreground">
            {formatViews(video.views)} views
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/watch/${video.id}`}
      className="text-left group rounded-xl overflow-hidden border border-border hover:border-border/50 bg-card hover:bg-accent transition block"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnail || "/placeholder.svg"}
          alt={video.title}
          className="h-full w-full object-cover group-hover:scale-[1.02] transition duration-300"
        />
        {video.featured && (
          <span className="absolute top-2 left-2 text-[11px] px-2 py-1 rounded-md bg-primary text-primary-foreground">
            Featured
          </span>
        )}
        {video.status === "pending" && (
          <span className="absolute top-2 right-2 text-[11px] px-2 py-1 rounded-md bg-yellow-500/90 text-black">
            Pending
          </span>
        )}
        <span className="absolute bottom-2 right-2 text-[11px] px-2 py-0.5 rounded bg-black/70 text-white">
          {video.minutes || "10:00"}
        </span>
      </div>
      <div className="p-3 flex gap-3">
        <img
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${video.channel}`}
          className="h-9 w-9 rounded-full border border-border"
          alt={video.channel}
        />
        <div className="min-w-0">
          <div className="line-clamp-2 text-[15px] font-medium">
            {video.title}
          </div>
          <div className="mt-0.5 text-[13px] text-muted-foreground flex items-center gap-1.5">
            <span>{video.channel}</span>
            {verified && <BadgeCheck className="w-3.5 h-3.5 text-primary" />}
          </div>
          <div className="text-[12px] text-muted-foreground">
            {formatViews(video.views)} views • {timeAgo(video.uploadedAt)}
          </div>
        </div>
      </div>
    </Link>
  );
}
