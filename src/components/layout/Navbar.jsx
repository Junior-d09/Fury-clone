import Link from 'next/link'

export default function Navbar() {
  const navItems = ['Accueil', 'Produits', 'Musique', 'Sport', 'Contact']

  return (
    <ul className="flex items-center gap-8 font-medium text-gray-700 font-[var(--font-arima)]">
      {navItems.map((item) => (
        <li key={item}>
          <Link href={`#${item.toLowerCase()}`} className="hover:text-pink-600 transition">
            {item}
          </Link>
        </li>
      ))}
    </ul>
  )
}
