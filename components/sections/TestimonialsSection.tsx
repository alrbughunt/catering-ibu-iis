import Link from "next/link";
import { Star, Quote, ArrowRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const featured = testimonials.slice(0, 3);

  return (
    <section
      className="section-padding bg-brand-green-50"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-base">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center mb-4">
            <span className="section-label">
              <span className="w-8 h-px bg-brand-gold" />
              Testimoni
              <span className="w-8 h-px bg-brand-gold" />
            </span>
          </div>
          <h2 id="testimonials-heading" className="section-title mb-4">
            Apa Kata Pelanggan Kami
          </h2>
          <p className="section-subtitle">
            Ratusan pelanggan telah mempercayakan kebutuhan konsumsi mereka kepada Catering Ibu Iis. Berikut beberapa pengalaman mereka.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featured.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-brand-gold/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-1 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-brand-green text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {testimonial.role} — {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-brand-gold text-brand-gold" />
            ))}
            <span className="font-bold text-brand-green text-xl ml-2">5.0</span>
          </div>
          <p className="text-gray-600 text-sm">
            Rata-rata penilaian dari 500+ pelanggan
          </p>
          <Link
            href="/testimoni"
            className="inline-flex items-center gap-2 text-brand-green font-semibold hover:text-brand-gold transition-colors"
          >
            Lihat Semua Testimoni
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
