import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturedMenuSection } from "@/components/sections/FeaturedMenuSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { GalleryPreviewSection } from "@/components/sections/GalleryPreviewSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { HowToOrderSection } from "@/components/sections/HowToOrderSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactCTASection } from "@/components/sections/ContactCTASection";
import { MapsSection } from "@/components/sections/MapsSection";

export const metadata: Metadata = {
  title: "Catering Ibu Iis | Catering Profesional Tasikmalaya — Nasi Kotak, Kantor & Acara",
  description:
    "Catering Ibu Iis melayani nasi kotak, catering harian, catering kantor, konsumsi seminar, rapat, dan acara keluarga di Tasikmalaya. Higienis, tepat waktu, harga mulai Rp15.000.",
  keywords: [
    "catering tasikmalaya",
    "nasi kotak tasikmalaya",
    "catering kantor tasikmalaya",
    "catering harian tasikmalaya",
    "catering mangunreja",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <FeaturedMenuSection />
      <PricingSection />
      <GalleryPreviewSection />
      <TestimonialsSection />
      <HowToOrderSection />
      <FAQSection />
      <ContactCTASection />
      <MapsSection />
    </>
  );
}
