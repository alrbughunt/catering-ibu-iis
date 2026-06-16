export interface MenuItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  ingredients: string[];
  tags: string[];
  image: string;
  featured: boolean;
  isVegetarian?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
}

export const menuCategories: MenuCategory[] = [
  {
    id: "lauk-utama",
    name: "Lauk Utama",
    description: "Hidangan protein utama pilihan terbaik",
  },
  {
    id: "sayuran",
    name: "Sayuran & Pelengkap",
    description: "Sayuran segar dan lauk pelengkap",
  },
  {
    id: "nasi",
    name: "Nasi & Karbohidrat",
    description: "Pilihan nasi dan makanan pokok",
  },
  {
    id: "snack",
    name: "Snack & Kue",
    description: "Cemilan dan kue untuk coffee break",
  },
  {
    id: "minuman",
    name: "Minuman",
    description: "Pilihan minuman segar",
  },
];

export const menuItems: MenuItem[] = [
  {
    id: "1",
    slug: "ayam-goreng-crispy",
    name: "Ayam Goreng Crispy",
    category: "lauk-utama",
    description:
      "Ayam goreng renyah dengan bumbu rahasia turun-temurun. Digoreng sempurna hingga crispy di luar, juicy di dalam. Sajian favorit yang selalu habis duluan.",
    ingredients: [
      "Ayam kampung segar",
      "Bumbu kuning",
      "Rempah pilihan",
      "Minyak goreng premium",
    ],
    tags: ["populer", "favorit", "halal"],
    image:
      "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=600&h=400&fit=crop&q=80",
    featured: true,
  },
  {
    id: "2",
    slug: "rendang-daging-sapi",
    name: "Rendang Daging Sapi",
    category: "lauk-utama",
    description:
      "Rendang autentik dengan daging sapi pilihan yang dimasak perlahan dengan santan kelapa dan rempah lengkap. Kaya rasa dan aroma yang menggugah selera.",
    ingredients: [
      "Daging sapi pilihan",
      "Santan kelapa",
      "Cabai merah",
      "Rempah lengkap",
    ],
    tags: ["premium", "populer", "halal"],
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&h=400&fit=crop&q=80",
    featured: true,
  },
  {
    id: "3",
    slug: "ikan-bakar-bumbu-kecap",
    name: "Ikan Bakar Bumbu Kecap",
    category: "lauk-utama",
    description:
      "Ikan segar pilihan dibakar dengan bumbu kecap manis dan rempah khas. Tekstur sempurna dengan cita rasa yang kaya dan menggugah selera.",
    ingredients: [
      "Ikan segar pilihan",
      "Kecap manis",
      "Bawang merah",
      "Cabai",
      "Jahe",
    ],
    tags: ["segar", "bakar", "halal"],
    image:
      "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=600&h=400&fit=crop&q=80",
    featured: false,
  },
  {
    id: "4",
    slug: "ayam-bakar-kecap",
    name: "Ayam Bakar Kecap",
    category: "lauk-utama",
    description:
      "Ayam bakar dengan marinasi kecap manis dan rempah pilihan. Dibakar hingga kecokelatan sempurna dengan aroma yang menggoda.",
    ingredients: [
      "Ayam segar",
      "Kecap manis",
      "Bumbu bacem",
      "Rempah pilihan",
    ],
    tags: ["populer", "bakar", "halal"],
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600&h=400&fit=crop&q=80",
    featured: true,
  },
  {
    id: "5",
    slug: "tempe-orek",
    name: "Tempe Orek Pedas Manis",
    category: "lauk-utama",
    description:
      "Tempe lokal berkualitas yang diorek dengan bumbu pedas manis. Kering di luar, gurih di dalam. Lauk pelengkap yang tidak pernah mengecewakan.",
    ingredients: [
      "Tempe lokal",
      "Cabai merah keriting",
      "Bawang putih",
      "Kecap",
      "Gula merah",
    ],
    tags: ["vegetarian", "ekonomis", "halal"],
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=400&fit=crop&q=80",
    featured: false,
    isVegetarian: true,
  },
  {
    id: "6",
    slug: "sayur-asem",
    name: "Sayur Asem",
    category: "sayuran",
    description:
      "Sayur asem segar dengan aneka sayuran pilihan. Kuah asam segar yang menyegarkan dan kaya vitamin. Pasangan sempurna untuk lauk goreng.",
    ingredients: [
      "Kacang panjang",
      "Jagung muda",
      "Labu siam",
      "Melinjo",
      "Asam jawa",
    ],
    tags: ["segar", "vegetarian", "halal"],
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=400&fit=crop&q=80",
    featured: false,
    isVegetarian: true,
  },
  {
    id: "7",
    slug: "capcay-goreng",
    name: "Capcay Goreng",
    category: "sayuran",
    description:
      "Tumisan aneka sayuran segar dengan bumbu gurih. Kaya akan serat dan vitamin, dimasak hingga teksturnya sempurna.",
    ingredients: [
      "Wortel",
      "Kembang kol",
      "Sawi hijau",
      "Buncis",
      "Saus tiram",
    ],
    tags: ["sehat", "vegetarian", "halal"],
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop&q=80",
    featured: false,
    isVegetarian: true,
  },
  {
    id: "8",
    slug: "nasi-putih",
    name: "Nasi Putih Pulen",
    category: "nasi",
    description:
      "Nasi putih pulen dimasak dari beras pilihan kualitas premium. Tekstur sempurna, harum, dan pas sebagai pendamping semua lauk.",
    ingredients: ["Beras premium pilihan", "Air bersih"],
    tags: ["staple", "halal"],
    image:
      "https://images.unsplash.com/photo-1536304993881-ff86e0c9c7c0?w=600&h=400&fit=crop&q=80",
    featured: false,
  },
  {
    id: "9",
    slug: "nasi-kuning",
    name: "Nasi Kuning",
    category: "nasi",
    description:
      "Nasi kuning harum dengan bumbu kunyit dan santan pilihan. Aroma khas yang menggugah selera, cocok untuk acara syukuran dan perayaan.",
    ingredients: [
      "Beras pilihan",
      "Kunyit segar",
      "Santan kelapa",
      "Daun salam",
      "Serai",
    ],
    tags: ["spesial", "acara", "halal"],
    image:
      "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&h=400&fit=crop&q=80",
    featured: true,
  },
  {
    id: "10",
    slug: "risoles-mayo",
    name: "Risoles Mayo",
    category: "snack",
    description:
      "Risoles dengan isian campuran sayuran, telur, dan saus mayo. Kulit crispy dengan isian creamy yang lezat. Pilihan snack coffee break yang disukai semua kalangan.",
    ingredients: [
      "Kulit risoles",
      "Wortel",
      "Buncis",
      "Telur rebus",
      "Saus mayo",
    ],
    tags: ["snack", "coffee break", "halal"],
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=400&fit=crop&q=80",
    featured: true,
  },
  {
    id: "11",
    slug: "lumpia-goreng",
    name: "Lumpia Goreng",
    category: "snack",
    description:
      "Lumpia goreng renyah dengan isian rebung, wortel, dan telur. Digoreng crispy hingga keemasan sempurna dengan saus cocol khas.",
    ingredients: ["Kulit lumpia", "Rebung", "Wortel", "Telur", "Bawang putih"],
    tags: ["snack", "crispy", "halal"],
    image:
      "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600&h=400&fit=crop&q=80",
    featured: false,
  },
  {
    id: "12",
    slug: "es-teh-manis",
    name: "Es Teh Manis",
    category: "minuman",
    description:
      "Teh manis segar yang diseduh dari teh pilihan berkualitas. Segar dan menyegarkan, cocok menemani makan siang atau konsumsi acara.",
    ingredients: ["Teh pilihan", "Gula pasir", "Air mineral", "Es batu"],
    tags: ["minuman", "segar", "halal"],
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=400&fit=crop&q=80",
    featured: false,
  },
];
