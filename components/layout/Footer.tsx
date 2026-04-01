"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
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
    <footer className="bg-cream">
   
      {/* Divider */}
      <div className="h-px bg-body/15 mx-6 md:mx-12" />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="mb-4">
            <Image src="/images/logo/logoitibadark.png" alt="Logo Itibá" width={200} height={200}/>
            </div>
            <p className="leading-relaxed max-w-xs mt-4 font-body text-body/60" style={{ fontSize: "0.95rem" }}>
              {tFooter("description")}
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { href: "https://www.instagram.com", label: "Instagram", Icon: FaInstagram },
                { href: "https://www.linkedin.com", label: "LinkedIn", Icon: FaLinkedinIn },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center transition-colors text-body/50 border border-body/20 hover:text-body hover:border-body/50"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          {/* <div>
            <h3 className="font-medium tracking-widest uppercase mb-6 font-body text-olive" style={{ fontSize: "0.85rem" }}>
              {tFooter("navTitle")}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors font-body text-body/60 hover:text-body"
                    style={{ fontSize: "0.95rem" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Services */}
          {/* <div>
            <h3 className="font-medium tracking-widest uppercase mb-6 font-body text-olive" style={{ fontSize: "0.85rem" }}>
              {tFooter("servicesTitle")}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="font-body text-body/60" style={{ fontSize: "0.95rem" }}>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-body/10">
          <p className="font-body text-body/45" style={{ fontSize: "0.95rem" }}>
            {tFooter("copyright")}
          </p>
          <p className="tracking-widest uppercase font-body text-body/30" style={{ fontSize: "0.95rem" }}>
            {tFooter("tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}
