export default function Vehicles() {
  return (
    <section
      id="rides"
      className="relative overflow-hidden bg-[#080808] px-6 py-28 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="max-w-4xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-[#00C2C7]">
            What Ryde16 is building
          </p>

          <h2 className="font-[var(--font-display)] text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Suitable mobility.
            <br />
            <span className="text-[#00C2C7]">
              Without unnecessary ownership.
            </span>
          </h2>

          <p className="mt-8 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Ryde16 is working toward a curated selection of electric scooters
            suited to everyday teenage travel. Exact vehicle models,
            specifications, pricing, and leasing packages will depend on our
            partner network and final availability.
          </p>
        </div>

        {/* Concept cards */}
        <div className="mt-20 grid gap-4 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Everyday travel",
              description:
                "For regular trips such as school, tuition, sports, and nearby destinations.",
            },
            {
              number: "02",
              title: "A structured lease",
              description:
                "A guided arrangement designed around the family’s needs rather than an outright purchase.",
            },
            {
              number: "03",
              title: "A transition at 18",
              description:
                "A mobility solution designed around the period before the teenager becomes eligible for a driving licence.",
            },
          ].map((item) => (
            <article
              key={item.number}
              className="min-h-[280px] rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.04] lg:p-10"
            >
              <span className="text-xs font-medium tracking-[0.2em] text-white/30">
                {item.number}
              </span>

              <h3 className="mt-20 text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/40">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-24 border-t border-white/10 pt-8">
          <p className="text-xl tracking-tight text-white/40 sm:text-2xl">
            <span className="text-white">Vehicle details are coming soon.</span>{" "}
            The leasing-first experience is the foundation.
          </p>
        </div>
      </div>
    </section>
  );
}