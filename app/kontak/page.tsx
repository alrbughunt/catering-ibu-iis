import type { Metadata } from "next";
import {
  Phone,
  MapPin,
  Clock3,
  MessageCircle,
  Facebook,
  Instagram,
} from "lucide-react";

import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Catering Ibu Iis untuk pemesanan nasi kotak, catering harian, dan kebutuhan konsumsi acara di Tasikmalaya.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Hubungi Kami"
        subtitle="Siap membantu kebutuhan catering harian, nasi kotak, seminar, rapat, maupun acara keluarga Anda."
        breadcrumbs={[{ label: "Kontak" }]}
      />

      {/* Contact Info */}
      <section className="section-padding bg-white">
        <div className="container-base">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left */}
            <div>
              <span className="section-label mb-4 inline-flex">
                Informasi Kontak
              </span>

              <h2 className="section-title mb-6">
                Mari Diskusikan Kebutuhan Catering Anda
              </h2>

              <p className="text-gray-600 mb-8">
                Tim Catering Ibu Iis siap membantu kebutuhan konsumsi kantor,
                instansi, seminar, pelatihan, syukuran, maupun catering harian.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <Phone className="text-brand-green w-6 h-6" />
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <p className="text-gray-600">
                      +62 821-5195-3941
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="text-brand-green w-6 h-6" />
                  <div>
                    <h3 className="font-semibold">Alamat</h3>
                    <p className="text-gray-600">
                      Kp. Sangegeng, Desa Mangunreja,
                      Kecamatan Mangunreja,
                      Kabupaten Tasikmalaya,
                      Jawa Barat 46462
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock3 className="text-brand-green w-6 h-6" />
                  <div>
                    <h3 className="font-semibold">Jam Operasional</h3>
                    <p className="text-gray-600">
                      Senin - Sabtu
                      <br />
                      08.00 - 17.00 WIB
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-10">
                <h3 className="font-semibold mb-4">
                  Media Sosial
                </h3>

                <div className="flex gap-4">
                  <a
                    href="#"
                    className="card-base p-3 hover:scale-105 transition"
                  >
                    <Instagram />
                  </a>

                  <a
                    href="#"
                    className="card-base p-3 hover:scale-105 transition"
                  >
                    <Facebook />
                  </a>

                  <a
                    href="https://wa.me/6282151953941"
                    target="_blank"
                    className="card-base p-3 hover:scale-105 transition"
                  >
                    <MessageCircle />
                  </a>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="card-base p-8">
              <h3 className="text-2xl font-semibold text-brand-green mb-6">
                Pesan Sekarang
              </h3>

              <p className="text-gray-600 mb-8">
                Klik tombol di bawah untuk langsung terhubung ke WhatsApp dan
                konsultasikan kebutuhan catering Anda.
              </p>

              <a
                href="https://wa.me/6282151953941?text=Halo%20Catering%20Ibu%20Iis,%20saya%20ingin%20bertanya%20mengenai%20layanan%20catering."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center block"
              >
                Hubungi via WhatsApp
              </a>

              <div className="mt-8 bg-brand-green-50 rounded-xl p-6">
                <h4 className="font-semibold text-brand-green mb-3">
                  Respon Cepat
                </h4>

                <p className="text-gray-600 text-sm">
                  Kami berusaha merespon setiap pertanyaan dan permintaan
                  penawaran secepat mungkin selama jam operasional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maps */}
      <section className="section-padding bg-gray-50">
        <div className="container-base">
          <div className="text-center mb-10">
            <h2 className="section-title">
              Lokasi Kami
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Mangunreja,Tasikmalaya&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}