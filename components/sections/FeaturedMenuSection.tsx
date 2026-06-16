import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { menuItems } from "@/data/menu";

export function FeaturedMenuSection() {
  const featured = menuItems.filter((item) => item.featured).slice(0, 4);

  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="featured-menu-heading"
    >
      <div className="container-base">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center mb-4">
              <span className="section-label">
                <span className="w-8 h-px bg-brand-gold" />
                Menu Unggulan
              </span>
            </div>
            <h2 id="featured-menu-heading" className="section-title mb-4">
              Hidangan Favorit Pelanggan Kami
            </h2>
            <p className="section-subtitle">
              Dimasak dengan bahan-bahan segar pilihan, setiap hidangan kami menghadirkan cita rasa rumahan yang autentik dan menggugah selera.
            </p>
          </div>
          <Link
            href="/menu"
            className="btn-outline shrink-0 self-start md:self-auto"
          >
            Lihat Semua Menu
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((item) => (
            <Link
              key={item.id}
              href={`/menu/${item.slug}`}
              className="card-base overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Tags */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {item.tags.slice(0, 1).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-brand-gold text-white text-xs font-semibold rounded-full capitalize"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.isVegetarian && (
                    <span className="px-2.5 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                      Vegetarian
                    </span>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <p className="text-xs text-brand-gold font-semibold uppercase tracking-wide mb-1.5 capitalize">
                  {item.category.replace(/-/g, " ")}
                </p>
                <h3 className="font-display font-semibold text-brand-green text-lg mb-2 leading-snug">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
