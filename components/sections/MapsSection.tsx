import { MapPin, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/site";

export function MapsSection() {
  const mapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.7!2d${siteConfig.coordinates.lng}!3d${siteConfig.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjEnMDIuMiJTIDEwOMKwMTQnMDUuMyJF!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid`;
  const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${siteConfig.coordinates.lat},${siteConfig.coordinates.lng}`;

  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="maps-heading"
    >
      <div className="container-base">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center mb-4">
            <span className="section-label">
              <span className="w-8 h-px bg-brand-gold" />
              Lokasi Kami
              <span className="w-8 h-px bg-brand-gold" />
            </span>
          </div>
          <h2 id="maps-heading" className="section-title mb-4">
            Temukan Catering Ibu Iis
          </h2>
          <p className="section-subtitle">
            Berlokasi di Mangunreja, Kabupaten Tasikmalaya. Melayani pengiriman ke seluruh wilayah Tasikmalaya dan sekitarnya.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Address Info */}
          <div className="space-y-5">
            <div className="card-base p-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-green mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-brand-green text-sm mb-2">
                    Alamat Lengkap
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {siteConfig.address.full}
                  </p>
                </div>
              </div>
            </div>

            <div className="card-base p-6">
              <p className="font-semibold text-brand-green text-sm mb-3">
                Area Pengiriman
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Mangunreja & Sekitarnya",
                  "Tasikmalaya Kota",
                  "Singaparna",
                  "Manonjaya",
                  "Ciawi",
                  "Leuwisari",
                  "Dan area lainnya (konfirmasi dulu)",
                ].map((area, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
            >
              <ExternalLink className="w-4 h-4" />
              Buka di Google Maps
            </a>
          </div>

          {/* Map Embed */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-card border border-gray-100 h-80 lg:h-96">
              <iframe
                src={mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Catering Ibu Iis di Mangunreja, Tasikmalaya"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
