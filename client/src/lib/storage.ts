import type { Video } from "./types"
import { sampleVideos } from "./sample-data"

export function getVideos(): Video[] {
  if (typeof window === "undefined") return []

  const cached = localStorage.getItem("vy_videos")
  if (cached) {
    try {
      return JSON.parse(cached)
    } catch {
      return [...sampleVideos]
    }
  }
  return [...sampleVideos]
}

export function saveVideos(videos: Video[]): void {
  if (typeof window === "undefined") return
  localStorage.setItem("vy_videos", JSON.stringify(videos))
}

export function getHistory(): string[] {
  if (typeof window === "undefined") return []

  const cached = localStorage.getItem("vy_history")
  if (cached) {
    try {
      return JSON.parse(cached)
    } catch {
      return []
    }
  }
  return []
}

export function saveHistory(history: string[]): void {
  if (typeof window === "undefined") return
  localStorage.setItem("vy_history", JSON.stringify(history))
}

export function addToHistory(videoId: string): void {
  const history = getHistory()
  const updated = [videoId, ...history.filter((id) => id !== videoId)].slice(0, 50)
  saveHistory(updated)
}

export function updateVideo(videoId: string, updates: Partial<Video>): void {
  const videos = getVideos()
  const index = videos.findIndex((v) => v.id === videoId)
  if (index !== -1) {
    videos[index] = { ...videos[index], ...updates }
    saveVideos(videos)
  }
}

export function deleteVideo(videoId: string): void {
  const videos = getVideos()
  const filtered = videos.filter((v) => v.id !== videoId)
  saveVideos(filtered)
}

export const getWatchHistory = getHistory
export const addToWatchHistory = addToHistory
