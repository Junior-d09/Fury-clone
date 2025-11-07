'use client'

const testimonials = [
  { name: 'Alice Dupont', text: 'Super site ! J’ai trouvé exactement ce que je cherchais.' },
  { name: 'Jean Martin', text: 'Les produits sont de qualité et la livraison rapide.' },
  { name: 'Claire Bernard', text: 'Design du site très sympa et facile à naviguer.' },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center font-[var(--font-arima)]">
          Témoignages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <div key={test.name} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <p className="text-gray-700 mb-4">"{test.text}"</p>
              <span className="block font-semibold text-gray-900">{test.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
