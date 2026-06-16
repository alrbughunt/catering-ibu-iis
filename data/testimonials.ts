export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  type: "corporate" | "government" | "event" | "personal";
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Budi Santoso",
    role: "Manajer HRD",
    company: "PT. Maju Bersama Tasikmalaya",
    content:
      "Kami sudah menggunakan Catering Ibu Iis untuk konsumsi karyawan selama lebih dari 1 tahun. Kualitas masakan konsisten, pengiriman selalu tepat waktu, dan harganya sangat kompetitif untuk perusahaan. Tim kami sangat puas.",
    rating: 5,
    type: "corporate",
  },
  {
    id: "2",
    name: "Ibu Sari Dewi",
    role: "Kepala Tata Usaha",
    company: "SDN Mangunreja 1",
    content:
      "Terima kasih Catering Ibu Iis sudah membantu konsumsi acara peringatan HUT sekolah kami. Nasi kotaknya rapi, bersih, dan rasanya enak. Bapak Ibu guru dan tamu undangan semua memuji hidangannya.",
    rating: 5,
    type: "government",
  },
  {
    id: "3",
    name: "Rini Apriyani",
    role: "Event Organizer",
    company: "Rini EO Tasikmalaya",
    content:
      "Sebagai EO, saya sudah bekerja sama dengan berbagai vendor katering. Catering Ibu Iis selalu menjadi pilihan utama karena responsif, fleksibel dalam menyesuaikan menu, dan selalu on-time. Sangat direkomendasikan!",
    rating: 5,
    type: "event",
  },
  {
    id: "4",
    name: "H. Ahmad Fauzi",
    role: "Ketua Panitia",
    company: "Majelis Ta'lim Al-Hikmah",
    content:
      "Pesanan catering untuk pengajian akbar kami berjumlah 200 porsi. Catering Ibu Iis berhasil memenuhi pesanan dengan sangat baik. Makanan lezat, kemasan rapi, dan tidak ada yang tertukar. Insya Allah pesan lagi.",
    rating: 5,
    type: "event",
  },
  {
    id: "5",
    name: "Dewi Rahayu",
    role: "Pelanggan Harian",
    company: "Kos Melati, Mangunreja",
    content:
      "Saya berlangganan catering harian Ibu Iis sudah 6 bulan. Menu bergantinya enak dan variatif. Porsinya cukup dan harganya terjangkau. Pengirimannya juga selalu tepat waktu setiap pagi. Sangat puas!",
    rating: 5,
    type: "personal",
  },
  {
    id: "6",
    name: "dr. Hendra Wijaya",
    role: "Dokter Poli Umum",
    company: "Klinik Sehat Mangunreja",
    content:
      "Kami menggunakan Catering Ibu Iis untuk konsumsi rapat bulanan dan snack harian klinik. Makanannya terjaga kebersihannya, cocok untuk lingkungan kesehatan. Sangat merekomendasikan untuk instansi lain.",
    rating: 5,
    type: "corporate",
  },
];
