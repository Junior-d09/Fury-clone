'use client'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-black mt-12 py-8 font-[var(--font-arima)]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Texte en majuscules avec taille précise */}
        <div className="text-white  text-[20px] md:text-[24px] text-center md:text-left mb-4 md:mb-0">
          Start Creating Your Stunning Website, Today!
        </div>

        {/* Bouton VIEW ALL DEMO */}
        <div>
          <Link
            href="#demo"
            className="px-6 py-2 bg-amber-400 text-black rounded-full font-semibold uppercase text-sm tracking-wider transition-all duration-300 hover:bg-white hover:text-black"
          >
            VIEW ALL DEMO
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
