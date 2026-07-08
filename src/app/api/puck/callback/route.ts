import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, time } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name und Telefonnummer sind erforderlich." },
        { status: 400 }
      );
    }

    // Server-seitiger Proxy zu Web3Forms — umgeht Adblocker & CORS
    // Wichtig: User-Agent muss gesetzt sein, sonst blockt Web3Forms die Server-IP als Bot
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "User-Agent": "Express-Entruempelungen/1.0"
      },
      body: JSON.stringify({
        access_key: "6e09b2ca-c1f9-42a5-9c6f-197b60f3ff43",
        subject: "🚨 Neue Rückrufanfrage über die Webseite",
        from_name: "Express Entrümpelungen",
        Name: name,
        Telefonnummer: phone,
        Wunschzeit: time || "Keine Präferenz",
        "Datum/Zeitpunkt": new Date().toLocaleString("de-DE")
      })
    });

    const dataText = await response.text();
    let data;
    try {
      data = JSON.parse(dataText);
    } catch {
      console.error("Web3Forms returned non-JSON response:", dataText);
      return NextResponse.json(
        { error: `E-Mail-Dienst hat keine gültige Antwort gesendet (Status ${response.status}).` },
        { status: response.status }
      );
    }

    if (response.ok && data.success) {
      return NextResponse.json({ success: true, message: "Rückruf wird vorbereitet." });
    } else {
      console.error("Web3Forms API error:", data);
      return NextResponse.json(
        { error: data.message || "Fehler bei der Übermittlung durch Web3Forms." },
        { status: response.status }
      );
    }
  } catch (error: any) {
    console.error("Callback API proxy error:", error);
    return NextResponse.json(
      { error: `Server-Fehler: ${error?.message || "Unbekannt"}` },
      { status: 500 }
    );
  }
}
