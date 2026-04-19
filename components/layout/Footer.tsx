"use client";

import { useTranslations } from "next-intl";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  const tFooter = useTranslations("footer");

  const socials = [
    {
      href: "https://www.instagram.com/itibaagencia/",
      label: "Instagram",
      Icon: FaInstagram,
    },
    {
      href: "mailto:agenciaitiba@gmail.com",
      label: "Email",
      Icon: FaEnvelope,
    },
  ];

  return (
    <footer className="bg-brown">

      {/* Divider */}
      <div className="h-px bg-cream/15 mx-6 md:mx-12" />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">

          {/* Left: Brand */}
          <div className="max-w-xs">
            <div className="mb-4">
              <Image
                src="/images/logo/logoitibalight.png"
                alt="Logo Itibá"
                width={200}
                height={200}
              />
            </div>
            <p className="footer-text leading-relaxed mt-4 text-cream/60">
              {tFooter("description")}
            </p>
          </div>

          {/* Right: Social links */}
          <div className="flex flex-row items-center gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center transition-colors text-cream/50 border border-cream/20 hover:text-cream hover:border-cream/50"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-cream/10">
          <p className="footer-text text-cream/45">
            {tFooter("copyright")}
          </p>
          {/* <p className="footer-text tracking-widest uppercase text-cream/30">
            {tFooter("tagline")}
          </p> */}
        </div>
      </div>

    </footer>
  );
}
