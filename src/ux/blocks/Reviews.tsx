"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export interface ReviewsProps {
  title?: string;
  rating?: number;
  totalReviews?: number;
  reviews?: {
    name: string;
    city: string;
    text: string;
    date: string;
    rating: number;
    avatar: string;
  }[];
}

const mockReviews = [
  { name: "Thomas M.", city: "München", text: "Unglaublich schnell und professionell. Die Wohnung war nach 2 Stunden komplett leer und besenrein. Absolute Empfehlung!", date: "vor 2 Wochen", rating: 5, avatar: "T" },
  { name: "Sabine K.", city: "Augsburg", text: "Sehr diskret bei unserer Nachlassauflösung. Das Team war einfühlsam und hat sich um alles gekümmert, inklusive Wertanrechnung.", date: "vor 1 Monat", rating: 5, avatar: "S" },
  { name: "Michael R.", city: "Stuttgart", text: "Festpreis wurde exakt eingehalten. Keine versteckten Kosten. Die Jungs haben super gearbeitet.", date: "vor 3 Monaten", rating: 5, avatar: "M" },
  { name: "Julia B.", city: "Nürnberg", text: "Pünktlich, freundlich und extrem fleißig. Selbst das schwere Klavier war kein Problem.", date: "vor 2 Monaten", rating: 5, avatar: "J" },
];

export function ReviewsBlock({
  title = "Was unsere Kunden sagen",
  rating = 4.9,
  totalReviews = 347,
  reviews = mockReviews
}: ReviewsProps) {

  return null;
  /*
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4"
            >
              {title}
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <p className="text-lg text-gray-600 font-medium">
                100% Fokus auf Diskretion, Schnelligkeit und <span className="font-bold text-gray-900">Kundenzufriedenheit</span>.
              </p>
            </motion.div>
          </div>
          
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#kontakt" 
            className="flex items-center gap-2 px-6 py-3 border-2 border-gray-200 rounded-full font-semibold text-gray-700 hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
          >
            Angebot anfordern
          </motion.a>
        </div>

        {/* Slider */}
        <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory hide-scrollbar">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15 }}
              className="min-w-[320px] max-w-[350px] flex-shrink-0 snap-start bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary)] to-orange-400 flex items-center justify-center text-white font-bold text-xl">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.city} • {review.date}</p>
                  </div>
                </div>
              </div>

              {/* Animated Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, starIdx) => (
                  <motion.div
                    key={starIdx}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + starIdx * 0.1, type: "spring" }}
                  >
                    <Star className={`w-4 h-4 ${starIdx < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
  */
}
