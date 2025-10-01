"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { ThumbsUp, ThumbsDown, Share2, Flag } from "lucide-react";
import { getVideos, addToWatchHistory } from "@/lib/storage";
import { VideoCard } from "@/components/video-card";
import type { Video } from "@/lib/types";

export default function WatchPage() {
  const params = useParams();
  const videoId = params.id as string;
  const [video, setVideo] = useState<Video | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const allVideos = getVideos();
    const currentVideo = allVideos.find((v) => v.id === videoId);

    if (currentVideo) {
      setVideo(currentVideo);
      addToWatchHistory(videoId);
    }

    setVideos(allVideos.filter((v) => v.id !== videoId));
  }, [videoId]);

  if (!video) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-muted-foreground">Video not found</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      <div className="flex-1">
        <div className="aspect-video bg-black rounded-xl overflow-hidden mb-4">
          <video
            src={video.src}
            poster={video.thumbnail}
            controls
            autoPlay
            className="w-full h-full"
          />
        </div>

        <h1 className="text-2xl font-semibold mb-2">{video.title}</h1>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <img
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${video.channel}`}
              alt={video.channel}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="font-medium">{video.channel}</div>
              <div className="text-sm text-muted-foreground">
                {video.views.toLocaleString()} views
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg bg-accent hover:bg-muted border border-border transition inline-flex items-center gap-2">
              <ThumbsUp className="w-4 h-4" />
              <span className="text-sm">Like</span>
            </button>
            <button className="px-4 py-2 rounded-lg bg-accent hover:bg-muted border border-border transition inline-flex items-center gap-2">
              <ThumbsDown className="w-4 h-4" />
            </button>
            <button className="px-4 py-2 rounded-lg bg-accent hover:bg-muted border border-border transition inline-flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              <span className="text-sm">Share</span>
            </button>
            <button className="px-4 py-2 rounded-lg bg-accent hover:bg-muted border border-border transition">
              <Flag className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-accent border border-border">
          <p className="text-sm text-muted-foreground">{video.description}</p>
        </div>
      </div>

      <div className="lg:w-96">
        <h2 className="text-lg font-semibold mb-4">Up Next</h2>
        <div className="space-y-3">
          {videos.slice(0, 10).map((v) => (
            <VideoCard key={v.id} video={v} compact />
          ))}
        </div>
      </div>
    </div>
  );
}
