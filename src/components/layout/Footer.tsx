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
              className="inline-block"
            >
              <span className="text-2xl font-bold tracking-[-0.04em]">
                RYDE<span className="text-[#00c6d7]">16</span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-6 text-white/40">
              A smarter way for teenagers to access electric mobility —
              built around their independence and your peace of mind.
            </p>

            <p className="mt-6 text-xs font-medium tracking-[0.2em] text-[#00c6d7]">
              COMING SOON · INDIA
            </p>
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
                Available Rides
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

              <Link
                href="/contact"
                className="w-fit text-sm text-white/55 transition-colors hover:text-white"
              >
                Contact
              </Link>
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