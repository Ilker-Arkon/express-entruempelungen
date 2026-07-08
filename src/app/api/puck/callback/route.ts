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

    // Call Web3Forms API from the server side to avoid CORS and adblocker issues
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
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

    const data = await response.json();

    if (response.ok && data.success) {
      return NextResponse.json({ success: true, message: "Rückruf wird vorbereitet." });
    } else {
      console.error("Web3Forms API error:", data);
      return NextResponse.json(
        { error: data.message || "Fehler bei der Übermittlung." },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Callback API proxy error:", error);
    return NextResponse.json(
      { error: "Ein unerwarteter Fehler ist aufgetreten." },
      { status: 500 }
    );
  }
}
