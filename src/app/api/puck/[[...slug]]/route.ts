import { NextResponse } from "next/server";
import { getPageData, savePageData } from "@/lib/puck-store";

const INITIAL_DATA = {
  content: [
    { type: "Hero", props: { id: "hero" } },
    { type: "TrustBar", props: { id: "trust" } },
    { type: "Services", props: { id: "leistungen" } },
    { type: "BeforeAfter", props: { id: "beforeafter" } },
    { type: "Timeline", props: { id: "ablauf" } },
    { type: "PriceCalculator", props: { id: "preise" } },
    { type: "Reviews", props: { id: "reviews" } },
    { type: "ServiceAreas", props: { id: "areas" } },
    { type: "FAQ", props: { id: "faq" } },
    { type: "Environment", props: { id: "environment" } },
    { type: "ContactHub", props: { id: "kontakt" } }
  ],
  root: {
    props: {
      title: "Neue Landingpage",
      seo: {
        title: "",
        description: "",
        canonical: ""
      }
    }
  }
};

export async function GET(request: Request, { params }: { params: Promise<{ slug?: string[] }> }) {
  const resolvedParams = await params;
  const slugArray = resolvedParams.slug || ["index"];
  const slug = slugArray.join("/");

  const data = await getPageData(slug);
  if (data) {
    return NextResponse.json(data);
  }

  // If no data, return initial
  return NextResponse.json(INITIAL_DATA);
}

export async function POST(request: Request, { params }: { params: Promise<{ slug?: string[] }> }) {
  const resolvedParams = await params;
  const slugArray = resolvedParams.slug || ["index"];
  const slug = slugArray.join("/");

  try {
    const body = await request.json();
    const success = await savePageData(slug, body);
    if (success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: "Failed to save content" }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
