import React from "react";
import { Send } from "lucide-react";

export default function CompareInput({
  prompt,
  setPrompt,
  handleCompare,
  isGenerating,
}) {
  return (
    <form
      onSubmit={handleCompare}
      className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-lg space-y-3"
    >
      <textarea
        rows={3}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask something to compare models..."
        className="w-full bg-[var(--bg-primary)] text-[var(--text-primary)] text-sm rounded-xl p-3 border border-[var(--border-color)] outline-none focus:border-purple-500 resize-none"
      />

      <div className="flex items-center justify-between">
        <span className="text-[11px] text-[var(--text-secondary)]">
          5 comparisons remaining today
        </span>
        <button
          type="submit"
          disabled={!prompt.trim() || isGenerating}
          className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-medium text-xs flex items-center gap-2 transition-all"
        >
          <Send className="w-3.5 h-3.5" />
          <span>{isGenerating ? "Comparing..." : "Compare"}</span>
        </button>
      </div>
    </form>
  );
}
