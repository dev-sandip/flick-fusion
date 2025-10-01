"use client"

import { useState } from "react"
import { getVideos } from "@/lib/storage"
import { VideoCard } from "@/components/video-card"

export default function HomePage() {
  const [filter, setFilter] = useState<"all" | "featured" | "new">("all")
  const videos = getVideos()

  const filteredVideos = videos.filter((video) => {
    if (filter === "featured") return video.featured
    if (filter === "new") {
      const daysSinceUpload = Math.floor((Date.now() - new Date(video.uploadedAt).getTime()) / (1000 * 60 * 60 * 24))
      return daysSinceUpload <= 7
    }
    return true
  })

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Browse Videos</h1>
        <div className="flex gap-2">
          {(["all", "featured", "new"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm transition capitalize ${
                filter === f ? "bg-primary text-primary-foreground" : "bg-accent hover:bg-muted border border-border"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}
