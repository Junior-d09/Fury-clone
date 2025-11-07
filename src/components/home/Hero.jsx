'use client'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
 

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900 via-primary-900 to-secondary-900 pt-20">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
              <span className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold border border-white/20">
                FURY - Responsive Prestashop Theme for eCommerce
              </span>
          <div className="flex items-center gap-3">
                    <Image
                      src="/images/hero-image.jpg"
                      alt="Logo Fury"
                     full
                      priority
                    />
                  </div>
        </div>
      </div> 
    </section>
  )
}

export default Hero