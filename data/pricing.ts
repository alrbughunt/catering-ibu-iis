export interface PricingPackage {
  id: string;
  name: string;
  startingPrice: number;
  priceLabel: string;
  description: string;
  includes: string[];
  highlight?: string;
  popular?: boolean;
  whatsappMessage: string;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: "1",
    name: "Paket Ekonomis",
    startingPrice: 15000,
    priceLabel: "Rp15.000",
    description:
      "Paket hemat untuk kebutuhan konsumsi harian dan acara dengan anggaran terbatas namun tetap berkualitas.",
    includes: [
      "Nasi putih pulen",
      "1 lauk utama pilihan",
      "1 sayuran",
      "Kerupuk",
      "Kemasan nasi kotak standar",
    ],
    highlight: "Terjangkau",
    whatsappMessage:
      "Halo Catering Ibu Iis, saya tertarik dengan Paket Ekonomis mulai Rp15.000. Bisa konsultasi lebih lanjut?",
  },
  {
    id: "2",
    name: "Paket Standar",
    startingPrice: 20000,
    priceLabel: "Rp20.000",
    description:
      "Paket standar dengan menu lebih lengkap, cocok untuk konsumsi rapat, kantor, dan acara umum.",
    includes: [
      "Nasi putih pulen",
      "2 lauk utama pilihan",
      "1 sayuran",
      "Buah potong",
      "Kerupuk",
      "Kemasan nasi kotak rapi",
    ],
    popular: true,
    highlight: "Paling Diminati",
    whatsappMessage:
      "Halo Catering Ibu Iis, saya tertarik dengan Paket Standar mulai Rp20.000. Bisa konsultasi lebih lanjut?",
  },
  {
    id: "3",
    name: "Paket Premium",
    startingPrice: 30000,
    priceLabel: "Rp30.000",
    description:
      "Paket premium dengan menu pilihan terbaik untuk tamu VIP, seminar eksklusif, dan acara formal perusahaan.",
    includes: [
      "Nasi putih atau nasi kuning",
      "2 lauk utama premium",
      "1 sayuran premium",
      "Buah potong",
      "Kerupuk udang",
      "Air mineral botol",
      "Kemasan eksklusif",
    ],
    highlight: "Terbaik",
    whatsappMessage:
      "Halo Catering Ibu Iis, saya tertarik dengan Paket Premium mulai Rp30.000. Bisa konsultasi lebih lanjut?",
  },
  {
    id: "4",
    name: "Catering Harian",
    startingPrice: 15000,
    priceLabel: "Rp15.000",
    description:
      "Langganan makan harian dengan menu berganti setiap hari. Solusi praktis untuk kebutuhan makan sehari-hari.",
    includes: [
      "Menu berganti setiap hari",
      "Nasi putih pulen",
      "2 lauk variatif",
      "1 sayuran",
      "Pengiriman 2x sehari (opsional)",
      "Konsultasi menu mingguan",
    ],
    highlight: "Berlangganan",
    whatsappMessage:
      "Halo Catering Ibu Iis, saya tertarik dengan Catering Harian mulai Rp15.000/hari. Bisa konsultasi lebih lanjut?",
  },
];

export const pricingNote =
  "Harga dapat menyesuaikan jumlah pesanan, pilihan menu, lokasi pengantaran, dan kebutuhan acara. Hubungi kami untuk penawaran terbaik sesuai kebutuhan Anda.";
