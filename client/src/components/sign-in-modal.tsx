"use client"

import type React from "react"

import { useState } from "react"
import { X, Mail, Lock } from "lucide-react"
import { signIn } from "@/lib/auth"

interface SignInModalProps {
  open: boolean
  onClose: () => void
  onSuccess: () => void
  onSwitchToRegister: () => void
}

export function SignInModal({ open, onClose, onSuccess, onSwitchToRegister }: SignInModalProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleClose = () => {
    onClose()
    setEmail("")
    setPassword("")
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    // Validate inputs
    if (!email || !password) {
      setError("Please fill in all fields")
      setLoading(false)
      return
    }

    // Attempt sign in
    const result = signIn(email, password)

    if (result.success) {
      handleClose()
      onSuccess()
    } else {
      setError(result.error || "Sign in failed")
    }

    setLoading(false)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/70" onClick={handleClose} />
      <div className="relative mx-auto max-w-md mt-16 sm:mt-24 p-1">
        <div className="rounded-2xl bg-background border border-border shadow-xl">
          <div className="p-4 sm:p-6 border-b border-border flex items-center justify-between">
            <h3 className="text-xl tracking-tight font-semibold">Sign in to your account</h3>
            <button
              onClick={handleClose}
              className="h-9 w-9 inline-flex items-center justify-center rounded-lg hover:bg-accent border border-border transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4">
            {error && (
              <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="text-sm text-foreground font-medium">Email</label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-11 pl-10 pr-3 rounded-lg bg-accent border border-border placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-foreground font-medium">Password</label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="w-4 h-4 text-muted-foreground" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-11 pl-10 pr-3 rounded-lg bg-accent border border-border placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <button type="button" className="text-primary hover:underline">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>

            <div className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => {
                  handleClose()
                  onSwitchToRegister()
                }}
                className="text-primary hover:underline font-medium"
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
