import { PuckRenderer } from "@/ux/PuckRenderer";
import { getPageData } from "@/lib/puck-store";

export default async function Home() {
  const data = await getPageData("index");

  if (!data) {
    return (
      <div className="flex h-screen items-center justify-center bg-zinc-50 font-sans">
        <p className="text-lg text-zinc-500">
          Noch kein Inhalt vorhanden. Öffnen Sie{" "}
          <a href="/edit" className="text-emerald-600 underline font-semibold">
            /edit
          </a>
          , um den Baukasten zu starten.
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans">
      <div className="w-full">
        <PuckRenderer data={data} />
      </div>
    </main>
  );
}
