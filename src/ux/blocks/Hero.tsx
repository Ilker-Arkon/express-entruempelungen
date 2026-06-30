"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
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
  backgroundImage = "/gallery/flyer.jpg",
  badges = ["Besenreine Übergabe", "Festpreisgarantie", "Kostenlose Besichtigung"],
  phoneLabel = "Kostenloses Angebot anfordern",
  whatsappLabel = "WhatsApp (0176...)",
  phoneUrl = "tel:+491728083459",
  whatsappUrl = "https://wa.me/4917655122781",
}: HeroProps) {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[var(--dark)]">
      {/* Static Background – nur Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[var(--dark)] via-[var(--dark-secondary)] to-[#0A1128]" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 pt-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl text-center lg:text-left lg:w-[55%]"
        >
          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-6 leading-tight drop-shadow-lg">
            <TypeAnimation
              sequence={[title, 2000]}
              wrapper="span"
              speed={50}
              cursor={false}
              repeat={Infinity}
            />
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
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0 + i * 0.2, duration: 0.4 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white shadow-card"
              >
                <CheckCircle2 className="w-5 h-5 text-[var(--primary)]" />
                <span className="font-semibold text-sm md:text-base">{badge}</span>
              </motion.div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
            <motion.a
              href={phoneUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-[#0D1B4B] px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-button"
            >
              <Phone className="w-6 h-6" />
              {phoneLabel}
            </motion.a>

            <motion.a
              href={whatsappUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 bg-[var(--success)] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-card group"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
              {whatsappLabel}
            </motion.a>
          </div>
        </motion.div>

        {/* Right: Flyer-Bild */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:w-[40%] flex justify-center lg:justify-end"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
            <Image
              src={backgroundImage || "/gallery/flyer.jpg"}
              alt="Express Entrümpelungen Flyer"
              width={500}
              height={600}
              className="w-[280px] md:w-[340px] lg:w-[440px] object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
