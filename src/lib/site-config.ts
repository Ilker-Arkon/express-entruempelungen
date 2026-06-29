import fs from "fs/promises";
import path from "path";
import type { SiteConfig } from "./site-config-types";

const CONFIG_PATH = path.join(process.cwd(), "src/data/site-config.json");

export type { SiteConfig } from "./site-config-types";

const DEFAULTS: SiteConfig = {
  companyName: "Express Entrümpelungen",
  companySubtitle: "Entrümpelungen",
  companyDescription:
    "Ihr zuverlässiger Partner für besenreine Wohnungsauflösungen, Entrümpelungen und diskrete Nachlassabwicklungen in Nürnberg und 50km Umkreis.",
  phonePrimary: "+491728083459",
  phonePrimaryDisplay: "0172 80 83 459",
  phoneSecondary: "+4917655122781",
  email: "info@express-entruempelungen.de",
  street: "Friesenstraße 25",
  city: "Nürnberg",
  postalCode: "90441",
  logoPath: "/gallery/logo.png",
  logoAlt: "Express Entrümpelungen Logo",
  topBarBadges: [
    { text: "Betriebshaftpflicht" },
    { text: "IHK Zertifiziert" },
    { text: "Festpreisgarantie" },
    { text: "Besenrein" },
  ],
  mainNavLinks: [
    { href: "/", label: "Startseite" },
    { href: "/#ablauf", label: "Ablauf" },
    { href: "/#preise", label: "Preise" },
    { href: "/#faq", label: "FAQ" },
    { href: "/#kontakt", label: "Kontakt" },
  ],
  serviceDropdownLinks: [
    { href: "/entruempelung-nuernberg", label: "Entrümpelung Nürnberg" },
    { href: "/wohnungsaufloesung-nuernberg", label: "Wohnungsauflösung Nürnberg" },
    { href: "/gewerbeaufloesung-nuernberg", label: "Gewerbeentrümpelung" },
    { href: "/nachlassaufloesung-nuernberg", label: "Nachlassauflösung" },
    { href: "/sperrmuellentsorgung-nuernberg", label: "Sperrmüllentsorgung" },
  ],
  openingHoursText: "Mo - Sa: 08:00 - 20:00 Uhr",
  openingHoursNote: "Notdienst: 24/7 über WhatsApp",
  whatsappNumber: "491728083459",
  whatsappDefaultMessage:
    "Hallo, ich interessiere mich für eine kostenlose Besichtigung. Bitte kontaktieren Sie mich.",
  schemaGeoLat: 49.4319,
  schemaGeoLng: 11.0664,
  schemaPriceRange: "$$",
  vatId: "DE462122010",
  copyrightText:
    "Express Entrümpelungen & Wohnungsauflösungen. Alle Rechte vorbehalten.",
  seoTitle: "Express Entrümpelungen Nürnberg | Festpreis | Kostenlose Besichtigung",
  seoDescription:
    "Professionelle Entrümpelung in Nürnberg ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ☎ 0172 8083459",
  seoOgTitle: "Express Entrümpelungen Nürnberg | Festpreis",
  seoOgDescription:
    "Professionelle Entrümpelung in Nürnberg ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ☎ 0172 8083459",
};

export async function getSiteConfig(): Promise<SiteConfig> {
  try {
    const data = await fs.readFile(CONFIG_PATH, "utf-8");
    return { ...DEFAULTS, ...JSON.parse(data) };
  } catch {
    return { ...DEFAULTS };
  }
}

export async function saveSiteConfig(config: SiteConfig): Promise<boolean> {
  try {
    await fs.mkdir(path.dirname(CONFIG_PATH), { recursive: true });
    await fs.writeFile(CONFIG_PATH, JSON.stringify(config, null, 2), "utf-8");
    return true;
  } catch (error) {
    console.error("Failed to save site config", error);
    return false;
  }
}
