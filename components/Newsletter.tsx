"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="bg-forest-green flex flex-col px-6 py-16 md:px-24 text-warm-cream border-t border-forest-green/20">
      <div className="flex flex-col gap-4 items-center w-full max-w-4xl mx-auto text-center md:items-start md:text-left">
        <p className="text-xs sm:text-sm text-sand font-medium tracking-[0.25em] uppercase">
          STAY INSPIRED
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-normal text-warm-cream">
          Let The Journey Begin
        </h2>
        <p className="text-gray-200 text-sm sm:text-base md:text-lg font-light max-w-xl">
          Get travel inspiration, exclusive destination guides, and ideas for
          your next adventure delivered straight to your inbox.
        </p>

        {submitted ? (
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-sand/40 text-warm-cream mt-2 animate-in fade-in">
            <CheckCircle2 className="w-5 h-5 text-sand shrink-0" />
            <p className="text-sm font-medium">
              Thank you! You are now subscribed to ODYSSE travel inspirations.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-3 sm:flex-row mt-2"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="bg-white text-forest-green placeholder:text-gray-400 w-full sm:w-2/3 h-14 px-5 rounded-xl border-2 border-transparent focus:border-sand focus:outline-none transition-colors text-sm sm:text-base"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 bg-sand h-14 rounded-xl text-forest-green font-semibold tracking-wider hover:bg-warm-cream transition-colors cursor-pointer text-xs sm:text-sm uppercase flex items-center justify-center gap-2 shadow-xs"
            >
              <span>SUBSCRIBE</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="text-gray-400 text-xs mt-2">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
