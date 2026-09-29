"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Paperclip,
  Mic,
  Send,
  Globe,
  Clock,
  PlusCircle,
  FileText,
  Palette,
  Code,
} from "lucide-react";

export default function StarterCanvas({ selectedModel = "GPT-5" }) {
  const [inputMessage, setInputMessage] = useState("");

  const promptCards = [
    {
      id: 1,
      icon: <Palette className="w-5 h-5 text-purple-400" />,
      title: "Unlock Your Creative Flow",
      desc: "Receive custom prompts that reflect your writing style and spark new ideas.",
      prompt:
        "Help me brainstorm creative ideas for a new AI startup dashboard.",
    },
    {
      id: 2,
      icon: <FileText className="w-5 h-5 text-indigo-400" />,
      title: "Build a Resume That Shines",
      desc: "Craft a resume tailored to highlight your experience and match job needs.",
      prompt:
        "Help me write a professional resume summary for a Senior Frontend Engineer.",
    },
    {
      id: 3,
      icon: <Code className="w-5 h-5 text-teal-400" />,
      title: "Debug & Optimize Code",
      desc: "Paste code snippets to find bugs, improve performance, or convert languages.",
      prompt: "Review my React code snippet for performance bottlenecks.",
    },
  ];

  return (
    <div className="flex-1 h-full overflow-y-auto flex flex-col justify-between p-4 sm:p-6 md:p-8 max-w-4xl mx-auto w-full">
      <div className="flex-1 flex flex-col items-center justify-center text-center my-4 sm:my-6 space-y-4">
        
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-md shadow-purple-500/20">
                ✦
              </div>
        <h1 className="text-xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
          EchoGPT Workspace
        </h1>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-md px-2">
          Interact with EchoGPT, an AI that reflects your input for quick ideas,
          summaries, or technical feedback.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 w-full pt-4 sm:pt-6 text-left">
          {promptCards.map((card) => (
            <button
              key={card.id}
              onClick={() => setInputMessage(card.prompt)}
              className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="p-2 rounded-xl bg-[var(--bg-primary)] w-fit">
                {card.icon}
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                  {card.title}
                </h3>
                <p className="text-[11px] text-[var(--text-secondary)] line-clamp-2 mt-1">
                  {card.desc}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="w-full space-y-3 pt-2">
        <div className="flex items-center justify-between text-[11px] text-[var(--text-secondary)] bg-[var(--bg-card)] border border-[var(--border-color)] px-4 py-2 rounded-xl">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />4
            of 5 messages left in this 5-hour window
          </span>
          <span className="flex items-center gap-1 hidden sm:inline-flex">
            <Clock className="w-3 h-3" /> Resets in 4h 33m
          </span>
        </div>

        <form className="relative rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-3 space-y-2">
          <div className="flex items-center justify-between pb-2 border-b border-[var(--border-color)] text-xs">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 font-medium text-[11px]">
                {selectedModel}
              </span>
              <button
                type="button"
                className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-[11px]"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Search Web</span>
              </button>
            </div>
            <button
              type="button"
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] p-1"
            >
              <PlusCircle className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="p-1.5 sm:p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              <Paperclip className="w-4 h-4" />
            </button>

            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={`Ask ${selectedModel} anything...`}
              className="flex-1 bg-transparent text-[var(--text-primary)] placeholder-[var(--text-secondary)] text-xs sm:text-sm outline-none px-1"
            />

            <button
              type="button"
              className="p-1.5 sm:p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hidden sm:block"
            >
              <Mic className="w-4 h-4" />
            </button>

            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="p-2 sm:p-2.5 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-white disabled:opacity-40 transition-colors"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </form>

        <p className="text-[10px] text-center text-[var(--text-secondary)]">
          EchoGPT can make mistakes. Verify important information.
        </p>
      </div>
    </div>
  );
}
