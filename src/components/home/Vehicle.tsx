const vehicles = [
  {
    number: "01",
    category: "CITY",
    name: "Urban",
    description:
      "A practical electric ride built for everyday trips to school, tuition, sports, and around the neighbourhood.",
    specs: ["Everyday range", "Comfort focused", "City ready"],
  },
  {
    number: "02",
    category: "COMMUTE",
    name: "Go",
    description:
      "A balanced option for teenagers who need a little more range and flexibility in their everyday routine.",
    specs: ["Extended range", "Daily commute", "Easy to manage"],
  },
  {
    number: "03",
    category: "PREMIUM",
    name: "Pro",
    description:
      "A higher-spec electric ride for families looking for more capability without compromising the experience.",
    specs: ["Higher range", "Premium setup", "Built for more"],
  },
];

export default function Vehicles() {
  return (
    <section
      id="rides"
      className="relative overflow-hidden bg-[#080808] px-6 py-28 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-[#00c2c7]">
            Available rides
          </p>

          <h2 className="font-[var(--font-display)] text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            The right ride for
            <br />
            <span className="text-[#00c2c7]">where they&apos;re going.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Explore electric mobility options designed around everyday
            teenage travel — from getting to school to heading out with
            friends.
          </p>
        </div>

        {/* Vehicle cards */}
        <div className="mt-20 grid gap-4 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <article
              key={vehicle.number}
              className="group relative min-h-[500px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
            >
              {/* Number */}
              <div className="flex items-start justify-between">
                <span className="text-xs font-medium tracking-[0.2em] text-white/30">
                  {vehicle.number}
                </span>

                <span className="text-xs font-medium tracking-[0.2em] text-[#00c2c7]">
                  {vehicle.category}
                </span>
              </div>

              {/* Vehicle visual placeholder */}
              <div className="flex h-64 items-center justify-center">
                <div className="relative h-32 w-56 opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100">
                  <div className="absolute bottom-8 left-8 h-20 w-32 rounded-[45%] border-2 border-white/30" />

                  <div className="absolute bottom-3 left-2 h-14 w-14 rounded-full border border-white/20" />
                  <div className="absolute bottom-3 right-2 h-14 w-14 rounded-full border border-white/20" />

                  <div className="absolute bottom-16 left-24 h-16 w-2 rotate-[18deg] rounded-full bg-white/30" />

                  <div className="absolute bottom-[76px] left-[96px] h-2 w-16 rotate-[-8deg] rounded-full bg-[#00c2c7]/60" />
                </div>
              </div>

              {/* Content */}
              <div className="mt-auto">
                <h3 className="text-3xl font-semibold tracking-tight">
                  {vehicle.name}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-white/45">
                  {vehicle.description}
                </p>

                {/* Specs */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {vehicle.specs.map((spec) => (
                    <span
                      key={spec}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/45"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <button className="mt-8 text-sm font-medium text-white transition-colors group-hover:text-[#00c2c7]">
                  Packages coming soon <span className="ml-1"></span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-24 border-t border-white/10 pt-8">
          <p className="text-xl tracking-tight text-white/40 sm:text-2xl">
            <span className="text-white">Not just a vehicle.</span>{" "}
            A mobility experience built around them.
          </p>
        </div>
      </div>
    </section>
  );
}