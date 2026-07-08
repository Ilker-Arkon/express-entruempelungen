"use client";

import { motion } from "framer-motion";
import { PhoneCall, MessageCircle, Clock, CheckCircle2, Loader2, Star } from "lucide-react";
import React, { useState, useRef } from "react";

export interface ContactHubProps {
  id?: string;
  phone?: string;
  whatsappMsg?: string;
}

export function ContactHubBlock({
  id,
  phone = "0172 80 83 459",
  whatsappMsg = "Hallo, ich interessiere mich für eine Entrümpelung...",
}: ContactHubProps) {
  const [formData, setFormData] = useState({ name: "", phone: "", time: "" });
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 3000);
      return;
    }

    setFormState("submitting");

    try {
      // Server-seitiger Proxy vermeidet Adblocker/CORS-Probleme
      const response = await fetch("/api/puck/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          time: formData.time || "Keine Präferenz",
        }),
      });

      if (response.ok) {
        setFormState("success");
        setFormData({ name: "", phone: "", time: "" });
        setTimeout(() => setFormState("idle"), 5000);
      } else {
        setFormState("error");
        setTimeout(() => setFormState("idle"), 3000);
      }
    } catch {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 3000);
    }
  };

  const whatsappLink = `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section id={id || "kontakt"} className="py-24 relative overflow-hidden bg-[var(--dark)]">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-4"
          >
            Lassen Sie uns starten!
          </motion.h2>
          <p className="text-gray-400 font-body text-lg">Wählen Sie Ihren bevorzugten Kontaktweg.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Column 1: Direct Call */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center shadow-xl hover:bg-white/10 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[var(--primary)]/20">
              <PhoneCall className="w-7 h-7 text-[var(--primary)]" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2 font-heading tracking-wide">Direktanruf</h3>
            <p className="text-gray-400 text-sm mb-8 flex-grow leading-relaxed">Wir sind für Sie erreichbar.<br/>Wählen Sie Ihren Ansprechpartner:</p>
            
            <div className="w-full mt-auto flex flex-col gap-3">
              <a href="tel:01728083459" className="w-full">
                <button className="w-full py-3 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-[#0D1B4B] rounded-xl font-bold tracking-wider text-xs transition-all flex items-center justify-center gap-2">
                  <PhoneCall className="w-4 h-4" /> FERIT (0172 80 83 459)
                </button>
              </a>
              <a href="tel:017655122781" className="w-full">
                <button className="w-full py-3 bg-white/10 hover:bg-white/20 border border-[var(--primary)]/30 text-white rounded-xl font-bold tracking-wider text-xs transition-all flex items-center justify-center gap-2">
                  <PhoneCall className="w-4 h-4" /> ONUR (0176 55 12 27 81)
                </button>
              </a>
            </div>
          </motion.div>

          {/* Column 2: WhatsApp */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative bg-white/5 border border-[var(--primary)]/40 rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl transform md:-translate-y-4 hover:bg-white/10 transition-all duration-300"
          >
            {/* Safe badge layout inside the card */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 bg-[var(--primary)]/20 text-[var(--primary)] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-[var(--primary)]/30">
                <Star className="w-3.5 h-3.5 fill-[var(--primary)]" /> Am Beliebtesten
              </div>
            </div>
            
            <div className="w-16 h-16 bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[var(--primary)]/20">
              <MessageCircle className="w-7 h-7 text-[var(--primary)]" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2 font-heading tracking-wide">WhatsApp</h3>
            <p className="text-gray-400 text-sm mb-8 flex-grow leading-relaxed">Schreiben Sie uns unkompliziert.<br/>Wir antworten so schnell wie möglich!</p>
            
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="w-full mt-auto">
              <button className="w-full py-4 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-[#0D1B4B] rounded-xl font-bold tracking-wider text-sm transition-all flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" /> WHATSAPP NACHRICHT SENDEN
              </button>
            </a>
          </motion.div>

          {/* Column 3: Callback */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center shadow-xl hover:bg-white/10 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[var(--primary)]/20">
              <Clock className="w-7 h-7 text-[var(--primary)]" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2 font-heading tracking-wide">Rückruf-Service</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">Garantierter Rückruf<br/>so schnell wie möglich</p>
            
            <form ref={formRef} onSubmit={handleCallbackSubmit} className="w-full flex flex-col gap-3 mt-auto">
              {formState !== "success" && (
                <>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    value={formData.name}
                    disabled={formState === "submitting"}
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[var(--primary)] transition-colors disabled:opacity-50 text-sm"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <input
                    type="tel"
                    placeholder="Telefonnummer"
                    required
                    value={formData.phone}
                    disabled={formState === "submitting"}
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[var(--primary)] transition-colors disabled:opacity-50 text-sm"
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <select
                    value={formData.time}
                    disabled={formState === "submitting"}
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[var(--primary)] transition-colors disabled:opacity-50 text-sm appearance-none"
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  >
                    <option value="" disabled className="text-gray-500">Wunschzeit (optional)</option>
                    <option value="Vormittags" className="text-black">Vormittags</option>
                    <option value="Nachmittags" className="text-black">Nachmittags</option>
                    <option value="Keine Präferenz" className="text-black">Keine Präferenz</option>
                  </select>
                </>
              )}

              {formState === "success" && (
                <div className="flex flex-col items-center gap-2 py-4">
                  <CheckCircle2 className="w-12 h-12 text-[var(--primary)]" />
                  <p className="text-white font-bold text-lg">Vielen Dank!</p>
                  <p className="text-gray-300 text-sm">Wir rufen Sie in Kürze zurück.</p>
                </div>
              )}

              {formState === "error" && (
                <p className="text-red-400 text-xs py-1">
                  Ein Fehler ist aufgetreten. Bitte rufen Sie uns direkt an.
                </p>
              )}

              {formState !== "success" && (
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold tracking-wider text-sm transition-all mt-1 disabled:opacity-50 flex items-center justify-center gap-2 border border-white/10"
                >
                  {formState === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      SENDEN...
                    </>
                  ) : (
                    "RÜCKRUF ANFORDERN"
                  )}
                </button>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
