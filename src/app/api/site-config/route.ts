import { NextResponse } from "next/server";
import { getSiteConfig, saveSiteConfig } from "@/lib/site-config";

export async function GET() {
  const config = await getSiteConfig();
  return NextResponse.json(config);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const success = await saveSiteConfig(body);
    if (success) {
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ error: "Fehler beim Speichern" }, { status: 500 });
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }
}
