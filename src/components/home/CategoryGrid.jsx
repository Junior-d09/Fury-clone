"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";

const demos = [
  { id: 1, title: "PORT–MUSIC", image: "/images/home-1.jpg" },
  { id: 2, title: "FURY–GAME", image: "/images/home-2.jpg" },
  { id: 3, title: "SPORTISTIC", image: "/images/home-3.jpg" },
  { id: 4, title: "LIST VIEW", image: "/images/list-view.jpg" },
  { id: 5, title: "GRID VIEW", image: "/images/short-view.jpg" },
  { id: 6, title: "SEARCH PAGE", image: "/images/search-page.jpg" },
  { id: 7, title: "LOGIN PAGE", image: "/images/login-page.jpg" },
  { id: 8, title: "QUICKVIEW PAGE", image: "/images/quickview-page.jpg" },
  { id: 9, title: "COMPARE PAGE", image: "/images/compare-page.jpg" },
  { id: 10, title: "PRODUCT TAB", image: "/images/product-tab.jpg" },
  { id: 11, title: "WISH LIST", image: "/images/produuct.jpg" },
  { id: 12, title: "CONTACT PAGE", image: "/images/wish-list.jpg" },
  { id: 13, title: "BLOG PAGE", image: "/images/blog-page.jpg" },
  {
    id: 14,
    title: "BLOG DETAILS PAGE",
    image: "/images/blog-details-page.jpg",
  },
  { id: 15, title: "MEGA MENU", image: "/images/mega-menu.jpg" },
  { id: 16, title: "EXTENDED PRODUCT", image: "/images/register-page.jpg" },
  { id: 17, title: "NEWSLETTER", image: "/images/Newsletter.jpg" },
  { id: 18, title: "ORDER–HISTORY", image: "/images/order-history.jpg" },
];

const DemoSection = () => {
  // Variants pour les animations
  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -100, scale: 0.9 },
    hiddenCenter: { opacity: 0, y: 100, scale: 0.9 },
    hiddenRight: { opacity: 0, x: 100, scale: 0.9 },
    visible: { opacity: 1, x: 0, y: 0, scale: 1 },
  };

  return (
    <section className="bg-[#0f0f0f] text-white py-20">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl md:text-3xl font-semibold text-center mb-16"
      >
        Explore Our Demos <span className="text-gray-400">(3 Demos)</span>
      </motion.h2>

      {/* Container principal */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">
        {demos.map((demo, index) => {
          // Déterminer la direction de départ
          const initial =
            index === 0
              ? "hiddenLeft"
              : index === 1
              ? "hiddenCenter"
              : "hiddenRight";

          return (
            <motion.div
              key={demo.id}
              variants={cardVariants}
              initial={initial}
              whileInView="visible"
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-[#141414]"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-[320px]">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:-translate-y-6">
                  <Image
                    src={demo.image}
                    alt={demo.title}
                    width={500}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlay sombre */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                {/* Icône flèche */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <ArrowRightCircle
                    size={60}
                    className="text-white drop-shadow-lg"
                  />
                </div>
              </div>

              {/* Titre bas */}
              <div className="bg-white group-hover:bg-amber-400 transition-colors duration-500 py-4 text-center">
                <p className="text-lg font-semibold text-black">{demo.title}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default DemoSection;
