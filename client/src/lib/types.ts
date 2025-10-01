export interface Video {
  id: string
  title: string
  channel: string
  avatar: string
  views: number
  minutes: number
  uploadedAt: number
  description: string
  thumbnail?: string
  src: string
  status: "published" | "pending" | "processing"
  featured: boolean
  tags: string[]
  sizeMB?: number
}

export interface User {
  id: string
  name: string
  email: string
  avatar: string
  bio: string
  joinedAt: number
}
