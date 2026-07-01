"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, ArrowRight } from "lucide-react";

export interface PriceCalculatorProps {
  id?: string;
  title?: string;
  subtitle?: string;
  basePricePerSqm?: number;
}

export function PriceCalculatorBlock({
  id,
  title = "Berechnen Sie Ihren ungefähren Preis",
  subtitle = "Mit wenigen Klicks zu einer ersten Kostenschätzung.",
  basePricePerSqm = 15,
}: PriceCalculatorProps) {
  const [propertyType, setPropertyType] = useState("Wohnung");
  const [size, setSize] = useState(60);
  const [fillLevel, setFillLevel] = useState(2); // 1-4 (Wenig - Sehr Viel)
  const [floor, setFloor] = useState(1);
  const [hasElevator, setHasElevator] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(false);

  // Auto-calculate on any change after first interaction
  useEffect(() => {
    if (size !== 60 || propertyType !== "Wohnung" || fillLevel !== 2 || floor !== 1 || hasElevator) {
      setHasCalculated(true);
    }
  }, [size, propertyType, fillLevel, floor, hasElevator]);

  const priceRange = useMemo(() => {
    let base = size * basePricePerSqm;
    
    // Fill level multiplier (1: 0.8, 2: 1.0, 3: 1.4, 4: 2.2)
    const fillMultipliers = [0.8, 1.0, 1.4, 2.2];
    base *= fillMultipliers[fillLevel - 1];

    // Property type adjustment
    if (propertyType === "Haus") base *= 1.1;
    if (propertyType === "Keller" || propertyType === "Garage") base *= 0.9;

    // Floor & Elevator penalty
    if (!hasElevator && floor > 1) {
      base += (floor - 1) * 50; // 50€ extra per floor without elevator
    }

    const minPrice = Math.round(base * 0.9 / 10) * 10;
    const maxPrice = Math.round(base * 1.1 / 10) * 10;
    
    // Minimum price cap
    return { 
      min: Math.max(250, minPrice), 
      max: Math.max(350, maxPrice) 
    };
  }, [propertyType, size, fillLevel, floor, hasElevator, basePricePerSqm]);

  return null;

  return (
    <section id={id || "preise"} className="py-24 bg-[var(--gray-light)] relative">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-6">
            <Calculator className="w-8 h-8" />
          </div>
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

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-card border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Form Controls */}
            <div className="space-y-8">
              {/* Art der Immobilie */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Art der Immobilie</label>
                <select 
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none"
                >
                  <option>Wohnung</option>
                  <option>Haus</option>
                  <option>Keller</option>
                  <option>Garage</option>
                </select>
              </div>

              {/* Größe */}
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-semibold text-gray-700">Größe in m²</label>
                  <span className="font-bold text-[var(--primary)]">{size} m²</span>
                </div>
                <input 
                  type="range" 
                  min="10" max="300" step="5"
                  value={size}
                  onChange={(e) => setSize(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--primary)]"
                />
              </div>

              {/* Füllgrad */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Füllgrad / Menge</label>
                <div className="grid grid-cols-4 gap-2">
                  {["Wenig", "Mittel", "Viel", "Extrem"].map((level, idx) => (
                    <button
                      key={idx}
                      onClick={() => setFillLevel(idx + 1)}
                      className={`py-2 text-xs md:text-sm font-medium rounded-lg transition-colors ${fillLevel === idx + 1 ? 'bg-[var(--primary)] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Etage */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Etage</label>
                  <select 
                    value={floor}
                    onChange={(e) => setFloor(parseInt(e.target.value))}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none"
                  >
                    <option value={0}>Erdgeschoss</option>
                    <option value={1}>1. Etage</option>
                    <option value={2}>2. Etage</option>
                    <option value={3}>3. Etage</option>
                    <option value={4}>4. Etage</option>
                    <option value={5}>5. Etage +</option>
                  </select>
                </div>

                {/* Aufzug */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Aufzug?</label>
                  <button 
                    onClick={() => setHasElevator(!hasElevator)}
                    className={`w-full py-3 rounded-xl font-medium transition-colors border ${hasElevator ? 'bg-green-50 text-green-600 border-green-200' : 'bg-gray-50 text-gray-600 border-gray-200'}`}
                  >
                    {hasElevator ? 'Ja, vorhanden' : 'Nein'}
                  </button>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="bg-gray-50 rounded-2xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl" />
              
              <div className="relative z-10 w-full">
                <h4 className="text-gray-500 font-medium mb-4">Ihre geschätzte Preisspanne*</h4>
                
                <div className="text-4xl md:text-5xl font-black font-heading text-gray-900 mb-6">
                  {priceRange.min}€ <span className="text-2xl text-gray-400 font-normal mx-2">–</span> {priceRange.max}€
                </div>

                <p className="text-xs text-gray-600 mb-8 px-4">
                  *Dies ist eine unverbindliche Kostenschätzung. Für einen exakten Festpreis buchen Sie bitte unsere kostenlose Besichtigung.
                </p>

                <AnimatePresence>
                  {hasCalculated && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className="w-full"
                    >
                      <a href="#kontakt">
                        <button className="w-full py-4 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white rounded-xl font-bold tracking-wide transition-all shadow-button flex items-center justify-center gap-2 group">
                          Kostenlose Besichtigung
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
