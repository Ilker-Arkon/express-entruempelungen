"use client";

import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

export interface FloatingContactConfig {
  phonePrimary?: string;
  whatsappNumber?: string;
  whatsappDefaultMessage?: string;
}

const DEFAULT_FC: Required<FloatingContactConfig> = {
  phonePrimary: "+491728083459",
  whatsappNumber: "491728083459",
  whatsappDefaultMessage: "Hallo, ich interessiere mich für eine kostenlose Besichtigung. Bitte kontaktieren Sie mich.",
};

export function FloatingContact({ config }: { config?: FloatingContactConfig }) {
  const c = { ...DEFAULT_FC, ...config };
  const phoneUrl = `tel:${c.phonePrimary}`;
  const whatsappText = encodeURIComponent(c.whatsappDefaultMessage);
  const whatsappUrl = `https://wa.me/${c.whatsappNumber}?text=${whatsappText}`;

  return (
    <>
      {/* Desktop Sticky Floating Buttons (bottom right) */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:flex flex-col gap-4">
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#25D366] text-white p-4 rounded-full shadow-card hover:shadow-xl transition-shadow flex items-center justify-center group relative"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="absolute right-full mr-4 bg-white text-zinc-900 px-3 py-1 rounded-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
            WhatsApp senden
          </span>
        </motion.a>
        
        <motion.a
          href={phoneUrl}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[var(--primary)] text-[#0D1B4B] p-4 rounded-full shadow-card hover:shadow-xl transition-shadow flex items-center justify-center group relative"
        >
          <Phone className="w-8 h-8" />
          <span className="absolute right-full mr-4 bg-white text-zinc-900 px-3 py-1 rounded-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
            Jetzt anrufen
          </span>
        </motion.a>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-white border-t border-zinc-200 shadow-[0_-10px_20px_rgba(0,0,0,0.1)] flex p-2 gap-2 pb-[env(safe-area-inset-bottom)]">
        <a 
          href={phoneUrl}
          className="flex-1 bg-[var(--primary)] text-[#0D1B4B] py-3 rounded-lg flex items-center justify-center gap-2 font-bold text-sm"
        >
          <Phone className="w-5 h-5" /> Anrufen
        </a>
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-[#25D366] text-white py-3 rounded-lg flex items-center justify-center gap-2 font-bold text-sm"
        >
          <MessageCircle className="w-5 h-5" /> WhatsApp
        </a>
      </div>
    </>
  );
}
