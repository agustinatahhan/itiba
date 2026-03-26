"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/projects`, label: t("projects") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md border-b border-gold/20 py-4"
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
            {/* <span
              className={`text-xl font-light tracking-[0.15em] transition-colors duration-300 ${
                scrolled ? "text-green-deep" : "text-ivory"
              }`}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ITIBÁ
            </span>
            <span
              className={`text-[0.5rem] font-medium tracking-[0.3em] uppercase transition-colors duration-300 ${
                scrolled ? "text-olive" : "text-ivory/70"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              Gastronomic Agency
            </span> */}
            {scrolled ? (
              <Image
                src="/images/logo/logoitibadark.png"
                alt="Logo Itibá"
                width={200}
                height={200}
              />
            ) : (
              <Image
                src="/images/logo/logoitibalight.png"
                alt="Logo Itibá"
                width={200}
                height={200}
              />
            )}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300 hover:text-gold ${
                  scrolled ? "text-green-deep" : "text-ivory/90"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </Link>
            ))}
            <LanguageToggle scrolled={scrolled} />
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 cursor-pointer ${
              scrolled ? "text-green-deep" : "text-ivory"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-green-deep flex flex-col items-center justify-center md:hidden"
          >
            <nav
              className="flex flex-col items-center gap-8"
              aria-label="Mobile navigation"
            >
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-light text-cream hover:text-gold transition-colors"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-4"
              >
                <LanguageToggle />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
