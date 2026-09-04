import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#080808] text-white"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[38%] h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00C2C7]/[0.045] blur-[120px]" />

        <div className="absolute bottom-[-300px] left-1/2 h-[500px] w-[1000px] -translate-x-1/2 rounded-full border border-white/[0.035]" />
      </div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to bottom, black 0%, transparent 75%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 pb-20 pt-32 lg:px-8">
        <div className="max-w-5xl text-center">
          {/* Eyebrow */}
          <div className="mb-7 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#00C2C7]/60" />

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#00C2C7]">
              Coming Soon · India
            </p>

            <span className="h-px w-8 bg-[#00C2C7]/60" />
          </div>

          {/* Headline */}
          <h1 className="text-5xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[92px]">
            Don&apos;t buy a
            <br />
            <span className="text-[#00C2C7]">two-year vehicle.</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            Ryde16 helps parents lease suitable electric scooters for
            teenagers aged 16–18, instead of purchasing an expensive vehicle
            that may become less useful when they turn 18.
          </p>

          {/* Supporting line */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/35 sm:text-base">
            Lower the upfront burden. Avoid direct ownership depreciation.
            Lease the mobility they need.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#waitlist"
              className="group inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold transition-all duration-300 hover:scale-[1.03] hover:bg-white/90"
              style={{ color: "#080808" }}
            >
              Join the Waitlist

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="#how-it-works"
              className="group inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.04]"
            >
              See How It Works

              <span className="ml-2 transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <Link
        href="#problem"
        aria-label="Scroll to discover Ryde16"
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-white/30 transition-colors hover:text-white/60 sm:flex"
      >
        <span>Scroll to explore</span>
        <span className="h-10 w-px bg-gradient-to-b from-white/30 to-transparent" />
      </Link>
    </section>
  );
}