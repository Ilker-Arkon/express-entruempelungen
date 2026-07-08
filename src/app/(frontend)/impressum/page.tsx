import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Express Entrümpelungen & Wohnungsauflösungen Nürnberg – Ferit Uzun & Ahmet Onur Camaslioglu GbR.",
  robots: { index: false, follow: false },
};

const sectionClass = "space-y-2";
const h2Class = "text-xl font-bold text-gray-900 mt-8 mb-2";
const pClass = "text-gray-700 leading-relaxed";

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 pb-24">
      <div className="container mx-auto px-6 py-24 max-w-3xl font-body">
        <h1 className="text-4xl font-heading font-black mb-2">Impressum</h1>
        <p className="text-gray-500 text-sm mb-10">Angaben gemäß § 5 TMG und § 55 Abs. 2 RStV</p>

        <div className="divide-y divide-gray-100">

          {/* Anbieter */}
          <section className={`${sectionClass} pb-6`}>
            <h2 className={h2Class}>Anbieter und Verantwortlicher</h2>
            <p className={pClass}>
              <strong>Ferit Uzun &amp; Ahmet Onur Camaslioglu GbR</strong><br />
              Geschäftsbezeichnung: Express Entrümpelungen GbR<br />
              Friesenstraße 25<br />
              90441 Nürnberg<br />
              Deutschland
            </p>
          </section>

          {/* Vertreten durch */}
          <section className={`${sectionClass} py-6`}>
            <h2 className={h2Class}>Vertreten durch die Gesellschafter</h2>
            <p className={pClass}>
              Ferit Uzun<br />
              Ahmet Onur Camaslioglu
            </p>
          </section>

          {/* Kontakt */}
          <section className={`${sectionClass} py-6`}>
            <h2 className={h2Class}>Kontakt</h2>
            <p className={pClass}>
              Telefon: <a href="tel:+491728083459" className="text-[var(--primary)] hover:underline">0172 80 83 459</a><br />
              Telefon: <a href="tel:+4917655122781" className="text-[var(--primary)] hover:underline">0176 55 12 27 81</a><br />
              E-Mail: <a href="mailto:info@express-entruempelungen.de" className="text-[var(--primary)] hover:underline">info@express-entruempelungen.de</a><br />
              Website: <a href="https://www.express-entruempelungen.de" className="text-[var(--primary)] hover:underline">www.express-entruempelungen.de</a>
            </p>
          </section>

          {/* USt-ID */}
          <section className={`${sectionClass} py-6`}>
            <h2 className={h2Class}>Umsatzsteuer-Identifikationsnummer</h2>
            <p className={pClass}>
              Gemäß § 27a Umsatzsteuergesetz (UStG):<br />
              <strong>DE462122010</strong>
            </p>
          </section>

          {/* Berufsrechtliche Angaben */}
          <section className={`${sectionClass} py-6`}>
            <h2 className={h2Class}>Berufsrechtliche Angaben</h2>
            <p className={pClass}>
              Die Express Entrümpelungen GbR ist ein gewerbliches Unternehmen im Bereich Entrümpelung,
              Wohnungsauflösung und Haushaltsauflösung. Für diese Tätigkeit bestehen keine besonderen
              berufsrechtlichen Regelungen.
            </p>
          </section>

          {/* Haftung für Inhalte */}
          <section className={`${sectionClass} py-6`}>
            <h2 className={h2Class}>Haftung für Inhalte</h2>
            <p className={pClass}>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder
              Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
              diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
              möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
              entfernen.
            </p>
          </section>

          {/* Haftung für Links */}
          <section className={`${sectionClass} py-6`}>
            <h2 className={h2Class}>Haftung für Links</h2>
            <p className={pClass}>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
              verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
              Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          {/* Urheberrecht */}
          <section className={`${sectionClass} py-6`}>
            <h2 className={h2Class}>Urheberrecht</h2>
            <p className={pClass}>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
              beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
              Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>

          {/* EU-Streitschlichtung */}
          <section className={`${sectionClass} py-6`}>
            <h2 className={h2Class}>EU-Streitschlichtung</h2>
            <p className={pClass}>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--primary)] hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          {/* Verbraucherstreitbeilegung */}
          <section className={`${sectionClass} py-6`}>
            <h2 className={h2Class}>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p className={pClass}>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

        </div>

        <p className="text-gray-400 text-xs mt-10">Stand: Juli 2026</p>
      </div>
    </div>
  );
}
