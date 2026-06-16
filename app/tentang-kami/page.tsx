import type { Metadata } from "next";
import {
  Award,
  Clock3,
  ShieldCheck,
  Users,
  UtensilsCrossed,
  Building2,
} from "lucide-react";

import { PageHeader } from "@/components/layout/PageHeader";
import { ContactCTASection } from "@/components/sections/ContactCTASection";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Mengenal Catering Ibu Iis, penyedia layanan katering profesional di Tasikmalaya yang melayani perusahaan, instansi, sekolah, rumah sakit, dan kebutuhan keluarga.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Kualitas Terjaga",
    description:
      "Menggunakan bahan pilihan dan proses produksi yang menjaga kebersihan serta kualitas rasa.",
  },
  {
    icon: Clock3,
    title: "Tepat Waktu",
    description:
      "Pengiriman dilakukan sesuai jadwal untuk memastikan acara berjalan lancar.",
  },
  {
    icon: Users,
    title: "Fokus Pelanggan",
    description:
      "Setiap pesanan ditangani dengan perhatian penuh terhadap kebutuhan pelanggan.",
  },
  {
    icon: Award,
    title: "Profesional",
    description:
      "Berpengalaman melayani berbagai kebutuhan konsumsi dari skala kecil hingga besar.",
  },
];

const stats = [
  {
    value: "500+",
    label: "Pelanggan Puas",
  },
  {
    value: "10.000+",
    label: "Porsi Tersajikan",
  },
  {
    value: "50+",
    label: "Acara Terlayani",
  },
  {
    value: "5+",
    label: "Tahun Pengalaman",
  },
];

const segments = [
  {
    icon: Building2,
    title: "Perusahaan & Kantor",
  },
  {
    icon: Users,
    title: "Instansi Pemerintah",
  },
  {
    icon: UtensilsCrossed,
    title: "Sekolah & Universitas",
  },
  {
    icon: ShieldCheck,
    title: "Rumah Sakit & Klinik",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Tentang Catering Ibu Iis"
        subtitle="Mitra katering terpercaya untuk kebutuhan kantor, instansi, acara perusahaan, dan keluarga di Tasikmalaya."
        breadcrumbs={[{ label: "Tentang Kami" }]}
      />

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-base">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-label mb-4 inline-flex gap-2 justify-center">
              <span className="w-8 h-px bg-brand-gold" />
              Profil Perusahaan
              <span className="w-8 h-px bg-brand-gold" />
            </span>

            <h2 className="section-title mb-6">
              Dari Dapur Rumahan Menjadi Mitra Konsumsi Terpercaya
            </h2>

            <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
              <p>
                Catering Ibu Iis berawal dari usaha rumahan yang berfokus pada
                penyajian masakan berkualitas dengan cita rasa khas rumahan.
              </p>

              <p>
                Seiring meningkatnya kepercayaan pelanggan, layanan berkembang
                tidak hanya melayani kebutuhan keluarga tetapi juga kantor,
                instansi pemerintah, sekolah, rumah sakit, dan berbagai acara
                perusahaan.
              </p>

              <p>
                Hingga saat ini, Catering Ibu Iis terus berkomitmen menghadirkan
                makanan yang higienis, praktis, lezat, dan tepat waktu untuk
                membantu memenuhi kebutuhan konsumsi pelanggan secara
                profesional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gray-50">
        <div className="container-base">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="card-base p-8 text-center"
              >
                <div className="text-4xl font-bold text-brand-green mb-3">
                  {item.value}
                </div>

                <div className="text-gray-600">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-base">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="section-title mb-4">
              Nilai yang Kami Pegang
            </h2>

            <p className="section-subtitle">
              Setiap layanan yang kami berikan dibangun di atas komitmen
              kualitas, kepercayaan, dan kepuasan pelanggan.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="card-base p-7 text-center"
                >
                  <div className="w-14 h-14 bg-brand-green-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-brand-green" />
                  </div>

                  <h3 className="font-semibold text-brand-green mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Segments */}
      <section className="section-padding bg-gray-50">
        <div className="container-base">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="section-title mb-4">
              Siapa yang Kami Layani
            </h2>

            <p className="section-subtitle">
              Layanan kami dirancang untuk memenuhi kebutuhan berbagai sektor.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {segments.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="card-base p-7 text-center"
                >
                  <div className="w-14 h-14 bg-brand-green-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-brand-green" />
                  </div>

                  <h3 className="font-semibold text-brand-green">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTASection />
    </>
  );
}