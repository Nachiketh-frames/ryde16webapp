export default function Problem() {
  const problems = [
    {
      number: "01",
      title: "Dependence",
      description:
        "Every trip becomes another pickup, drop-off, or coordination problem for parents.",
    },
    {
      number: "02",
      title: "Limited options",
      description:
        "Getting around independently isn't always practical with existing transport options.",
    },
    {
      number: "03",
      title: "Parent uncertainty",
      description:
        "Teenage independence shouldn't mean parents lose visibility, structure, or peace of mind.",
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
        <div className="max-w-3xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-[#00C2C7]">
            The problem
          </p>

          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
            Getting around shouldn't mean{" "}
            <span className="text-white/35">giving up control.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            For teenagers, getting to school, tuition, sports, and friends
            often means depending on parents, relying on inconsistent
            transport, or using options that weren't designed with them in
            mind.
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

        {/* Transition */}
        <div className="mt-24 border-t border-white/10 pt-10">
          <p className="text-sm uppercase tracking-[0.2em] text-white/30">
            There has to be a better way.
          </p>

          <p className="mt-4 text-2xl font-medium tracking-tight text-white sm:text-3xl">
            That’s where{" "}
            <span className="text-[#00C2C7]">Ryde16</span> comes in.
          </p>
        </div>
      </div>
    </section>
  );
}