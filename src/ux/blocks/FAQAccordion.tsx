"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Phone } from "lucide-react";

export interface FAQProps {
  id?: string;
  title?: string;
  subtitle?: string;
  faqs?: {
    question: string;
    answer: string;
  }[];
}

const defaultFAQs = [
  { question: "Was kostet eine Entrümpelung?", answer: "Die Kosten hängen von der Größe, dem Füllgrad und der Art der zu räumenden Gegenstände ab. Nach einer kostenlosen Besichtigung erhalten Sie ein transparentes Festpreisangebot ohne versteckte Kosten." },
  { question: "Wie läuft eine Entrümpelung ab?", answer: "Nach Ihrer Anfrage kommen wir zur kostenlosen Besichtigung. Sie erhalten ein Festpreisangebot. Am vereinbarten Termin räumen wir alles fachgerecht und übergeben das Objekt besenrein." },
  { question: "Rechnen Sie Wertsachen an?", answer: "Ja, gut erhaltene Möbel, Antiquitäten oder Elektrogeräte rechnen wir Ihnen fair auf den Endpreis an. So wird die Entrümpelung für Sie oft deutlich günstiger." },
  { question: "Sind Sie versichert?", answer: "Selbstverständlich. Wir verfügen über eine umfassende Betriebshaftpflichtversicherung. Sollte bei der Räumung tatsächlich einmal etwas beschädigt werden (z.B. im Treppenhaus), sind Sie komplett abgesichert." },
  { question: "Können Sie auch kurzfristig / notfalls tätig sein?", answer: "Ja, durch unser großes Team können wir in der Regel auch Notfall-Entrümpelungen innerhalb von 24 bis 48 Stunden durchführen. Rufen Sie uns dafür am besten direkt an." },
];

export function FAQBlock({
  id,
  title = "Häufige Fragen",
  subtitle = "Alles, was Sie über unsere Dienstleistungen wissen müssen.",
  faqs = defaultFAQs
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  return (
    <section id={id || "faq"} className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4"
          >
            {title}
          </motion.h2>
          <p className="text-gray-600 font-body text-lg">{subtitle}</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white border-[var(--primary)]/30 shadow-card' : 'bg-gray-50 border-gray-200'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`font-heading font-bold text-lg md:text-xl pr-8 transition-colors ${isOpen ? 'text-[var(--primary)]' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  <motion.div 
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[var(--primary)] text-white' : 'bg-gray-200 text-gray-500'}`}
                  >
                    <Plus className="w-5 h-5" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 text-gray-600 font-body text-base md:text-lg leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">Noch Fragen? Rufen Sie uns an!</p>
          <a href="tel:+491728083459" className="inline-flex items-center gap-2 text-[var(--primary)] font-bold text-xl">
            <Phone className="w-5 h-5" /> 0172 80 83 459
          </a>
        </motion.div>
      </div>
    </section>
  );
}
