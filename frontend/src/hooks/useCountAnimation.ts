// useCountAnimation.ts
import { useState, useEffect } from 'react'

export function useCountAnimation(
  end: number,
  duration: number = 2000
): number {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)

    // Cleanup function
    return () => {
      startTimestamp = null
    }
  }, [end, duration])

  return count
}
