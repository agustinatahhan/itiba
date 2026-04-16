"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import LanguageToggle from "@/components/ui/LanguageToggle";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("nav");
  const dropdownRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const links = [
    { href: `/${locale}/origin`, label: t("origin") },
    { href: `/${locale}/agency`, label: t("agency") },
    { href: `/${locale}/vision`, label: t("vision") },
    { href: `/${locale}/projects`, label: t("projects") },
    { href: `/${locale}/gallery`, label: t("gallery") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  return (
    <>
      <nav
        ref={dropdownRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled || menuOpen
            ? "bg-brown backdrop-blur-md border-b border-gold/20 py-4"
            : "bg-transparent py-6"
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex flex-col leading-none"
            aria-label="Itibá Gastronomic Agency — Home"
          >
            <Image
              src="/images/logo/logoitibalight.png"
              alt="Logo Itibá"
              width={200}
              height={200}
            />
          </Link>

          {/* Menu Button */}
          <button
            className="text-ivory transition-colors duration-300 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>

        {/* Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 bg-brown/85 backdrop-blur-md border-t border-gold/20 max-h-[50vh] overflow-y-auto"
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
                <nav
                  className="flex flex-col md:flex-row md:items-center md:gap-8"
                  aria-label="Mobile navigation"
                >
                  {links.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.25 }}
                      className="border-b border-gold/10 last:border-none md:border-none"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-3 md:py-2 text-cream hover:text-gold transition-colors text-sm tracking-widest uppercase font-body"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  <div className="pt-4 pb-1 md:pt-2 md:ml-auto w-fit">
                    <LanguageToggle />
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
