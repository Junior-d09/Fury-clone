'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <ul className="flex items-center gap-8 font-[var(--font-arima)]">
      <li>
        <Link
          href="#demo"
          className="px-8 py-3 bg-amber-500 text-black rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-white hover:text-black"
        >
          VIEW ALL DEMO
        </Link>
      </li>
    </ul>
  )
}
