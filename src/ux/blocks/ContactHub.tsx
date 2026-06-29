"use client";

import { motion } from "framer-motion";
import { PhoneCall, MessageCircle, Clock, CheckCircle2, Loader2 } from "lucide-react";
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
      // Send callback request to the Puck API endpoint
      const response = await fetch("/api/puck/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          time: formData.time || "Keine Präferenz",
          timestamp: new Date().toISOString(),
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
    <section id={id || "kontakt"} className="py-24 relative overflow-hidden bg-[var(--dark-secondary)]">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--dark-secondary)] via-[var(--dark)] to-[#111122] z-0" />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[var(--primary)] blur-[150px] opacity-20 pointer-events-none z-0"
      />
      
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
            className="group relative bg-[#1A1A24]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl hover:bg-[#1A1A24]/80 transition-all duration-500 overflow-hidden"
          >
            {/* Subtle top highlight */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--primary)]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="w-16 h-16 bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,193,7,0.1)] group-hover:shadow-[0_0_40px_rgba(255,193,7,0.2)] transition-shadow duration-500">
              <PhoneCall className="w-7 h-7 text-[var(--primary)]" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2 font-heading tracking-wide">Direktanruf</h3>
            <p className="text-zinc-400 text-sm mb-8 flex-grow leading-relaxed">Wir sind für Sie erreichbar.<br/>Sofortige Beratung!</p>
            
            <a href={`tel:${phone.replace(/[^0-9]/g, "")}`} className="w-full">
              <button className="w-full py-3.5 bg-gradient-to-r from-[var(--primary)] to-amber-500 hover:from-amber-400 hover:to-amber-500 text-black rounded-xl font-bold tracking-wider text-sm transition-all shadow-[0_0_20px_rgba(255,193,7,0.2)] hover:shadow-[0_0_30px_rgba(255,193,7,0.4)] flex items-center justify-center gap-2">
                <PhoneCall className="w-4 h-4" /> JETZT ANRUFEN
              </button>
            </a>
          </motion.div>

          {/* Column 2: WhatsApp */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative bg-[#1A1A24]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl transform md:-translate-y-4 hover:bg-[#1A1A24]/80 transition-all duration-500 overflow-hidden"
          >
            {/* Subtle top highlight */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#25D366]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#25D366] text-black text-[10px] font-bold px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(37,211,102,0.4)] tracking-widest uppercase">
              Am Beliebtesten
            </div>
            
            <div className="w-16 h-16 bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(37,211,102,0.1)] group-hover:shadow-[0_0_40px_rgba(37,211,102,0.2)] transition-shadow duration-500">
              <MessageCircle className="w-7 h-7 text-[#25D366]" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2 font-heading tracking-wide">WhatsApp</h3>
            <p className="text-zinc-400 text-sm mb-8 flex-grow leading-relaxed">Schreiben Sie uns unkompliziert.<br/>Antwort in unter 1 Stunde!</p>
            
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="w-full">
              <button className="w-full py-3.5 bg-gradient-to-r from-[#25D366] to-[#1da851] hover:from-[#1da851] hover:to-[#168a41] text-white rounded-xl font-bold tracking-wider text-sm transition-all shadow-[0_0_20px_rgba(37,211,102,0.2)] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" /> WHATSAPP SENDEN
              </button>
            </a>
          </motion.div>

          {/* Column 3: Callback */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group relative bg-[#1A1A24]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl hover:bg-[#1A1A24]/80 transition-all duration-500 overflow-hidden"
          >
            {/* Subtle top highlight */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="w-16 h-16 bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-shadow duration-500">
              <Clock className="w-7 h-7 text-blue-400" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2 font-heading tracking-wide">Rückruf-Service</h3>
            <p className="text-zinc-400 text-sm mb-8 leading-relaxed">Garantierter Rückruf<br/>in 30 Min.</p>
            
            <form ref={formRef} onSubmit={handleCallbackSubmit} className="w-full flex flex-col gap-3">
              {formState !== "success" && (
                <>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    value={formData.name}
                    disabled={formState === "submitting"}
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--primary)] disabled:opacity-50"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <input
                    type="tel"
                    placeholder="Telefonnummer"
                    required
                    value={formData.phone}
                    disabled={formState === "submitting"}
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--primary)] disabled:opacity-50"
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Bevorzugte Uhrzeit (optional)"
                    value={formData.time}
                    disabled={formState === "submitting"}
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--primary)] disabled:opacity-50"
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  />
                </>
              )}

              {formState === "success" && (
                <div className="flex flex-col items-center gap-2 py-4">
                  <CheckCircle2 className="w-12 h-12 text-[var(--success)]" />
                  <p className="text-white font-bold text-lg">Vielen Dank!</p>
                  <p className="text-gray-300 text-sm">Wir rufen Sie in Kürze zurück.</p>
                </div>
              )}

              {formState === "error" && (
                <p className="text-red-400 text-sm py-2">
                  Bitte füllen Sie alle Pflichtfelder aus.
                </p>
              )}

              {formState !== "success" && (
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold tracking-wider text-sm transition-all mt-2 disabled:opacity-50 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                >
                  {formState === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      WIRD GESENDET...
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
