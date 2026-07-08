import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Erlaubt lokale Bilder aus dem public-Ordner in verschiedenen Formaten
    formats: ["image/webp", "image/avif"],
    // Keine externe Domain-Whitelist nötig (nur lokale Bilder)
  },
};

export default nextConfig;
