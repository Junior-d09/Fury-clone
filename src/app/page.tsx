// src/app/page.ts 
import Hero from '@/components/home/Hero'
import CategoryGrid from '@/components/home/CategoryGrid'
import ProductCard from '@/components/home/ProductCard'
import Testimonials from '@/components/home/Testimonials'

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <ProductCard />
      <Testimonials />
    </>
  )
}
