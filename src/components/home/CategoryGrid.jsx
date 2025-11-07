'use client'

import Image from 'next/image'

const categories = [
  { name: 'Musique', image: '/images/categories/music.jpg' },
  { name: 'Gaming', image: '/images/categories/gaming.jpg' },
  { name: 'Sport', image: '/images/categories/sport.jpg' },
  { name: 'Accessoires', image: '/images/categories/accessories.jpg' },
]

export default function CategoryGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center font-[var(--font-arima)]">
          Nos Catégories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
              <Image
                src={cat.image}
                alt={cat.name}
                width={400}
                height={300}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white text-2xl font-semibold">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
