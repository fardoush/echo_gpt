"use client";

import React, { useState } from "react";
import CompareHeader from "../components/compare/CompareHeader";
import ModelSelector from "../components/compare/ModelSelector";
import CompareResults from "../components/compare/CompareResults";
import CompareInput from "../components/compare/CompareInput";

export default function ComparePage() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [results, setResults] = useState(null);

  const availableModels = [
    { id: "gpt-4o", name: "ChatGPT 4o", provider: "OpenAI" },
    { id: "claude-3-5", name: "Claude 3.5 Sonnet", provider: "Anthropic" },
    { id: "gemini-1-5", name: "Gemini 1.5 Pro", provider: "Google" },
  ];

  const [selectedModels, setSelectedModels] = useState([
    "gpt-4o",
    "claude-3-5",
    "gemini-1-5",
  ]);

  const toggleModel = (id) => {
    if (selectedModels.includes(id)) {
      if (selectedModels.length > 1) {
        setSelectedModels(selectedModels.filter((m) => m !== id));
      }
    } else {
      if (selectedModels.length < 3) {
        setSelectedModels([...selectedModels, id]);
      }
    }
  };

  const handleCompare = (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setResults(null);

    setTimeout(() => {
      setResults({
        "gpt-4o": `[ChatGPT 4o]: ${prompt}\n\nHere is a structured and fast answer. Model focuses on high accuracy and clear formatting.`,
        "claude-3-5": `[Claude 3.5]: ${prompt}\n\nHere is a deeply thoughtful and natural response. Claude provides precise details and expressive language.`,
        "gemini-1-5": `[Gemini 1.5 Pro]: ${prompt}\n\nHere is a concise overview based on Google's knowledge graph and analytical logic.`,
      });
      setIsGenerating(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 space-y-6">
      <CompareHeader />
      <ModelSelector
        availableModels={availableModels}
        selectedModels={selectedModels}
        toggleModel={toggleModel}
      />
      <CompareInput
        prompt={prompt}
        setPrompt={setPrompt}
        handleCompare={handleCompare}
        isGenerating={isGenerating}
      />
      <CompareResults
        selectedModels={selectedModels}
        availableModels={availableModels}
        isGenerating={isGenerating}
        results={results}
      />
    </div>
  );
}
