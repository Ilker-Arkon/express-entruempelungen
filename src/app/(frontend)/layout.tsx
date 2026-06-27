import { Header } from "@/ux/Header";
import { Footer } from "@/ux/Footer";
import { FloatingContact } from "@/ux/FloatingContact";

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
      <FloatingContact />
    </>
  );
}
