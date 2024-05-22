export const validateUrl = (givenUrl: string) => {
  try {
    const url = new URL(givenUrl)
    return url
  } catch (error: unknown) {
    throw new TypeError('Invalid URL path')
  }
}
