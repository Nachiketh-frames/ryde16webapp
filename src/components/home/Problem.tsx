export default function Problem() {
  const problems = [
    {
      number: "01",
      title: "A short ownership window",
      description:
        "Teenagers aged 16–18 may need a speed-limited electric scooter for only around two years before becoming eligible to obtain a driving licence.",
    },
    {
      number: "02",
      title: "A ₹65,000–₹70,000 purchase",
      description:
        "Buying a suitable scooter can mean paying approximately ₹65,000–₹70,000 upfront for a vehicle that may not remain useful for the same purpose after the teenager turns 18.",
    },
    {
      number: "03",
      title: "Depreciation and resale",
      description:
        "The family also takes on depreciation, resale uncertainty, and the responsibility of finding another buyer when the vehicle is no longer needed.",
    },
  ];

  return (
    <section
      id="problem"
      className="relative overflow-hidden bg-[#080808] px-6 py-32 text-white sm:px-10 lg:px-16 lg:py-40"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#00C2C7]/[0.035] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section intro */}
        <div className="max-w-4xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-[#00C2C7]">
            The problem
          </p>

          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
            Buying a two-year
            <br />
            <span className="text-white/35">vehicle makes little sense.</span>
          </h2>

          <p className="mt-8 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            For many families, the need is temporary. A teenager may need
            independent transport between 16 and 18, but purchasing a
            speed-limited electric scooter creates a large ownership cost for
            a relatively short period of use.
          </p>
        </div>

        {/* Problem cards */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {problems.map((problem) => (
            <article
              key={problem.number}
              className="group bg-[#0b0b0b] p-8 transition-colors duration-300 hover:bg-[#101010] lg:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-medium tracking-[0.2em] text-white/25">
                  {problem.number}
                </span>

                <span className="text-[#00C2C7] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  ↗
                </span>
              </div>

              <h3 className="mt-20 text-2xl font-semibold tracking-tight">
                {problem.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/40">
                {problem.description}
              </p>
            </article>
          ))}
        </div>

        {/* Financial comparison */}
        <div className="mt-20 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 lg:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/30">
              Traditional purchase
            </p>

            <h3 className="mt-6 text-3xl font-semibold tracking-tight">
              Pay for the whole vehicle.
            </h3>

            <p className="mt-4 text-sm leading-6 text-white/40">
              Pay the purchase price upfront, use the scooter for the relevant
              period, and absorb depreciation and resale risk.
            </p>
          </div>

          <div className="rounded-2xl border border-[#00C2C7]/20 bg-[#00C2C7]/[0.035] p-8 lg:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#00C2C7]">
              The Ryde16 approach
            </p>

            <h3 className="mt-6 text-3xl font-semibold tracking-tight">
              Pay for the mobility you need.
            </h3>

            <p className="mt-4 text-sm leading-6 text-white/50">
              Lease the vehicle through a structured arrangement designed to
              reduce the upfront burden and avoid direct ownership
              depreciation.
            </p>
          </div>
        </div>

        {/* Transition */}
        <div className="mt-24 border-t border-white/10 pt-10">
          <p className="text-sm uppercase tracking-[0.2em] text-white/30">
            The better question
          </p>

          <p className="mt-4 max-w-4xl text-2xl font-medium tracking-tight text-white sm:text-3xl">
            Why purchase an expensive vehicle for a short-term need when you
            can{" "}
            <span className="text-[#00C2C7]">
              lease the mobility instead?
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}