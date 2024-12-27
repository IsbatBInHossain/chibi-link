import { Link, useNavigate } from 'react-router-dom'
import { Link2 } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { logout } from '../services/auth'
import toast from 'react-hot-toast'

export function Header() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
      toast.success('Logged out successfully')
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error'
      toast.error(`Failed to logout: "${errorMessage}"`)
    }
  }

  return (
    <header className='bg-white shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
        <div className='flex items-center justify-between'>
          <Link to='/' className='flex items-center space-x-2'>
            <Link2 className='h-8 w-8 text-blue-600' />
            <span className='text-2xl font-bold text-gray-900'>Chibilink</span>
          </Link>
          <nav>
            {user ? (
              <div className='flex items-center space-x-4'>
                <Link
                  to='/dashboard'
                  className='text-gray-600 hover:text-gray-900'
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className='bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors'
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className='space-x-4'>
                <Link
                  to='/login'
                  className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors'
                >
                  Sign In
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
