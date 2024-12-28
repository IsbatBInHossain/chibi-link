import type { LoginCredentials, SignupCredentials, User } from '../types/auth'
import { validateEmail } from '../utils/validation'

// Temporary frontend-only auth implementation
export async function login({
  email,
  password,
}: LoginCredentials): Promise<User> {
  if (!validateEmail(email)) {
    throw new Error('Invalid email format')
  }
  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters')
  }

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))

  // Return mock user data
  return {
    id: '1',
    email,
    name: email.split('@')[0],
  }
}

export async function signup({
  email,
  password,
  name,
}: SignupCredentials): Promise<User> {
  if (!validateEmail(email)) {
    throw new Error('Invalid email format')
  }
  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters')
  }
  if (!name || name.length < 2) {
    throw new Error('Name must be at least 2 characters')
  }

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))

  // Return mock user data
  return {
    id: '1',
    email,
    name,
  }
}

export async function logout(): Promise<void> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300))
}

export async function getCurrentUser(): Promise<User | null> {
  // For now, always return null to simulate logged out state on refresh
  return null
}
