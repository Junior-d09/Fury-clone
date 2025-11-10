'use client'

import { Smartphone, User, FlaskConical, Puzzle, Atom, Mail, FileSearchCorner, CloudUpload, Megaphone } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    id: 1,
    icon: <Smartphone className="w-12 h-12 text-amber-500 mx-auto mb-4" />,
    title: 'Responsive Design',
    description: 'Fixco is supper responsive & work perfectly in all devices.',
  },
  {
    id: 2,
    icon: <User className="w-12 h-12 text-amber-500 mx-auto mb-4" />,
    title: 'User Friendly',
    description: 'Fixco is easy to use for both technical & nontechnical people.',
  },
  {
    id: 3,
    icon: <FlaskConical className="w-12 h-12 text-amber-500 mx-auto mb-4" />,
    title: 'Creative Design',
    description: 'It–s comes with creative & smart design layout.',
  },
  {
    id: 4,
    icon: <Puzzle className="w-12 h-12 text-amber-500 mx-auto mb-4" />,
    title: 'Icon Font',
    description: 'Includes comes with most popular FontAwesome & Stroke Gap Icons',
  },
  {
    id: 5,
    icon: <Atom className="w-12 h-12 text-amber-500 mx-auto mb-4" />,
    title: 'Google Font',
    description: 'Google Fonts Poppins,Oswald & georgia. You can change all elements easily.',
  },
  {
    id: 6,
    icon: <Mail className="w-12 h-12 text-amber-500 mx-auto mb-4" />,
    title: 'Ajax Contact Form',
    description: 'It comes with ajax contact form which makes messaging much more quicker.',
  },
  {
    id: 7,
    icon: <FileSearchCorner  className="w-12 h-12 text-amber-500 mx-auto mb-4" />,
    title: 'Clean Markup',
    description: 'We developed it followed by W3C Markup.',
  },
  {
    id: 8,
    icon: <CloudUpload  className="w-12 h-12 text-amber-500 mx-auto mb-4" />,
    title: 'Free Updates',
    description: 'Purchase once & get life-time free updates.',
  },
  {
    id: 9,
    icon: <Megaphone className="w-12 h-12 text-amber-500 mx-auto mb-4" />,
    title: 'Real Support',
    description: 'We provide 7 days a week one by one real support.',
  },

]

export default function CoreFeatures() {
  return (
    <section className="bg-[#0f0f0f] text-white py-20">
      <motion.h2
        // initial={{ opacity: 0, y: 40 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-semibold text-center mb-16"
      >
        Core Features
      </motion.h2>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            className="group bg-[#0f0f0f] p-8 rounded-xl border border-transparent "
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2 ">
              {feature.title}
            </h3>
            <p className="text-gray-300  text-2xl leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
