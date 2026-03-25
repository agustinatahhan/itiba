"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { startTransition } from "react";

export default function LanguageToggle() {
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
      className="flex items-center border border-gold/40 rounded-full p-0.5"
      role="group"
      aria-label="Language selector"
    >
      <button
        onClick={() => switchLocale("es")}
        aria-label="Switch to Spanish"
        className={`px-3 py-1 text-xs font-medium tracking-widest uppercase rounded-full transition-all duration-200 cursor-pointer ${
          locale === "es"
            ? "bg-green-deep text-cream"
            : "text-green-deep hover:text-green-deep/70"
        }`}
        style={{ fontFamily: "var(--font-body)" }}
      >
        ES
      </button>
      <button
        onClick={() => switchLocale("en")}
        aria-label="Switch to English"
        className={`px-3 py-1 text-xs font-medium tracking-widest uppercase rounded-full transition-all duration-200 cursor-pointer ${
          locale === "en"
            ? "bg-green-deep text-cream"
            : "text-green-deep hover:text-green-deep/70"
        }`}
        style={{ fontFamily: "var(--font-body)" }}
      >
        EN
      </button>
    </div>
  );
}
