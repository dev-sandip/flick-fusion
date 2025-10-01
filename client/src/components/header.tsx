"use client"

import { useState, useRef, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Search, Upload, Shield, Bell, Menu, Filter, ChevronDown, LogOut, UserIcon } from "lucide-react"
import type { User } from "@/lib/types"
import { signOut } from "@/lib/auth"

interface HeaderProps {
  onUploadClick: () => void
  onSignInClick: () => void
  onSignOut: () => void
  currentUser: User | null
}

export function Header({ onUploadClick, onSignInClick, onSignOut, currentUser }: HeaderProps) {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")
  const [sortMode, setSortMode] = useState("relevance")
  const [sortMenuOpen, setSortMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const sortRef = useRef<HTMLDivElement>(null)
  const userMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortMenuOpen(false)
      }
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSignOut = () => {
    signOut()
    onSignOut()
    setUserMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 bg-background/70 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 py-3">
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-border hover:bg-accent transition">
            <Menu className="w-5 h-5" />
          </button>

          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-foreground text-background flex items-center justify-center text-sm font-semibold tracking-tight shadow ring-1 ring-inset ring-white/20 select-none">
              VY
            </div>
            <span className="hidden sm:block text-sm text-muted-foreground">Studio</span>
          </Link>

          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-2xl relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search videos, channels, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-10 pr-28 rounded-xl bg-accent border border-border placeholder:text-muted-foreground text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition"
              />
              <div className="absolute inset-y-0 right-0 pr-2 flex items-center gap-2">
                <div className="relative" ref={sortRef}>
                  <button
                    onClick={() => setSortMenuOpen(!sortMenuOpen)}
                    className="h-8 px-2.5 rounded-lg text-sm text-foreground border border-border bg-accent hover:bg-muted transition inline-flex items-center gap-1.5"
                  >
                    <Filter className="w-4 h-4" />
                    <span className="hidden sm:inline">Sort</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {sortMenuOpen && (
                    <div className="absolute right-0 mt-2 min-w-[180px] p-1.5 bg-popover backdrop-blur rounded-xl border border-border shadow-lg">
                      {["relevance", "latest", "views", "featured"].map((mode) => (
                        <button
                          key={mode}
                          onClick={() => {
                            setSortMode(mode)
                            setSortMenuOpen(false)
                          }}
                          className="w-full text-left px-2.5 py-2 rounded-lg text-sm hover:bg-accent capitalize"
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button className="h-8 px-3 rounded-lg text-sm bg-primary hover:bg-primary/90 text-primary-foreground transition shadow-sm">
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {currentUser ? (
              <>
                <button
                  onClick={onUploadClick}
                  className="inline-flex items-center gap-2 h-10 px-3 rounded-lg bg-foreground text-background hover:bg-foreground/90 transition border border-border"
                >
                  <Upload className="w-4 h-4" />
                  <span className="hidden sm:inline text-sm">Upload</span>
                </button>
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-2 h-10 px-3 rounded-lg bg-accent hover:bg-muted border border-border text-sm transition"
                >
                  <Shield className="w-4 h-4" />
                  <span className="hidden sm:inline">Admin</span>
                </Link>
                <button className="hidden sm:inline-flex items-center justify-center h-10 w-10 rounded-lg border border-border hover:bg-accent transition">
                  <Bell className="w-5 h-5" />
                </button>
                <div className="relative" ref={userMenuRef}>
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="h-10 w-10 rounded-lg overflow-hidden border border-border hover:border-border/50 transition block"
                  >
                    <img
                      src={currentUser.avatar || "/placeholder.svg"}
                      alt={currentUser.name}
                      className="h-full w-full object-cover"
                    />
                  </button>
                  {userMenuOpen && (
                    <div className="absolute right-0 mt-2 min-w-[200px] p-1.5 bg-popover backdrop-blur rounded-xl border border-border shadow-lg">
                      <div className="px-3 py-2 border-b border-border">
                        <p className="text-sm font-medium">{currentUser.name}</p>
                        <p className="text-xs text-muted-foreground">{currentUser.email}</p>
                      </div>
                      <Link
                        href="/profile"
                        onClick={() => setUserMenuOpen(false)}
                        className="w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-accent flex items-center gap-2"
                      >
                        <UserIcon className="w-4 h-4" />
                        Profile
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-accent flex items-center gap-2 text-destructive"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <button
                onClick={onSignInClick}
                className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition font-medium"
              >
                Sign in
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
