import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ImportVat } from "@/components/import-vat";
import { Navbar } from "@/components/navbar";
import { Pricing } from "@/components/pricing";
import { Solutions } from "@/components/solutions";
import { WeChatProvider } from "@/components/wechat";
import { Workflow } from "@/components/workflow";
import { CONTACT, SITE_URL } from "@/lib/site";

// Structured data for search engines and AI assistants (matches the visible contact block).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "IMOSTA Group China Desk",
  url: SITE_URL,
  email: CONTACT.email,
  telephone: CONTACT.phoneHref.replace("tel:", ""),
  availableLanguage: ["zh", "pl", "en"],
  areaServed: "PL",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Ostrobramska 101 lok. 336",
    postalCode: "04-041",
    addressLocality: "Warszawa",
    addressCountry: "PL",
  },
  taxID: CONTACT.nip,
  priceRange: "1500–3000+ PLN / month (netto)",
};

export default function Home() {
  return (
    <WeChatProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <ImportVat />
        <Pricing />
        <Workflow />
        <Contact />
      </main>
      <Footer />
    </WeChatProvider>
  );
}
