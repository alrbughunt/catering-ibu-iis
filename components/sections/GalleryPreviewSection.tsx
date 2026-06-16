import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { galleryItems } from "@/data/gallery";

export function GalleryPreviewSection() {
  const preview = galleryItems.slice(0, 6);

  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="gallery-heading"
    >
      <div className="container-base">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center mb-4">
              <span className="section-label">
                <span className="w-8 h-px bg-brand-gold" />
                Galeri
              </span>
            </div>
            <h2 id="gallery-heading" className="section-title mb-4">
              Hasil Karya yang Berbicara Sendiri
            </h2>
            <p className="section-subtitle">
              Dokumentasi nyata pesanan yang telah kami sajikan dengan penuh dedikasi dan standar kualitas terbaik.
            </p>
          </div>
          <Link
            href="/galeri"
            className="btn-outline shrink-0 self-start md:self-auto"
          >
            Lihat Galeri Lengkap
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {preview.map((item, idx) => (
            <Link
              key={item.id}
              href="/galeri"
              className={`group relative overflow-hidden rounded-2xl ${
                idx === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative w-full ${
                  idx === 0 ? "h-64 md:h-full min-h-[300px]" : "h-48 md:h-52"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes={
                    idx === 0
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 50vw, 33vw"
                  }
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/50 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-semibold text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    {item.title}
                  </span>
                </div>

                {/* Category badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1 bg-black/40 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
