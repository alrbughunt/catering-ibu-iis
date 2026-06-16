import { Shield, Clock, BadgeDollarSign, ChefHat, Truck, Star } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Higienis & Aman",
    description: "Setiap proses memasak mengikuti standar kebersihan ketat, dari bahan baku hingga pengemasan.",
  },
  {
    icon: Clock,
    title: "Tepat Waktu",
    description: "Pengiriman selalu on-time sesuai jadwal yang disepakati, tidak ada keterlambatan.",
  },
  {
    icon: BadgeDollarSign,
    title: "Harga Kompetitif",
    description: "Harga terjangkau mulai Rp15.000 tanpa mengorbankan kualitas rasa dan pengemasan.",
  },
  {
    icon: ChefHat,
    title: "Cita Rasa Berkualitas",
    description: "Masakan rumahan autentik dengan bumbu pilihan yang diracik oleh juru masak berpengalaman.",
  },
  {
    icon: Truck,
    title: "Pengiriman Luas",
    description: "Melayani seluruh wilayah Tasikmalaya dan sekitarnya dengan armada pengiriman yang andal.",
  },
  {
    icon: Star,
    title: "Terpercaya",
    description: "Dipercaya oleh ratusan kantor, instansi, dan keluarga di Tasikmalaya sejak bertahun-tahun.",
  },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-white" aria-labelledby="trust-heading">
      <div className="container-base">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center mb-4">
            <span className="section-label">
              <span className="w-8 h-px bg-brand-gold" />
              Mengapa Memilih Kami
              <span className="w-8 h-px bg-brand-gold" />
            </span>
          </div>
          <h2 id="trust-heading" className="section-title mb-4">
            Standar Layanan yang Tidak Pernah Kami Kompromikan
          </h2>
          <p className="section-subtitle">
            Setiap pesanan ditangani dengan penuh tanggung jawab. Kepuasan dan kepercayaan pelanggan adalah prioritas utama kami.
          </p>
        </div>

        {/* Trust Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-brand-green/20 hover:shadow-card transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 bg-brand-green-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-green group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-brand-green group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display font-semibold text-brand-green text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Client types */}
        <div className="mt-14 pt-10 border-t border-gray-100">
          <p className="text-center text-gray-500 text-sm mb-6">
            Dipercaya oleh berbagai kalangan
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Perusahaan & Kantor",
              "Pabrik & Manufaktur",
              "Instansi Pemerintah",
              "Rumah Sakit & Klinik",
              "Sekolah & Universitas",
              "Event Organizer",
              "Keluarga & Personal",
              "BUMN",
            ].map((client) => (
              <span
                key={client}
                className="px-4 py-2 bg-brand-green-50 text-brand-green text-xs font-medium rounded-full border border-brand-green/10"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
