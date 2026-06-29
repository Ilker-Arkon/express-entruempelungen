"use client";

import { motion } from "framer-motion";
import { Recycle, TreePine, FileCheck, HeartHandshake, ShieldCheck, Leaf, Globe, Award } from "lucide-react";
import React from "react";

const iconMap: Record<string, React.ReactNode> = {
  Recycle: <Recycle className="w-8 h-8" />,
  TreePine: <TreePine className="w-8 h-8" />,
  FileCheck: <FileCheck className="w-8 h-8" />,
  HeartHandshake: <HeartHandshake className="w-8 h-8" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8" />,
  Leaf: <Leaf className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />,
  Award: <Award className="w-8 h-8" />,
};

export interface EnvironmentFeature {
  icon: string;
  title: string;
  description: string;
}

export interface EnvironmentProps {
  title?: string;
  subtitle?: string;
  features?: EnvironmentFeature[];
}

const defaultFeatures: EnvironmentFeature[] = [
  { icon: "Recycle", title: "Fachgerechte Trennung", description: "Wir trennen Müll strikt nach Werkstoffen für optimales Recycling." },
  { icon: "TreePine", title: "Wiederverwendung", description: "Gut erhaltene Möbel spenden wir an lokale soziale Einrichtungen." },
  { icon: "FileCheck", title: "Entsorgungsnachweise", description: "Sie erhalten auf Wunsch offizielle Nachweise für kritische Abfälle." },
  { icon: "HeartHandshake", title: "Soziales Engagement", description: "Zusammenarbeit mit lokalen Spenden-Centern und Tafeln." },
  { icon: "ShieldCheck", title: "Zertifiziert", description: "Wir arbeiten ausschließlich mit zertifizierten Entsorgungsfachbetrieben." },
];

export function EnvironmentBlock({
  title = "Umwelt & Nachhaltigkeit",
  subtitle = "Gut für Sie. Gut für die Umwelt.",
  features = defaultFeatures,
}: EnvironmentProps) {

  return (
    <section className="py-24 bg-gradient-to-br from-green-900 to-[#0A1A12] relative overflow-hidden text-white">

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
          {features.map((feature, idx) => (
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
                {iconMap[feature.icon] || iconMap.Recycle}
              </div>
              <h3 className="text-xl font-bold font-heading mb-2">{feature.title}</h3>
              <p className="text-green-100/70 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
