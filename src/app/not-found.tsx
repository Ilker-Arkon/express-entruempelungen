import Link from "next/link";
import { Header } from "@/ux/Header";
import { Footer } from "@/ux/Footer";
import { Home, Search, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center min-h-[70vh] bg-zinc-50 dark:bg-[#1A1A2E]">
        <div className="container mx-auto px-6 py-24 text-center max-w-2xl">
          {/* 404 Illustration */}
          <div className="mb-8">
            <span className="text-9xl font-heading font-black text-[var(--primary)] opacity-30 select-none">
              404
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Seite nicht gefunden
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 font-body leading-relaxed">
            Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
            Möglicherweise haben Sie sich vertippt oder der Link ist veraltet.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-[#0D1B4B] rounded-full font-bold transition-colors shadow-button"
            >
              <Home className="w-5 h-5" />
              Zur Startseite
            </Link>

            <Link
              href="/#leistungen"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 rounded-full font-bold hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
            >
              <Search className="w-5 h-5" />
              Unsere Leistungen
            </Link>

            <a
              href="tel:+491728083459"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--dark)] hover:bg-[var(--dark-secondary)] text-white rounded-full font-bold transition-colors"
            >
              <Phone className="w-5 h-5" />
              Jetzt anrufen
            </a>
          </div>

          {/* Quick Links */}
          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4 font-body">
              Beliebte Seiten:
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <Link
                href="/entruempelung-nuernberg"
                className="text-[var(--primary)] hover:underline underline-offset-4"
              >
                Entrümpelung Nürnberg
              </Link>
              <span className="text-zinc-400">·</span>
              <Link
                href="/wohnungsaufloesung-nuernberg"
                className="text-[var(--primary)] hover:underline underline-offset-4"
              >
                Wohnungsauflösung
              </Link>
              <span className="text-zinc-400">·</span>
              <Link
                href="/gewerbeaufloesung-nuernberg"
                className="text-[var(--primary)] hover:underline underline-offset-4"
              >
                Gewerbeentrümpelung
              </Link>
              <span className="text-zinc-400">·</span>
              <Link
                href="/sperrmuellentsorgung-nuernberg"
                className="text-[var(--primary)] hover:underline underline-offset-4"
              >
                Sperrmüllentsorgung
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
