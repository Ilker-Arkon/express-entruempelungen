"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

export interface BeforeAfterProps {
  title?: string;
  subtitle?: string;
  items?: {
    beforeImage: string;
    afterImage: string;
    label: string;
  }[];
}

export function BeforeAfterBlock({
  title = "Vorher / Nachher",
  subtitle = "Überzeugen Sie sich selbst – echte Ergebnisse unserer Kunden",
  items = [
    {
      beforeImage: "/gallery/before1.jpeg",
      afterImage: "/gallery/after1.jpeg",
      label: "Projekt 1"
    },
    {
      beforeImage: "/gallery/before2.jpeg",
      afterImage: "/gallery/after2.jpeg",
      label: "Projekt 2"
    },
    {
      beforeImage: "/gallery/before3.jpeg",
      afterImage: "/gallery/after3.jpeg",
      label: "Projekt 3"
    },
    {
      beforeImage: "/gallery/before4.jpeg",
      afterImage: "/gallery/after4.jpeg",
      label: "Projekt 4"
    }
  ]
}: BeforeAfterProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-24 bg-[var(--gray-light)] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 font-body"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className={`grid gap-8 justify-center ${
          items.length === 1 
            ? "grid-cols-1 max-w-3xl mx-auto" 
            : items.length === 2 || items.length === 4
              ? "grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto" 
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
        }`}>
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col gap-4 w-full"
            >
              <div className="rounded-2xl overflow-hidden shadow-card border border-gray-200 aspect-[3/4] bg-zinc-100 relative">
                {mounted ? (
                  <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src={item.beforeImage} alt="Vorher" style={{ objectFit: 'cover' }} />}
                    itemTwo={<ReactCompareSliderImage src={item.afterImage} alt="Nachher" style={{ objectFit: 'cover' }} />}
                    className="aspect-[3/4] w-full h-full object-cover"
                  />
                ) : (
                  <Image src={item.beforeImage} alt="Vorher" width={600} height={800} className="aspect-[3/4] w-full h-full object-cover" />
                )}
              </div>
              <p className="text-center font-heading font-semibold text-gray-800">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
