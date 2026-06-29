import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PuckRenderer } from "@/ux/PuckRenderer";
import { getPageData, getAllPages } from "@/lib/puck-store";

export async function generateStaticParams() {
  const pages = await getAllPages();
  return pages
    .filter((slug) => slug !== "index")
    .map((slug) => ({
      slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const data = await getPageData(resolvedParams.slug);
  
  if (!data) {
    return {
      title: "Seite nicht gefunden",
    };
  }

  const seo = data.root?.props?.seo || {};

  return {
    title: seo.title || data.root?.props?.title || resolvedParams.slug,
    description: seo.description || "",
    alternates: seo.canonical ? {
      canonical: seo.canonical,
    } : undefined,
  };
}

export default async function LandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = await getPageData(resolvedParams.slug);

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans">
      <div className="w-full">
        <PuckRenderer data={data} />
      </div>
    </main>
  );
}
