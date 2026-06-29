"use client";

import { motion } from "framer-motion";
import { Phone, ClipboardCheck, CalendarCheck, Truck, Sparkles } from "lucide-react";
import React from "react";

export interface TimelineProps {
  id?: string;
  title?: string;
  steps?: {
    title: string;
    description: string;
    icon: string;
  }[];
}

const iconMap: Record<string, React.ReactNode> = {
  PhoneCall: <Phone className="w-6 h-6" />,
  ClipboardCheck: <ClipboardCheck className="w-6 h-6" />,
  CalendarCheck: <CalendarCheck className="w-6 h-6" />,
  Truck: <Truck className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
};

export function TimelineBlock({
  id,
  title = "So funktioniert es",
  steps = [
    { title: "Kontakt aufnehmen", description: "Anruf / WhatsApp / Formular", icon: "PhoneCall" },
    { title: "Kostenlose Besichtigung", description: "Vor Ort Analyse durch unsere Experten", icon: "ClipboardCheck" },
    { title: "Festpreisangebot erhalten", description: "Keine versteckten Kosten", icon: "CalendarCheck" },
    { title: "Professionelle Entrümpelung", description: "Schnell & zuverlässig", icon: "Truck" },
    { title: "Übergabe", description: "Besenrein & sauber", icon: "Sparkles" },
  ]
}: TimelineProps) {
  return (
    <section id={id || "ablauf"} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-gray-900"
          >
            {title}
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Line Background */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 rounded-full" />
          
          {/* Animated Vertical Line Foreground */}
          <motion.div 
            className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-[var(--primary)] -translate-x-1/2 origin-top rounded-full"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />

          <div className="flex flex-col gap-12 md:gap-24 relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="flex flex-row md:justify-between items-center w-full">
                  
                  {/* Left Side (Desktop) */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.4, duration: 0.6 }}
                    className={`w-full pl-16 md:pl-0 md:w-5/12 ${isEven ? 'md:text-right' : 'md:order-3 md:text-left'} order-2`}
                  >
                    <h3 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 font-body">{step.description}</p>
                  </motion.div>

                  {/* Center Node */}
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 10,
                      delay: index * 0.4 
                    }}
                    whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.5 } }}
                    className="absolute left-[12px] md:left-1/2 md:relative md:w-2/12 order-1 md:order-2 flex justify-center items-center z-20"
                  >
                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[var(--primary)] border-4 border-white flex items-center justify-center text-white shadow-lg cursor-pointer">
                      {iconMap[step.icon] || <span className="text-lg font-bold">{index + 1}</span>}
                    </div>
                  </motion.div>

                  {/* Right Side Empty Space for Desktop layout balance */}
                  <div className={`hidden md:block w-5/12 ${isEven ? 'order-3' : 'order-1'}`} />
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
