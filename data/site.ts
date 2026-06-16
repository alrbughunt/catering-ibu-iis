export const siteConfig = {
  name: "Catering Ibu Iis",
  tagline: "Rasa Premium, Harga Senyum.",
  slogan: "Catering Ibu Iis: Rasa Premium, Harga Senyum.",
  description:
    "Catering Ibu Iis adalah penyedia layanan katering profesional di Tasikmalaya yang melayani nasi kotak, catering harian, catering kantor, konsumsi rapat, seminar, dan acara keluarga dengan cita rasa rumahan berkualitas, higienis, dan tepat waktu.",
  shortDescription:
    "Katering profesional untuk kantor, instansi, dan acara di Tasikmalaya & sekitarnya.",
  url: "https://cateringibuis.com",
  whatsapp: "6282151953941",
  whatsappLink: "https://wa.me/6282151953941",
  whatsappMessage:
    "Halo Catering Ibu Iis, saya ingin konsultasi pesanan catering.",
  address: {
    street: "Kp. Sangegeng, Desa Mangunreja",
    district: "Kecamatan Mangunreja",
    city: "Kabupaten Tasikmalaya",
    province: "Jawa Barat",
    postalCode: "46462",
    full: "Kp. Sangegeng, Desa Mangunreja, Kec. Mangunreja, Kab. Tasikmalaya, Jawa Barat 46462",
  },
  operationalHours: {
    weekdays: "Senin – Sabtu: 08.00 – 17.00 WIB",
    weekend: "Minggu: Pesanan Khusus",
  },
  socialMedia: {
    instagram: "https://www.instagram.com/cateringibuis",
    facebook: "https://www.facebook.com/cateringibuis",
    tiktok: "https://www.tiktok.com/@cateringibuis",
  },
  coordinates: {
    lat: -7.3506,
    lng: 108.2348,
  },
};

export const whatsappCTA = (message?: string) => {
  const msg = encodeURIComponent(
    message || siteConfig.whatsappMessage
  );
  return `${siteConfig.whatsappLink}?text=${msg}`;
};
