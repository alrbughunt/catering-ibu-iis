import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactCTASection } from "@/components/sections/ContactCTASection";
import { Camera, Utensils, Users, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Dokumentasi layanan Catering Ibu Iis untuk kantor, instansi, seminar, acara keluarga, dan berbagai kebutuhan konsumsi lainnya.",
  alternates: {
    canonical: "/galeri",
  },
};

const galleryCategories = [
  {
    icon: Utensils,
    title: "Nasi Kotak",
    count: "25+ Foto",
  },
  {
    icon: Building2,
    title: "Acara Perusahaan",
    count: "15+ Foto",
  },
  {
    icon: Users,
    title: "Acara Keluarga",
    count: "20+ Foto",
  },
  {
    icon: Camera,
    title: "Behind The Kitchen",
    count: "10+ Foto",
  },
];

const galleryItems = [
  {
    title: "Paket Nasi Kotak Premium",
    image: "/images/gallery/gallery-1.jpg",
  },
  {
    title: "Pesanan Seminar Instansi",
    image: "/images/gallery/gallery-2.jpg",
  },
  {
    title: "Katering Harian Kantor",
    image: "/images/gallery/gallery-3.jpg",
  },
  {
    title: "Acara Syukuran Keluarga",
    image: "/images/gallery/gallery-4.jpg",
  },
  {
    title: "Proses Pengemasan",
    image: "/images/gallery/gallery-5.jpg",
  },
  {
    title: "Menu Premium Event",
    image: "/images/gallery/gallery-6.jpg",
  },
  {
    title: "Produksi Harian",
    image: "/images/gallery/gallery-7.jpg",
  },
  {
    title: "Pesanan Gathering",
    image: "/images/gallery/gallery-8.jpg",
  },
];

export const dynamic = "force-static";

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Galeri Catering Ibu Iis"
        subtitle="Lihat dokumentasi berbagai layanan katering yang telah kami kerjakan untuk kantor, instansi, dan pelanggan keluarga."
        breadcrumbs={[{ label: "Galeri" }]}
      />

      {/* Stats */}
      <section className="section-padding bg-white">
        <div className="container-base">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryCategories.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="card-base p-6 text-center hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-green-50 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-brand-green" />
                  </div>

                  <h3 className="font-semibold text-brand-green mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500">{item.count}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-base">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label mb-4 inline-flex gap-2 justify-center">
              <span className="w-8 h-px bg-brand-gold" />
              Dokumentasi Kami
              <span className="w-8 h-px bg-brand-gold" />
            </span>

            <h2 className="section-title mb-4">
              Hasil Kerja yang Bisa Anda Lihat
            </h2>

            <p className="section-subtitle">
              Kami percaya kualitas tidak hanya dirasakan melalui rasa, tetapi
              juga terlihat dari penyajian, kebersihan, dan profesionalitas
              layanan.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-medium text-brand-green">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTASection />
    </>
  );
}