"use client";

import React from "react";
import { Plus, Wand2, Info } from "lucide-react";
import ModelDropdown from "./ModelDropdown";

export default function StudioControls({
  prompt,
  setPrompt,
  aspectRatio,
  setAspectRatio,
  imageCount,
  setImageCount,
  selectedModel,
  setSelectedModel,
  isModelOpen,
  setIsModelOpen,
  aspectRatios,
  imageCounts,
  models,
}) {
  return (
    <div className="p-4 sm:p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-2xl space-y-5">
      <div className="relative">
        <textarea
          rows={3}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Turn my photo into a professional headshot with studio lighting..."
          className="w-full bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] text-sm sm:text-base rounded-2xl p-4 border border-[var(--border-color)] focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none resize-none transition-all"/>
        <button
          type="button"
          className="absolute right-3 bottom-4 p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-card)] hover:bg-[var(--border-color)] rounded-xl transition-all"
          title="Add Reference Image">
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[var(--border-color)]">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1 bg-[var(--bg-primary)] p-1 rounded-xl border border-[var(--border-color)]">
            <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] px-2 hidden sm:inline">
              Ratio
            </span>
            {aspectRatios.map((ratio) => (
              <button
                key={ratio}
                onClick={() => setAspectRatio(ratio)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                  aspectRatio === ratio
                    ? "bg-[var(--accent-primary)] text-white shadow-md"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}>
                {ratio}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1 bg-[var(--bg-primary)] p-1 rounded-xl border border-[var(--border-color)]">
            <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] px-2 hidden sm:inline">
              Count
            </span>
            {imageCounts.map((num) => (
              <button
                key={num}
                onClick={() => setImageCount(num)}
                className={`w-7 h-7 rounded-lg text-xs font-medium transition-all ${
                  imageCount === num
                    ? "bg-[var(--accent-primary)] text-white shadow-md"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}>
                {num}
              </button>
            ))}
          </div>
          <ModelDropdown
            selectedModel={selectedModel}
            setSelectedModel={setSelectedModel}
            isModelOpen={isModelOpen}
            setIsModelOpen={setIsModelOpen}
            models={models}
          />
        </div>
        <button className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 transition-all active:scale-95">
          <Wand2 className="w-4 h-4" />
          <span>Generate</span>
        </button>
      </div>
      <div className="flex items-center justify-between text-[11px] text-[var(--text-secondary)] pt-2 border-t border-[var(--border-color)]/50">
        <span className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-purple-400" />
          Image generation is a paid feature — upgrade to start creating.
        </span>
        <span className="hidden sm:inline">1 message per generation</span>
      </div>
    </div>
  );
}