"use client";

import { motion } from "framer-motion";
import { Award, Shield, CheckCircle } from "lucide-react";

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface TeamProps {
  title?: string;
  description?: string;
  ownerQuote?: string;
  members?: TeamMember[];
}

const defaultMembers: TeamMember[] = [
  { name: "Markus Richter", role: "Inhaber & Experte", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { name: "Sarah Keller", role: "Dispo & Kundenbetreuung", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { name: "Lukas Wagner", role: "Teamleiter Räumung", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
];

const defaultDescription = "Seit über 10 Jahren sind wir Ihr verlässlicher Partner für schnelle, diskrete und saubere Entrümpelungen. Als familiengeführtes Unternehmen wissen wir, dass eine Haushaltsauflösung oft mehr ist als nur Möbel zu bewegen – es geht um Vertrauen.";
const defaultOwnerQuote = "Mein Wort an Sie: Wir verlassen keinen Einsatzort, bevor Sie nicht 100% zufrieden sind. Ihr Vertrauen ist unser höchstes Gut.";

export function TeamBlock({
  title = "Unser Team",
  description = defaultDescription,
  ownerQuote = defaultOwnerQuote,
  members = defaultMembers,
}: TeamProps) {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Über <span className="text-[var(--primary)]">Entrümpelung Profi</span>
            </h2>
            <p className="text-gray-600 font-body text-lg leading-relaxed mb-6">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100">
                <Shield className="text-[var(--primary)] w-6 h-6" />
                <span className="font-semibold text-gray-900">Betriebshaftpflicht</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100">
                <Award className="text-[var(--primary)] w-6 h-6" />
                <span className="font-semibold text-gray-900">IHK Zertifiziert</span>
              </div>
            </div>
          </motion.div>

          {/* Owner Message block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[var(--primary)] text-white p-10 rounded-3xl shadow-card relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10" />
            <div className="text-5xl opacity-20 mb-4 font-serif">"</div>
            <p className="text-xl md:text-2xl font-body font-medium leading-relaxed mb-6 relative z-10">
              {ownerQuote}
            </p>
            <div className="flex items-center gap-4 mt-8 relative z-10">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center font-bold text-xl backdrop-blur-sm">
                MR
              </div>
              <div>
                <h4 className="font-bold font-heading text-lg">Markus Richter</h4>
                <span className="text-white/80 text-sm">Geschäftsführer</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold font-heading text-gray-900">{title}</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5]"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${member.image})` }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/90 via-[#1A1A2E]/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-white font-bold font-heading text-2xl mb-1">{member.name}</h4>
                <p className="text-[var(--primary)] font-semibold mb-4">{member.role}</p>
                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400" /> Diskretion
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
