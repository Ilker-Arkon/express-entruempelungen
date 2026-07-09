"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, CheckCircle2, ArrowRight } from "lucide-react";



export interface FooterConfig {
  companyName?: string;
  companySubtitle?: string;
  companyDescription?: string;
  logoPath?: string;
  logoAlt?: string;
  phonePrimary?: string;
  phonePrimaryDisplay?: string;
  phoneSecondary?: string;
  phoneSecondaryDisplay?: string;
  email?: string;
  street?: string;
  city?: string;
  postalCode?: string;
  openingHoursText?: string;
  openingHoursNote?: string;
  vatId?: string;
  copyrightText?: string;
  serviceDropdownLinks?: { href: string; label: string }[];
}

const DEFAULT_FOOTER: Required<FooterConfig> = {
  companyName: "Express",
  companySubtitle: "Ihre Profis für Nürnberg",
  companyDescription:
    "Ihr zuverlässiger Partner für besenreine Wohnungsauflösungen, Entrümpelungen und diskrete Nachlassabwicklungen in Nürnberg und 100km Umkreis.",
  logoPath: "/gallery/logo.png",
  logoAlt: "Express Entrümpelungen Logo",
  phonePrimary: "01728083459",
  phonePrimaryDisplay: "0172 80 83 459",
  phoneSecondary: "017655122781",
  phoneSecondaryDisplay: "0176 55 12 27 81",
  email: "info@express-entruempelungen.de",
  street: "Friesenstraße 25",
  city: "Nürnberg",
  postalCode: "90441",
  openingHoursText: "Mo - So: 07:00 - 22:00 Uhr",
  openingHoursNote: "",
  vatId: "DE462122010",
  copyrightText: "Express Entrümpelungen & Wohnungsauflösungen. Alle Rechte vorbehalten.",
  serviceDropdownLinks: [
    { href: "/wohnungsaufloesung-nuernberg", label: "Wohnungsauflösung" },
    { href: "/entruempelung-nuernberg", label: "Entrümpelung" },
    { href: "/gewerbeaufloesung-nuernberg", label: "Gewerbeauflösung" },
    { href: "/nachlassaufloesung-nuernberg", label: "Nachlassauflösung" },
    { href: "/sperrmuellentsorgung-nuernberg", label: "Sperrmüllentsorgung" },
  ],
};

export function Footer({ config }: { config?: FooterConfig }) {
  const c = { ...DEFAULT_FOOTER, ...config };

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
                src={c.logoPath}
                alt={c.logoAlt}
                width={48}
                height={48}
                className="w-12 h-12 object-contain bg-white rounded-xl p-1"
              />
              <div className="font-heading font-black text-xl text-white leading-tight">
                {c.companyName}<br/><span className="text-[var(--primary)] text-sm">{c.companySubtitle}</span>
              </div>
            </Link>
            <p className="mb-6 leading-relaxed">
              {c.companyDescription}
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
              {c.serviceDropdownLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className="hover:text-[var(--primary)] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-zinc-600 group-hover:text-[var(--primary)]" /> {link.label}</Link></li>
              ))}
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
                  <strong className="block text-white font-medium mb-1">Zentrale {c.city}</strong>
                  {c.street}<br/>{c.postalCode} {c.city}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href={`tel:${c.phonePrimary}`} className="block hover:text-[var(--primary)] transition-colors"><strong className="text-white font-medium">Ferit:</strong> {c.phonePrimaryDisplay}</a>
                  {c.phoneSecondary && <a href={`tel:${c.phoneSecondary}`} className="block hover:text-[var(--primary)] transition-colors"><strong className="text-white font-medium">Onur:</strong> {c.phoneSecondaryDisplay || c.phoneSecondary}</a>}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
                <a href={`mailto:${c.email}`} className="hover:text-white transition-colors">
                  {c.email}
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
                  <span className="block text-white">{c.openingHoursText}</span>
                  <span>{c.openingHoursNote}</span>
                </div>
              </li>
            </ul>

            <h4 className="text-white font-heading font-bold text-lg mb-4">Rechtliches</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/impressum" className="hover:text-[var(--primary)] transition-colors underline decoration-zinc-700 underline-offset-4">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-[var(--primary)] transition-colors underline decoration-zinc-700 underline-offset-4">Datenschutz</Link></li>
              <li><Link href="/agb" className="hover:text-[var(--primary)] transition-colors underline decoration-zinc-700 underline-offset-4">AGB</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800/50 bg-black/20">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left flex-1">
            &copy; {new Date().getFullYear()} {c.copyrightText}
          </div>
          
          <div className="flex-1 hidden md:block">
            {/* Leerer Platzhalter für perfekte Zentrierung */}
          </div>

          <div className="flex-1 hidden md:flex justify-end items-center gap-2 text-xs">
            <span className="text-zinc-500">Webdesign & Entwicklung von</span>
            <a href="https://arkondigicomtech.de/" target="_blank" rel="noreferrer" className="hover:scale-105 transition-transform">
               <strong className="text-white font-heading tracking-widest text-sm">ARKON<span className="text-[var(--primary)]">DIGICOMTECH</span></strong>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
