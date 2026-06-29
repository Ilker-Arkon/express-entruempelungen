import { Header } from "@/ux/Header";
import { Footer } from "@/ux/Footer";
import { FloatingContact } from "@/ux/FloatingContact";
import { getSiteConfig } from "@/lib/site-config";

export default async function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const config = await getSiteConfig();

  const headerConfig = {
    companyName: config.companyName,
    companySubtitle: config.companySubtitle,
    logoPath: config.logoPath,
    logoAlt: config.logoAlt,
    phonePrimary: config.phonePrimary,
    phonePrimaryDisplay: config.phonePrimaryDisplay,
    street: config.street,
    city: config.city,
    postalCode: config.postalCode,
    topBarBadges: config.topBarBadges,
    mainNavLinks: config.mainNavLinks,
    serviceDropdownLinks: config.serviceDropdownLinks,
  };

  const footerConfig = {
    companyName: config.companyName,
    companySubtitle: config.companySubtitle,
    companyDescription: config.companyDescription,
    logoPath: config.logoPath,
    logoAlt: config.logoAlt,
    phonePrimary: config.phonePrimary,
    phonePrimaryDisplay: config.phonePrimaryDisplay,
    phoneSecondary: config.phoneSecondary,
    email: config.email,
    street: config.street,
    city: config.city,
    postalCode: config.postalCode,
    openingHoursText: config.openingHoursText,
    openingHoursNote: config.openingHoursNote,
    vatId: config.vatId,
    copyrightText: config.copyrightText,
    serviceDropdownLinks: config.serviceDropdownLinks,
  };

  const floatingContactConfig = {
    phonePrimary: config.phonePrimary,
    whatsappNumber: config.whatsappNumber,
    whatsappDefaultMessage: config.whatsappDefaultMessage,
  };

  return (
    <>
      <Header config={headerConfig} />
      <div className="flex-1">
        {children}
      </div>
      <Footer config={footerConfig} />
      <FloatingContact config={floatingContactConfig} />
    </>
  );
}
