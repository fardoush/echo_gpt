import React from "react";
import { Sparkles, Brain, Gem, Zap, Cpu, ShieldCheck } from "lucide-react";
import AIModelCard from "./AIModelCard";

const AIModels = () => {
  const models = [
    {
      id: "gpt-5",
      name: "GPT-5",
      provider: "OpenAI",
      badge: "Flagship",
      description:
        "Most capable model for complex reasoning, creative writing, and multi-step problem solving.",
      tags: ["Reasoning", "Creative Writing", "Code Generation"],
      Icon: Sparkles,
      accentColor: "bg-emerald-500",
      hoverShadow: "hover:shadow-[0_15px_30px_-5px_rgba(16,185,129,0.25)]",
      hoverBorder: "hover:border-emerald-500/40",
      badgeBg: "bg-emerald-500/15 border border-emerald-500/30",
      badgeText: "text-emerald-400",
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-400",
    },
    {
      id: "claude-4.7",
      name: "Claude 4.7 Sonnet",
      provider: "Anthropic",
      description:
        "Exceptional at nuanced analysis, long-form writing, and thoughtful, safety-conscious responses.",
      tags: ["Analysis", "Long Context", "Writing"],
      Icon: Brain,
      accentColor: "bg-orange-500",
      hoverShadow: "hover:shadow-[0_15px_30px_-5px_rgba(249,115,22,0.25)]",
      hoverBorder: "hover:border-orange-500/40",
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-400",
    },
    {
      id: "gemini-3.1",
      name: "Gemini 3.1 Pro",
      provider: "Google",
      description:
        "Fast, multimodal model with strong performance across text, code, and visual understanding.",
      tags: ["Multimodal", "Speed", "Search"],
      Icon: Gem,
      accentColor: "bg-blue-500",
      hoverShadow: "hover:shadow-[0_15px_30px_-5px_rgba(59,130,246,0.25)]",
      hoverBorder: "hover:border-blue-500/40",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
    },
    {
      id: "grok-3",
      name: "Grok 3",
      provider: "xAI",
      description:
        "Real-time web access and witty, direct responses powered by advanced reasoning capabilities.",
      tags: ["Real-Time Data", "Uncensored", "Coding"],
      Icon: Zap,
      accentColor: "bg-purple-500",
      hoverShadow: "hover:shadow-[0_15px_30px_-5px_rgba(168,85,247,0.25)]",
      hoverBorder: "hover:border-purple-500/40",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-400",
    },
    {
      id: "deepseek-r1",
      name: "DeepSeek R1",
      provider: "DeepSeek",
      description:
        "Open-weights reasoning model optimized for mathematical logic, complex coding, and step-by-step thinking.",
      tags: ["Math Logic", "Open Weights", "Reasoning"],
      Icon: Cpu,
      accentColor: "bg-cyan-500",
      hoverShadow: "hover:shadow-[0_15px_30px_-5px_rgba(6,182,212,0.25)]",
      hoverBorder: "hover:border-cyan-500/40",
      iconBg: "bg-cyan-500/10",
      iconColor: "text-cyan-400",
    },
    {
      id: "llama-3.3",
      name: "Llama 3.3 70B",
      provider: "Meta AI",
      description:
        "Highly efficient open model offering industry-leading speed for general language processing and summarization.",
      tags: ["Fast Inference", "Summarization", "Open Source"],
      Icon: ShieldCheck,
      accentColor: "bg-indigo-500",
      hoverShadow: "hover:shadow-[0_15px_30px_-5px_rgba(99,102,241,0.25)]",
      hoverBorder: "hover:border-indigo-500/40",
      iconBg: "bg-indigo-500/10",
      iconColor: "text-indigo-400",
    },
  ];

  return (
    <section id="models" className="relative py-10 md:py-16 lg:py-24 overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] opacity-15 blur-[140px] rounded-full pointer-events-none bg-[var(--accent-primary)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 block text-[var(--accent-primary)]">
            AI MODELS
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading leading-tight mb-4">
            The world's best models,{" "}
            <span className="text-[var(--accent-primary)]">unified</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg font-normal text-[var(--text-primary)]/70 max-w-2xl mx-auto">
            Access leading AI assistants from every major provider. Switch
            models mid-conversation or compare them side by side.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model) => (
            <AIModelCard key={model.id} model={model} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIModels;