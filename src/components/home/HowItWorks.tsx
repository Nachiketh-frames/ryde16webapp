const steps = [
  {
    number: "01",
    title: "Explore",
    description:
      "Review the electric scooter options and leasing arrangements available through Ryde16.",
  },
  {
    number: "02",
    title: "Choose",
    description:
      "Select an option based on the teenager’s everyday travel needs, family preferences, and availability.",
  },
  {
    number: "03",
    title: "Apply",
    description:
      "The parent provides the required information and begins the structured leasing process.",
  },
  {
    number: "04",
    title: "Lease and ride",
    description:
      "Access the vehicle through the agreed arrangement, with the next steps around setup, service, and support facilitated through Ryde16.",
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
        <div className="max-w-4xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-[#00C2C7]">
            How it works
          </p>

          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
            A simpler route from
            <br />
            <span className="text-white/30">
              need to leased mobility.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Ryde16 brings the vehicle selection, parent application, and
            leasing process into one guided experience.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-24">
          {steps.map((step) => (
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
              For teenagers
            </p>

            <h3 className="mt-6 text-3xl font-semibold tracking-tight">
              Independent mobility.
            </h3>

            <p className="mt-4 max-w-md text-sm leading-6 text-white/40">
              A practical way to travel to school, tuition, sports, and other
              everyday destinations without depending on a parent for every
              trip.
            </p>
          </div>

          <div className="bg-[#0b0b0b] p-8 lg:p-12">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#00C2C7]">
              For parents
            </p>

            <h3 className="mt-6 text-3xl font-semibold tracking-tight">
              A more sensible cost.
            </h3>

            <p className="mt-4 max-w-md text-sm leading-6 text-white/40">
              Avoid purchasing an expensive vehicle for a short-term need,
              while keeping the leasing decision and overall experience
              structured around the family.
            </p>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-20">
          <p className="text-2xl font-medium tracking-tight text-white/80 sm:text-3xl">
            The vehicle is temporary.
            <span className="text-white/30">
              {" "}
              The need for practical mobility is real.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}