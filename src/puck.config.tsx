import type { Config } from "@puckeditor/core";
import dynamic from "next/dynamic";
import { HeroBlock } from "./ux/blocks/Hero";
import { TrustBarBlock } from "./ux/blocks/TrustBar";
import { ServicesBlock } from "./ux/blocks/Services";

const BeforeAfterBlock = dynamic(
  () => import("./ux/blocks/BeforeAfter").then((mod) => mod.BeforeAfterBlock),
  { ssr: false }
);
import { TimelineBlock } from "./ux/blocks/Timeline";
import { ContactHubBlock } from "./ux/blocks/ContactHub";
import { ReviewsBlock } from "./ux/blocks/Reviews";
import { PriceCalculatorBlock } from "./ux/blocks/PriceCalculator";
import { FAQBlock } from "./ux/blocks/FAQAccordion";
import { EnvironmentBlock } from "./ux/blocks/Environment";
import { TeamBlock } from "./ux/blocks/Team";
import { ServiceAreasBlock } from "./ux/blocks/ServiceAreas";
import { GalleryBlock } from "./ux/blocks/Gallery";
import { ImageField } from "./ux/fields/ImageField";

// Helper: Puck custom field for image upload with preview
const imageField = {
  type: "custom" as const,
  render: (ctx: any) => <ImageField {...ctx} />,
};

export type PuckConfigProps = {
  Hero: any;
  TrustBar: any;
  Services: any;
  BeforeAfter: any;
  Timeline: any;
  ContactHub: any;
  Reviews: any;
  PriceCalculator: any;
  FAQ: any;
  Environment: any;
  Team: any;
  ServiceAreas: any;
  Gallery: any;
};

export const config: Config<PuckConfigProps> = {
  components: {
    Hero: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "textarea" },
        backgroundImage: imageField,
        badges: { type: "array", getItemSummary: (item) => item.text || "Badge", arrayFields: { text: { type: "text" } } },
        phoneLabel: { type: "text" },
        whatsappLabel: { type: "text" },
        phoneUrl: { type: "text" },
        whatsappUrl: { type: "text" },
      },
      defaultProps: {
        title: "Wir kümmern uns – Sie entspannen",
        subtitle: "Express Entrümpelungen: Besenreine Übergabe für Wohnungs- und Gewerbeauflösungen in Ihrer Nähe.",
        backgroundImage: "",
        badges: [{text: "Besenreine Übergabe"}, {text: "Festpreisgarantie"}, {text: "Kostenlose Besichtigung"}],
        phoneLabel: "0172 80 83 459",
        whatsappLabel: "WhatsApp (0176...)",
        phoneUrl: "tel:+491728083459",
        whatsappUrl: "https://wa.me/4917655122781",
      },
      render: (props: any) => <HeroBlock {...props} badges={props.badges?.map((b: any) => b.text)} />
    },
    TrustBar: {
      fields: {
        stats: {
          type: "array",
          getItemSummary: (item) => item.label || "Stat",
          arrayFields: {
            icon: { type: "select", options: [{label: "Home", value: "Home"}, {label: "Star", value: "Star"}, {label: "Truck", value: "Truck"}, {label: "Clock", value: "Clock"}, {label: "Euro", value: "Euro"}] },
            number: { type: "number" },
            suffix: { type: "text" },
            label: { type: "text" }
          }
        }
      },
      defaultProps: {
        stats: [
          { icon: "Home", number: 2500, suffix: "+", label: "Entrümpelungen" },
          { icon: "Star", number: 4.9, suffix: "/5", label: "Kundenbewertung" },
          { icon: "Truck", number: 50, suffix: "km", label: "Umkreis" },
          { icon: "Clock", number: 24, suffix: "h", label: "Einsatz möglich" },
          { icon: "Euro", number: 100, suffix: "%", label: "Festpreisgarantie" },
        ]
      },
      render: (props: any) => <TrustBarBlock {...props} />
    },
    Services: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "textarea" },
        services: {
          type: "array",
          getItemSummary: (item) => item.title || "Service",
          arrayFields: {
            title: { type: "text" },
            description: { type: "textarea" },
            icon: { type: "select", options: [{label: "Home", value: "Home"}, {label: "Building2", value: "Building2"}, {label: "Package", value: "Package"}, {label: "Bird", value: "Bird"}, {label: "Recycle", value: "Recycle"}, {label: "Euro", value: "Euro"}] },
            link: { type: "text" }
          }
        }
      },
      defaultProps: {
        title: "Unsere Leistungen",
        subtitle: "Professionelle Lösungen für jede Herausforderung",
        services: [
          { title: "Wohnungsauflösung", description: "Komplette Räumung von Wohnungen inkl. besenreiner Übergabe.", icon: "Home", link: "/wohnungsaufloesung-nuernberg" },
          { title: "Gewerbeentrümpelung", description: "Diskrete Räumung von Büros, Lagern und Betrieben.", icon: "Building2", link: "/gewerbeaufloesung-nuernberg" },
          { title: "Kellerentrümpelung", description: "Befreiung von Nebenräumen von angesammeltem Ballast.", icon: "Package", link: "/entruempelung-nuernberg" },
          { title: "Nachlassauflösung", description: "Einfühlsame und diskrete Abwicklung von Nachlässen.", icon: "Bird", link: "/nachlassaufloesung-nuernberg" },
          { title: "Sperrmüll & Entsorgung", description: "Fachgerechte Trennung und umweltfreundliche Entsorgung.", icon: "Recycle", link: "/sperrmuellentsorgung-nuernberg" },
        ]
      },
      render: (props: any) => <ServicesBlock {...props} />
    },
    BeforeAfter: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "textarea" },
        items: {
          type: "array",
          getItemSummary: (item) => item.label || "Slide",
          arrayFields: {
            beforeImage: imageField,
            afterImage: imageField,
            label: { type: "text" }
          }
        }
      },
      defaultProps: {
        title: "Unsere Ergebnisse",
        subtitle: "Sehen Sie selbst, wie wir Räume verwandeln",
        items: [
          { beforeImage: "/gallery/before1.jpeg", afterImage: "/gallery/after1.jpeg", label: "Vorher / Nachher" }
        ]
      },
      render: (props: any) => <BeforeAfterBlock {...props} />
    },
    Timeline: {
      fields: {
        title: { type: "text" },
        steps: {
          type: "array",
          getItemSummary: (item) => item.title || "Step",
          arrayFields: {
            title: { type: "text" },
            description: { type: "textarea" },
            icon: { type: "select", options: [{label: "PhoneCall", value: "PhoneCall"}, {label: "ClipboardCheck", value: "ClipboardCheck"}, {label: "CalendarCheck", value: "CalendarCheck"}, {label: "Truck", value: "Truck"}, {label: "Sparkles", value: "Sparkles"}] }
          }
        }
      },
      defaultProps: {
        title: "In 5 Schritten zur besenreinen Übergabe",
        steps: [
          { title: "1. Kontaktaufnahme", description: "Sie rufen uns an oder schreiben eine WhatsApp.", icon: "PhoneCall" },
          { title: "2. Besichtigung", description: "Kostenlose und unverbindliche Begutachtung vor Ort.", icon: "ClipboardCheck" },
          { title: "3. Festpreis-Angebot", description: "Sie erhalten sofort ein faires Angebot mit Festpreisgarantie.", icon: "CalendarCheck" },
          { title: "4. Ausführung", description: "Wir entrümpeln diskret, schnell und umweltgerecht.", icon: "Truck" },
          { title: "5. Übergabe", description: "Die Räume werden besenrein an Sie übergeben.", icon: "Sparkles" }
        ]
      },
      render: (props: any) => <TimelineBlock {...props} />
    },
    ContactHub: {
      fields: {
        phone: { type: "text" },
        whatsappMsg: { type: "textarea" }
      },
      defaultProps: {
        phone: "0172 80 83 459",
        whatsappMsg: "Hallo, ich interessiere mich für eine Entrümpelung..."
      },
      render: (props: any) => <ContactHubBlock {...props} />
    },
    Reviews: {
      fields: {
        title: { type: "text" },
        rating: { type: "number" },
        totalReviews: { type: "number" },
        reviews: {
          type: "array",
          getItemSummary: (item) => item.name || "Review",
          arrayFields: {
            name: { type: "text" },
            city: { type: "text" },
            text: { type: "textarea" },
            date: { type: "text" },
            rating: { type: "number" },
            avatar: imageField
          }
        }
      },
      defaultProps: {
        title: "Was unsere Kunden sagen",
        rating: 4.9,
        totalReviews: 124,
        reviews: [
          { name: "Sabine M.", city: "Nürnberg", text: "Unglaublich schnell und diskret.", date: "Vor 2 Wochen", rating: 5, avatar: "SM" }
        ]
      },
      render: (props: any) => <ReviewsBlock {...props} />
    },
    PriceCalculator: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "textarea" },
        basePricePerSqm: { type: "number" }
      },
      defaultProps: {
        title: "Kostenrechner",
        subtitle: "Berechnen Sie eine erste grobe Schätzung für Ihre Entrümpelung. Der finale Preis wird bei der kostenlosen Besichtigung als Festpreis fixiert.",
        basePricePerSqm: 35
      },
      render: (props: any) => <PriceCalculatorBlock {...props} />
    },
    FAQ: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "textarea" },
        faqs: {
          type: "array",
          getItemSummary: (item) => item.question || "FAQ",
          arrayFields: {
            question: { type: "text" },
            answer: { type: "textarea" }
          }
        }
      },
      defaultProps: {
        title: "Häufig gestellte Fragen",
        subtitle: "Alles was Sie vorab wissen müssen",
        faqs: [
          { question: "Ist die Besichtigung wirklich kostenlos?", answer: "Ja, zu 100%." }
        ]
      },
      render: (props: any) => <FAQBlock {...props} />
    },
    Environment: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "textarea" },
        features: {
          type: "array",
          getItemSummary: (item) => item.title || "Feature",
          arrayFields: {
            icon: { type: "select", options: [
              { label: "Recycle", value: "Recycle" },
              { label: "TreePine", value: "TreePine" },
              { label: "FileCheck", value: "FileCheck" },
              { label: "HeartHandshake", value: "HeartHandshake" },
              { label: "ShieldCheck", value: "ShieldCheck" },
              { label: "Leaf", value: "Leaf" },
              { label: "Globe", value: "Globe" },
              { label: "Award", value: "Award" },
            ]},
            title: { type: "text" },
            description: { type: "textarea" },
          }
        }
      },
      defaultProps: {
        title: "Unser Versprechen für die Umwelt",
        subtitle: "Wir entsorgen nicht einfach alles auf den Müll.",
        features: [
          { icon: "Recycle", title: "Fachgerechte Trennung", description: "Wir trennen Müll strikt nach Werkstoffen für optimales Recycling." },
          { icon: "TreePine", title: "Wiederverwendung", description: "Gut erhaltene Möbel spenden wir an lokale soziale Einrichtungen." },
          { icon: "FileCheck", title: "Entsorgungsnachweise", description: "Sie erhalten auf Wunsch offizielle Nachweise für kritische Abfälle." },
          { icon: "HeartHandshake", title: "Soziales Engagement", description: "Zusammenarbeit mit lokalen Spenden-Centern und Tafeln." },
          { icon: "ShieldCheck", title: "Zertifiziert", description: "Wir arbeiten ausschließlich mit zertifizierten Entsorgungsfachbetrieben." },
        ]
      },
      render: (props: any) => <EnvironmentBlock {...props} />
    },
    Team: {
      fields: {
        title: { type: "text" },
        description: { type: "textarea" },
        ownerQuote: { type: "textarea" },
        members: {
          type: "array",
          getItemSummary: (item) => item.name || "Teammitglied",
          arrayFields: {
            name: { type: "text" },
            role: { type: "text" },
            image: imageField,
          }
        },
      },
      defaultProps: {
        title: "Das Team",
        description: "Seit über 10 Jahren sind wir Ihr verlässlicher Partner für schnelle, diskrete und saubere Entrümpelungen. Als familiengeführtes Unternehmen wissen wir, dass eine Haushaltsauflösung oft mehr ist als nur Möbel zu bewegen – es geht um Vertrauen.",
        ownerQuote: "Mein Wort an Sie: Wir verlassen keinen Einsatzort, bevor Sie nicht 100% zufrieden sind. Ihr Vertrauen ist unser höchstes Gut.",
        members: [
          { name: "Markus Richter", role: "Inhaber & Experte", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
          { name: "Sarah Keller", role: "Dispo & Kundenbetreuung", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
          { name: "Lukas Wagner", role: "Teamleiter Räumung", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
        ]
      },
      render: (props: any) => <TeamBlock {...props} />
    },
    ServiceAreas: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "textarea" },
        cities: { type: "array", getItemSummary: (item) => item.name || "City", arrayFields: { name: { type: "text" } } }
      },
      defaultProps: {
        title: "Unsere Service-Gebiete",
        subtitle: "Wir sind in einem Umkreis von 50km für Sie im Einsatz.",
        cities: [{name: "Nürnberg"}, {name: "Fürth"}, {name: "Erlangen"}, {name: "Schwabach"}, {name: "Ansbach"}, {name: "Neumarkt"}, {name: "Roth"}, {name: "Zirndorf"}, {name: "Stein"}, {name: "Lauf a.d.Pegnitz"}]
      },
      render: (props: any) => <ServiceAreasBlock {...props} cities={props.cities?.map((c: any) => c.name)} />
    },
    Gallery: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "textarea" },
        images: {
          type: "array",
          getItemSummary: (item) => item.alt || "Bild",
          arrayFields: {
            url: imageField,
            alt: { type: "text" }
          }
        }
      },
      defaultProps: {
        title: "Unsere Galerie",
        subtitle: "Einblicke in unsere Arbeit",
        images: [
          { url: "/gallery/before1.jpeg", alt: "Vorher – Entrümpelung" },
          { url: "/gallery/after1.jpeg", alt: "Nachher – Besenrein" },
          { url: "/gallery/flyer.jpeg", alt: "Flyer Express Entrümpelungen" },
        ]
      },
      render: (props: any) => <GalleryBlock {...props} />
    }
  }
};
