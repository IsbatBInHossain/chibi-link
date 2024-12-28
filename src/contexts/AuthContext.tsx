import { createContext, useState, useEffect, ReactNode } from 'react'
import type {
  AuthState,
  User,
  LoginCredentials,
  SignupCredentials,
} from '../types/auth'
import { getCurrentUser, login, logout, signup } from '../services/auth'

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<User>
  signup: (credentials: SignupCredentials) => Promise<User>
  logout: () => Promise<void>
}

const initialState: AuthState = {
  user: null,
  loading: true,
}

export const AuthContext = createContext<AuthContextType>({
  ...initialState,
  login: () => Promise.reject(new Error('AuthContext not initialized')),
  signup: () => Promise.reject(new Error('AuthContext not initialized')),
  logout: () => Promise.reject(new Error('AuthContext not initialized')),
})

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, setState] = useState<AuthState>(initialState)

  useEffect(() => {
    getCurrentUser()
      .then(user => setState({ user, loading: false }))
      .catch(() => setState({ user: null, loading: false }))
  }, [])

  const handleLogin = async (credentials: LoginCredentials) => {
    const user = await login(credentials)
    setState({ user, loading: false })
    return user
  }

  const handleSignup = async (credentials: SignupCredentials) => {
    const user = await signup(credentials)
    setState({ user, loading: false })
    return user
  }

  const handleLogout = async () => {
    await logout()
    setState({ user: null, loading: false })
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login: handleLogin,
        signup: handleSignup,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
