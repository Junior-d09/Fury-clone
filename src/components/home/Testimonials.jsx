"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";

const testimonials = [
  {
    id: 1,
    title: "Surprise Christmas - Responsive Prestashop Theme For Ecommerce",
    image: "/images/templete-theme-1.jpg",
  },
  {
    id: 2,
    title:
      "Allocate - Military And Fishing with Swimming - Responsive Prestashop Theme For Ecommerce",
    image: "/images/templete-theme-2.jpg",
  },
  {
    id: 3,
    title:
      "StockAuto - Autoparts and Motorcycle Parts with Bicycle - Responsive Prestashop Theme For Ecommerce",
    image: "/images/templete-theme-3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#0f0f0f] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Titre principal */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl mb-16 text-center font-[var(--font-arima)]"
        >
          Other Prestashop Themes
        </motion.h2>

        {/* Grille des cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((test) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-lg bg-[#141414] shadow-lg transition-all duration-500 hover:border-amber-500"
            >
              {/* Conteneur image avec overflow hidden */}
              <div className="relative overflow-hidden h-[220px] md:h-[250px]">
                <motion.div className="absolute inset-0 transition-transform duration-700 group-hover:-translate-y-6">
                  <Image
                    src={test.image}
                    alt={test.title}
                    width={500}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Overlay + icône */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10">
                  <ArrowRightCircle size={55} className="drop-shadow-lg" />
                </div>
              </div>

              
              <div className="bg-white py-3 text-center transition-colors duration-500 group-hover:bg-amber-500">
                <p className="text-xs md:text-lg font-semibold text-black px-2 leading-snug">
                  {test.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
