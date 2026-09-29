import { Dna, ExternalLink, Play } from "lucide-react";
import React from "react";

const Cta = () => {
  return (
    <section
      id="get-started"
      className="relative py-10 md:py-16 lg:py-24 bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden transition-colors duration-300"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[var(--accent-primary)] opacity-10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--bg-secondary)] border border-[var(--border-color)] p-8 sm:p-12 md:p-16 text-center shadow-xl backdrop-blur-xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-50" />

          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading leading-tight mb-4">
              Ready to transform{" "}
              <span className="text-[var(--accent-primary)]">
                your browsing?
              </span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[var(--text-primary)]/60 font-normal max-w-2xl mb-8 leading-relaxed">
              Join 250,000+ users who chat with AI without leaving their tab.
              Free to start, no credit card required.
            </p>

            <div className="flex items-center justify-center gap-3 sm:gap-4 flex-col sm:flex-row w-full sm:w-auto">
              <a
                href="#chrome-store"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-[220px] px-4 py-3 sm:py-3.5 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-white font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[var(--accent-primary)]/20 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
                <span>Add to Chrome — Free</span>
              </a>

              <a
                href="#web-app"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-[220px] px-4 py-3 sm:py-3.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0" />
                <span>Try Web App</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
