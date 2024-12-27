export interface ShortenedURL {
  originalUrl: string;
  shortCode: string;
  shortUrl: string;
  createdAt: string;
  clicks?: number;
}

export interface APIResponse {
  success: boolean;
  data?: ShortenedURL;
  error?: string;
}