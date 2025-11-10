"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";

const testimonials = [
  { id: 1, title: "Surprise Christmas-Responsive Prestashop Theme For Ecommerce", image: "/images/home-1.jpg" },
  { id: 2, title: "Allocate - Military And Fishing with Swiming-Responsive Prestashop Theme For Ecommerce", image: "/images/home-2.jpg" },
  { id: 3, title: "StockAuto-Autoparts and Motocycle Parts With Bicycle-Responsive Prestashop Theme For Ecommerce", image: "/images/home-3.jpg" },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center font-[var(--font-arima)]">
          Other Prestashop Themes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <div
              key={test.name}
              className="bg-gray-950 p-6 rounded-xl shadow-lg text-center"
            >
              <Image
                src={testimonials.image}
                alt={testimonials.title}
                width={500}
                height={400}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
              />
              <span className="block font-semibold text-gray-900">
                {test.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
