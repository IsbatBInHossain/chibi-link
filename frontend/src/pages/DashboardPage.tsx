import { BarChart, Link, Users } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'

export function DashboardPage() {
  const { user } = useAuth()

  // TODO: Fetch these stats from your API
  const stats = {
    totalLinks: 0,
    totalClicks: 0,
    activeLinks: 0,
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='mb-8'>
          <h1 className='text-2xl font-bold text-gray-900'>
            Welcome back, {user?.name || 'User'}!
          </h1>
          <p className='text-gray-600'>
            Here's an overview of your link statistics
          </p>
        </div>

        <div className='grid grid-cols-1 gap-5 sm:grid-cols-3 mb-8'>
          <div className='bg-white overflow-hidden shadow rounded-lg'>
            <div className='p-5'>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  <Link className='h-6 w-6 text-gray-400' />
                </div>
                <div className='ml-5 w-0 flex-1'>
                  <dl>
                    <dt className='text-sm font-medium text-gray-500 truncate'>
                      Total Links
                    </dt>
                    <dd className='text-lg font-medium text-gray-900'>
                      {stats.totalLinks}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white overflow-hidden shadow rounded-lg'>
            <div className='p-5'>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  <BarChart className='h-6 w-6 text-gray-400' />
                </div>
                <div className='ml-5 w-0 flex-1'>
                  <dl>
                    <dt className='text-sm font-medium text-gray-500 truncate'>
                      Total Clicks
                    </dt>
                    <dd className='text-lg font-medium text-gray-900'>
                      {stats.totalClicks}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white overflow-hidden shadow rounded-lg'>
            <div className='p-5'>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  <Users className='h-6 w-6 text-gray-400' />
                </div>
                <div className='ml-5 w-0 flex-1'>
                  <dl>
                    <dt className='text-sm font-medium text-gray-500 truncate'>
                      Active Links
                    </dt>
                    <dd className='text-lg font-medium text-gray-900'>
                      {stats.activeLinks}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TODO: Add a table of recent links here */}
      </div>
    </div>
  )
}
