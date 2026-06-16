"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { siteConfig, whatsappCTA } from "@/data/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/layanan", label: "Layanan" },
  { href: "/menu", label: "Menu" },
  { href: "/galeri", label: "Galeri" },
  { href: "/testimoni", label: "Testimoni" },
  { href: "/kontak", label: "Kontak" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-4"
      )}
    >
      <div className="container-base">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center shadow-sm group-hover:bg-brand-green-light transition-colors">
              <span className="text-white font-display font-bold text-lg leading-none">C</span>
            </div>
            <div>
              <p
                className={cn(
                  "font-display font-bold text-lg leading-tight transition-colors",
                  scrolled ? "text-brand-green" : "text-white"
                )}
              >
                Catering Ibu Iis
              </p>
              <p
                className={cn(
                  "text-xs leading-tight transition-colors",
                  scrolled ? "text-brand-gold" : "text-brand-gold-light"
                )}
              >
                Rasa Premium, Harga Senyum
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-brand-green/10",
                  scrolled
                    ? "text-gray-700 hover:text-brand-green"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={whatsappCTA()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm px-5 py-2.5"
            >
              <Phone className="w-4 h-4" />
              Pesan Sekarang
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-0 bg-brand-green z-40 transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3"
            >
              <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center">
                <span className="text-white font-display font-bold text-base">C</span>
              </div>
              <div>
                <p className="font-display font-bold text-white text-base leading-tight">
                  Catering Ibu Iis
                </p>
                <p className="text-brand-gold text-xs">Rasa Premium, Harga Senyum</p>
              </div>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-white hover:bg-white/10 rounded-lg"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-1 p-5 flex-1 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3.5 rounded-xl text-white font-medium text-base hover:bg-white/10 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="p-5 border-t border-white/10">
            <a
              href={whatsappCTA()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="btn-gold w-full justify-center py-4 text-base"
            >
              <Phone className="w-5 h-5" />
              Pesan Sekarang via WhatsApp
            </a>
            <div className="mt-4 text-center">
              <p className="text-white/60 text-sm">
                Senin–Sabtu: 08.00–17.00 WIB
              </p>
              <p className="text-white/40 text-xs mt-1">
                {siteConfig.address.city}, {siteConfig.address.province}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
