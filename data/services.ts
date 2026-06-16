export interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  highlights: string[];
  useCases: string[];
  whatsappMessage: string;
  featured: boolean;
}

export const services: Service[] = [
  {
    id: "1",
    slug: "paket-nasi-kotak",
    title: "Paket Nasi Kotak",
    subtitle: "Praktis, Higienis, Tepat Waktu",
    description:
      "Nasi kotak siap saji dengan pilihan menu lengkap, dikemas rapi dan higienis. Cocok untuk rapat, seminar, pelatihan, atau kebutuhan konsumsi acara apapun.",
    icon: "box",
    highlights: [
      "Kemasan rapi dan higienis",
      "Pilihan menu beragam",
      "Tersedia per porsi atau paket",
      "Pengiriman tepat waktu",
      "Minimum order fleksibel",
    ],
    useCases: [
      "Rapat dan pertemuan kantor",
      "Seminar dan pelatihan",
      "Acara keluarga",
      "Pengajian dan arisan",
      "Event corporate",
    ],
    whatsappMessage:
      "Halo Catering Ibu Iis, saya ingin memesan Paket Nasi Kotak. Bisa konsultasi lebih lanjut?",
    featured: true,
  },
  {
    id: "2",
    slug: "catering-harian",
    title: "Catering Harian",
    subtitle: "Solusi Makan Sehat Setiap Hari",
    description:
      "Layanan katering harian untuk individu, kos, atau keluarga. Menu berganti setiap hari dengan cita rasa rumahan yang sehat, bergizi, dan mengenyangkan.",
    icon: "calendar",
    highlights: [
      "Menu berganti setiap hari",
      "Masakan rumahan berkualitas",
      "Harga terjangkau",
      "Pengiriman pagi dan siang",
      "Kontrak mingguan atau bulanan",
    ],
    useCases: [
      "Kos dan kontrakan",
      "Keluarga yang sibuk",
      "Individu yang ingin makan sehat",
      "Pasien pemulihan",
      "Pekerja yang jauh dari rumah",
    ],
    whatsappMessage:
      "Halo Catering Ibu Iis, saya ingin berlangganan Catering Harian. Bisa konsultasi lebih lanjut?",
    featured: true,
  },
  {
    id: "3",
    slug: "catering-kantor",
    title: "Catering Kantor",
    subtitle: "Konsumsi Profesional untuk Tim Anda",
    description:
      "Layanan katering untuk kantor, pabrik, dan perusahaan. Tersedia dalam berbagai paket yang dapat disesuaikan dengan kebutuhan jumlah karyawan dan anggaran perusahaan.",
    icon: "building",
    highlights: [
      "Melayani 10 hingga 500+ porsi",
      "Menu dapat dikustomisasi",
      "Tagihan periodik untuk perusahaan",
      "Layanan konsultasi menu",
      "Pengiriman terjadwal dan konsisten",
    ],
    useCases: [
      "Kantor dan perusahaan",
      "Pabrik dan manufaktur",
      "Bank dan lembaga keuangan",
      "Dealer dan showroom",
      "BUMN dan instansi pemerintah",
    ],
    whatsappMessage:
      "Halo Catering Ibu Iis, kami membutuhkan Catering Kantor. Bisa konsultasi lebih lanjut?",
    featured: true,
  },
  {
    id: "4",
    slug: "konsumsi-seminar",
    title: "Konsumsi Seminar",
    subtitle: "Sajian Profesional untuk Event Formal",
    description:
      "Layanan konsumsi untuk seminar, workshop, dan pelatihan. Tersedia snack box, coffee break, nasi kotak, dan prasmanan sesuai kebutuhan event Anda.",
    icon: "presentation",
    highlights: [
      "Pilihan snack box dan coffee break",
      "Prasmanan untuk acara besar",
      "Penyajian rapi dan profesional",
      "Tersedia dekorasi meja sederhana",
      "Konsultasi menu gratis",
    ],
    useCases: [
      "Seminar dan workshop",
      "Pelatihan dan training",
      "Konferensi dan symposium",
      "Wisuda dan graduation",
      "Event universitas dan sekolah",
    ],
    whatsappMessage:
      "Halo Catering Ibu Iis, saya butuh konsumsi untuk seminar/workshop. Bisa konsultasi lebih lanjut?",
    featured: false,
  },
  {
    id: "5",
    slug: "konsumsi-rapat",
    title: "Konsumsi Rapat",
    subtitle: "Dukung Produktivitas dengan Hidangan Terbaik",
    description:
      "Konsumsi rapat yang praktis, rapi, dan lezat. Tersedia paket snack dan makan siang yang dapat dipesan mendadak maupun terjadwal.",
    icon: "users",
    highlights: [
      "Dapat dipesan H-1",
      "Pilihan snack dan makan siang",
      "Kemasan eksklusif untuk rapat",
      "Pengiriman tepat waktu",
      "Harga kompetitif",
    ],
    useCases: [
      "Rapat direksi dan manajemen",
      "Meeting tim dan departemen",
      "Rapat koordinasi instansi",
      "Pertemuan dewan komisaris",
      "Briefing dan evaluasi",
    ],
    whatsappMessage:
      "Halo Catering Ibu Iis, saya butuh konsumsi untuk rapat. Bisa konsultasi lebih lanjut?",
    featured: false,
  },
  {
    id: "6",
    slug: "acara-keluarga",
    title: "Acara Keluarga",
    subtitle: "Kenangan Indah Bersama Keluarga",
    description:
      "Layanan katering untuk berbagai acara keluarga. Mulai dari syukuran, ulang tahun, pernikahan sederhana, hingga reuni keluarga dengan masakan rumahan yang hangat dan lezat.",
    icon: "heart",
    highlights: [
      "Menu masakan rumahan otentik",
      "Dapat disesuaikan selera keluarga",
      "Tersedia paket prasmanan",
      "Penanganan higienis",
      "Konsultasi menu gratis",
    ],
    useCases: [
      "Syukuran dan selamatan",
      "Ulang tahun",
      "Pernikahan sederhana",
      "Reuni keluarga",
      "Pengajian dan arisan",
    ],
    whatsappMessage:
      "Halo Catering Ibu Iis, saya butuh catering untuk acara keluarga. Bisa konsultasi lebih lanjut?",
    featured: true,
  },
];
