import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactCTASection } from "@/components/sections/ContactCTASection";
import { Star, Building2, Users, GraduationCap, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimoni Pelanggan",
  description:
    "Lihat pengalaman pelanggan Catering Ibu Iis dari berbagai sektor mulai dari perusahaan, instansi, sekolah, hingga acara keluarga.",
  alternates: {
    canonical: "/testimoni",
  },
};

const stats = [
  {
    value: "500+",
    label: "Pelanggan Puas",
  },
  {
    value: "4.9/5",
    label: "Rating Kepuasan",
  },
  {
    value: "10.000+",
    label: "Porsi Tersajikan",
  },
  {
    value: "50+",
    label: "Acara Terlayani",
  },
];

const categories = [
  {
    icon: Building2,
    title: "Perusahaan",
    description: "Kantor, dealer, bank, pabrik, dan retail.",
  },
  {
    icon: GraduationCap,
    title: "Pendidikan",
    description: "Sekolah, universitas, seminar, dan pelatihan.",
  },
  {
    icon: Users,
    title: "Instansi",
    description: "Pemerintah, BUMN, dan lembaga publik.",
  },
  {
    icon: HeartHandshake,
    title: "Keluarga",
    description: "Syukuran, pengajian, arisan, dan acara pribadi.",
  },
];

const testimonials = [
  {
    name: "Bagian Umum Instansi Pemerintah",
    type: "Instansi Pemerintah",
    text:
      "Pesanan nasi kotak selalu datang tepat waktu dan kualitas makanannya konsisten. Sangat membantu untuk kebutuhan rapat dan kegiatan kantor.",
  },
  {
    name: "HRD Perusahaan Swasta",
    type: "Perusahaan",
    text:
      "Sudah berlangganan catering harian selama beberapa bulan. Karyawan puas karena menu selalu berganti dan rasanya enak.",
  },
  {
    name: "Panitia Seminar Kampus",
    type: "Universitas",
    text:
      "Pelayanan responsif dan fleksibel. Meskipun pesanan mendadak, Catering Ibu Iis tetap mampu memenuhi kebutuhan acara kami.",
  },
  {
    name: "Keluarga Bapak Ahmad",
    type: "Acara Keluarga",
    text:
      "Makanan untuk acara syukuran sangat memuaskan. Tamu banyak yang memuji rasa masakan dan penyajiannya.",
  },
  {
    name: "Event Organizer Tasikmalaya",
    type: "Event Organizer",
    text:
      "Vendor yang bisa diandalkan. Pengemasan rapi, pengiriman tepat waktu, dan komunikasi sangat profesional.",
  },
  {
    name: "Klinik Kesehatan",
    type: "Fasilitas Medis",
    text:
      "Menu catering untuk staf medis selalu tepat dan sesuai kebutuhan. Sangat membantu operasional harian kami.",
  },
];

export default function TestimoniPage() {
  return (
    <>
      <PageHeader
        title="Testimoni Pelanggan"
        subtitle="Kepercayaan pelanggan adalah bukti kualitas layanan yang kami bangun setiap hari."
        breadcrumbs={[{ label: "Testimoni" }]}
      />

      {/* Stats */}
      <section className="section-padding bg-white">
        <div className="container-base">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-brand-green-50 rounded-2xl p-6 border border-brand-green/10 text-center"
              >
                <h3 className="font-display text-3xl font-bold text-brand-green mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-base">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label mb-4 inline-flex gap-2 justify-center">
              <span className="w-8 h-px bg-brand-gold" />
              Pelanggan Kami
              <span className="w-8 h-px bg-brand-gold" />
            </span>

            <h2 className="section-title mb-4">
              Berbagai Segmen yang Telah Kami Layani
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="card-base p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-brand-green-50 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-brand-green" />
                  </div>

                  <h3 className="font-semibold text-brand-green mb-2">
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

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-base">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label mb-4 inline-flex gap-2 justify-center">
              <span className="w-8 h-px bg-brand-gold" />
              Ulasan Pelanggan
              <span className="w-8 h-px bg-brand-gold" />
            </span>

            <h2 className="section-title mb-4">
              Apa Kata Mereka Tentang Kami
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-base p-7 flex flex-col h-full"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-brand-gold text-brand-gold"
                    />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed flex-grow mb-6">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-semibold text-brand-green">
                    {testimonial.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {testimonial.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTASection />
    </>
  );
}