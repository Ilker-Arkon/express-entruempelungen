"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ArrowLeft, Home, Building2, Package, Bird, Recycle, Euro } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="w-8 h-8 text-[var(--primary)]" strokeWidth={1.5} />,
  Building2: <Building2 className="w-8 h-8 text-[var(--primary)]" strokeWidth={1.5} />,
  Package: <Package className="w-8 h-8 text-[var(--primary)]" strokeWidth={1.5} />,
  Bird: <Bird className="w-8 h-8 text-[var(--primary)]" strokeWidth={1.5} />,
  Recycle: <Recycle className="w-8 h-8 text-[var(--primary)]" strokeWidth={1.5} />,
  Euro: <Euro className="w-8 h-8 text-[var(--primary)]" strokeWidth={1.5} />,
};

const rueckseitenTexte: Record<string, string> = {
  Wohnungsauflösung:
    "Wir räumen die gesamte Wohnung – von der Küche bis zum Keller. Möbel, Hausrat und Teppiche werden fachgerecht entfernt. Sie erhalten die Räume garantiert besenrein und sauber.",
  Gewerbeentrümpelung:
    "Büromöbel, Akten, Lagerbestände oder Maschinen – wir räumen Gewerbeflächen jeder Größe. Diskret und oft außerhalb der Geschäftszeiten. Inkl. datenschutzkonformer Aktenvernichtung auf Wunsch.",
  Kellerentrümpelung:
    "Keller, Dachboden, Abstellraum: Wir befreien Ihre Nebenräume von jahrelang angesammeltem Ballast. Auch bei schwer zugänglichen Räumen mit engen Treppenhäusern.",
  Nachlassauflösung:
    "Einfühlsame Haushaltsauflösung nach Todesfall. Wir prüfen sorgfältig auf Erbstücke und persönliche Gegenstände und sichern alles für die Angehörigen. Diskrete Abwicklung in enger Abstimmung mit Angehörigen und Nachlassverwaltern.",
  "Sperrmüll & Entsorgung":
    "Sperrige Einzelstücke, Elektroschrott oder Grünschnitt: Wir holen ab und entsorgen umweltgerecht inkl. sortenreiner Trennung.",
};

export interface ServicesProps {
  id?: string;
  title?: string;
  subtitle?: string;
  services?: {
    title: string;
    description: string;
    icon: string;
    link: string;
  }[];
}

export function ServicesBlock({
  id,
  title = "Unsere Leistungen",
  subtitle = "Professionelle Lösungen für jede Herausforderung",
  services = [
    { title: "Wohnungsauflösung", description: "Komplette Räumung von Wohnungen inkl. besenreiner Übergabe.", icon: "Home", link: "/wohnungsaufloesung-nuernberg" },
    { title: "Gewerbeentrümpelung", description: "Diskrete Räumung von Büros, Lagern und Betrieben.", icon: "Building2", link: "/gewerbeaufloesung-nuernberg" },
    { title: "Kellerentrümpelung", description: "Befreiung von Nebenräumen von angesammeltem Ballast.", icon: "Package", link: "/entruempelung-nuernberg" },
    { title: "Nachlassauflösung", description: "Einfühlsame und diskrete Abwicklung von Nachlässen.", icon: "Bird", link: "/nachlassaufloesung-nuernberg" },
    { title: "Sperrmüll & Entsorgung", description: "Fachgerechte Trennung und umweltfreundliche Entsorgung.", icon: "Recycle", link: "/sperrmuellentsorgung-nuernberg" },
  ],
}: ServicesProps) {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  // Auto-flip zurück nach 5 Sekunden
  useEffect(() => {
    if (flippedIndex === null) return;
    const timer = setTimeout(() => setFlippedIndex(null), 5000);
    return () => clearTimeout(timer);
  }, [flippedIndex]);

  const handleFlip = useCallback((index: number) => {
    setFlippedIndex(prev => prev === index ? null : index);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id={id || "leistungen"}
      className="py-24 bg-black overflow-hidden"
      onClick={() => setFlippedIndex(null)}
    >
      <div className="container mx-auto px-6" onClick={(e) => e.stopPropagation()}>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 font-body"
          >
            {subtitle}
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const isFlipped = flippedIndex === index;
            const rueckseite = rueckseitenTexte[service.title] || service.description;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="perspective-[1000px] h-[340px]"
              >
                <motion.div
                  className="relative w-full h-full"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Vorderseite */}
                  <div
                    className="absolute inset-0 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-sm p-10 flex flex-col h-full"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="mb-6">
                      {iconMap[service.icon] || <Home className="w-8 h-8 text-[var(--primary)]" strokeWidth={1.5} />}
                    </div>
                    <h3 className="text-xl font-bold font-heading text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 font-body mb-6 flex-grow">
                      {service.description}
                    </p>

                    <button
                      onClick={() => handleFlip(index)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] mt-auto hover:gap-3 transition-all cursor-pointer"
                    >
                      Mehr erfahren
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Rückseite */}
                  <div
                    className="absolute inset-0 rounded-2xl bg-[var(--dark-secondary)] border border-[var(--primary)]/20 shadow-xl p-10 flex flex-col h-full"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <h3 className="text-lg font-bold font-heading text-[var(--primary)] mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-300 font-body text-sm leading-relaxed mb-6 flex-grow">
                      {rueckseite}
                    </p>

                    <div className="mt-auto">
                      <button
                        onClick={() => setFlippedIndex(null)}
                        className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Zurück
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
