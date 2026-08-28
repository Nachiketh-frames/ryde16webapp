"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Ryde16", href: "#why-ryde16" },
  { label: "FAQ", href: "#faq" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Ryde16 home"
          className="relative flex h-16 w-[180px] items-center overflow-hidden"
          onClick={closeMenu}
        >
          <Image
            src="/images/ryde16-logo.png"
            alt="Ryde16"
            width={520}
            height={200}
            priority
            className="absolute left-1/2 top-1/2 w-[420px] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium !text-white/70 transition-colors hover:!text-white"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="#waitlist"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white px-6 py-3 text-sm font-semibold transition-all duration-200 hover:scale-[1.03] hover:bg-white/90"
            style={{ color: "#080808" }}
          >
            Join the Waitlist
            <span className="ml-2">→</span>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10 md:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-px w-5 bg-white transition-transform duration-200 ${
                menuOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />

            <span
              className={`block h-px w-5 bg-white transition-transform duration-200 ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        className={`absolute inset-x-4 top-20 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-xl px-4 py-4 text-sm font-medium !text-white/70 transition-colors hover:bg-white/[0.04] hover:!text-white"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="#waitlist"
            onClick={closeMenu}
            className="mt-2 flex items-center justify-center rounded-xl bg-white px-4 py-4 text-sm font-semibold"
            style={{ color: "#080808" }}
          >
            Join the Waitlist
            <span className="ml-2">→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}