'use client'
import Image from 'next/image'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="bg-[#0f0f0f] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo-Fury.png"
            alt="Logo Fury"
            width={150}
            height={150}
            priority
          />
        </div>

        {/* Navbar */}
        <nav className="hidden md:flex">
          <Navbar />
        </nav>
      </div>
    </header>
  )
}
