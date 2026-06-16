export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  width: number;
  height: number;
}

export const galleryCategories = [
  "Semua",
  "Nasi Kotak",
  "Prasmanan",
  "Snack Box",
  "Acara",
];

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Nasi Kotak Paket Standar",
    category: "Nasi Kotak",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop&q=80",
    width: 600,
    height: 400,
  },
  {
    id: "2",
    title: "Paket Seminar 200 Peserta",
    category: "Acara",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop&q=80",
    width: 600,
    height: 400,
  },
  {
    id: "3",
    title: "Snack Box Coffee Break",
    category: "Snack Box",
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop&q=80",
    width: 600,
    height: 400,
  },
  {
    id: "4",
    title: "Prasmanan Acara Keluarga",
    category: "Prasmanan",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&q=80",
    width: 600,
    height: 400,
  },
  {
    id: "5",
    title: "Nasi Kotak Premium",
    category: "Nasi Kotak",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=400&fit=crop&q=80",
    width: 600,
    height: 400,
  },
  {
    id: "6",
    title: "Konsumsi Rapat Perusahaan",
    category: "Acara",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop&q=80",
    width: 600,
    height: 400,
  },
  {
    id: "7",
    title: "Aneka Kue dan Snack",
    category: "Snack Box",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&h=400&fit=crop&q=80",
    width: 600,
    height: 400,
  },
  {
    id: "8",
    title: "Meja Prasmanan Seminar",
    category: "Prasmanan",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&h=400&fit=crop&q=80",
    width: 600,
    height: 400,
  },
  {
    id: "9",
    title: "Nasi Kuning Syukuran",
    category: "Acara",
    image:
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&h=400&fit=crop&q=80",
    width: 600,
    height: 400,
  },
];
