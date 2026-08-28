import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            href="/"
            className="text-2xl font-bold tracking-[-0.04em]"
          >
            RYDE<span className="text-[#00c6d7]">16</span>
          </Link>

          <Link
            href="/"
            className="text-sm text-white/50 transition-colors hover:text-white"
          >
            ← Back home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#00c6d7]">
              ABOUT RYDE16
            </p>

            <h1 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Giving teenagers
              <br />
              <span className="text-[#00c6d7]">
                room to move.
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-white/45">
              Ryde16 is building a new way for teenagers to access
              electric mobility — while keeping parents at the heart
              of the experience.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t border-white/10 px-6 py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-white/30">
              THE IDEA
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Independence shouldn&apos;t have to mean compromise.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-7 text-white/45">
            <p>
              As teenagers grow older, their world gets bigger. School,
              tuition, sports, friends, activities — suddenly getting
              from one place to another becomes a daily challenge for
              the entire family.
            </p>

            <p>
              Ryde16 is being built to make that transition simpler.
              We&apos;re creating a mobility platform that brings vehicles,
              leasing, service, support, and the parent experience
              together in one place.
            </p>

            <p>
              The goal is simple: give teenagers more independence
              while giving parents more confidence in how that
              independence works.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="border-t border-white/10 px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#00c6d7]">
            OUR APPROACH
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-8">
              <span className="text-xs text-white/25">01</span>

              <h3 className="mt-12 text-2xl font-semibold">
                Teen-first
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/40">
                Mobility designed around the real routines and needs
                of teenagers.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-8">
              <span className="text-xs text-white/25">02</span>

              <h3 className="mt-12 text-2xl font-semibold">
                Parent-aware
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/40">
                Parents aren&apos;t an afterthought. They are part of
                the experience from the beginning.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-8">
              <span className="text-xs text-white/25">03</span>

              <h3 className="mt-12 text-2xl font-semibold">
                Built for the long term
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/40">
                A platform designed to evolve as our vehicles,
                partners, services, and markets grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Be part of what&apos;s next.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/40">
            Ryde16 is coming soon. Join the waitlist to follow the
            journey and be among the first to know when we launch.
          </p>

          <Link
            href="/#waitlist"
            className="mt-10 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold"
            style={{ color: "#080808" }}
          >
            Join the Waitlist →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ryde16. All rights reserved.</p>

          <Link
            href="/"
            className="transition-colors hover:text-white/60"
          >
            ryde16.com
          </Link>
        </div>
      </footer>
    </main>
  );
}