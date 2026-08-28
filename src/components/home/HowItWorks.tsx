const steps = [
  {
    number: "01",
    title: "Explore",
    description:
      "Discover available electric mobility options through the Ryde16 experience.",
  },
  {
    number: "02",
    title: "Apply",
    description:
      "Choose an option and provide the information needed to begin the process.",
  },
  {
    number: "03",
    title: "Get set up",
    description:
      "Ryde16 facilitates the next steps around your selected mobility option.",
  },
  {
    number: "04",
    title: "Ride",
    description:
      "Give them more independence while keeping parents part of the experience.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#080808] px-6 py-32 text-white sm:px-10 lg:px-16 lg:py-40"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-[#00C2C7]">
            How it works
          </p>

          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
            From choosing a ride
            <br />
            <span className="text-white/30">to getting on the road.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="mt-24">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group grid border-t border-white/10 py-8 transition-colors duration-300 hover:border-white/20 md:grid-cols-[100px_1fr_1.2fr] md:items-center md:py-10"
            >
              <span className="text-xs font-medium tracking-[0.2em] text-white/25">
                {step.number}
              </span>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight md:mt-0 md:text-3xl">
                {step.title}
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/40 md:mt-0 md:justify-self-end">
                {step.description}
              </p>
            </div>
          ))}

          <div className="border-t border-white/10" />
        </div>

        {/* Dual perspective */}
        <div className="mt-24 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
          <div className="bg-[#0b0b0b] p-8 lg:p-12">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#00C2C7]">
              For them
            </p>

            <h3 className="mt-6 text-3xl font-semibold tracking-tight">
              More freedom.
            </h3>

            <p className="mt-4 max-w-md text-sm leading-6 text-white/40">
              A more independent way to get where they need to go, without
              making every trip depend on someone else.
            </p>
          </div>

          <div className="bg-[#0b0b0b] p-8 lg:p-12">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#00C2C7]">
              For you
            </p>

            <h3 className="mt-6 text-3xl font-semibold tracking-tight">
              More confidence.
            </h3>

            <p className="mt-4 max-w-md text-sm leading-6 text-white/40">
              A mobility experience designed with parents in mind, rather
              than treating them as an afterthought.
            </p>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-20">
          <p className="text-2xl font-medium tracking-tight text-white/80 sm:text-3xl">
            One experience.
            <span className="text-white/30"> Built for two perspectives.</span>
          </p>
        </div>
      </div>
    </section>
  );
}