import type { User } from "./types"

const AUTH_STORAGE_KEY = "video_platform_auth"
const USERS_STORAGE_KEY = "video_platform_users"

export interface AuthUser extends User {
  password?: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
}

// Get all registered users
export function getUsers(): AuthUser[] {
  if (typeof window === "undefined") return []
  const data = localStorage.getItem(USERS_STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

// Save users to storage
export function saveUsers(users: AuthUser[]): void {
  if (typeof window === "undefined") return
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users))
}

// Get current authenticated user
export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null
  const data = localStorage.getItem(AUTH_STORAGE_KEY)
  if (!data) return null
  const auth = JSON.parse(data)
  return auth.user || null
}

// Check if user is authenticated
export function isAuthenticated(): boolean {
  return getCurrentUser() !== null
}

// Sign in user
export function signIn(email: string, password: string): { success: boolean; error?: string; user?: User } {
  const users = getUsers()
  const user = users.find((u) => u.email === email && u.password === password)

  if (!user) {
    return { success: false, error: "Invalid email or password" }
  }

  // Remove password from stored session
  const { password: _, ...userWithoutPassword } = user
  const authState: AuthState = {
    user: userWithoutPassword,
    isAuthenticated: true,
  }

  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authState))
  return { success: true, user: userWithoutPassword }
}

// Register new user
export function register(
  name: string,
  email: string,
  password: string,
): { success: boolean; error?: string; user?: User } {
  const users = getUsers()

  // Check if email already exists
  if (users.some((u) => u.email === email)) {
    return { success: false, error: "Email already registered" }
  }

  // Create new user
  const newUser: AuthUser = {
    id: crypto.randomUUID(),
    name,
    email,
    password,
    avatar: `https://images.unsplash.com/photo-${Math.random() > 0.5 ? "1544005313-94ddf0286df2" : "1535713875002-d1d0cf377fde"}?q=80&w=200`,
    bio: "",
    joinedAt: Date.now(),
  }

  users.push(newUser)
  saveUsers(users)

  // Auto sign in after registration
  const { password: _, ...userWithoutPassword } = newUser
  const authState: AuthState = {
    user: userWithoutPassword,
    isAuthenticated: true,
  }

  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authState))
  return { success: true, user: userWithoutPassword }
}

// Sign out user
export function signOut(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem(AUTH_STORAGE_KEY)
}

// Update user profile
export function updateUserProfile(updates: Partial<User>): { success: boolean; user?: User } {
  const currentUser = getCurrentUser()
  if (!currentUser) {
    return { success: false }
  }

  const users = getUsers()
  const userIndex = users.findIndex((u) => u.id === currentUser.id)

  if (userIndex === -1) {
    return { success: false }
  }

  // Update user in users list
  const updatedUser = { ...users[userIndex], ...updates }
  users[userIndex] = updatedUser
  saveUsers(users)

  // Update current session
  const { password: _, ...userWithoutPassword } = updatedUser
  const authState: AuthState = {
    user: userWithoutPassword,
    isAuthenticated: true,
  }
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authState))

  return { success: true, user: userWithoutPassword }
}
