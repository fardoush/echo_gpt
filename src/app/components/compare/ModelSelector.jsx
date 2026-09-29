import React from "react";

export default function ModelSelector({ availableModels, selectedModels, toggleModel }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
      {availableModels.map((model) => {
        const isSelected = selectedModels.includes(model.id);
        return (
          <button
            key={model.id}
            type="button"
            onClick={() => toggleModel(model.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
              isSelected
                ? "bg-purple-600/20 text-purple-400 border-purple-500/40"
                : "bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border-color)] hover:text-[var(--text-primary)]"
            }`}
          >
            {model.name} {isSelected && "✓"}
          </button>
        );
      })}
    </div>
  );
}