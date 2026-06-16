import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { siteConfig, whatsappCTA } from "@/data/site";

export function ContactCTASection() {
  return (
    <section
      className="section-padding bg-hero-gradient"
      aria-labelledby="contact-cta-heading"
    >
      <div className="container-base">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: CTA Text */}
          <div>
            <span className="inline-block text-brand-gold text-sm font-semibold uppercase tracking-widest mb-5">
              Siap Memesan?
            </span>
            <h2
              id="contact-cta-heading"
              className="font-display font-bold text-white text-3xl md:text-4xl mb-5 text-balance"
            >
              Konsultasikan Kebutuhan Catering Anda Sekarang
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Siapkan konsumsi acara Anda dengan lebih tenang. Tim Catering Ibu Iis siap membantu merencanakan menu, jumlah porsi, dan pengemasan yang tepat sesuai kebutuhan Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappCTA()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-base py-4 px-8"
              >
                <Phone className="w-5 h-5" />
                Hubungi via WhatsApp
              </a>
              <a
                href="/kontak"
                className="btn-outline-white text-base py-4 px-8"
              >
                Lihat Info Kontak
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right: Info Cards */}
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">WhatsApp</p>
                  <a
                    href={whatsappCTA()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold text-lg hover:text-brand-gold transition-colors"
                  >
                    0821-5195-3941
                  </a>
                  <p className="text-white/50 text-sm mt-1">
                    Respons cepat pada jam operasional
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Jam Operasional</p>
                  <p className="text-white font-semibold">
                    {siteConfig.operationalHours.weekdays}
                  </p>
                  <p className="text-white/70 text-sm">
                    {siteConfig.operationalHours.weekend}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Lokasi</p>
                  <p className="text-white font-semibold leading-snug">
                    {siteConfig.address.full}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
