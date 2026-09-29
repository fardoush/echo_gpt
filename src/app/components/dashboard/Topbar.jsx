"use client";

import React, { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import ThemeToogle from "../ui/ThemeToogle";

export default function Topbar({
  isSidebarOpen,
  setIsSidebarOpen,
  selectedModel,
  setSelectedModel,
}) {
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);
  const models = [
    { id: "GPT-5", name: "GPT-5", color: "bg-emerald-500" },
    { id: "Claude 4.7", name: "Claude 4.7 Sonnet", color: "bg-orange-500" },
    { id: "Gemini 3.1", name: "Gemini 3.1 Pro", color: "bg-blue-500" },
    { id: "Grok 3", name: "Grok 3", color: "bg-purple-500" },
  ];
  const currentModel = models.find((m) => m.id === selectedModel) || models[0];

  return (
    <header className="h-16 w-full border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/90 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between shrink-0 z-30">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-xl hover:bg-[var(--bg-card)] transition-colors"
          aria-label="Toggle Sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="relative">
          <button
            onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] text-xs sm:text-sm font-semibold">
            <span
              className={`w-2.5 h-2.5 rounded-full ${currentModel.color}`}/>
            <span>{currentModel.name}</span>
            <ChevronDown className="w-4 h-4 text-[var(--text-secondary)] ml-1" />
          </button>
          {isModelDropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsModelDropdownOpen(false)}
              />
              <div className="absolute top-full left-0 mt-2 w-52 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-2xl py-1.5 z-50">
                {models.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => {
                      setSelectedModel(model.id);
                      setIsModelDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-primary)] hover:text-[var(--text-primary)]"
                  >
                    <span className={`w-2 h-2 rounded-full ${model.color}`} />
                    <span>{model.name}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <ThemeToogle />
      </div>
    </header>
  );
}
