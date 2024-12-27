import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './contexts/AuthContext'
import { Header } from './components/Header'
import { LoginPage } from './pages/LoginPage'
import { SignupPage } from './pages/SignupPage'
import { DashboardPage } from './pages/DashboardPage'
import { URLShortener } from './components/URLShortener'
import { Features } from './components/Features'

function HomePage() {
  return (
    <>
      <main className='container mx-auto px-4 py-8'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            Shorten Your Links with Chibilink
          </h1>
          <p className='text-xl text-gray-600'>
            Create short, memorable links in seconds
          </p>
        </div>
        <URLShortener />
        <Features />
      </main>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className='min-h-screen bg-gray-50'>
          <Toaster position='top-right' />
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
