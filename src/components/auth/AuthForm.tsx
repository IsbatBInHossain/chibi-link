import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Loader2 } from 'lucide-react'
import { login, signup } from '../../services/auth'
import type { LoginCredentials, SignupCredentials } from '../../types/auth'

interface AuthFormProps {
  mode: 'login' | 'signup'
}

export function AuthForm({ mode }: AuthFormProps) {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (mode === 'login') {
        const credentials: LoginCredentials = {
          email: formData.email,
          password: formData.password,
        }
        await login(credentials)
      } else {
        const credentials: SignupCredentials = {
          email: formData.email,
          password: formData.password,
          name: formData.name,
        }
        await signup(credentials)
      }
      navigate('/dashboard')
      toast.success(
        mode === 'login' ? 'Welcome back!' : 'Account created successfully!'
      )
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Authentication failed'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      {mode === 'signup' && (
        <div>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-700'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
            required
          />
        </div>
      )}
      <div>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-700'
        >
          Email
        </label>
        <input
          type='email'
          id='email'
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
          required
        />
      </div>
      <div>
        <label
          htmlFor='password'
          className='block text-sm font-medium text-gray-700'
        >
          Password
        </label>
        <input
          type='password'
          id='password'
          value={formData.password}
          onChange={e => setFormData({ ...formData, password: e.target.value })}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
          required
        />
      </div>
      <button
        type='submit'
        disabled={loading}
        className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
      >
        {loading ? (
          <>
            <Loader2 className='animate-spin -ml-1 mr-2 h-4 w-4' />
            {mode === 'login' ? 'Signing in...' : 'Creating account...'}
          </>
        ) : mode === 'login' ? (
          'Sign in'
        ) : (
          'Create account'
        )}
      </button>
    </form>
  )
}
