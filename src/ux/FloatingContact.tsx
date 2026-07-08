"use client";

import { MessageCircle, Phone } from "lucide-react";

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

        <a
          href={phoneUrl}
          aria-label="Jetzt anrufen"
          className="w-14 h-14 bg-[var(--primary)] text-[#0D1B4B] rounded-full flex items-center justify-center shadow-lg hover:bg-[var(--primary-dark)] transition-colors"
        >
          <Phone className="w-7 h-7" />
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full z-40 md:hidden bg-white border-t border-zinc-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] flex p-2 gap-2 pb-[env(safe-area-inset-bottom)]">
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
