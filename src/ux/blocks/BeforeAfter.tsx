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
  title = "",
  subtitle = "",
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
    <section className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Premium Dark Gradient & Grid für Tiefe */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0A1128] via-[#050A15] to-[#030712]" />
      <div className="absolute inset-0 z-0 opacity-[0.08] bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--primary)]/5 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 drop-shadow-md"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-400 font-body"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}

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
              className="flex flex-col gap-5 w-full group"
            >
              <div className="text-center flex flex-col items-center gap-2">
                <div className="w-8 h-1 bg-[var(--primary)] rounded-full mb-1 opacity-80" />
                <h3 className="font-heading font-bold text-xl text-white tracking-wide">
                  {item.label}
                </h3>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 ring-1 ring-white/5 aspect-video bg-[#0A1128] relative group-hover:shadow-[0_20px_60px_rgba(255,255,255,0.05)] transition-all duration-500">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
