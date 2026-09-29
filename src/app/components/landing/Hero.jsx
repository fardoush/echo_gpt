"use client";

import Link from "next/link";
import { Dna, Play, ArrowRight, ExternalLink } from "lucide-react";

export default function Hero() {
  const stats = [
    { value: "250K+", label: "Active Users" },
    { value: "6+", label: "AI Models" },
    { value: "50M+", label: "Messages Sent" },
    { value: "4.8/5", label: "Avg Rating" },
  ];

  return (
    <section className="relative pt-10 pb-20 md:pt-20 md:pb-28 overflow-hidden transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] opacity-25 blur-[130px] rounded-full pointer-events-none bg-[var(--accent-primary)]" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-8 backdrop-blur-sm transition-all cursor-pointer"
          style={{
            backgroundColor: "var(--bg-secondary)",
            color: "var(--text-secondary)",
            borderColor: "var(--border-color)",
            borderWidth: "1px",
          }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse bg-[var(--accent-primary)]" />
          <span>Now supporting EchoGPT</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-heading leading-[1.1] mb-6">
          <span className="">One sidebar.</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-400 to-purple-300">
            Every AI model.
          </span>
        </h1>
        <p className="max-w-2xl mx-auto  sm:text-lg leading-relaxed mb-10 opacity-60">
          Chat with GPT-5, Claude, Gemini, Grok, and more — right inside your
          browser. Summarize any webpage, explain selected text, and compare AI
          responses without ever leaving your tab.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <Link
            href="#add-to-chrome"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            style={{
              backgroundColor: "var(--accent-primary)",
              boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.3)",
            }}
          >
            <ExternalLink className="w-5 h-5 text-white" />
            <span>Open App — Free</span>
          </Link>

          <Link
            href="#try-web-app"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-medium rounded-xl transition-all duration-200"
            style={{
              backgroundColor: "var(--bg-secondary)",
              color: "var(--text-primary)",
              borderColor: "var(--border-color)",
              borderWidth: "1px",
            }}
          >
            <Play className="w-4 h-4 fill-current opacity-70" />
            <span>Try the Web App</span>
          </Link>
        </div>
        <p className="text-xs sm:text-sm mb-16 opacity-60">
          Free forever plan available. No credit card required.
        </p>

        <div
          className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl backdrop-blur-md shadow-xl bg-[var(--bg-card)]"
          style={{
            borderColor: "var(--border-color)",
            borderWidth: "1px",
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              <span
                className="text-2xl sm:text-3xl font-extrabold font-heading mb-1"
                style={{ color: "var(--accent-primary)" }}
              >
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium opacity-60">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
