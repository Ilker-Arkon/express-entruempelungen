"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Edit, Menu, X, Phone, Mail, MapPin, CheckCircle2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const leistungenLinks = [
  { href: "/entruempelung-nuernberg", label: "Entrümpelung Nürnberg" },
  { href: "/wohnungsaufloesung-nuernberg", label: "Wohnungsauflösung Nürnberg" },
  { href: "/gewerbeaufloesung-nuernberg", label: "Gewerbeentrümpelung" },
  { href: "/nachlassaufloesung-nuernberg", label: "Nachlassauflösung" },
  { href: "/sperrmuellentsorgung-nuernberg", label: "Sperrmüllentsorgung" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
              Betriebshaftpflicht
            </span>
            <span className="flex items-center gap-1.5 text-[var(--primary)] font-bold tracking-wide">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary)]" />
              IHK Zertifiziert
            </span>
            <a href="https://maps.google.com/?q=Friesenstraße+25,+90441+Nürnberg" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[var(--primary)] transition-colors text-white/60">
              <MapPin className="w-3.5 h-3.5 text-zinc-500" />
              Friesenstraße 25, 90441 Nürnberg
            </a>
          </div>
          <div className="flex items-center gap-4 text-[var(--primary)] font-bold tracking-wider">
            <span className="flex items-center gap-1 text-white/80"><CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary)]" /> Festpreisgarantie</span>
            <span className="flex items-center gap-1 text-white/80"><CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary)]" /> Besenrein</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="w-full bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/gallery/logo.png"
              alt="Express Entrümpelungen Logo"
              width={56}
              height={56}
              className="w-14 h-14 object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-heading font-black text-xl text-[var(--dark)] dark:text-white leading-tight">
                Express
              </span>
              <span className="font-heading font-bold text-sm text-zinc-500 dark:text-zinc-400 leading-tight">
                Entrümpelungen
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 font-medium text-zinc-700 dark:text-zinc-300">
            <Link href="/" className="hover:text-[var(--primary)] transition-colors">Startseite</Link>

            {/* Dropdown for Leistungen — accessible via hover + focus */}
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
                  // Only close if focus leaves the entire dropdown
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
                className={`absolute top-full left-0 mt-1 w-64 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-xl transition-all duration-200 z-50 py-2 ${
                  dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                {leistungenLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setDropdownOpen(false)}
                    onFocus={openDropdown}
                    className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-[var(--primary)] transition-colors text-sm font-semibold focus:outline-none focus:bg-zinc-100 dark:focus:bg-zinc-800"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/#ablauf" className="hover:text-[var(--primary)] transition-colors">Ablauf</Link>
            <Link href="/#preise" className="hover:text-[var(--primary)] transition-colors">Preise</Link>
            <Link href="/#faq" className="hover:text-[var(--primary)] transition-colors">FAQ</Link>
            <Link href="/#kontakt" className="hover:text-[var(--primary)] transition-colors">Kontakt</Link>
          </nav>

           {/* CTA & Admin */}
           <div className="hidden lg:flex items-center gap-4">
             <a
               href="tel:+491728083459"
               className="flex items-center gap-2 px-5 py-2.5 bg-[var(--dark)] hover:bg-[var(--dark-secondary)] text-white rounded-full font-bold transition-all hover:shadow-lg"
             >
               <Phone className="w-4 h-4 text-[var(--primary)]" />
               0172 80 83 459
             </a>

             <Link href="/edit" className="flex items-center gap-2 px-3 py-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-md text-xs font-bold transition-colors">
               <Edit className="w-3.5 h-3.5" /> Editor
             </Link>
           </div>

           {/* Mobile Menu Toggle */}
           <button
             className="lg:hidden p-2 text-zinc-600 dark:text-zinc-300"
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             aria-expanded={mobileMenuOpen}
             aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
           >
             {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
           </button>
         </div>
       </header>

       {/* Mobile Navigation Dropdown */}
       <AnimatePresence>
         {mobileMenuOpen && (
           <motion.div
             initial={{ height: 0, opacity: 0 }}
             animate={{ height: "auto", opacity: 1 }}
             exit={{ height: 0, opacity: 0 }}
             className="lg:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden"
           >
             <div className="px-6 py-4 flex flex-col gap-3 font-medium">
               <Link href="/" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-100 dark:border-zinc-900">Startseite</Link>

               <div className="flex flex-col gap-2 pl-3 border-l-2 border-[var(--primary)] my-2">
                 <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold block mb-1">Leistungen (Seiten)</span>
                 {leistungenLinks.map((link) => (
                   <Link
                     key={link.href}
                     href={link.href}
                     onClick={() => setMobileMenuOpen(false)}
                     className="py-1 text-sm text-zinc-700 dark:text-zinc-300 hover:text-[var(--primary)]"
                   >
                     {link.label}
                   </Link>
                 ))}
               </div>

               <Link href="/#ablauf" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-100 dark:border-zinc-900">Ablauf</Link>
               <Link href="/#preise" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-100 dark:border-zinc-900">Preise</Link>
               <Link href="/#faq" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-100 dark:border-zinc-900">FAQ</Link>
               <Link href="/#kontakt" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-100 dark:border-zinc-900">Kontakt</Link>

               <a href="tel:+491728083459" className="mt-4 flex justify-center items-center gap-2 px-5 py-3 bg-[var(--primary)] text-[#0D1B4B] rounded-full font-bold">
                 <Phone className="w-5 h-5" />
                 0172 80 83 459
               </a>
               <Link href="/edit" className="flex justify-center items-center gap-2 py-2 text-zinc-500 text-sm mt-2" onClick={() => setMobileMenuOpen(false)}>
                 <Edit className="w-4 h-4" /> Baukasten öffnen
               </Link>
             </div>
           </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
