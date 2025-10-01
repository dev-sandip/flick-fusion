"use client"

import { useState, useEffect } from "react"
import { Clock, UploadIcon } from "lucide-react"
import { getVideos, getWatchHistory } from "@/lib/storage"
import { VideoCard } from "@/components/video-card"

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState<"history" | "uploads">("history")
  const [watchHistory, setWatchHistory] = useState<string[]>([])

  const videos = getVideos()

  useEffect(() => {
    setWatchHistory(getWatchHistory())
  }, [])

  const historyVideos = watchHistory
    .map((id) => videos.find((v) => v.id === id))
    .filter(Boolean)
    .reverse()

  const uploadedVideos = videos.filter((v) => v.status === "pending" || v.status === "processing")

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Library</h1>

      <div className="flex gap-2 mb-6 border-b border-border">
        <button
          onClick={() => setActiveTab("history")}
          className={`px-4 py-2 text-sm transition relative ${
            activeTab === "history" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Clock className="w-4 h-4 inline mr-2" />
          Watch History
          {activeTab === "history" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
        </button>
        <button
          onClick={() => setActiveTab("uploads")}
          className={`px-4 py-2 text-sm transition relative ${
            activeTab === "uploads" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <UploadIcon className="w-4 h-4 inline mr-2" />
          Pending Uploads
          {activeTab === "uploads" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
        </button>
      </div>

      {activeTab === "history" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {historyVideos.map((video) => video && <VideoCard key={video.id} video={video} />)}
        </div>
      )}

      {activeTab === "uploads" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {uploadedVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </div>
  )
}
