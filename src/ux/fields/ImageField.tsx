"use client";

import { useState, useRef } from "react";
import { Upload, X, ImageIcon, Loader2 } from "lucide-react";

interface ImageFieldProps {
  field: any;
  name: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
}

export function ImageField({ value, onChange, readOnly }: ImageFieldProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Upload fehlgeschlagen");
        return;
      }

      onChange(data.url);
    } catch {
      setError("Netzwerkfehler beim Upload");
    } finally {
      setUploading(false);
      // Reset input so the same file can be re-selected
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleRemove = () => {
    onChange("");
    setError(null);
  };

  const previewSrc = value
    ? value.startsWith("http")
      ? value
      : value
    : null;

  return (
    <div className="flex flex-col gap-2" data-puck-field>
      <label className="text-sm font-medium text-zinc-700">Bild</label>

      {/* Preview */}
      {previewSrc && !uploading && (
        <div className="relative w-full h-40 rounded-lg overflow-hidden border border-zinc-200 bg-zinc-100">
          <img
            src={previewSrc}
            alt="Vorschau"
            className="w-full h-full object-cover"
          />
          {!readOnly && (
            <button
              onClick={handleRemove}
              className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full hover:bg-red-600 transition-colors"
              type="button"
              title="Bild entfernen"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      {/* Empty placeholder */}
      {!previewSrc && !uploading && (
        <div className="w-full h-40 rounded-lg border-2 border-dashed border-zinc-300 flex items-center justify-center text-zinc-400 bg-zinc-50">
          <ImageIcon className="w-8 h-8" />
        </div>
      )}

      {/* Uploading spinner */}
      {uploading && (
        <div className="w-full h-40 rounded-lg border border-zinc-200 bg-zinc-50 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-[var(--primary)]" />
        </div>
      )}

      {/* Error message */}
      {error && <p className="text-red-500 text-xs">{error}</p>}

      {/* Current path display */}
      {value && !uploading && (
        <p className="text-xs text-zinc-400 truncate">{value}</p>
      )}

      {/* Upload button */}
      {!readOnly && (
        <>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/avif"
            onChange={handleFileSelect}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="flex items-center justify-center gap-2 px-3 py-2 bg-zinc-800 text-white rounded-md text-sm hover:bg-zinc-700 disabled:opacity-50 transition-colors"
          >
            <Upload className="w-4 h-4" />
            {value ? "Bild ersetzen" : "Bild hochladen"}
          </button>
        </>
      )}
    </div>
  );
}
