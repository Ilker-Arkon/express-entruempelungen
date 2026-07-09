import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Erlaubt lokale Bilder aus dem public-Ordner in verschiedenen Formaten
    formats: ["image/webp", "image/avif"],
    unoptimized: true,
  },
};

export default nextConfig;
