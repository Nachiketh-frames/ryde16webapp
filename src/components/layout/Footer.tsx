import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808] px-6 pb-8 pt-20 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main footer */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="Ryde16 home"
              className="flex h-12 w-fit items-center"
            >
              <Image
                src="/images/ryde16-logo.png"
                alt="Ryde16"
                width={280}
                height={80}
                className="h-auto w-[220px]"
                priority
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-6 text-white/40">
              A leasing-first mobility platform helping parents provide
              suitable electric scooters for teenagers aged 16–18 without
              unnecessary ownership costs.
            </p>

            <p className="mt-6 text-xs font-medium tracking-[0.2em] text-[#00c6d7]">
              COMING SOON · INDIA
            </p>

            <a
              href="https://www.instagram.com/ryde16.official/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-white/55 transition-colors hover:text-white"
            >
              Instagram
            </a>
          </div>

          {/* Explore */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-white/30">
              EXPLORE
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              <Link
                href="#how-it-works"
                className="w-fit text-sm text-white/55 transition-colors hover:text-white"
              >
                How It Works
              </Link>

              <Link
                href="#why-ryde16"
                className="w-fit text-sm text-white/55 transition-colors hover:text-white"
              >
                Why Ryde16
              </Link>

              <Link
                href="#rides"
                className="w-fit text-sm text-white/55 transition-colors hover:text-white"
              >
                Explore Ryde16
              </Link>

              <Link
                href="#faq"
                className="w-fit text-sm text-white/55 transition-colors hover:text-white"
              >
                FAQ
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-white/30">
              COMPANY
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              <Link
                href="/about"
                className="w-fit text-sm text-white/55 transition-colors hover:text-white"
              >
                About
              </Link>

              <Link
                href="#waitlist"
                className="w-fit text-sm text-white/55 transition-colors hover:text-white"
              >
                Join the Waitlist
              </Link>

              <p className="w-fit text-sm text-white/55">
                ryde16blr@gmail.com
              </p>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Ryde16. All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="transition-colors hover:text-white/60"
              >
                Privacy
              </Link>

              <Link
                href="/terms"
                className="transition-colors hover:text-white/60"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}