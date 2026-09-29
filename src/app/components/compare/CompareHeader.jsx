import React from "react";
import { GitCompare } from "lucide-react";

export default function CompareHeader() {
  return (
    <div className="text-center space-y-2">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold">
        <GitCompare className="w-3.5 h-3.5" />
        <span>Compare AI Models</span>
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
        Compare Model Responses
      </h1>
      <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
        Ask one question and see how 3 models answer it side-by-side.
      </p>
    </div>
  );
}