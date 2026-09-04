const perspectives = [
  {
    label: "FOR TEENAGERS",
    title: "Mobility before 18.",
    description:
      "A practical way to travel to school, tuition, sports, and everyday destinations during the period before they become eligible for a driving licence.",
  },
  {
    label: "FOR PARENTS",
    title: "Less ownership burden.",
    description:
      "A leasing-first alternative to paying ₹65,000–₹70,000 upfront for a vehicle that may become less useful after only around two years.",
  },
];

export default function ParentExperience() {
  return (
    <section className="bg-[#080808] px-6 py-32 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#00C2C7]">
              BUILT FOR BOTH SIDES
            </p>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Practical mobility
              <br />
              for them.
              <br />
              <span className="text-[#00C2C7]">
                Smarter ownership for you.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-white/50 lg:pb-2 lg:text-lg">
            Ryde16 is designed around a simple reality: teenagers may need
            independent transport before 18, but families should not have to
            purchase and depreciate an expensive vehicle for a short-term
            requirement.
          </p>
        </div>

        {/* Perspective cards */}
        <div className="mt-24 grid gap-4 lg:grid-cols-2">
          {perspectives.map((item, index) => (
            <article
              key={item.label}
              className="group min-h-[360px] rounded-2xl border border-white/10 bg-[#0a0a0a] p-10 transition-colors duration-300 hover:border-white/20 sm:p-12"
            >
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.25em] text-[#00C2C7]">
                    {item.label}
                  </span>

                  <span className="text-xs tracking-[0.2em] text-white/20">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-auto">
                  <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-6 text-white/40 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-24 border-t border-white/10 pt-10">
          <p className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-white/30 sm:text-4xl lg:text-5xl">
            <span className="text-white">A short-term need.</span>{" "}
            A more sensible way to meet it.
          </p>
        </div>
      </div>
    </section>
  );
}