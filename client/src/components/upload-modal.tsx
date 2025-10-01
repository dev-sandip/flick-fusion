"use client"

import type React from "react"

import { useState, useRef } from "react"
import { X, FileVideo } from "lucide-react"
import type { Video } from "@/lib/types"
import { getVideos, saveVideos } from "@/lib/storage"

interface UploadModalProps {
  open: boolean
  onClose: () => void
}

export function UploadModal({ open, onClose }: UploadModalProps) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [thumb, setThumb] = useState("")
  const [channel, setChannel] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleClose = () => {
    onClose()
    setTitle("")
    setDescription("")
    setThumb("")
    setChannel("")
    setFile(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) {
      alert("Please choose a video file.")
      return
    }

    const url = URL.createObjectURL(file)
    const sizeMB = +(file.size / 1024 / 1024).toFixed(2)

    const newVideo: Video = {
      id: crypto.randomUUID(),
      title: title.trim() || "Untitled",
      channel: channel.trim() || "New Creator",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100",
      views: Math.floor(Math.random() * 500),
      minutes: Math.max(2, Math.floor(sizeMB / 5)),
      uploadedAt: Date.now(),
      description: description.trim(),
      thumb: thumb.trim() || "https://images.unsplash.com/photo-1542345812-d98b5cd6cf98?q=80&w=1200",
      src: url,
      approved: false,
      featured: false,
      sizeMB,
      tags: [],
    }

    const videos = getVideos()
    saveVideos([newVideo, ...videos])

    alert("Upload received. Awaiting approval.")
    handleClose()
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/70" onClick={handleClose} />
      <div className="relative mx-auto max-w-2xl mt-16 sm:mt-24 p-1">
        <div className="rounded-2xl bg-background border border-border shadow-xl">
          <div className="p-4 sm:p-6 border-b border-border flex items-center justify-between">
            <h3 className="text-xl tracking-tight font-semibold">Upload a video</h3>
            <button
              onClick={handleClose}
              className="h-9 w-9 inline-flex items-center justify-center rounded-lg hover:bg-accent border border-border transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4">
            <div>
              <label className="text-sm text-foreground">Title</label>
              <input
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 w-full h-11 px-3 rounded-lg bg-accent border border-border placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                placeholder="Give your video a title"
              />
            </div>
            <div>
              <label className="text-sm text-foreground">Description</label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 w-full px-3 py-2 rounded-lg bg-accent border border-border placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                placeholder="What is your video about?"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-foreground">Thumbnail URL (optional)</label>
                <input
                  value={thumb}
                  onChange={(e) => setThumb(e.target.value)}
                  className="mt-1 w-full h-11 px-3 rounded-lg bg-accent border border-border placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                  placeholder="https://images.unsplash.com/..."
                />
              </div>
              <div>
                <label className="text-sm text-foreground">Channel Name</label>
                <input
                  value={channel}
                  onChange={(e) => setChannel(e.target.value)}
                  className="mt-1 w-full h-11 px-3 rounded-lg bg-accent border border-border placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                  placeholder="Your channel"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-foreground">Video file (MP4)</label>
              <div className="mt-1">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="video/mp4"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full h-24 rounded-xl border border-dashed border-border hover:border-border/50 bg-accent hover:bg-muted transition flex items-center justify-center gap-2 text-foreground"
                >
                  <FileVideo className="w-5 h-5" />
                  <span className="text-sm">Choose file</span>
                </button>
                {file && (
                  <div className="mt-2 text-xs text-muted-foreground">
                    {file.name} • {(file.size / 1024 / 1024).toFixed(2)} MB
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground">
                Uploads require admin approval before appearing publicly.
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="h-10 px-3 rounded-lg bg-accent hover:bg-muted border border-border transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="h-10 px-4 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition"
                >
                  Upload
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
