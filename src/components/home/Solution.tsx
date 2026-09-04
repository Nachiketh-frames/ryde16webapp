export default function Solution() {
  const pillars = [
    {
      number: "01",
      title: "Lease instead of buy",
      description:
        "Access a suitable electric scooter without paying the full purchase price upfront.",
    },
    {
      number: "02",
      title: "Reduce ownership burden",
      description:
        "Avoid taking direct ownership depreciation and the uncertainty of reselling a vehicle after the teenager turns 18.",
    },
    {
      number: "03",
      title: "Built around the 16–18 window",
      description:
        "A mobility arrangement designed around the period when teenagers need independence before becoming eligible for a driving licence.",
    },
  ];

  return (
    <section
      id="why-ryde16"
      className="relative overflow-hidden bg-[#080808] px-6 py-32 text-white sm:px-10 lg:px-16 lg:py-40"
    >
      <div className="pointer-events-none absolute right-[-15%] top-1/4 h-[600px] w-[600px] rounded-full bg-[#00C2C7]/[0.025] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Intro */}
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-[#00C2C7]">
              The Ryde16 solution
            </p>

            <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              Lease the vehicle.
              <br />
              <span className="text-[#00C2C7]">
                Avoid the ownership burden.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-white/50 sm:text-lg lg:pb-2">
            Ryde16 is building a platform that helps parents access suitable
            electric scooters for teenagers aged 16–18 through a structured
            leasing experience. The goal is to make short-term mobility more
            practical and financially sensible than purchasing outright.
          </p>
        </div>

        {/* Pillars */}
        <div className="mt-24 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.number}
              className="group relative min-h-[320px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] lg:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-medium tracking-[0.2em] text-white/25">
                  {pillar.number}
                </span>

                <span className="text-xl text-[#00C2C7] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  ↗
                </span>
              </div>

              <div className="absolute bottom-8 left-8 right-8 lg:bottom-10 lg:left-10 lg:right-10">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {pillar.title}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-white/40">
                  {pillar.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-20 border-t border-white/10 pt-10">
          <p className="max-w-5xl text-2xl font-medium leading-tight tracking-tight text-white/80 sm:text-3xl lg:text-4xl">
            Instead of owning a vehicle that may become unnecessary,
            <span className="text-white/30">
              {" "}
              lease the mobility they need for the years it matters.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}