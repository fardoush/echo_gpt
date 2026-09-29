"use client";

import {
  Sparkles,
  Layers,
  Zap,
  Globe,
  ShieldCheck,
  Cpu,
  Command,
  History,
} from "lucide-react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      id:1,
      icon: Layers,
      title: "Multi-Model Switcher",
      description:
        "Switch between GPT-5, Claude, Gemini, and Grok seamlessly in a single sidebar conversation.",
    },
    {
      id:2,
      icon: Globe,
      title: "Webpage Summarization",
      description:
        "Summarize long articles, PDF documents, or YouTube videos instantly with one click.",
    },
    {
      id:3,
      icon: Zap,
      title: "Inline Text Actions",
      description:
        "Highlight any text on any website to explain, rewrite, translate, or fix grammar on the fly.",
    },
    {
      id:4,
      icon: Sparkles,
      title: "Side-by-Side Comparison",
      description:
        "Compare responses from different AI models simultaneously to get the most accurate answers.",
    },
    {
      id:5,
      icon: Cpu,
      title: "Context-Aware AI",
      description:
        "The AI understands the webpage context you are viewing to provide pinpoint accurate responses.",
    },
    {
      id:6,
      icon: ShieldCheck,
      title: "Privacy First",
      description:
        "Your data is encrypted end-to-end. We never train public AI models on your private browsing data.",
    },
    {
      id:7,
      icon: Command,
      title: "Custom Shortcuts & Prompts",
      description:
        "Set up personalized keyboard shortcuts and save your favorite prompt templates for quick access.",
    },
    {
      id:8,
      icon: History,
      title: "Smart Sync & History",
      description:
        "Access your chat history across devices with instant cloud sync and intelligent search capabilities.",
    },
  ];
  return (
    <section id="features" className="relative py-10 md:py-16 lg:py-24 overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 block text-[var(--accent-primary)]">
            FEATURES
          </span>

          <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading leading-tight mb-4">
            <span className="block whitespace-nowrap">
              Everything you need,
            </span>
            <span className="block whitespace-nowrap text-[var(--accent-primary)]">
              nothing you don't
            </span>
          </h2>

          <p className="text-[var(--text-primary)]/60 text-base sm:text-lg font-normal text- max-w-2xl mx-auto">
            Powerful AI tools designed to live alongside your browsing. No tab
            switching, no context switching.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature,id) => {
            const IconComponent = feature.icon;
            return (
              <FeatureCard
                key={feature.id}
                feature={feature}
                IconComponent={IconComponent}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
