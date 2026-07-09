"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Edit, Menu, X, Phone, Mail, MapPin, CheckCircle2, ChevronDown, Wrench } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

export interface HeaderConfig {
  companyName?: string;
  companySubtitle?: string;
  logoPath?: string;
  logoAlt?: string;
  phonePrimary?: string;
  phonePrimaryDisplay?: string;
  street?: string;
  city?: string;
  postalCode?: string;
  topBarBadges?: { text: string }[];
  mainNavLinks?: { href: string; label: string }[];
  serviceDropdownLinks?: { href: string; label: string }[];
}

const DEFAULT_HEADER: Required<HeaderConfig> = {
  companyName: "Express",
  companySubtitle: "Entrümpelungen",
  logoPath: "/gallery/logo.png",
  logoAlt: "Express Entrümpelungen Logo",
  phonePrimary: "01728083459",
  phonePrimaryDisplay: "0172 80 83 459",
  street: "Friesenstraße 25",
  city: "Nürnberg",
  postalCode: "90441",
  topBarBadges: [
    { text: "Betriebshaftpflicht" },
    { text: "IHK Zertifiziert" },
    { text: "Festpreisgarantie" },
    { text: "Besenrein" },
  ],
  mainNavLinks: [
    { href: "/", label: "Startseite" },
    { href: "/#ablauf", label: "Ablauf" },
    { href: "/#faq", label: "FAQ" },
    { href: "/#kontakt", label: "Kontakt" },
  ],
  serviceDropdownLinks: [
    { href: "/entruempelung-nuernberg", label: "Entrümpelung Nürnberg" },
    { href: "/wohnungsaufloesung-nuernberg", label: "Wohnungsauflösung Nürnberg" },
    { href: "/gewerbeaufloesung-nuernberg", label: "Gewerbeentrümpelung" },
    { href: "/nachlassaufloesung-nuernberg", label: "Nachlassauflösung" },
    { href: "/sperrmuellentsorgung-nuernberg", label: "Sperrmüllentsorgung" },
  ],
};

export function Header({ config }: { config?: HeaderConfig }) {
  const c = { ...DEFAULT_HEADER, ...config };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [isTiktokModalOpen, setIsTiktokModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const openDropdown = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  return (
    <>
      {/* Top Bar for GEO/NAP SEO & Quick Contact */}
      <div className="bg-[var(--dark-secondary)] text-white/80 py-2 px-6 text-xs font-medium hidden md:block border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5 text-[var(--primary)] font-bold tracking-wide">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary)]" />
              {c.topBarBadges[0]?.text}
            </span>
            <span className="flex items-center gap-1.5 text-[var(--primary)] font-bold tracking-wide">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary)]" />
              {c.topBarBadges[1]?.text}
            </span>
            <a href={`https://maps.google.com/?q=${encodeURIComponent(c.street + ", " + c.postalCode + " " + c.city)}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[var(--primary)] transition-colors text-white/60">
              <MapPin className="w-3.5 h-3.5 text-zinc-500" />
              {c.street}, {c.postalCode} {c.city}
            </a>
          </div>
          <div className="flex items-center gap-4 text-[var(--primary)] font-bold tracking-wider">
            {c.topBarBadges[2] && <span className="flex items-center gap-1 text-white/80"><CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary)]" /> {c.topBarBadges[2].text}</span>}
            {c.topBarBadges[3] && <span className="flex items-center gap-1 text-white/80"><CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary)]" /> {c.topBarBadges[3].text}</span>}
          </div>
        </div>
      </div>

      {/* Sticky Wrapper: Header + Mobile Dropdown together so mobile menu sticks with header */}
      <div className="sticky top-0 z-50">

      {/* Main Header */}
      <header className="w-full bg-white border-b border-zinc-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">

          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src={c.logoPath}
              alt={c.logoAlt}
              width={96}
              height={96}
              priority
              className="w-24 h-24 object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col pt-1">
              <span className="font-heading font-black text-2xl bg-gradient-to-r from-[var(--dark)] via-[var(--dark-secondary)] to-zinc-400 text-transparent bg-clip-text leading-none tracking-tight">
                Express
              </span>
              <span className="font-sans font-bold text-xs text-[var(--primary)] uppercase tracking-[0.15em] mt-0.5">
                Entrümpelungen
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 font-medium text-zinc-700">
            {/* First link is always Startseite */}
            {c.mainNavLinks.length > 0 && (
              <Link href={c.mainNavLinks[0].href} className="hover:text-[var(--primary)] transition-colors">{c.mainNavLinks[0].label}</Link>
            )}

            {/* Dropdown for Leistungen */}
            {c.serviceDropdownLinks.length > 0 && (
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  onFocus={openDropdown}
                  onBlur={(e) => {
                    if (!dropdownRef.current?.contains(e.relatedTarget as Node)) {
                      closeDropdown();
                    }
                  }}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  className="flex items-center gap-1 hover:text-[var(--primary)] transition-colors py-2 cursor-pointer"
                >
                  Leistungen
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`absolute top-full left-0 mt-1 w-64 bg-white border border-zinc-200 rounded-xl shadow-xl transition-all duration-200 z-50 py-2 ${
                    dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  {c.serviceDropdownLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setDropdownOpen(false)}
                      onFocus={openDropdown}
                      className="block px-4 py-2 hover:bg-zinc-100 hover:text-[var(--primary)] transition-colors text-sm font-semibold focus:outline-none focus:bg-zinc-100"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Remaining main nav links (skip first) */}
            {c.mainNavLinks.slice(1).map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-[var(--primary)] transition-colors">{link.label}</Link>
            ))}
          </nav>

           {/* CTA & Admin & Social */}
           <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => setIsPhoneModalOpen(true)}
                className="flex items-center gap-2 px-5 py-2.5 bg-[var(--dark)] hover:bg-[var(--dark-secondary)] text-white rounded-full font-bold transition-all hover:shadow-lg"
              >
                <Phone className="w-4 h-4 text-[var(--primary)]" />
                Jetzt anrufen
              </button>

              {/* Social Icons Desktop */}
              <div className="flex items-center gap-3 ml-2 border-l border-zinc-200 pl-4 py-1">
                <a href="https://www.instagram.com/expressentruempelungen?utm_source=qr" target="_blank" rel="noreferrer" className="hover:scale-125 hover:-translate-y-1 transition-all duration-300" aria-label="Instagram">
                   <InstagramColorIcon className="w-6 h-6 drop-shadow-sm" />
                </a>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); setIsTiktokModalOpen(true); }} 
                  className="hover:scale-125 hover:-translate-y-1 transition-all duration-300 text-[var(--dark)] hover:text-[#00f2ea]" 
                  aria-label="TikTok"
                >
                   <TiktokIcon className="w-6 h-6 drop-shadow-sm" />
                </a>
              </div>

             {/* Admin Dropdown - Only visible in development mode */}
             {process.env.NODE_ENV === 'development' && (
               <div className="relative group">
                 <button aria-label="Admin Tools" className="flex items-center justify-center w-10 h-10 bg-zinc-100 hover:bg-zinc-200 text-zinc-600 rounded-full transition-colors focus:outline-none">
                   <Wrench className="w-4 h-4" />
                 </button>
                 <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-zinc-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
                   <Link href="/edit" className="flex items-center gap-2 px-4 py-2 hover:bg-zinc-100 hover:text-[var(--primary)] transition-colors text-sm font-semibold text-zinc-700">
                     <Edit className="w-4 h-4" /> Baukasten
                   </Link>
                   <Link href="/edit/site-config" className="flex items-center gap-2 px-4 py-2 hover:bg-zinc-100 hover:text-[var(--primary)] transition-colors text-sm font-semibold text-zinc-700">
                     ⚙️ Einstellungen
                   </Link>
                 </div>
               </div>
             )}
           </div>

           {/* Mobile Menu & Social */}
           <div className="lg:hidden flex items-center gap-4">
             <button
               className="p-2 text-zinc-600"
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
               aria-expanded={mobileMenuOpen}
               aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
             >
               {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
             </button>
           </div>
         </div>
       </header>

       {/* Mobile Navigation Dropdown */}
       <AnimatePresence>
         {mobileMenuOpen && (
           <motion.div
             initial={{ height: 0, opacity: 0 }}
             animate={{ height: "auto", opacity: 1 }}
             exit={{ height: 0, opacity: 0 }}
             className="lg:hidden bg-white border-b border-zinc-200 overflow-hidden"
           >
             <div className="px-6 py-4 flex flex-col gap-3 font-medium">
               {c.mainNavLinks.length > 0 && (
                 <Link href={c.mainNavLinks[0].href} onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-100">{c.mainNavLinks[0].label}</Link>
               )}

               <div className="flex flex-col gap-2 pl-3 border-l-2 border-[var(--primary)] my-2">
                 <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold block mb-1">Leistungen (Seiten)</span>
                 {c.serviceDropdownLinks.map((link) => (
                   <Link
                     key={link.href}
                     href={link.href}
                     onClick={() => setMobileMenuOpen(false)}
                     className="py-1 text-sm text-zinc-700 hover:text-[var(--primary)]"
                   >
                     {link.label}
                   </Link>
                 ))}
               </div>

               {c.mainNavLinks.slice(1).map((link) => (
                 <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-100">{link.label}</Link>
               ))}

                <div className="mt-4 flex flex-col gap-2">
                  <a href="tel:01728083459" className="flex justify-center items-center gap-2 px-5 py-3 bg-[var(--primary)] text-[#0D1B4B] rounded-full font-bold">
                    <Phone className="w-5 h-5" />
                    FERIT (0172 80 83 459)
                  </a>
                  <a href="tel:017655122781" className="flex justify-center items-center gap-2 px-5 py-3 bg-zinc-100 text-zinc-900 border border-zinc-200 rounded-full font-bold">
                    <Phone className="w-5 h-5" />
                    ONUR (0176 55 12 27 81)
                  </a>
                </div>
             </div>
           </motion.div>
        )}
      </AnimatePresence>

      </div> {/* end sticky wrapper */}

      <AnimatePresence>
        {isPhoneModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setIsPhoneModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white border border-zinc-200 p-8 rounded-3xl max-w-sm w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-heading font-bold text-zinc-900 mb-2">Ansprechpartner wählen</h3>
              <p className="text-zinc-600 text-sm mb-6">Bitte wählen Sie, wen Sie anrufen möchten:</p>
              <div className="flex flex-col gap-3">
                <a href="tel:01728083459" className="w-full">
                  <button className="w-full py-3 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-[#0D1B4B] rounded-xl font-bold tracking-wider text-sm transition-all flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" /> FERIT (0172 80 83 459)
                  </button>
                </a>
                <a href="tel:017655122781" className="w-full">
                  <button className="w-full py-3 bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 text-zinc-900 rounded-xl font-bold tracking-wider text-sm transition-all flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" /> ONUR (0176 55 12 27 81)
                  </button>
                </a>
              </div>
              <button 
                onClick={() => setIsPhoneModalOpen(false)}
                className="mt-6 w-full text-center text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                Abbrechen
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TikTok Coming Soon Modal */}
      <AnimatePresence>
        {isTiktokModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setIsTiktokModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[var(--dark)] border border-[var(--primary)]/30 p-8 rounded-3xl max-w-sm w-full shadow-2xl text-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-center mb-6">
                <Image
                  src={c.logoPath || "/gallery/logo.png"}
                  alt={c.logoAlt || "Logo"}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain bg-white rounded-xl p-2 shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-heading font-black text-white mb-2">In Bearbeitung!</h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Unser TikTok-Kanal wird gerade vorbereitet und ist sehr bald für Sie da. Freuen Sie sich auf spannende Vorher-Nachher Videos!
              </p>
              <button 
                onClick={() => setIsTiktokModalOpen(false)}
                className="w-full py-3 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-[#0D1B4B] rounded-xl font-bold tracking-wider text-sm transition-all"
              >
                Alles klar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
