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
  { question: "Was kostet eine Entrümpelung?", answer: "Die genauen Kosten lassen sich am besten nach einer kostenlosen und unverbindlichen Besichtigung vor Ort verbindlich bestimmen. Da jede Immobilie, der Füllgrad und die Art der Gegenstände unterschiedlich sind, möchten wir Ihnen immer einen fairen und transparenten Festpreis garantieren – komplett ohne versteckte Kosten." },
  { question: "Wie läuft eine Entrümpelung ab?", answer: "Der Ablauf ist für Sie völlig stressfrei: Nach Ihrer Anfrage vereinbaren wir einen kostenlosen Besichtigungstermin. Sie erhalten ein unverbindliches Angebot. Am Einsatztag räumt unser Team die vereinbarten Bereiche schnell und diskret. Zum Schluss übergeben wir Ihnen alle Räume besenrein. Sie müssen während der Arbeiten nicht zwingend vor Ort sein." },
  { question: "Rechnen Sie Wertsachen an?", answer: "Ja, absolut. Sollten wir bei der Räumung auf gut erhaltene Möbel, Sammlerstücke, Elektronik oder andere verwertbare Gegenstände stoßen, rechnen wir deren Wert fair auf den Gesamtpreis an. Dadurch sinken Ihre Entrümpelungskosten im besten Fall deutlich." },
  { question: "Sind Sie für eventuelle Schäden versichert?", answer: "Selbstverständlich. Unser Unternehmen ist umfassend betriebshaftpflichtversichert. Obwohl unser eingespieltes Team extrem vorsichtig arbeitet, sind Sie im unwahrscheinlichen Fall eines Schadens (z. B. im Treppenhaus oder an Türen) vollständig abgesichert." },
  { question: "Können Sie auch kurzfristig oder im Notfall tätig sein?", answer: "Ja, wir wissen, dass es oft schnell gehen muss – sei es durch einen Umzug, einen Todesfall oder eine Kündigung. Wir halten in unserer Terminplanung immer Kapazitäten für dringende Fälle frei und können oft schon innerhalb von 24 bis 48 Stunden nach der Besichtigung mit der Räumung beginnen." },
  { question: "Was passiert mit den entrümpelten Dingen?", answer: "Nachhaltigkeit ist uns wichtig. Gut erhaltene Gegenstände spenden wir an soziale Einrichtungen oder führen sie dem Gebrauchtmarkt zu. Der restliche Abfall wird von uns fachgerecht nach Materialien (Holz, Metall, Bauschutt, Restmüll) sortiert und bei zertifizierten regionalen Recyclinghöfen umweltfreundlich entsorgt." },
  { question: "Muss ich die Räume für die Entrümpelung vorbereiten?", answer: "Nein, Sie müssen vorab nichts sortieren oder einpacken. Es ist jedoch ratsam, dass Sie vor unserem Eintreffen alle Gegenstände, die Sie behalten möchten (z. B. persönliche Dokumente, Fotos oder Erbstücke), eindeutig markieren oder aus den Räumen entfernen. Den Rest erledigen wir." },
  { question: "Kümmern Sie sich um Halteverbotszonen vor dem Haus?", answer: "Ja. Wenn vor dem Gebäude keine ausreichenden Parkmöglichkeiten für unsere Transporter oder Container vorhanden sind, beantragen wir die behördliche Genehmigung für eine temporäre Halteverbotszone und stellen die entsprechenden Schilder rechtzeitig auf." },
  { question: "Räumen Sie auch extreme Härtefälle oder Messie-Wohnungen?", answer: "Ja, unser Team ist für jede Herausforderung geschult. Wir führen Messie-Entrümpelungen absolut diskret, respektvoll und professionell durch. Neben der reinen Räumung bieten wir bei Bedarf auch anschließende Desinfektionen und Geruchsneutralisierungen an." },
  { question: "Was bedeutet „besenrein“ genau?", answer: "Besenrein bedeutet, dass wir alle Räume, Flure und Transportwege nach der Entrümpelung gründlich fegen. Teppichböden werden von uns abgesaugt. Grobe Verschmutzungen, die durch die Räumung entstanden sind, werden komplett beseitigt, sodass Sie die Immobilie direkt an den Vermieter oder Eigentümer übergeben können." }
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
