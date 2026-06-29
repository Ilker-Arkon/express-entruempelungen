"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export interface GalleryProps {
  id?: string;
  title?: string;
  subtitle?: string;
  images?: {
    url: string;
    alt: string;
  }[];
}

export function GalleryBlock({
  id,
  title = "Unsere Galerie",
  subtitle = "Einblicke in unsere Arbeit",
  images = [
    { url: "/gallery/before1.jpg", alt: "Vorher – Entrümpelung" },
    { url: "/gallery/after1.jpg", alt: "Nachher – Besenrein" },
    { url: "/gallery/flyer.jpg", alt: "Flyer Express Entrümpelungen" },
  ]
}: GalleryProps) {
  return (
    <section id={id || "galerie"} className="py-24 bg-[var(--dark-secondary)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-black text-white mb-4"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 font-body max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative aspect-square overflow-hidden rounded-2xl shadow-lg border border-white/10 group cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                <span className="text-white bg-[var(--primary)] text-[#0D1B4B] px-4 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all">Vergrößern</span>
              </div>
              <Image
                src={img.url}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
