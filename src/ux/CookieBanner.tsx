"use client";

import { useState, useEffect } from "react";
import { Cookie, Check, X } from "lucide-react";

const COOKIE_CONSENT_KEY = "express-cookie-consent";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user already made a choice
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Show banner after short delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#1A1A2E] text-white border-t border-zinc-800 z-40 shadow-[0_-10px_30px_rgba(0,0,0,0.3)] animate-in slide-in-from-bottom duration-500">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-start gap-3">
          <Cookie className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
          <p className="text-sm leading-relaxed max-w-2xl">
            Wir verwenden Cookies, um Ihre Nutzererfahrung zu verbessern. Durch die weitere Nutzung dieser Website stimmen Sie der Verwendung zu.{" "}
            <a href="/datenschutz" className="text-[var(--primary)] underline underline-offset-4 hover:text-[var(--primary-dark)]">
              Mehr erfahren
            </a>
            .
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={declineCookies}
            className="px-5 py-2.5 bg-transparent border border-zinc-600 rounded-full text-sm hover:bg-zinc-800 transition-colors flex items-center gap-1.5"
          >
            <X className="w-3.5 h-3.5" />
            Ablehnen
          </button>
          <button
            onClick={acceptCookies}
            className="px-5 py-2.5 bg-[var(--primary)] text-[#0D1B4B] font-semibold rounded-full text-sm hover:bg-[var(--primary-dark)] transition-colors flex items-center gap-1.5"
          >
            <Check className="w-3.5 h-3.5" />
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
