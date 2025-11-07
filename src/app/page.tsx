// src/app/page.ts 
import Hero from '@/components/home/Hero'
import CategoryGrid from '@/components/home/CategoryGrid'
import Testimonials from '@/components/home/Testimonials'

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <Testimonials />
    </>
  )
}
