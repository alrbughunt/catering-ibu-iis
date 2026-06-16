import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/layout/PageHeader";
import { ContactCTASection } from "@/components/sections/ContactCTASection";

const menuData = {
  "paket-ekonomis": {
    title: "Paket Ekonomis",
    price: "Rp15.000 - Rp18.000",
    description:
      "Paket hemat untuk kegiatan sosial, konsumsi panitia, Jumat Berkah, dan acara sederhana lainnya.",
    menu: [
      "Nasi Putih",
      "Telur Balado / Telur Dadar",
      "Orek Tempe Teri",
      "Sayur Harian",
      "Kerupuk",
      "Sambal",
    ],
    target:
      "Cocok untuk panitia lapangan, kegiatan sosial, pengajian, dan acara komunitas.",
  },

  "paket-standar": {
    title: "Paket Standar",
    price: "Rp20.000 - Rp27.000",
    description:
      "Paket paling populer untuk kebutuhan rapat kantor, seminar, pelatihan, dan kegiatan instansi.",
    menu: [
      "Nasi Putih",
      "Ayam Goreng Lengkuas",
      "Ayam Bakar",
      "Perkedel",
      "Tempe Orek",
      "Capcay",
      "Kerupuk",
      "Sambal",
    ],
    target:
      "Cocok untuk rapat kantor, seminar, sekolah, dan kegiatan pemerintahan.",
  },

  "paket-premium": {
    title: "Paket Premium",
    price: "Rp30.000 - Rp45.000",
    description:
      "Pilihan terbaik untuk tamu VIP, direksi perusahaan, dan acara formal.",
    menu: [
      "Nasi Kuning / Nasi Uduk",
      "Rendang Sapi",
      "Daging Semur",
      "Ayam Goreng",
      "Kering Kentang",
      "Buah Segar",
      "Air Mineral",
    ],
    target:
      "Ideal untuk acara formal, direksi perusahaan, dan tamu penting.",
  },

  "catering-harian": {
    title: "Catering Harian",
    price: "Mulai Rp15.000",
    description:
      "Layanan langganan makan siang dan makan malam untuk kantor, sekolah, dan instansi.",
    menu: [
      "Menu Berganti Setiap Hari",
      "Nasi + Lauk Utama",
      "Sayur Harian",
      "Sambal",
      "Pilihan Paket Bulanan",
    ],
    target:
      "Cocok untuk kantor, pabrik, sekolah, klinik, dan kebutuhan rutin lainnya.",
  },
};

type Params = Promise<{
  slug: string;
}>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;

  const item = menuData[slug as keyof typeof menuData];

  if (!item) {
    return {
      title: "Menu Tidak Ditemukan",
    };
  }

  return {
    title: item.title,
    description: item.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(menuData).map((slug) => ({
    slug,
  }));
}

export default async function MenuDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;

  const item = menuData[slug as keyof typeof menuData];

  if (!item) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={item.title}
        subtitle={item.description}
        breadcrumbs={[
          { label: "Menu", href: "/menu" },
          { label: item.title },
        ]}
      />

      {/* Detail */}
      <section className="section-padding bg-white">
        <div className="container-base max-w-4xl">
          <div className="card-base p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <h2 className="section-title mb-2">
                  {item.title}
                </h2>

                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>

              <div className="text-brand-gold font-bold text-2xl">
                {item.price}
              </div>
            </div>

            <div className="mb-10">
              <h3 className="font-semibold text-brand-green text-lg mb-4">
                Isi Paket
              </h3>

              <ul className="grid md:grid-cols-2 gap-3">
                {item.menu.map((menuItem, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-gold" />
                    {menuItem}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-green-50 rounded-2xl p-6">
              <h3 className="font-semibold text-brand-green mb-3">
                Direkomendasikan Untuk
              </h3>

              <p className="text-gray-700">
                {item.target}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/6282151953941"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Pesan via WhatsApp
              </a>

              <Link
                href="/menu"
                className="btn-secondary"
              >
                Kembali ke Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactCTASection />
    </>
  );
}