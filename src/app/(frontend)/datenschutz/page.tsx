import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der Express Entrümpelungen.",
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 pb-24">
      <div className="container mx-auto px-6 py-24 max-w-3xl font-body">
      <div className="bg-amber-100 border-l-4 border-amber-500 text-amber-700 p-4 mb-8" role="alert">
        <p className="font-bold">Rechtlicher Hinweis</p>
        <p>Dies ist ein Template. Bitte lassen Sie diese Standard-Erklärung rechtlich von einem Anwalt prüfen, insbesondere bezüglich Tracking, Google Fonts und Kontaktformularen.</p>
      </div>

      <h1 className="text-4xl font-heading font-black mb-8">Datenschutzerklärung</h1>
      
      <div className="space-y-8 text-gray-900">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Datenschutz auf einen Blick</h2>
          <h3 className="text-xl font-bold mt-4 mb-2">Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3 className="text-xl font-bold mt-4 mb-2">Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <h3 className="text-xl font-bold mt-4 mb-2">Hinweis zur verantwortlichen Stelle</h3>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
             <strong>Ferit Uzun & Ahmet Onur Camaslioglu GbR</strong><br />
            (Geschäftsbezeichnung: Express Entrümpelungen GbR)<br />
            Friesenstraße 25<br />
            90441 Nürnberg<br /><br />
            Telefon: 0172 80 83 459 & 0176 55 12 27 81<br />
            E-Mail: info@express-entruempelungen.de
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Datenerfassung auf dieser Website</h2>
          <h3 className="text-xl font-bold mt-4 mb-2">Cookies</h3>
          <p>
            Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
          </p>
        </section>
      </div>
      </div>
    </div>
  );
}
