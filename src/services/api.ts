import type { APIResponse } from '../types'

export async function shortenUrl(url: string): Promise<APIResponse> {
  // Validate URL
  if (!validateUrl(url)) {
    return {
      success: false,
      error: 'Invalid URL format',
    }
  }

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))

  // Generate a random short code
  const shortCode = Math.random().toString(36).substring(2, 8)

  return {
    success: true,
    data: {
      originalUrl: url,
      shortCode,
      shortUrl: `https://chibilink.com/${shortCode}`,
      createdAt: new Date().toISOString(),
      clicks: 0,
    },
  }
}

export async function getUrlStats(shortCode: string): Promise<APIResponse> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300))

  return {
    success: true,
    data: {
      originalUrl: 'https://example.com',
      shortCode,
      shortUrl: `https://chibilink.com/${shortCode}`,
      createdAt: new Date().toISOString(),
      clicks: Math.floor(Math.random() * 100),
    },
  }
}

export function validateUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}
