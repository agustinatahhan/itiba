"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { startTransition } from "react";

interface LanguageToggleProps {
  scrolled?: boolean;
}

export default function LanguageToggle({ scrolled = false }: LanguageToggleProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return;
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/") || `/${newLocale}`;
    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <div
      className={`flex items-center rounded-full p-0.5 border transition-colors duration-300 ${
        scrolled ? "border-body/25" : "border-cream/30"
      }`}
      role="group"
      aria-label="Language selector"
    >
      {(["es", "en"] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => switchLocale(lang)}
          aria-label={lang === "es" ? "Switch to Spanish" : "Switch to English"}
          className={`px-3 py-1 text-xs font-medium tracking-widest uppercase rounded-full transition-all duration-200 cursor-pointer font-body ${
            scrolled
              ? locale === lang
                ? "bg-body text-cream"
                : "bg-transparent text-body/50"
              : locale === lang
              ? "bg-cream text-brown"
              : "bg-transparent text-cream/55"
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
