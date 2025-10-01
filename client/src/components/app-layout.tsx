"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { UploadModal } from "@/components/upload-modal"
import { SignInModal } from "@/components/sign-in-modal"
import { RegisterModal } from "@/components/register-modal"
import { getCurrentUser } from "@/lib/auth"
import type { User } from "@/lib/types"

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [uploadModalOpen, setUploadModalOpen] = useState(false)
  const [signInModalOpen, setSignInModalOpen] = useState(false)
  const [registerModalOpen, setRegisterModalOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  // Load current user on mount
  useEffect(() => {
    setCurrentUser(getCurrentUser())
  }, [])

  const handleAuthSuccess = () => {
    setCurrentUser(getCurrentUser())
  }

  const handleSignOut = () => {
    setCurrentUser(null)
  }

  return (
    <div className="flex flex-col h-screen">
      <Header
        onUploadClick={() => setUploadModalOpen(true)}
        onSignInClick={() => setSignInModalOpen(true)}
        onSignOut={handleSignOut}
        currentUser={currentUser}
      />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
      <UploadModal open={uploadModalOpen} onClose={() => setUploadModalOpen(false)} />
      <SignInModal
        open={signInModalOpen}
        onClose={() => setSignInModalOpen(false)}
        onSuccess={handleAuthSuccess}
        onSwitchToRegister={() => {
          setSignInModalOpen(false)
          setRegisterModalOpen(true)
        }}
      />
      <RegisterModal
        open={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
        onSuccess={handleAuthSuccess}
        onSwitchToSignIn={() => {
          setRegisterModalOpen(false)
          setSignInModalOpen(true)
        }}
      />
    </div>
  )
}
