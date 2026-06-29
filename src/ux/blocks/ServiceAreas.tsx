"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import React, { useState } from "react";

export interface ServiceAreasProps {
  title?: string;
  subtitle?: string;
  cities?: string[];
}

const defaultCities = [
  "Nürnberg", "Fürth", "Erlangen", "Schwabach", "Ansbach", 
  "Neumarkt", "Roth", "Zirndorf", "Stein", "Lauf a.d.Pegnitz"
];

// Mock coordinates for the visual map representation
const mockPins = [
  { x: "50%", y: "40%", label: "Nürnberg (Zentrale)" },
  { x: "35%", y: "30%", label: "Fürth" },
  { x: "55%", y: "20%", label: "Erlangen" },
  { x: "65%", y: "60%", label: "Schwabach" },
  { x: "40%", y: "55%", label: "Zirndorf" },
];

export function ServiceAreasBlock({
  title = "Unsere Service-Gebiete",
  subtitle = "Wir sind in einem Umkreis von 50km für Sie im Einsatz.",
  cities = defaultCities
}: ServiceAreasProps) {
  const [activePin, setActivePin] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Map Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full aspect-square md:aspect-[4/3] bg-blue-50/50 rounded-3xl border border-blue-100 overflow-hidden shadow-card flex items-center justify-center"
          >
            {/* Map Grid Pattern */}
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.3 }} />
            
            {/* Radius Circle */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-[var(--primary)]/5 border border-[var(--primary)]/20"
            />
            
            {/* Animated Pulse at Center */}
            <motion.div
              animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[var(--primary)]/20 rounded-full blur-xl pointer-events-none"
            />

            {/* Pins */}
            {mockPins.map((pin, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                className="absolute z-10"
                style={{ left: pin.x, top: pin.y }}
                onMouseEnter={() => setActivePin(i)}
                onMouseLeave={() => setActivePin(null)}
              >
                <div className="relative group cursor-pointer -translate-x-1/2 -translate-y-full">
                  <MapPin className={`w-8 h-8 transition-colors ${i === 0 ? 'text-[var(--primary)]' : 'text-gray-400 hover:text-[var(--primary)]'}`} />
                  
                  {/* Tooltip */}
                  <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-gray-900 text-white text-xs font-bold py-1 px-3 rounded shadow-lg transition-all duration-200 ${activePin === i ? 'opacity-100 transform-none' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                    {pin.label}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Note overlay */}
            <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur text-xs px-3 py-1.5 rounded-lg text-gray-500 font-medium">
              Interaktive Kartenansicht
            </div>
          </motion.div>

          {/* Cities List */}
          <div>
            <h3 className="text-2xl font-bold font-heading text-gray-900 mb-6">Regionale Expertise</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Dank unserer zentralen Lage sind wir schnell vor Ort. Ob direkt in der Stadt oder im Umland – wir garantieren eine zeitnahe Besichtigung und zügige Räumung.
            </p>
            
            <div className="grid grid-cols-2 gap-y-4 gap-x-2">
              {cities.map((city, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-2 text-gray-700 font-medium group"
                >
                  <MapPin className="w-4 h-4 text-[var(--primary)] opacity-50 group-hover:opacity-100 transition-opacity" />
                  {city}
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10 p-6 bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-2xl flex items-start gap-4">
              <div className="bg-[var(--primary)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">!</div>
              <div>
                <h4 className="font-bold text-gray-900">Ihre Stadt nicht dabei?</h4>
                <p className="text-sm text-gray-600 mt-1">Kein Problem! Auf Anfrage übernehmen wir auch größere Entrümpelungen überregional.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
