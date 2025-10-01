"use client"

import { useState } from "react"
import { getVideos } from "@/lib/storage"
import { VideoCard } from "@/components/video-card"

const TAGS = ["Tutorial", "Review", "Gaming", "Music", "Vlog", "Tech", "Education", "Entertainment"]

export default function ExplorePage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const videos = getVideos()

  const filteredVideos = selectedTag ? videos.filter((video) => video.tags?.includes(selectedTag)) : videos

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Explore</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedTag(null)}
          className={`px-4 py-2 rounded-lg text-sm transition ${
            selectedTag === null
              ? "bg-primary text-primary-foreground"
              : "bg-accent hover:bg-muted border border-border"
          }`}
        >
          All
        </button>
        {TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-lg text-sm transition ${
              selectedTag === tag
                ? "bg-primary text-primary-foreground"
                : "bg-accent hover:bg-muted border border-border"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}
