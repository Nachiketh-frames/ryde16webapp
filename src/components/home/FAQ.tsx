"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Who is Ryde16 for?",
    answer:
      "Ryde16 is being built for teenagers who want more independence in getting around, and for parents who want that independence to come with structure, visibility, and support.",
  },
  {
    question: "What kind of vehicles will be available?",
    answer:
      "Ryde16 will offer a curated selection of electric mobility options suited to different everyday needs. The exact vehicles and specifications will depend on our partner network and availability.",
  },
  {
    question: "How does the leasing process work?",
    answer:
      "You choose a suitable ride, submit the required information, and Ryde16 helps facilitate the next steps around the lease, setup, service, and support.",
  },
  {
    question: "Can parents stay involved?",
    answer:
      "Yes. Parent involvement is a core part of the Ryde16 experience. The platform is designed to give parents greater visibility and confidence while allowing teenagers more independence.",
  },
  {
    question: "Where will Ryde16 launch?",
    answer:
      "Ryde16 is currently preparing for its initial launch in India. Availability will begin in selected locations before expanding further.",
  },
  {
    question: "When can I get a Ryde16?",
    answer:
      "Ryde16 is currently coming soon. Join the waitlist to be among the first to hear when rides become available in your area.",
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
          <p className="text-xs font-semibold tracking-[0.3em] text-[#00c6d7]">
            FAQ
          </p>

          <h2 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Questions before
            <br />
            <span className="text-[#00c6d7]">you ride.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
            The important stuff, answered without the marketing fluff.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-20 border-t border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-white/10"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
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