import Link from "next/link";
import {
  Package,
  Calendar,
  Building2,
  Presentation,
  Users,
  Heart,
  ArrowRight,
} from "lucide-react";
import { services } from "@/data/services";
import { whatsappCTA } from "@/data/site";

const iconMap: Record<string, React.ElementType> = {
  box: Package,
  calendar: Calendar,
  building: Building2,
  presentation: Presentation,
  users: Users,
  heart: Heart,
};

export function ServicesSection() {
  const featuredServices = services.filter((s) => s.featured);

  return (
    <section
      className="section-padding bg-gray-50"
      aria-labelledby="services-heading"
    >
      <div className="container-base">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center mb-4">
            <span className="section-label">
              <span className="w-8 h-px bg-brand-gold" />
              Layanan Kami
              <span className="w-8 h-px bg-brand-gold" />
            </span>
          </div>
          <h2 id="services-heading" className="section-title mb-4">
            Solusi Katering untuk Setiap Kebutuhan
          </h2>
          <p className="section-subtitle">
            Dari nasi kotak harian hingga konsumsi acara formal, kami hadir dengan layanan lengkap yang dapat disesuaikan dengan kebutuhan dan anggaran Anda.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredServices.map((service) => {
            const Icon = iconMap[service.icon] || Package;
            return (
              <div
                key={service.id}
                className="card-base p-7 group flex flex-col"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-brand-green-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-brand-green transition-all duration-300">
                  <Icon className="w-7 h-7 text-brand-green group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-brand-green text-xl mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-brand-gold text-sm font-medium mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {service.highlights.slice(0, 3).map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-1.5 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href={whatsappCTA(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm py-2.5 mt-auto"
                >
                  Konsultasi Sekarang
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/layanan"
            className="inline-flex items-center gap-2 text-brand-green font-semibold hover:text-brand-gold transition-colors"
          >
            Lihat Semua Layanan
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
