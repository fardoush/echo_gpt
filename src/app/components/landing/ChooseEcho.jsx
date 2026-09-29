import { GitCompare, Keyboard, Shield, Zap } from "lucide-react";
import React from "react";
import ChooseCard from "./ChooseCard";

const ChooseEcho = () => {
  const chooses = [
    {
      id: 1,
      title: "Zero Context Switching",
      description:
        "AI lives in your sidebar, not a new tab. Stay focused on what you are reading while the AI works alongside you.",
      icon: Zap,
    },
    {
      id: 2,
      title: "Compare Before You Trust",
      description:
        "No single model is best at everything. Compare responses side by side and pick the answer that fits your needs.",
      icon: GitCompare,
    },
    {
      id: 3,
      title: "Privacy by Design",
      description:
        "No analytics, no tracking, no selling your data. HTTPS encryption and local storage keep your information yours.",
      icon: Shield,
    },
    {
      id: 4,
      title: "One Shortcut Away",
      description:
        "Ctrl+Shift+E opens the sidebar from any page. The fastest path from question to answer, without lifting your hands.",
      icon: Keyboard,
    },
  ];
  return (
    <section id="why-us" className="relative py-10 md:py-16 lg:py-24 overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 block text-[var(--accent-primary)]">
            WHY ECHOGPT
          </span>

          <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading leading-tight mb-4">
            <span className="block whitespace-nowrap">Built for how you</span>
            <span className="block whitespace-nowrap text-[var(--accent-primary)]">
              actually browse
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {chooses.map((choose) => {
            const IconComponent = choose.icon;
            return (  
            <ChooseCard key={choose.id} choose={choose} IconComponent={IconComponent} />
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default ChooseEcho;
