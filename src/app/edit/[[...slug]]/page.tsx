"use client";

import { useEffect, useState } from "react";
import { Puck } from "@puckeditor/core";
import "@puckeditor/core/dist/index.css";
import { config } from "@/puck.config";

import { use } from "react";

export default function EditPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const resolvedParams = use(params);
  const slugArray = resolvedParams.slug || ["index"];
  const slug = slugArray.join("/");
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/puck/${slug}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [slug]);

  if (!data) {
    return (
      <div className="flex h-screen items-center justify-center bg-zinc-950 text-white font-sans">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-lg">Baukasten wird geladen...</p>
        </div>
      </div>
    );
  }

  const handleSave = async (newData: any) => {
    try {
      const response = await fetch(`/api/puck/${slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      });
      if (response.ok) {
        alert("Änderungen erfolgreich gespeichert und veröffentlicht!");
      } else {
        alert("Fehler beim Speichern der Änderungen.");
      }
    } catch (err) {
      alert("Netzwerkfehler beim Speichern.");
    }
  };

  return (
    <div className="h-screen w-screen bg-white">
      <Puck
        config={config}
        data={data}
        onPublish={handleSave}
        headerTitle={`Entrümpelung Webseite - Editor (${slug})`}
      />
    </div>
  );
}
