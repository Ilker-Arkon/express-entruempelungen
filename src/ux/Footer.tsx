import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, CheckCircle2, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--dark)] border-t border-zinc-800 pt-20 pb-10 text-zinc-400 text-sm font-body relative overflow-hidden">
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Mascot */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/gallery/logo.png"
                alt="Express Entrümpelungen Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain bg-white rounded-xl p-1"
              />
              <div className="font-heading font-black text-xl text-white leading-tight">
                Express<br/><span className="text-[var(--primary)] text-sm">Entrümpelungen</span>
              </div>
            </Link>
            <p className="mb-6 leading-relaxed">
              Ihr zuverlässiger Partner für besenreine Wohnungsauflösungen, Entrümpelungen und diskrete Nachlassabwicklungen in Nürnberg und 50km Umkreis.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[var(--primary)]" />
                <span>Kostenlose Besichtigung</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[var(--primary)]" />
                <span>Festpreisgarantie</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-[var(--primary)] rounded-full"></span>
              Leistungen
            </h4>
            <ul className="space-y-3">
              <li><Link href="/wohnungsaufloesung-nuernberg" className="hover:text-[var(--primary)] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-zinc-600 group-hover:text-[var(--primary)]" /> Wohnungsauflösung</Link></li>
              <li><Link href="/entruempelung-nuernberg" className="hover:text-[var(--primary)] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-zinc-600 group-hover:text-[var(--primary)]" /> Entrümpelung</Link></li>
              <li><Link href="/gewerbeaufloesung-nuernberg" className="hover:text-[var(--primary)] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-zinc-600 group-hover:text-[var(--primary)]" /> Gewerbeauflösung</Link></li>
              <li><Link href="/nachlassaufloesung-nuernberg" className="hover:text-[var(--primary)] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-zinc-600 group-hover:text-[var(--primary)]" /> Nachlassauflösung</Link></li>
              <li><Link href="/sperrmuellentsorgung-nuernberg" className="hover:text-[var(--primary)] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-zinc-600 group-hover:text-[var(--primary)]" /> Sperrmüllentsorgung</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact (NAP) */}
          <div id="kontakt">
            <h4 className="text-white font-heading font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-[var(--primary)] rounded-full"></span>
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-medium mb-1">Zentrale Nürnberg</strong>
                  Friesenstraße 25<br/>90441 Nürnberg
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+491728083459" className="block hover:text-white transition-colors">+49 172 80 83 459</a>
                  <a href="tel:+4917655122781" className="block hover:text-white transition-colors">+49 176 55 12 27 81</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
                <a href="mailto:info@express-entruempelungen.de" className="hover:text-white transition-colors">
                  info@express-entruempelungen.de
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Opening Hours & Legal */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-[var(--primary)] rounded-full"></span>
              Erreichbarkeit
            </h4>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[var(--primary)] shrink-0" />
                <div>
                  <span className="block text-white">Mo - Sa: 08:00 - 20:00 Uhr</span>
                  <span>Notdienst: 24/7 über WhatsApp</span>
                </div>
              </li>
            </ul>

            <h4 className="text-white font-heading font-bold text-lg mb-4">Rechtliches</h4>
            <ul className="flex flex-wrap gap-4">
              <li><Link href="/impressum" className="hover:text-[var(--primary)] transition-colors underline decoration-zinc-700 underline-offset-4">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-[var(--primary)] transition-colors underline decoration-zinc-700 underline-offset-4">Datenschutz</Link></li>
              <li><Link href="/agb" className="hover:text-[var(--primary)] transition-colors underline decoration-zinc-700 underline-offset-4">AGB</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800/50 bg-black/20">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Express Entrümpelungen & Wohnungsauflösungen. Alle Rechte vorbehalten.
          </div>
          <div className="text-center md:text-right text-zinc-500">
            USt-IdNr.: DE462122010
          </div>
        </div>
      </div>
    </footer>
  );
}
