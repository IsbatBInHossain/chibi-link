// FeatureCard.tsx
import { useCountAnimation } from '../hooks/useCountAnimation'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  stat?: {
    value: number
    label: string
  }
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  stat,
}: FeatureCardProps) {
  // Always call the hook, but use 0 as default if no stat
  const animatedValue = useCountAnimation(stat?.value ?? 0)

  return (
    <div className='text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow'>
      <div className='inline-flex items-center justify-center w-12 h-12 mb-4 bg-blue-50 rounded-lg'>
        <Icon className='h-6 w-6 text-blue-600' />
      </div>
      <h3 className='text-xl font-semibold mb-2 text-gray-900'>{title}</h3>
      <p className='text-gray-600 mb-4'>{description}</p>
      {stat && (
        <div className='mt-4 pt-4 border-t border-gray-100'>
          <div className='text-2xl font-bold text-blue-600 mb-1'>
            {animatedValue.toLocaleString()}+
          </div>
          <div className='text-sm text-gray-500'>{stat.label}</div>
        </div>
      )}
    </div>
  )
}
