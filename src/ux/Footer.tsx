import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, CheckCircle2, ArrowRight } from "lucide-react";

const InstagramColorIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" className={className}>
    <defs>
      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="25%" stopColor="#e6683c" />
        <stop offset="50%" stopColor="#dc2743" />
        <stop offset="75%" stopColor="#cc2366" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <rect width="1000" height="1000" rx="225" ry="225" fill="url(#ig-grad)" />
    <path fill="#ffffff" d="M325,200 h350 c69.035,0 125,55.965 125,125 v350 c0,69.035 -55.965,125 -125,125 h-350 c-69.035,0 -125,-55.965 -125,-125 v-350 c0,-69.035 55.965,-125 125,-125 z m0,75 c-27.614,0 -50,22.386 -50,50 v350 c0,27.614 22.386,50 50,50 h350 c27.614,0 50,-22.386 50,-50 v-350 c0,-27.614 -22.386,-50 -50,-50 h-350 z" />
    <path fill="#ffffff" d="M500,340 c-88.366,0 -160,71.634 -160,160 c0,88.366 71.634,160 160,160 c88.366,0 160,-71.634 160,-160 c0,-88.366 -71.634,-160 -160,-160 z m0,75 c46.944,0 85,38.056 85,85 c0,46.944 -38.056,85 -85,85 c-46.944,0 -85,-38.056 -85,-85 c0,-46.944 38.056,-85 85,-85 z" />
    <circle fill="#ffffff" cx="675" cy="325" r="35" />
  </svg>
);

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={className} fill="currentColor">
    <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
  </svg>
);

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
                <div>
                  <a href={`tel:${c.phonePrimary}`} className="block hover:text-white transition-colors">{c.phonePrimaryDisplay}</a>
                  {c.phoneSecondary && <a href={`tel:${c.phoneSecondary}`} className="block hover:text-white transition-colors">{c.phoneSecondaryDisplay || c.phoneSecondary}</a>}
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
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left flex-1">
            &copy; {new Date().getFullYear()} {c.copyrightText}
          </div>
          
          <div className="flex justify-center gap-6 items-center">
            <span className="text-sm text-zinc-400">Folgen Sie uns:</span>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/expressentruempelungen?utm_source=qr" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform" aria-label="Instagram">
                 <InstagramColorIcon className="w-7 h-7" />
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); alert("Kommt bald!"); }} 
                className="hover:scale-110 transition-transform text-white hover:text-[#00f2ea]" 
                aria-label="TikTok"
              >
                 <TiktokIcon className="w-7 h-7" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right text-zinc-300 flex-1">
            USt-IdNr.: {c.vatId}
          </div>
        </div>
      </div>
    </footer>
  );
}
