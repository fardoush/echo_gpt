import React from "react";
import { Video, SlidersHorizontal } from "lucide-react";

export default function VideoGallery() {
  return (
    <div className="space-y-4 pt-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-[var(--text-primary)]">
          Your Creations
        </h2>
        <button className="flex items-center gap-1 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>Filter</span>
        </button>
      </div>

      <div className="rounded-3xl border border-dashed border-[var(--border-color)] p-12 text-center flex flex-col items-center justify-center space-y-3 bg-[var(--bg-card)]/30">
        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
          <Video className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-semibold text-[var(--text-primary)]">
            Nothing here yet
          </p>
          <p className="text-xs text-[var(--text-secondary)] max-w-sm">
            Describe a video above to get started and create cinematic AI visuals.
          </p>
        </div>
      </div>
    </div>
  );
}