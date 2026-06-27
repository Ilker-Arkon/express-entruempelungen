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
      beforeImage: "/gallery/before1.jpg",
      afterImage: "/gallery/after1.jpg",
      label: "Vorher / Nachher"
    }
  ]
}: BeforeAfterProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-24 bg-[var(--gray-light)] dark:bg-[var(--dark)] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 font-body"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <div className="rounded-2xl overflow-hidden shadow-card border border-gray-200 dark:border-zinc-800 aspect-video bg-zinc-100 dark:bg-zinc-900 relative">
                {mounted ? (
                  <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src={item.beforeImage} alt="Vorher" />}
                    itemTwo={<ReactCompareSliderImage src={item.afterImage} alt="Nachher" />}
                    className="aspect-video w-full h-full object-cover"
                  />
                ) : (
                  <Image src={item.beforeImage} alt="Vorher" width={800} height={450} className="aspect-video w-full h-full object-cover" />
                )}
              </div>
              <p className="text-center font-heading font-semibold text-gray-800 dark:text-gray-200">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
