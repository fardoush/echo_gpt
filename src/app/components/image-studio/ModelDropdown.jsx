"use client";

import React from "react";
import { Layers, ChevronDown } from "lucide-react";

export default function ModelDropdown({
  selectedModel,
  setSelectedModel,
  isModelOpen,
  setIsModelOpen,
  models,
}) {
  return (
    <div className="relative">
      <button
        onClick={() => setIsModelOpen(!isModelOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all"
      >
        <Layers className="w-3.5 h-3.5 text-purple-400" />
        <span>{selectedModel}</span>
        <ChevronDown className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
      </button>

      {isModelOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsModelOpen(false)}
          />
          <div className="absolute top-full left-0 mt-2 w-52 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-2xl py-1.5 z-20">
            {models.map((m) => (
              <button
                key={m}
                onClick={() => {
                  setSelectedModel(m);
                  setIsModelOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-xs font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-primary)] hover:text-[var(--text-primary)] transition-all"
              >
                {m}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
