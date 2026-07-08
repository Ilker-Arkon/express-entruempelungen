import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB – Allgemeine Geschäftsbedingungen",
  description: "Allgemeine Geschäftsbedingungen der Express Entrümpelungen GbR – Nürnberg.",
  robots: { index: false, follow: false },
};

const h2Class = "text-xl font-bold text-gray-900 mt-8 mb-3";
const h3Class = "text-base font-semibold text-gray-800 mt-5 mb-1";
const pClass = "text-gray-700 leading-relaxed";

export default function AgbPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 pb-24">
      <div className="container mx-auto px-6 py-24 max-w-3xl font-body">

        <h1 className="text-4xl font-heading font-black mb-2">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>
        <p className="text-gray-500 text-sm mb-10">
          der Ferit Uzun &amp; Ahmet Onur Camaslioglu GbR (Express Entrümpelungen GbR) – Stand: Juli 2025
        </p>

        <div className="divide-y divide-gray-100">

          {/* § 1 Geltungsbereich */}
          <section className="py-6">
            <h2 className={h2Class}>§ 1 Geltungsbereich und Vertragspartner</h2>
            <p className={pClass}>
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, die zwischen der
            </p>
            <p className={`${pClass} mt-3 pl-4 border-l-2 border-[var(--primary)]`}>
              <strong>Ferit Uzun &amp; Ahmet Onur Camaslioglu GbR</strong><br />
              Geschäftsbezeichnung: Express Entrümpelungen GbR<br />
              Friesenstraße 25, 90441 Nürnberg<br />
              (nachfolgend „Auftragnehmer")
            </p>
            <p className={`${pClass} mt-3`}>
              und ihren Auftraggebern (nachfolgend „Auftraggeber") im Bereich Entrümpelung,
              Wohnungsauflösung, Haushaltsauflösung, Nachlassauflösung, Gewerbeauflösung und
              Sperrmüllentsorgung geschlossen werden. Abweichende oder ergänzende Bedingungen des
              Auftraggebers werden nur dann Vertragsbestandteil, wenn der Auftragnehmer diesen ausdrücklich
              schriftlich zugestimmt hat.
            </p>
          </section>

          {/* § 2 Vertragsschluss */}
          <section className="py-6">
            <h2 className={h2Class}>§ 2 Vertragsschluss und Angebot</h2>
            <p className={pClass}>
              Ein Vertrag kommt zustande, wenn der Auftragnehmer dem Auftraggeber nach Besichtigung des
              Objektes ein schriftliches oder mündliches Festpreisangebot unterbreitet und der Auftraggeber
              dieses Angebot annimmt. Die Besichtigung ist für den Auftraggeber kostenlos und
              unverbindlich.
            </p>
            <p className={`${pClass} mt-3`}>
              Angebote des Auftragnehmers sind grundsätzlich auf Basis des bei der Besichtigung vorgefundenen
              Zustands des Objekts kalkuliert. Wesentliche Abweichungen vom besichtigten Zustand berechtigen
              den Auftragnehmer zu einer angemessenen Anpassung des vereinbarten Preises.
            </p>
          </section>

          {/* § 3 Leistungsumfang */}
          <section className="py-6">
            <h2 className={h2Class}>§ 3 Leistungsumfang</h2>
            <p className={pClass}>
              Der Umfang der Leistungen ergibt sich aus dem schriftlichen oder mündlich vereinbarten Auftrag
              sowie dem zugrundeliegenden Angebot. Sofern nicht ausdrücklich anders vereinbart, umfassen die
              Leistungen des Auftragnehmers:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
              <li>Fachgerechtes Räumen der vereinbarten Räumlichkeiten</li>
              <li>Sortierung und Abtransport der Gegenstände</li>
              <li>Ordnungsgemäße und umweltgerechte Entsorgung der anfallenden Abfälle</li>
              <li>Übergabe der Räumlichkeit in besenreinem Zustand (sofern vereinbart)</li>
            </ul>
            <p className={`${pClass} mt-3`}>
              Nicht im Leistungsumfang enthalten sind, sofern nicht ausdrücklich schriftlich vereinbart:
              Renovierungsarbeiten, Malerarbeiten, Demontage von Einbauten, Gefahrstoffentsorgung (z. B.
              Asbest) sowie die Entsorgung von Sondermüll.
            </p>
          </section>

          {/* § 4 Preise und Zahlung */}
          <section className="py-6">
            <h2 className={h2Class}>§ 4 Preise und Zahlung</h2>
            <h3 className={h3Class}>Festpreis</h3>
            <p className={pClass}>
              Alle angebotenen Preise sind Festpreise (Bruttopreise) und schließen die gesetzliche
              Umsatzsteuer sowie die anfallenden Entsorgungskosten ein, sofern nicht ausdrücklich anders
              vereinbart.
            </p>
            <h3 className={h3Class}>Fälligkeit</h3>
            <p className={pClass}>
              Die Vergütung ist unmittelbar nach Erbringung der Leistung und Übergabe des geräumten Objektes
              zur Zahlung fällig, sofern nichts anderes schriftlich vereinbart wurde.
            </p>
            <h3 className={h3Class}>Zahlungsmittel</h3>
            <p className={pClass}>
              Die Zahlung erfolgt in bar oder per Überweisung. Weitere Zahlungsmodalitäten können
              individuell vereinbart werden.
            </p>
            <h3 className={h3Class}>Verzug</h3>
            <p className={pClass}>
              Bei Zahlungsverzug ist der Auftragnehmer berechtigt, Verzugszinsen in Höhe von 5 Prozentpunkten
              über dem jeweiligen Basiszinssatz (§ 247 BGB) zu berechnen. Das Recht auf Geltendmachung eines
              höheren Schadens bleibt unberührt.
            </p>
          </section>

          {/* § 5 Mitwirkungspflichten */}
          <section className="py-6">
            <h2 className={h2Class}>§ 5 Mitwirkungspflichten des Auftraggebers</h2>
            <p className={pClass}>
              Der Auftraggeber ist verpflichtet, dem Auftragnehmer und dessen Mitarbeitern rechtzeitig
              Zugang zu den zu räumenden Räumlichkeiten zu gewähren und dafür Sorge zu tragen, dass die
              Arbeit ungehindert durchgeführt werden kann. Der Auftraggeber hat vor Beginn der Arbeiten
              alle Wertgegenstände, Dokumente und persönlichen Gegenstände, die nicht entsorgt werden sollen,
              zu sichern und zu kennzeichnen oder zu entfernen.
            </p>
            <p className={`${pClass} mt-3`}>
              Der Auftraggeber hat den Auftragnehmer vor Auftragsbeginn über bekannte Gefahren im Objekt
              (z. B. Schadstoffbelastungen, Schimmel, instabile Böden) zu informieren. Bei schuldhafter
              Verletzung dieser Pflicht haftet der Auftraggeber für daraus entstehende Schäden.
            </p>
          </section>

          {/* § 6 Haftung */}
          <section className="py-6">
            <h2 className={h2Class}>§ 6 Haftung</h2>
            <p className={pClass}>
              Der Auftragnehmer haftet für Schäden, die von ihm oder seinen Erfüllungsgehilfen schuldhaft
              verursacht werden. Die Haftung für leichte Fahrlässigkeit ist auf vorhersehbare, vertragstypische
              Schäden begrenzt, es sei denn, es handelt sich um Verletzungen von Leben, Körper oder Gesundheit.
            </p>
            <p className={`${pClass} mt-3`}>
              Der Auftragnehmer haftet nicht für Schäden an Gegenständen, die der Auftraggeber ausdrücklich
              zur Entsorgung freigegeben hat. Eine Haftung für bereits vor Beginn der Arbeiten vorhandene
              Schäden an Gebäude oder Inventar ist ausgeschlossen.
            </p>
            <p className={`${pClass} mt-3`}>
              Ansprüche wegen Beschädigung oder Verlustes von Gegenständen sind spätestens innerhalb von
              5 Werktagen nach Abschluss der Arbeiten schriftlich beim Auftragnehmer zu melden. Später
              gemeldete Ansprüche sind ausgeschlossen.
            </p>
          </section>

          {/* § 7 Kündigung und Stornierung */}
          <section className="py-6">
            <h2 className={h2Class}>§ 7 Kündigung und Stornierung</h2>
            <p className={pClass}>
              Eine Stornierung durch den Auftraggeber ist bis 48 Stunden vor dem vereinbarten
              Ausführungstermin kostenlos möglich. Bei späterer Stornierung ist der Auftragnehmer
              berechtigt, eine Stornogebühr von bis zu 30 % des vereinbarten Auftragswertes zu berechnen,
              sofern keine anderweitige schriftliche Vereinbarung besteht.
            </p>
            <p className={`${pClass} mt-3`}>
              Bei einem Rücktritt durch den Auftraggeber nach Beginn der Leistungen ist der bislang
              erbrachte Anteil der Leistungen vollständig zu vergüten.
            </p>
            <p className={`${pClass} mt-3`}>
              Der Auftragnehmer ist berechtigt, den Auftrag aus wichtigem Grund fristlos zu kündigen,
              insbesondere wenn die Mitwirkungspflichten des Auftraggebers schuldhaft nicht erfüllt werden.
            </p>
          </section>

          {/* § 8 Eigentum an Gegenständen */}
          <section className="py-6">
            <h2 className={h2Class}>§ 8 Eigentumsübertragung und Verwertung</h2>
            <p className={pClass}>
              Mit Auftragserteilung bestätigt der Auftraggeber, dass er berechtigt ist, über die zur
              Entsorgung freigegebenen Gegenstände zu verfügen, oder dass er die entsprechende Vollmacht
              der berechtigten Person besitzt. Der Auftraggeber überträgt dem Auftragnehmer mit Beginn
              der Arbeiten das Eigentum an den zur Entsorgung freigegebenen Gegenständen.
            </p>
            <p className={`${pClass} mt-3`}>
              Der Auftragnehmer ist berechtigt, brauchbare Gegenstände zu verwerten (z. B. durch
              Weiterverkauf oder Spende), sofern dies nicht ausdrücklich ausgeschlossen wurde. Eine
              Anrechnung des Verwertungserlöses auf den Auftragswert erfolgt nur bei ausdrücklicher
              schriftlicher Vereinbarung.
            </p>
          </section>

          {/* § 9 Datenschutz */}
          <section className="py-6">
            <h2 className={h2Class}>§ 9 Datenschutz</h2>
            <p className={pClass}>
              Die im Rahmen der Auftragsabwicklung erhobenen personenbezogenen Daten des Auftraggebers
              werden ausschließlich zur Vertragserfüllung und zur Kommunikation verarbeitet und gemäß den
              gesetzlichen Vorschriften (DSGVO, BDSG) behandelt. Näheres entnehmen Sie bitte unserer{" "}
              <a href="/datenschutz" className="text-[var(--primary)] hover:underline">
                Datenschutzerklärung
              </a>.
            </p>
          </section>

          {/* § 10 Schlussbestimmungen */}
          <section className="py-6">
            <h2 className={h2Class}>§ 10 Schlussbestimmungen</h2>
            <h3 className={h3Class}>Anwendbares Recht</h3>
            <p className={pClass}>
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).
            </p>
            <h3 className={h3Class}>Gerichtsstand</h3>
            <p className={pClass}>
              Gerichtsstand für alle Streitigkeiten aus diesem Vertragsverhältnis ist Nürnberg, sofern der
              Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches
              Sondervermögen ist. Bei Verbrauchern gilt der gesetzliche Gerichtsstand.
            </p>
            <h3 className={h3Class}>Salvatorische Klausel</h3>
            <p className={pClass}>
              Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein oder werden, so
              wird dadurch die Wirksamkeit der übrigen Bestimmungen nicht berührt. Die unwirksame Bestimmung
              ist durch eine wirksame zu ersetzen, die dem wirtschaftlichen Zweck der unwirksamen
              Bestimmung am nächsten kommt.
            </p>
            <h3 className={h3Class}>Schriftformklausel</h3>
            <p className={pClass}>
              Nebenabreden, Änderungen und Ergänzungen dieses Vertrages bedürfen zu ihrer Wirksamkeit der
              Schriftform. Dies gilt auch für die Aufhebung dieser Klausel selbst.
            </p>
          </section>

        </div>

        <p className="text-gray-400 text-xs mt-10">
          Stand: Juli 2025 – Diese AGB werden bei Bedarf aktualisiert und ersetzen alle vorherigen Fassungen.
        </p>
      </div>
    </div>
  );
}
