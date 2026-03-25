"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const locale = useLocale();
  const tNav = useTranslations("nav");
  const tFooter = useTranslations("footer");

  const navLinks = [
    { href: `/${locale}`, label: tNav("home") },
    { href: `/${locale}/about`, label: tNav("about") },
    { href: `/${locale}/projects`, label: tNav("projects") },
    { href: `/${locale}/contact`, label: tNav("contact") },
  ];

  const serviceLinks = [
    tFooter("services.0"),
    tFooter("services.1"),
    tFooter("services.2"),
  ];

  return (
    <footer
      className="bg-brown-warm text-cream"
      style={{ backgroundColor: "#3B1F0A" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <div
                className="text-2xl font-light tracking-[0.2em] text-ivory"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                ITIBÁ
              </div>
              <div
                className="text-[0.5rem] font-medium tracking-[0.35em] uppercase text-ivory/50 mt-0.5"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Gastronomic Agency
              </div>
            </div>
            <p
              className="text-ivory/60 text-sm leading-relaxed max-w-xs mt-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {tFooter("description")}
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 border border-ivory/20 flex items-center justify-center text-ivory/60 hover:text-ivory hover:border-ivory/50 transition-all"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 border border-ivory/20 flex items-center justify-center text-ivory/60 hover:text-ivory hover:border-ivory/50 transition-all"
              >
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-xs font-medium tracking-widest uppercase text-gold/70 mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {tFooter("navTitle")}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ivory/60 hover:text-ivory text-sm transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-xs font-medium tracking-widest uppercase text-gold/70 mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {tFooter("servicesTitle")}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span
                    className="text-ivory/60 text-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-ivory/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-ivory/40 text-xs"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {tFooter("copyright")}
          </p>
          <p
            className="text-ivory/30 text-xs tracking-widest uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {tFooter("tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}
