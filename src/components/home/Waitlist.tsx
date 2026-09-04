"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) return;

    setLoading(true);
    setError("");

    const { error } = await supabase
      .from("waitlist")
      .insert([{ email: normalizedEmail }]);

    if (error) {
      if (error.code === "23505") {
        setError("You're already on the waitlist.");
      } else {
        console.error("Waitlist submission error:", error);
        setError("Something went wrong. Please try again.");
      }

      setLoading(false);
      return;
    }

    setSubmitted(true);
    setLoading(false);
  }

  return (
    <section
      id="waitlist"
      className="bg-[#080808] px-6 py-32 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] px-8 py-20 sm:px-12 lg:px-20 lg:py-24">
          {/* Subtle glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-[#00C2C7]/10 blur-[120px]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#00C2C7]">
              RYDE16 · COMING SOON
            </p>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Lease smarter.
              <br />
              <span className="text-[#00C2C7]">Move independently.</span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
              Join the waitlist for updates on Ryde16’s launch, available
              electric scooters, and upcoming leasing options for teenagers
              aged 16–18.
            </p>

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-12 flex max-w-xl flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="waitlist-email" className="sr-only">
                  Email address
                </label>

                <input
                  id="waitlist-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email address"
                  disabled={loading}
                  className="h-14 flex-1 rounded-full border border-white/10 bg-white/[0.04] px-6 text-sm text-white outline-none placeholder:text-white/25 transition-colors focus:border-[#00C2C7]/50 disabled:cursor-not-allowed disabled:opacity-50"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="h-14 rounded-full bg-white px-7 text-sm font-semibold text-[#080808] transition-transform duration-200 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Joining..." : "Join the Waitlist →"}
                </button>
              </form>
            ) : (
              <div className="mx-auto mt-12 max-w-xl rounded-full border border-[#00C2C7]/30 bg-[#00C2C7]/5 px-6 py-4 text-sm text-[#00C2C7]">
                You&apos;re on the list. We&apos;ll keep you posted.
              </div>
            )}

            {error && !submitted && (
              <p className="mt-4 text-sm text-red-400">{error}</p>
            )}

            <p className="mt-5 text-xs text-white/25">
              No spam. Just meaningful updates about Ryde16.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}