import { Zap, Shield, MousePointerClick } from 'lucide-react'
import { FeatureCard } from './FeatureCard'

export function Features() {
  return (
    <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
      <FeatureCard
        icon={Zap}
        title='Easy to Use'
        description='Just paste your URL and get a shortened link instantly'
        stat={{ value: 1000, label: 'Links created daily' }}
      />
      <FeatureCard
        icon={MousePointerClick}
        title='Track Clicks'
        description='Monitor how many times your links are clicked'
        stat={{ value: 500000, label: 'Total clicks tracked' }}
      />
      <FeatureCard
        icon={Shield}
        title='Secure & Reliable'
        description='Your links are safe and always accessible'
        stat={{ value: 99.9, label: 'Uptime percentage' }}
      />
    </div>
  )
}
