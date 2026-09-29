import React from "react";
import { Copy, ThumbsUp } from "lucide-react";

export default function CompareResults({ selectedModels, availableModels, isGenerating, results }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {selectedModels.map((modelId) => {
        const modelInfo = availableModels.find((m) => m.id === modelId);
        return (
          <div
            key={modelId}
            className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-3 flex flex-col justify-between min-h-[200px]"
          >
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-2 mb-3">
                <h3 className="text-xs font-bold text-[var(--text-primary)]">
                  {modelInfo?.name}
                </h3>
                <span className="text-[10px] text-[var(--text-secondary)]">
                  {modelInfo?.provider}
                </span>
              </div>

              {isGenerating ? (
                <p className="text-xs text-[var(--text-secondary)] animate-pulse">
                  Generating answer...
                </p>
              ) : results ? (
                <p className="text-xs text-[var(--text-primary)] leading-relaxed whitespace-pre-wrap">
                  {results[modelId]}
                </p>
              ) : (
                <p className="text-xs text-[var(--text-secondary)] opacity-60 italic">
                  Answer will appear here...
                </p>
              )}
            </div>

            {results && (
              <div className="flex items-center justify-end gap-2 pt-2 border-t border-[var(--border-color)] text-[var(--text-secondary)]">
                <button type="button" className="p-1 hover:text-[var(--text-primary)]">
                  <Copy className="w-3.5 h-3.5" />
                </button>
                <button type="button" className="p-1 hover:text-[var(--text-primary)]">
                  <ThumbsUp className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}