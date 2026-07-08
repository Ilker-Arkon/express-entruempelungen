"use client";

import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const phoneUrl = `tel:${c.phonePrimary}`;
  const whatsappText = encodeURIComponent(c.whatsappDefaultMessage);
  const whatsappUrl = `https://wa.me/${c.whatsappNumber}?text=${whatsappText}`;

  return (
    <>
      {/* Desktop Floating Buttons (bottom right) – pure CSS, no framer-motion */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp Nachricht senden"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#20bd5a] transition-colors"
        >
          <MessageCircle className="w-7 h-7" />
        </a>

        <button
          onClick={() => setIsPhoneModalOpen(true)}
          aria-label="Jetzt anrufen"
          className="w-14 h-14 bg-[var(--primary)] text-[#0D1B4B] rounded-full flex items-center justify-center shadow-lg hover:bg-[var(--primary-dark)] transition-colors"
        >
          <Phone className="w-7 h-7" />
        </button>
      </div>

      <div className="fixed bottom-0 left-0 w-full z-40 md:hidden bg-white border-t border-zinc-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] flex p-2 gap-2 pb-[env(safe-area-inset-bottom)]">
        <button
          onClick={() => setIsPhoneModalOpen(true)}
          className="flex-1 bg-[var(--primary)] text-[#0D1B4B] py-3 rounded-lg flex items-center justify-center gap-2 font-bold text-sm"
        >
          <Phone className="w-5 h-5" /> Anrufen
        </button>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-[#25D366] text-white py-3 rounded-lg flex items-center justify-center gap-2 font-bold text-sm"
        >
          <MessageCircle className="w-5 h-5" /> WhatsApp
        </a>
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
              className="bg-white border border-zinc-200 p-8 rounded-3xl max-w-sm w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-heading font-bold text-zinc-900 mb-2">Ansprechpartner wählen</h3>
              <p className="text-zinc-600 text-sm mb-6">Bitte wählen Sie, wen Sie anrufen möchten:</p>
              <div className="flex flex-col gap-3">
                <a href="tel:01728083459" className="w-full">
                  <button className="w-full py-3 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-[#0D1B4B] rounded-xl font-bold tracking-wider text-sm transition-all flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" /> FERIT (0172 80 83 459)
                  </button>
                </a>
                <a href="tel:017655122781" className="w-full">
                  <button className="w-full py-3 bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 text-zinc-900 rounded-xl font-bold tracking-wider text-sm transition-all flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" /> ONUR (0176 55 12 27 81)
                  </button>
                </a>
              </div>
              <button 
                onClick={() => setIsPhoneModalOpen(false)}
                className="mt-6 w-full text-center text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                Abbrechen
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
