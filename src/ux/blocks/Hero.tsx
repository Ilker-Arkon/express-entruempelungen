"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Phone, MessageCircle, Mail } from "lucide-react";

const InstagramColorIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" className={className}>
    <defs>
      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="25%" stopColor="#e6683c" />
        <stop offset="50%" stopColor="#dc2743" />
        <stop offset="75%" stopColor="#cc2366" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <rect width="1000" height="1000" rx="225" ry="225" fill="url(#ig-grad)" />
    <path fill="#ffffff" d="M325,200 h350 c69.035,0 125,55.965 125,125 v350 c0,69.035 -55.965,125 -125,125 h-350 c-69.035,0 -125,-55.965 -125,-125 v-350 c0,-69.035 55.965,-125 125,-125 z m0,75 c-27.614,0 -50,22.386 -50,50 v350 c0,27.614 22.386,50 50,50 h350 c27.614,0 50,-22.386 50,-50 v-350 c0,-27.614 -22.386,-50 -50,-50 h-350 z" />
    <path fill="#ffffff" d="M500,340 c-88.366,0 -160,71.634 -160,160 c0,88.366 71.634,160 160,160 c88.366,0 160,-71.634 160,-160 c0,-88.366 -71.634,-160 -160,-160 z m0,75 c46.944,0 85,38.056 85,85 c0,46.944 -38.056,85 -85,85 c-46.944,0 -85,-38.056 -85,-85 c0,-46.944 38.056,-85 85,-85 z" />
    <circle fill="#ffffff" cx="675" cy="325" r="35" />
  </svg>
);

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={className} fill="currentColor">
    <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
  </svg>
);

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
  subtitle = "Express Entrümpelungen: Besenreine Übergabe für Haus-, Wohnungs- und Gewerbeauflösungen in Ihrer Nähe.",
  backgroundImage = "/gallery/flyer.jpeg",
  badges = ["Besenreine Übergabe", "Festpreisgarantie", "Kostenlose Besichtigung"],
  phoneLabel = "Kostenloses Angebot anfordern",
  whatsappLabel = "WhatsApp",
  phoneUrl = "tel:01728083459",
  whatsappUrl = "https://wa.me/491728083459",
}: HeroProps) {
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [isTiktokModalOpen, setIsTiktokModalOpen] = useState(false);

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
          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4">
            <motion.button
              onClick={() => setIsPhoneModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-[#0D1B4B] px-6 py-3.5 rounded-full font-bold text-base md:text-sm lg:text-base transition-colors shadow-button"
            >
              <Phone className="w-5 h-5" />
              {phoneLabel}
            </motion.button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-[var(--success)] hover:bg-[#20bd5a] text-white px-6 py-3.5 rounded-full font-bold text-base md:text-sm lg:text-base transition-colors shadow-card"
            >
              <MessageCircle className="w-5 h-5" />
              {whatsappLabel}
            </a>

            <a
              href="mailto:info@express-entruempelungen.de"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3.5 rounded-full font-bold text-base md:text-sm lg:text-base transition-colors shadow-card"
            >
              <Mail className="w-5 h-5" />
              E-Mail
            </a>
          </div>

          {/* Social Icons (Mobile Only) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex flex-col items-center gap-4 mt-10 lg:hidden"
          >
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest flex items-center gap-3">
              <span className="w-8 h-[1px] bg-white/20"></span>
              Folgen Sie uns
              <span className="w-8 h-[1px] bg-white/20"></span>
            </span>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/expressentruempelungen?utm_source=qr" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform bg-white/5 p-3.5 rounded-2xl border border-white/10 shadow-lg">
                <InstagramColorIcon className="w-7 h-7 drop-shadow-md" />
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); setIsTiktokModalOpen(true); }} className="hover:scale-110 transition-transform bg-white/5 p-3.5 rounded-2xl border border-white/10 shadow-lg text-white hover:text-[#00f2ea]">
                <TiktokIcon className="w-7 h-7 drop-shadow-md" />
              </a>
            </div>
          </motion.div>
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

      {/* TikTok Coming Soon Modal */}
      <AnimatePresence>
        {isTiktokModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setIsTiktokModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[var(--dark)] border border-[var(--primary)]/30 p-8 rounded-3xl max-w-sm w-full shadow-2xl text-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-center mb-6">
                <Image
                  src="/gallery/logo.png"
                  alt="Logo"
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain bg-white rounded-xl p-2 shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-heading font-black text-white mb-2">In Bearbeitung!</h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Unser TikTok-Kanal wird gerade vorbereitet und ist sehr bald für Sie da. Freuen Sie sich auf spannende Vorher-Nachher Videos!
              </p>
              <button 
                onClick={() => setIsTiktokModalOpen(false)}
                className="w-full py-3 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-[#0D1B4B] rounded-xl font-bold tracking-wider text-sm transition-all"
              >
                Alles klar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
