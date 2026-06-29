"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Save, ArrowLeft, Plus, Trash2 } from "lucide-react";
import type { SiteConfig } from "@/lib/site-config-types";

type ArrayField<T> = T[];

export default function SiteConfigPage() {
  const router = useRouter();
  const [config, setConfig] = useState<SiteConfig | null>(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    fetch("/api/site-config")
      .then((res) => res.json())
      .then((data) => setConfig(data));
  }, []);

  const update = <K extends keyof SiteConfig>(key: K, value: SiteConfig[K]) => {
    setConfig((prev) => (prev ? { ...prev, [key]: value } : prev));
  };

  const addArrayItem = <K extends keyof SiteConfig>(key: K, defaultItem: any) => {
    setConfig((prev) => {
      if (!prev) return prev;
      const arr = prev[key] as any[];
      return { ...prev, [key]: [...arr, defaultItem] };
    });
  };

  const removeArrayItem = <K extends keyof SiteConfig>(key: K, index: number) => {
    setConfig((prev) => {
      if (!prev) return prev;
      const arr = [...(prev[key] as any[])];
      arr.splice(index, 1);
      return { ...prev, [key]: arr };
    });
  };

  const updateArrayItem = <K extends keyof SiteConfig>(
    key: K,
    index: number,
    field: string,
    value: string
  ) => {
    setConfig((prev) => {
      if (!prev) return prev;
      const arr = [...(prev[key] as any[])];
      arr[index] = { ...arr[index], [field]: value };
      return { ...prev, [key]: arr };
    });
  };

  const handleSave = async () => {
    if (!config) return;
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch("/api/site-config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      });
      if (res.ok) {
        setMessage({ type: "success", text: "Einstellungen gespeichert!" });
      } else {
        setMessage({ type: "error", text: "Fehler beim Speichern." });
      }
    } catch {
      setMessage({ type: "error", text: "Netzwerkfehler." });
    } finally {
      setSaving(false);
    }
  };

  if (!config) {
    return (
      <div className="flex h-screen items-center justify-center bg-zinc-950 text-white">
        <p>Lade Einstellungen...</p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[var(--primary)]";
  const labelClass = "block text-sm font-medium text-zinc-300 mb-1";
  const sectionClass = "bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4";

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-zinc-950/80 backdrop-blur border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push("/edit")}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Zurück zum Editor
          </button>
          <h1 className="text-xl font-bold">Seiten-Einstellungen</h1>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 px-5 py-2.5 bg-[var(--primary)] text-[#0D1B4B] rounded-lg font-bold hover:bg-amber-400 transition-colors disabled:opacity-50"
        >
          <Save className="w-4 h-4" />
          {saving ? "Speichert..." : "Speichern"}
        </button>
      </div>

      {message && (
        <div
          className={`mx-6 mt-4 p-3 rounded-lg text-sm font-medium ${
            message.type === "success"
              ? "bg-green-900/50 text-green-300 border border-green-700"
              : "bg-red-900/50 text-red-300 border border-red-700"
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="max-w-3xl mx-auto p-6 space-y-6 pb-24">
        {/* Unternehmen */}
        <div className={sectionClass}>
          <h2 className="text-lg font-bold text-[var(--primary)]">Unternehmen</h2>
          <div>
            <label className={labelClass}>Firmenname</label>
            <input className={inputClass} value={config.companyName} onChange={(e) => update("companyName", e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Untertitel</label>
            <input className={inputClass} value={config.companySubtitle} onChange={(e) => update("companySubtitle", e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Beschreibung (Footer)</label>
            <textarea className={inputClass} rows={3} value={config.companyDescription} onChange={(e) => update("companyDescription", e.target.value)} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Logo-Pfad</label>
              <input className={inputClass} value={config.logoPath} onChange={(e) => update("logoPath", e.target.value)} />
            </div>
            <div>
              <label className={labelClass}>Logo Alt-Text</label>
              <input className={inputClass} value={config.logoAlt} onChange={(e) => update("logoAlt", e.target.value)} />
            </div>
          </div>
        </div>

        {/* Kontakt & Adresse */}
        <div className={sectionClass}>
          <h2 className="text-lg font-bold text-[var(--primary)]">Kontakt & Adresse</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Telefon (primär, Format: +49172...)</label>
              <input className={inputClass} value={config.phonePrimary} onChange={(e) => update("phonePrimary", e.target.value)} />
            </div>
            <div>
              <label className={labelClass}>Telefon-Anzeige (z.B. 0172 80 83 459)</label>
              <input className={inputClass} value={config.phonePrimaryDisplay} onChange={(e) => update("phonePrimaryDisplay", e.target.value)} />
            </div>
          </div>
          <div>
            <label className={labelClass}>Telefon (sekundär)</label>
            <input className={inputClass} value={config.phoneSecondary} onChange={(e) => update("phoneSecondary", e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>E-Mail</label>
            <input className={inputClass} value={config.email} onChange={(e) => update("email", e.target.value)} />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <label className={labelClass}>Straße</label>
              <input className={inputClass} value={config.street} onChange={(e) => update("street", e.target.value)} />
            </div>
            <div>
              <label className={labelClass}>PLZ</label>
              <input className={inputClass} value={config.postalCode} onChange={(e) => update("postalCode", e.target.value)} />
            </div>
          </div>
          <div>
            <label className={labelClass}>Stadt</label>
            <input className={inputClass} value={config.city} onChange={(e) => update("city", e.target.value)} />
          </div>
        </div>

        {/* Top Bar Badges */}
        <div className={sectionClass}>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-[var(--primary)]">Top-Bar Badges</h2>
            <button
              onClick={() => addArrayItem("topBarBadges", { text: "" })}
              className="flex items-center gap-1 text-xs text-[var(--primary)] hover:underline"
            >
              <Plus className="w-3 h-3" /> Badge
            </button>
          </div>
          {config.topBarBadges.map((badge, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                className={inputClass}
                value={badge.text}
                onChange={(e) => updateArrayItem("topBarBadges", i, "text", e.target.value)}
                placeholder="Badge-Text"
              />
              <button
                onClick={() => removeArrayItem("topBarBadges", i)}
                className="text-red-400 hover:text-red-300 p-1"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Haupt-Navigation */}
        <div className={sectionClass}>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-[var(--primary)]">Haupt-Navigation</h2>
            <button
              onClick={() => addArrayItem("mainNavLinks", { href: "", label: "" })}
              className="flex items-center gap-1 text-xs text-[var(--primary)] hover:underline"
            >
              <Plus className="w-3 h-3" /> Link
            </button>
          </div>
          {config.mainNavLinks.map((link, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                className={inputClass}
                value={link.label}
                onChange={(e) => updateArrayItem("mainNavLinks", i, "label", e.target.value)}
                placeholder="Label (z.B. Startseite)"
              />
              <input
                className={inputClass}
                value={link.href}
                onChange={(e) => updateArrayItem("mainNavLinks", i, "href", e.target.value)}
                placeholder="URL (z.B. /)"
              />
              <button
                onClick={() => removeArrayItem("mainNavLinks", i)}
                className="text-red-400 hover:text-red-300 p-1 shrink-0"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Service-Dropdown */}
        <div className={sectionClass}>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-[var(--primary)]">Leistungen-Dropdown</h2>
            <button
              onClick={() => addArrayItem("serviceDropdownLinks", { href: "", label: "" })}
              className="flex items-center gap-1 text-xs text-[var(--primary)] hover:underline"
            >
              <Plus className="w-3 h-3" /> Link
            </button>
          </div>
          {config.serviceDropdownLinks.map((link, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                className={inputClass}
                value={link.label}
                onChange={(e) => updateArrayItem("serviceDropdownLinks", i, "label", e.target.value)}
                placeholder="Label"
              />
              <input
                className={inputClass}
                value={link.href}
                onChange={(e) => updateArrayItem("serviceDropdownLinks", i, "href", e.target.value)}
                placeholder="URL"
              />
              <button
                onClick={() => removeArrayItem("serviceDropdownLinks", i)}
                className="text-red-400 hover:text-red-300 p-1 shrink-0"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Öffnungszeiten */}
        <div className={sectionClass}>
          <h2 className="text-lg font-bold text-[var(--primary)]">Erreichbarkeit</h2>
          <div>
            <label className={labelClass}>Öffnungszeiten</label>
            <input className={inputClass} value={config.openingHoursText} onChange={(e) => update("openingHoursText", e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Notdienst-Hinweis</label>
            <input className={inputClass} value={config.openingHoursNote} onChange={(e) => update("openingHoursNote", e.target.value)} />
          </div>
        </div>

        {/* WhatsApp */}
        <div className={sectionClass}>
          <h2 className="text-lg font-bold text-[var(--primary)]">WhatsApp</h2>
          <div>
            <label className={labelClass}>WhatsApp-Nummer (nur Ziffern)</label>
            <input className={inputClass} value={config.whatsappNumber} onChange={(e) => update("whatsappNumber", e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Standard-Nachricht</label>
            <textarea className={inputClass} rows={2} value={config.whatsappDefaultMessage} onChange={(e) => update("whatsappDefaultMessage", e.target.value)} />
          </div>
        </div>

        {/* Schema.org & SEO */}
        <div className={sectionClass}>
          <h2 className="text-lg font-bold text-[var(--primary)]">Schema.org & SEO</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Geo Latitude</label>
              <input className={inputClass} type="number" step="0.0001" value={config.schemaGeoLat} onChange={(e) => update("schemaGeoLat", parseFloat(e.target.value) || 0)} />
            </div>
            <div>
              <label className={labelClass}>Geo Longitude</label>
              <input className={inputClass} type="number" step="0.0001" value={config.schemaGeoLng} onChange={(e) => update("schemaGeoLng", parseFloat(e.target.value) || 0)} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Price Range (Schema.org)</label>
              <input className={inputClass} value={config.schemaPriceRange} onChange={(e) => update("schemaPriceRange", e.target.value)} />
            </div>
            <div>
              <label className={labelClass}>USt-IdNr.</label>
              <input className={inputClass} value={config.vatId} onChange={(e) => update("vatId", e.target.value)} />
            </div>
          </div>
          <div>
            <label className={labelClass}>Copyright-Text (Footer)</label>
            <input className={inputClass} value={config.copyrightText} onChange={(e) => update("copyrightText", e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>SEO-Titel (Startseite)</label>
            <input className={inputClass} value={config.seoTitle} onChange={(e) => update("seoTitle", e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>SEO-Beschreibung</label>
            <textarea className={inputClass} rows={2} value={config.seoDescription} onChange={(e) => update("seoDescription", e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>OG-Titel</label>
            <input className={inputClass} value={config.seoOgTitle} onChange={(e) => update("seoOgTitle", e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>OG-Beschreibung</label>
            <textarea className={inputClass} rows={2} value={config.seoOgDescription} onChange={(e) => update("seoOgDescription", e.target.value)} />
          </div>
        </div>

        {/* Save button bottom */}
        <button
          onClick={handleSave}
          disabled={saving}
          className="w-full py-4 bg-[var(--primary)] text-[#0D1B4B] rounded-xl font-bold text-lg hover:bg-amber-400 transition-colors disabled:opacity-50"
        >
          {saving ? "Wird gespeichert..." : "Alle Einstellungen speichern"}
        </button>
      </div>
    </div>
  );
}
