import { Sparkles } from "lucide-react";
import React from "react";

const StudioHeader = () => {
  return (
    <div className="text-center space-y-2 pt-2">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold">
        <Sparkles className="w-3.5 h-3.5" />
        <span>AI Image Generation</span>
      </div>
      <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
        Image Studio
      </h1>
      <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-md mx-auto">
        Create high-quality images and visuals that stop the scroll.
      </p>
    </div>
  );
};

export default StudioHeader;
