"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What exactly is Ryde16?",
    answer:
      "Ryde16 is a platform being built to help parents lease suitable electric scooters for teenagers aged 16–18. It is designed to make short-term mobility more practical than purchasing an expensive vehicle outright.",
  },
  {
    question: "Why lease instead of buy?",
    answer:
      "A suitable electric scooter may cost approximately ₹65,000–₹70,000. Since a teenager may use a speed-limited vehicle for only around two years before becoming eligible for a driving licence, purchasing can create a large upfront cost, depreciation, and resale burden. Leasing is designed to reduce that ownership burden.",
  },
  {
    question: "Will leasing definitely cost less?",
    answer:
      "Ryde16 is being designed to reduce the upfront and ownership burden compared with purchasing. The exact savings will depend on the vehicle, lease duration, supplier terms, and final pricing, which are still being developed.",
  },
  {
    question: "Who is the customer?",
    answer:
      "Parents are the primary customers and decision-makers. Teenagers are the intended riders, while the application and leasing arrangement are designed around parental involvement.",
  },
  {
    question: "What vehicles will be available?",
    answer:
      "Ryde16 is working toward a curated selection of suitable electric scooters. Exact models, specifications, pricing, and packages will depend on our partner network and availability.",
  },
  {
    question: "How will the leasing process work?",
    answer:
      "Parents will be able to explore suitable options, select a preferred vehicle, provide the required information, and begin the leasing process through Ryde16. Final terms and requirements will be announced closer to launch.",
  },
  {
    question: "Can parents stay involved?",
    answer:
      "Yes. Parent involvement is central to the Ryde16 experience. The platform is being designed around parental decision-making, structure, and confidence while giving teenagers more practical independence.",
  },
  {
    question: "When will Ryde16 launch?",
    answer:
      "Ryde16 is currently preparing for its initial launch in India. Join the waitlist to receive updates as the launch location, vehicles, and leasing options become available.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="bg-[#080808] px-6 py-32 text-white lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#00C2C7]">
            FAQ
          </p>

          <h2 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Questions before
            <br />
            <span className="text-[#00C2C7]">you lease.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
            The important details about the problem Ryde16 is solving and the
            leasing experience we are building.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-20 border-t border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-8 py-7 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-medium sm:text-xl">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-lg text-white/60 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-7 pr-12 text-sm leading-7 text-white/40 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}