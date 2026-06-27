import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Express Entrümpelungen & Wohnungsauflösungen in Nürnberg.",
};

export default function ImpressumPage() {
  return (
    <div className="container mx-auto px-6 py-24 max-w-3xl font-body">
      <h1 className="text-4xl font-heading font-black mb-8">Impressum</h1>
      
      <div className="space-y-8 text-gray-700 dark:text-gray-300">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Angaben gemäß § 5 TMG</h2>
          <p>
            <strong>Express Entrümpelungen & Wohnungsauflösungen</strong><br />
            Friesenstraße 25<br />
            90441 Nürnberg
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Vertreten durch:</h2>
          <p>Geschäftsführung der Express Entrümpelungen (Inh. wird nachgereicht)</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Kontakt</h2>
          <p>
            Telefon: +49 (0) 172 80 83 459<br />
            E-Mail: info@express-entruempelungen.de
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE462122010
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline ml-1">
              https://ec.europa.eu/consumers/odr/
            </a>.<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </div>
    </div>
  );
}
