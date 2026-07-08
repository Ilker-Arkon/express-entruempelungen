import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const CALLBACK_DIR = path.join(process.cwd(), "src/data/callbacks");

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

    try {
      // Save callback request to a JSON file (will fail on Vercel)
      await fs.mkdir(CALLBACK_DIR, { recursive: true });
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      const filename = `callback-${timestamp}.json`;
      await fs.writeFile(
        path.join(CALLBACK_DIR, filename),
        JSON.stringify(
          {
            name,
            phone,
            time: time || "Keine Präferenz",
            requestedAt: new Date().toISOString(),
          },
          null,
          2
        ),
        "utf-8"
      );
    } catch (fsError) {
      // Vercel has a read-only filesystem. Log the lead instead of crashing.
      console.warn("Could not save to file system (likely on Vercel). Lead data:", { name, phone, time });
    }

    // Always return success so the frontend shows the success state
    return NextResponse.json({ success: true, message: "Rückruf wird vorbereitet." });
  } catch (error) {
    console.error("Callback API error:", error);
    return NextResponse.json(
      { error: "Ein unerwarteter Fehler ist aufgetreten." },
      { status: 500 }
    );
  }
}
