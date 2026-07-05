"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Phone, MessageCircle } from "lucide-react";

export interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  badges?: string[];
  phoneLabel?: string;
  whatsappLabel?: string;
  phoneUrl?: string;
  whatsappUrl?: string;
}

export function HeroBlock({
  title = "Wir kümmern uns um das Chaos – Sie entspannen",
  subtitle = "Express Entrümpelungen: Besenreine Übergabe für Wohnungs- und Gewerbeauflösungen in Ihrer Nähe.",
  backgroundImage = "/gallery/flyer.jpeg",
  badges = ["Besenreine Übergabe", "Festpreisgarantie", "Kostenlose Besichtigung"],
  phoneLabel = "Kostenloses Angebot anfordern",
  whatsappLabel = "WhatsApp",
  phoneUrl = "tel:01728083459",
  whatsappUrl = "https://wa.me/491728083459",
}: HeroProps) {
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[var(--dark)]">
      {/* Static Background – nur Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[var(--dark)] via-[var(--dark-secondary)] to-[#0A1128]" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 pt-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl text-center lg:text-left lg:w-[55%]"
        >
          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-6 leading-tight drop-shadow-lg">
            {title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-body drop-shadow-md">
            {subtitle}
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
            {badges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white shadow-card"
              >
                <CheckCircle2 className="w-5 h-5 text-[var(--primary)]" />
                <span className="font-semibold text-sm md:text-base">{badge}</span>
              </motion.div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
            <motion.button
              onClick={() => setIsPhoneModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-[#0D1B4B] px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-button"
            >
              <Phone className="w-6 h-6" />
              {phoneLabel}
            </motion.button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-[var(--success)] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-card"
            >
              <MessageCircle className="w-6 h-6" />
              {whatsappLabel}
            </a>
          </div>
        </motion.div>

        {/* Right: Flyer-Bild */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:w-[40%] flex justify-center lg:justify-end"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
            <Image
              src={backgroundImage || "/gallery/flyer.jpeg"}
              alt="Express Entrümpelungen Flyer"
              width={500}
              height={600}
              className="w-[280px] md:w-[340px] lg:w-[440px] object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isPhoneModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setIsPhoneModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[var(--dark)] border border-white/10 p-8 rounded-3xl max-w-sm w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-heading font-bold text-white mb-2">Ansprechpartner wählen</h3>
              <p className="text-gray-400 text-sm mb-6">Bitte wählen Sie, wen Sie anrufen möchten:</p>
              <div className="flex flex-col gap-3">
                <a href="tel:01728083459" className="w-full">
                  <button className="w-full py-3 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-[#0D1B4B] rounded-xl font-bold tracking-wider text-sm transition-all flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" /> FERIT (0172 80 83 459)
                  </button>
                </a>
                <a href="tel:017655122781" className="w-full">
                  <button className="w-full py-3 bg-white/10 hover:bg-white/20 border border-[var(--primary)]/30 text-white rounded-xl font-bold tracking-wider text-sm transition-all flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" /> ONUR (0176 55 12 27 81)
                  </button>
                </a>
              </div>
              <button 
                onClick={() => setIsPhoneModalOpen(false)}
                className="mt-6 w-full text-center text-sm text-gray-500 hover:text-white transition-colors"
              >
                Abbrechen
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
