"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Home, Star, Truck, Clock, Euro } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="w-8 h-8 text-[var(--primary)]" strokeWidth={1.5} />,
  Star: <Star className="w-8 h-8 text-[var(--primary)]" strokeWidth={1.5} />,
  Truck: <Truck className="w-8 h-8 text-[var(--primary)]" strokeWidth={1.5} />,
  Clock: <Clock className="w-8 h-8 text-[var(--primary)]" strokeWidth={1.5} />,
  Euro: <Euro className="w-8 h-8 text-[var(--primary)]" strokeWidth={1.5} />,
};

export interface TrustBarProps {
  stats?: {
    icon: string;
    number: number;
    suffix: string;
    label: string;
  }[];
}

export function TrustBarBlock({
  stats = [
    { icon: "Home", number: 100, suffix: "%", label: "Besenrein" },
    { icon: "Star", number: 100, suffix: "%", label: "Zufriedenheit" },
    { icon: "Truck", number: 100, suffix: "km", label: "Umkreis" },
    { icon: "Clock", number: 100, suffix: "%", label: "Diskretion" },
    { icon: "Euro", number: 100, suffix: "%", label: "Festpreisgarantie" },
  ]
}: TrustBarProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-12 bg-[var(--dark-secondary)] border-b border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center group"
            >
              <motion.div 
                className="mb-4 transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
              >
                {iconMap[stat.icon] || <Star className="w-8 h-8 text-[var(--primary)]" strokeWidth={1.5} />}
              </motion.div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-heading">
                {inView ? (
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    decimals={stat.number % 1 !== 0 ? 1 : 0}
                  />
                ) : (
                  "0"
                )}
                <span className="text-[var(--primary)]">{stat.suffix}</span>
              </div>
              <div className="text-sm md:text-base text-gray-400 font-medium tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
