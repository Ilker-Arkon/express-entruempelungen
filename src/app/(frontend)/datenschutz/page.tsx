import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der Express Entrümpelungen GbR – DSGVO-konforme Informationen zur Datenverarbeitung.",
  robots: { index: false, follow: false },
};

const h2Class = "text-xl font-bold text-gray-900 mt-8 mb-3";
const h3Class = "text-base font-semibold text-gray-800 mt-5 mb-1";
const pClass = "text-gray-700 leading-relaxed";

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 pb-24">
      <div className="container mx-auto px-6 py-24 max-w-3xl font-body">

        <h1 className="text-4xl font-heading font-black mb-2">Datenschutzerklärung</h1>
        <p className="text-gray-500 text-sm mb-10">
          Gemäß Art. 13 und 14 Datenschutz-Grundverordnung (DSGVO) – Stand: Juli 2026
        </p>

        <div className="divide-y divide-gray-100">

          {/* 1. Verantwortlicher */}
          <section className="py-6">
            <h2 className={h2Class}>1. Verantwortlicher</h2>
            <p className={pClass}>
              Verantwortlicher im Sinne der DSGVO ist:<br /><br />
              <strong>Ferit Uzun &amp; Ahmet Onur Camaslioglu GbR</strong><br />
              Geschäftsbezeichnung: Express Entrümpelungen GbR<br />
              Friesenstraße 25<br />
              90441 Nürnberg<br />
              Deutschland<br /><br />
              Telefon: <a href="tel:+491728083459" className="text-[var(--primary)] hover:underline">0172 80 83 459</a><br />
              Telefon: <a href="tel:+4917655122781" className="text-[var(--primary)] hover:underline">0176 55 12 27 81</a><br />
              E-Mail: <a href="mailto:info@express-entruempelungen.de" className="text-[var(--primary)] hover:underline">info@express-entruempelungen.de</a>
            </p>
          </section>

          {/* 2. Allgemeine Hinweise */}
          <section className="py-6">
            <h2 className={h2Class}>2. Allgemeine Hinweise zur Datenverarbeitung</h2>
            <p className={pClass}>
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln Ihre personenbezogenen
              Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO, BDSG) sowie
              dieser Datenschutzerklärung. Die Nutzung unserer Website ist in der Regel ohne Angabe
              personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten erhoben werden,
              erfolgt dies, soweit möglich, stets auf freiwilliger Basis.
            </p>
            <p className={`${pClass} mt-3`}>
              Personenbezogene Daten werden von uns nur so lange gespeichert, wie es für den jeweiligen Zweck
              erforderlich ist oder gesetzliche Aufbewahrungsfristen es vorschreiben (in der Regel 6 oder 10 Jahre
              für steuerlich relevante Daten gemäß §§ 147 AO, 257 HGB).
            </p>
          </section>

          {/* 3. Hosting – Vercel */}
          <section className="py-6">
            <h2 className={h2Class}>3. Hosting und technischer Betrieb (Vercel)</h2>
            <p className={pClass}>
              Diese Website wird gehostet bei der Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104,
              USA. Wenn Sie unsere Website aufrufen, werden technisch notwendige Daten (IP-Adresse, Datum und Uhrzeit
              des Abrufs, abgerufene Datei, Browsertyp und -version, Betriebssystem, Referrer-URL) automatisch als
              Server-Logfiles erfasst und für maximal 30 Tage gespeichert.
            </p>
            <p className={`${pClass} mt-3`}>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse) zur Sicherstellung eines stabilen und sicheren Betriebs der Website. Vercel verarbeitet
              Daten in den USA. Vercel ist unter dem EU-US Data Privacy Framework zertifiziert, sodass ein
              angemessenes Datenschutzniveau gewährleistet ist. Weitere Informationen finden Sie unter:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--primary)] hover:underline"
              >
                vercel.com/legal/privacy-policy
              </a>
            </p>
          </section>

          {/* 4. SSL */}
          <section className="py-6">
            <h2 className={h2Class}>4. Verschlüsselung (SSL/TLS)</h2>
            <p className={pClass}>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine
              SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die
              Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer
              Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns
              übermitteln, nicht von Dritten mitgelesen werden.
            </p>
          </section>

          {/* 5. Schriftarten */}
          <section className="py-6">
            <h2 className={h2Class}>5. Schriftarten (Google Fonts – lokal eingebunden)</h2>
            <p className={pClass}>
              Diese Website verwendet Schriftarten von Google Fonts. Die Schriftarten werden jedoch
              <strong> ausschließlich lokal auf unserem Server</strong> gehostet und beim Besuch unserer Website
              direkt von unserem Server an Ihren Browser übertragen. Es findet dabei <strong>keine Verbindung
              zu den Servern von Google LLC</strong> statt. Es werden keine IP-Adressen oder sonstige
              personenbezogene Daten an Google übermittelt.
            </p>
          </section>

          {/* 6. Cookies */}
          <section className="py-6">
            <h2 className={h2Class}>6. Cookies</h2>
            <p className={pClass}>
              Unsere Website verwendet ausschließlich technisch notwendige Cookies. Diese Cookies dienen dazu,
              Ihre Cookie-Präferenzentscheidung zu speichern (z. B. ob Sie unsere Cookie-Hinweis-Banner
              akzeptiert haben). Es werden keine Tracking-, Analyse- oder Werbe-Cookies gesetzt.
            </p>
            <p className={`${pClass} mt-3`}>
              Technisch notwendige Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse am technischen Betrieb der Website) verarbeitet. Sie können die Speicherung von Cookies
              in den Einstellungen Ihres Browsers jederzeit deaktivieren oder bereits gespeicherte Cookies
              löschen. Bitte beachten Sie, dass dies die Funktionsfähigkeit der Website beeinträchtigen kann.
            </p>
          </section>

          {/* 7. Kontaktformular / Rückruf */}
          <section className="py-6">
            <h2 className={h2Class}>7. Kontaktaufnahme und Rückruf-Formular</h2>
            <p className={pClass}>
              Wenn Sie uns über unser Rückruf-Formular kontaktieren, werden die von Ihnen eingegebenen Daten
              (Name und Telefonnummer) zur Bearbeitung Ihrer Anfrage und für eventuelle Anschlussfragen bei uns
              gespeichert und verarbeitet. Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.
            </p>
            <h3 className={h3Class}>Rechtsgrundlage</h3>
            <p className={pClass}>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Verarbeitung zur
              Durchführung vorvertraglicher Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
              an der Beantwortung von Kundenanfragen).
            </p>
            <h3 className={h3Class}>Speicherdauer</h3>
            <p className={pClass}>
              Die durch das Formular übermittelten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern,
              Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
              (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen –
              insbesondere Aufbewahrungsfristen – bleiben unberührt.
            </p>
          </section>

          {/* 8. WhatsApp */}
          <section className="py-6">
            <h2 className={h2Class}>8. Kontakt über WhatsApp</h2>
            <p className={pClass}>
              Auf unserer Website bieten wir die Möglichkeit, uns über WhatsApp zu kontaktieren. Anbieter
              ist die WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.
            </p>
            <p className={`${pClass} mt-3`}>
              Wenn Sie auf den WhatsApp-Link klicken und eine Konversation starten, werden die von Ihnen
              übermittelten Daten (Ihre Telefonnummer, Ihr WhatsApp-Profil und der Nachrichteninhalt) durch
              WhatsApp verarbeitet. WhatsApp ist eine eigenverantwortliche Datenverarbeitungsstelle.
              Informationen zu deren Datenschutz finden Sie unter:{" "}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--primary)] hover:underline"
              >
                www.whatsapp.com/legal/privacy-policy
              </a>
            </p>
            <p className={`${pClass} mt-3`}>
              Die Nutzung von WhatsApp zur Kontaktaufnahme erfolgt auf Grundlage Ihrer freiwilligen
              Kontaktaufnahme (Art. 6 Abs. 1 lit. b und lit. f DSGVO). Wir weisen darauf hin, dass
              eine Kontaktaufnahme auch per Telefon oder E-Mail möglich ist.
            </p>
          </section>

          {/* 9. Keine Analyse-Tools */}
          <section className="py-6">
            <h2 className={h2Class}>9. Analyse- und Tracking-Tools</h2>
            <p className={pClass}>
              Diese Website verwendet <strong>keine Analyse-, Tracking- oder Targeting-Tools</strong> wie
              Google Analytics, Facebook Pixel oder ähnliche Dienste. Es werden keine Nutzungsprofile erstellt
              und keine Daten zu Werbezwecken weitergegeben.
            </p>
          </section>

          {/* 10. Betroffenenrechte */}
          <section className="py-6">
            <h2 className={h2Class}>10. Ihre Rechte als betroffene Person</h2>
            <p className={pClass}>
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
              <li>
                <strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie können jederzeit Auskunft über die zu Ihrer
                Person gespeicherten Daten verlangen.
              </li>
              <li>
                <strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Sie haben das Recht auf Berichtigung
                unrichtiger oder unvollständiger personenbezogener Daten.
              </li>
              <li>
                <strong>Löschungsrecht (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer bei uns
                gespeicherten Daten verlangen, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </li>
              <li>
                <strong>Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie haben das Recht, die
                Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
              <li>
                <strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre personenbezogenen
                Daten in einem gängigen, maschinenlesbaren Format zu erhalten.
              </li>
              <li>
                <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie können der Verarbeitung Ihrer
                personenbezogenen Daten jederzeit widersprechen, sofern die Verarbeitung auf Grundlage von
                Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) erfolgt.
              </li>
              <li>
                <strong>Widerrufsrecht:</strong> Sofern Sie eine Einwilligung zur Verarbeitung erteilt haben,
                können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
              </li>
            </ul>
            <p className={`${pClass} mt-4`}>
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
              <a href="mailto:info@express-entruempelungen.de" className="text-[var(--primary)] hover:underline">
                info@express-entruempelungen.de
              </a>
            </p>
          </section>

          {/* 11. Beschwerderecht */}
          <section className="py-6">
            <h2 className={h2Class}>11. Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p className={pClass}>
              Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht
              Ihnen das Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde zu, wenn Sie der Ansicht
              sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
            </p>
            <p className={`${pClass} mt-3`}>
              Die zuständige Aufsichtsbehörde für Bayern ist:<br /><br />
              <strong>Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)</strong><br />
              Promenade 18<br />
              91522 Ansbach<br />
              Telefon: +49 981 180093-0<br />
              E-Mail:{" "}
              <a href="mailto:poststelle@lda.bayern.de" className="text-[var(--primary)] hover:underline">
                poststelle@lda.bayern.de
              </a><br />
              Website:{" "}
              <a
                href="https://www.lda.bayern.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--primary)] hover:underline"
              >
                www.lda.bayern.de
              </a>
            </p>
          </section>

        </div>

        <p className="text-gray-400 text-xs mt-10">Stand: Juli 2026 – Diese Datenschutzerklärung wird bei Bedarf aktualisiert.</p>
      </div>
    </div>
  );
}
