export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "Berapa minimum order untuk nasi kotak?",
    answer:
      "Minimum order nasi kotak kami adalah 25 porsi untuk area Mangunreja dan sekitarnya. Untuk area lain di Tasikmalaya, minimum order mungkin berbeda tergantung jarak pengiriman. Hubungi kami untuk informasi lebih lanjut.",
    category: "pemesanan",
  },
  {
    id: "2",
    question: "Berapa lama sebelumnya saya harus memesan?",
    answer:
      "Untuk pesanan reguler, kami menyarankan pemesanan minimal H-1 (1 hari sebelumnya). Untuk acara besar dengan jumlah porsi lebih dari 100, kami menyarankan pemesanan minimal 3–5 hari sebelumnya agar kami dapat mempersiapkan dengan optimal.",
    category: "pemesanan",
  },
  {
    id: "3",
    question: "Apakah bisa menyesuaikan menu sesuai kebutuhan?",
    answer:
      "Tentu saja! Kami sangat fleksibel dalam menyesuaikan menu sesuai kebutuhan Anda. Baik dari jenis lauk, sayuran, pilihan nasi, hingga snack untuk coffee break. Konsultasikan kebutuhan Anda melalui WhatsApp dan tim kami siap membantu.",
    category: "menu",
  },
  {
    id: "4",
    question: "Apakah Catering Ibu Iis menjamin kehigienisan makanan?",
    answer:
      "Ya, kami sangat mengutamakan kebersihan dan kehigienisan dalam setiap proses memasak dan pengemasan. Bahan-bahan yang digunakan selalu segar, dapur selalu terjaga kebersihannya, dan pengemasan dilakukan oleh tim yang terlatih dengan standar higienitas yang ketat.",
    category: "kualitas",
  },
  {
    id: "5",
    question: "Apakah tersedia layanan pengiriman?",
    answer:
      "Ya, kami menyediakan layanan pengiriman ke seluruh wilayah Tasikmalaya. Biaya pengiriman dapat menyesuaikan dengan jarak dan jumlah pesanan. Untuk area tertentu, pengiriman gratis dengan minimum order tertentu. Konsultasikan dengan kami untuk detail lebih lanjut.",
    category: "pengiriman",
  },
  {
    id: "6",
    question: "Bagaimana cara pembayaran?",
    answer:
      "Kami menerima pembayaran melalui transfer bank (BCA, BRI, Mandiri, BNI), dompet digital (GoPay, OVO, DANA), dan tunai. Untuk pesanan pertama, kami memerlukan uang muka sebesar 50% dari total pesanan. Pelunasan dapat dilakukan sebelum atau saat pengiriman.",
    category: "pembayaran",
  },
  {
    id: "7",
    question: "Apakah makanan Catering Ibu Iis halal?",
    answer:
      "Ya, seluruh menu Catering Ibu Iis menggunakan bahan-bahan halal dan tidak mengandung bahan-bahan yang diharamkan. Kami berkomitmen untuk menyajikan makanan yang halal dan thayyib untuk semua pelanggan kami.",
    category: "kualitas",
  },
  {
    id: "8",
    question: "Apakah bisa untuk acara besar di atas 500 porsi?",
    answer:
      "Kami siap melayani berbagai skala acara, termasuk acara besar di atas 500 porsi. Untuk acara skala besar, kami menyarankan konsultasi lebih awal agar kami dapat merencanakan dengan baik dan memastikan semua kebutuhan Anda terpenuhi.",
    category: "pemesanan",
  },
  {
    id: "9",
    question: "Apakah tersedia pilihan menu vegetarian?",
    answer:
      "Ya, kami menyediakan pilihan menu vegetarian yang bisa dikonsultasikan saat pemesanan. Kami dapat menyesuaikan menu khusus tanpa daging sesuai kebutuhan Anda.",
    category: "menu",
  },
  {
    id: "10",
    question: "Bagaimana cara memesan?",
    answer:
      "Cara termudah adalah melalui WhatsApp kami di 0821-5195-3941. Hubungi kami, ceritakan kebutuhan Anda (jenis acara, jumlah porsi, tanggal, pilihan menu), dan tim kami akan memberikan penawaran terbaik. Pemesanan bisa juga melalui Instagram atau Facebook kami.",
    category: "pemesanan",
  },
];
