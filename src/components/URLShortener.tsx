import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Loader2 } from 'lucide-react'
import { shortenUrl, validateUrl } from '../services/api'
import type { ShortenedURL } from '../types'

export function URLShortener() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [shortUrl, setShortUrl] = useState<ShortenedURL | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!url) return

    if (!validateUrl(url)) {
      toast.error('Please enter a valid URL')
      return
    }

    try {
      setLoading(true)
      const response = await shortenUrl(url)

      if (!response.success || !response.data) {
        throw new Error(response.error || 'Failed to shorten URL')
      }

      setShortUrl(response.data)
      setUrl('')
      toast.success('URL shortened successfully!')
    } catch (error) {
      console.error('Error:', error)
      toast.error(
        error instanceof Error ? error.message : 'Failed to shorten URL'
      )
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = async () => {
    if (!shortUrl) return

    try {
      await navigator.clipboard.writeText(shortUrl.shortUrl)
      toast.success('Copied to clipboard!')
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error('Failed to copy')
    }
  }

  return (
    <div className='max-w-3xl mx-auto px-4 py-12'>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='flex gap-2'>
          <input
            type='url'
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder='Paste your long URL here'
            className='flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none'
            required
          />
          <button
            type='submit'
            disabled={loading}
            className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2'
          >
            {loading ? (
              <>
                <Loader2 className='animate-spin h-5 w-5' />
                Shortening...
              </>
            ) : (
              'Shorten URL'
            )}
          </button>
        </div>
      </form>

      {shortUrl && (
        <div className='mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200'>
          <h3 className='text-lg font-semibold text-gray-900 mb-4'>
            Your shortened URL
          </h3>
          <div className='flex items-center gap-2'>
            <input
              type='text'
              value={shortUrl.shortUrl}
              readOnly
              className='flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white'
            />
            <button
              onClick={copyToClipboard}
              className='bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors'
            >
              Copy
            </button>
          </div>
          {shortUrl.clicks !== undefined && (
            <p className='mt-4 text-sm text-gray-600'>
              Clicks: {shortUrl.clicks}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
