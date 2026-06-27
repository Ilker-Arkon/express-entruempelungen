"use client";

import { motion } from "framer-motion";
import { Recycle, TreePine, FileCheck, HeartHandshake, ShieldCheck, Leaf } from "lucide-react";
import React from "react";

export interface EnvironmentProps {
  title?: string;
  subtitle?: string;
}

const ecoFeatures = [
  { icon: <Recycle className="w-8 h-8" />, title: "Fachgerechte Trennung", desc: "Wir trennen Müll strikt nach Werkstoffen für optimales Recycling." },
  { icon: <TreePine className="w-8 h-8" />, title: "Wiederverwendung", desc: "Gut erhaltene Möbel spenden wir an lokale soziale Einrichtungen." },
  { icon: <FileCheck className="w-8 h-8" />, title: "Entsorgungsnachweise", desc: "Sie erhalten auf Wunsch offizielle Nachweise für kritische Abfälle." },
  { icon: <HeartHandshake className="w-8 h-8" />, title: "Soziales Engagement", desc: "Zusammenarbeit mit lokalen Spenden-Centern und Tafeln." },
  { icon: <ShieldCheck className="w-8 h-8" />, title: "Zertifiziert", desc: "Wir arbeiten ausschließlich mit zertifizierten Entsorgungsfachbetrieben." },
];

export function EnvironmentBlock({
  title = "Umwelt & Nachhaltigkeit",
  subtitle = "Gut für Sie. Gut für die Umwelt."
}: EnvironmentProps) {
  // Leaves removed to fix hydration error

  return (
    <section className="py-24 bg-gradient-to-br from-green-900 to-[#0A1A12] relative overflow-hidden text-white">
      {/* Animated Leaves Removed */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-4"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-green-300 font-body italic"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {ecoFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring", 
                stiffness: 150, 
                damping: 12,
                delay: idx * 0.15 
              }}
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col items-center text-center transition-colors"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-4 shadow-lg text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-heading mb-2">{feature.title}</h3>
              <p className="text-green-100/70 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
