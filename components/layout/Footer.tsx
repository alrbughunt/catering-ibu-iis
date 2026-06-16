import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook,
  ChevronRight,
} from "lucide-react";
import { siteConfig, whatsappCTA } from "@/data/site";

const quickLinks = [
  { href: "/", label: "Beranda" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/layanan", label: "Layanan" },
  { href: "/menu", label: "Katalog Menu" },
  { href: "/galeri", label: "Galeri" },
  { href: "/testimoni", label: "Testimoni" },
  { href: "/kontak", label: "Kontak" },
];

const services = [
  { href: "/layanan#paket-nasi-kotak", label: "Paket Nasi Kotak" },
  { href: "/layanan#catering-harian", label: "Catering Harian" },
  { href: "/layanan#catering-kantor", label: "Catering Kantor" },
  { href: "/layanan#konsumsi-seminar", label: "Konsumsi Seminar" },
  { href: "/layanan#konsumsi-rapat", label: "Konsumsi Rapat" },
  { href: "/layanan#acara-keluarga", label: "Acara Keluarga" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-green-dark text-white">
      {/* Main Footer */}
      <div className="container-base py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-brand-gold rounded-xl flex items-center justify-center">
                <span className="text-brand-green font-display font-bold text-lg">C</span>
              </div>
              <div>
                <p className="font-display font-bold text-white text-base leading-tight">
                  Catering Ibu Iis
                </p>
                <p className="text-brand-gold text-xs">
                  Rasa Premium, Harga Senyum
                </p>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Penyedia layanan katering profesional di Tasikmalaya untuk kebutuhan kantor, instansi, dan acara keluarga.
            </p>
            {/* Social Media */}
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-gold transition-colors"
                aria-label="Instagram Catering Ibu Iis"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-gold transition-colors"
                aria-label="Facebook Catering Ibu Iis"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialMedia.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-gold transition-colors"
                aria-label="TikTok Catering Ibu Iis"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.73a4.84 4.84 0 01-1.01-.04z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5 text-base">
              Navigasi
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 text-white/70 text-sm hover:text-brand-gold transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brand-gold/50 group-hover:text-brand-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5 text-base">
              Layanan Kami
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-1.5 text-white/70 text-sm hover:text-brand-gold transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brand-gold/50 group-hover:text-brand-gold transition-colors" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5 text-base">
              Informasi Kontak
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm leading-relaxed">
                  {siteConfig.address.full}
                </span>
              </li>
              <li>
                <a
                  href={whatsappCTA()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 text-sm hover:text-brand-gold transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                  0821-5195-3941
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div className="text-white/70 text-sm">
                  <p>{siteConfig.operationalHours.weekdays}</p>
                  <p>{siteConfig.operationalHours.weekend}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-base py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-sm">
            <p>
              &copy; {currentYear} {siteConfig.name}. Seluruh hak dilindungi.
            </p>
            <p>
              Melayani area Tasikmalaya & sekitarnya
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
