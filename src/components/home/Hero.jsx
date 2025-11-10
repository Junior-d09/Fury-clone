'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#0f0f0f] text-white overflow-hidden">
      {/* Titre animé */}
      <motion.h1
        initial={{ opacity: 0, y: 80 }} 
        animate={{ opacity: 1, y: 0 }}   
        transition={{
          duration: 1,
          ease: 'easeOut',
        }}
        className="text-2xl md:text-4xl font-semibold text-center mb-12"
      >
        FURY – Responsive Prestashop Theme for eCommerce
      </motion.h1>

      {/* Image principale */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: 'easeOut',
        }}
        className="relative w-full max-w-6xl px-4"
      >
       <Image
  src="/images/hero-image-removebg-preview.png"
  alt="FURY Theme Preview"
  width={1500}
  height={800}
  priority
  className="w-full h-auto rounded-xl shadow-2xl mx-auto mix-blend-lighten"
/>
      </motion.div>
    </section>
  )
}

export default Hero



// 'use client'
// import { motion } from 'framer-motion'
// import Image from 'next/image'

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#0f0f0f] text-white overflow-hidden">
//       {/* Titre animé */}
//       <motion.h1
//         initial={{ opacity: 0, y: 80 }} 
//         animate={{ opacity: 1, y: 0 }}   
//         transition={{
//           duration: 1,
//           ease: 'easeOut',
//         }}
//         className="text-2xl md:text-2xl font-semibold text-center mb-12 font-[var(--font-arima)]"
//       >
//         FURY – Responsive Prestashop Theme for eCommerce
//       </motion.h1>

//       {/* Image principale */}
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{
//           delay: 0.3,
//           duration: 1,
//           ease: 'easeOut',
//         }}
//         className="relative w-full max-w-6xl px-4"
//       >
//        <Image
//   src="/images/hero-image-removebg-preview.png"
//   alt="FURY Theme Preview"
//   width={1500}
//   height={800}
//   priority
//   className="w-full h-auto rounded-xl shadow-2xl mx-auto mix-blend-lighten"
// />
//       </motion.div>
//     </section>
//   )
// }

// export default Hero