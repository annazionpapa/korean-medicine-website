"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "한의원 소개", href: "/about" },
  { label: "진료 안내", href: "/programs" },
  { label: "의료진", href: "/doctors" },
  { label: "치료 후기", href: "/reviews" },
  { label: "오시는 길", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-forest flex items-center justify-center">
                <span className="text-white text-sm lg:text-base font-bold font-serif">
                  水
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-base lg:text-lg font-bold text-ink tracking-tight font-serif">
                  수한의원
                </span>
                <span className="text-[10px] text-ink-muted tracking-[0.2em] uppercase hidden sm:block">
                  Su Korean Medicine
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[15px] text-ink-light hover:text-forest transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-forest transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:02-1234-5678"
                className="text-sm text-forest font-medium"
              >
                02-1234-5678
              </a>
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-forest text-white text-sm font-medium rounded-full hover:bg-forest-dark transition-colors duration-300"
              >
                상담 예약
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="메뉴"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span
                  className={`block h-[2px] bg-ink transition-all duration-300 ${
                    mobileOpen ? "rotate-45 translate-y-[5px]" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] bg-ink transition-all duration-300 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] bg-ink transition-all duration-300 ${
                    mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-cream transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-serif text-ink hover:text-forest transition-colors"
              style={{
                transitionDelay: mobileOpen ? `${i * 80}ms` : "0ms",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.4s ease",
              }}
            >
              {item.label}
            </Link>
          ))}
          <div
            className="mt-4 flex flex-col items-center gap-4"
            style={{
              transitionDelay: mobileOpen ? `${navItems.length * 80}ms` : "0ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.4s ease",
            }}
          >
            <a
              href="tel:02-1234-5678"
              className="text-lg text-forest font-medium"
            >
              02-1234-5678
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="px-8 py-3 bg-forest text-white rounded-full font-medium"
            >
              상담 예약
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
