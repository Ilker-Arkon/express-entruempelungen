import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, time } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name und Telefonnummer sind erforderlich." },
        { status: 400 }
      );
    }

    // SMTP-Konfiguration aus Umgebungsvariablen
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "mail.express-entruempelungen.de",
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: parseInt(process.env.SMTP_PORT || "465") === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const datum = new Date().toLocaleString("de-DE", {
      timeZone: "Europe/Berlin",
    });

    await transporter.sendMail({
      from: `"Express Entrümpelungen Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER || "info@express-entruempelungen.de",
      subject: "🚨 Neue Rückrufanfrage über die Webseite",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #e53e3e; padding-bottom: 10px;">
            🚨 Neue Rückrufanfrage
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555; width: 40%;">Name:</td>
              <td style="padding: 10px; color: #1a1a1a;">${name}</td>
            </tr>
            <tr style="background: #fff;">
              <td style="padding: 10px; font-weight: bold; color: #555;">Telefonnummer:</td>
              <td style="padding: 10px; color: #1a1a1a;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555;">E-Mail (optional):</td>
              <td style="padding: 10px; color: #1a1a1a;">${email || "Nicht angegeben"}</td>
            </tr>
            <tr style="background: #fff;">
              <td style="padding: 10px; font-weight: bold; color: #555;">Wunschzeit:</td>
              <td style="padding: 10px; color: #1a1a1a;">${time || "Keine Präferenz"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555;">Eingang am:</td>
              <td style="padding: 10px; color: #1a1a1a;">${datum}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #999;">
            Diese E-Mail wurde automatisch von express-entruempelungen.de gesendet.
          </p>
        </div>
      `,
      text: `Neue Rückrufanfrage\n\nName: ${name}\nTelefonnummer: ${phone}\nE-Mail: ${email || "Nicht angegeben"}\nWunschzeit: ${time || "Keine Präferenz"}\nEingang am: ${datum}`,
    });

    return NextResponse.json({ success: true, message: "Rückruf wird vorbereitet." });
  } catch (error: any) {
    console.error("Callback API Fehler:", error);
    return NextResponse.json(
      { error: `Fehler beim Senden: ${error?.message || "Unbekannt"}` },
      { status: 500 }
    );
  }
}
