"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Plus,
  Image as ImageIcon,
  Video,
  GitCompare,
  Cable,
  History,
  ShoppingBag,
  ListTodo,
  FileSearch,
  FileCode,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  X,
} from "lucide-react";

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();

  const engagementList = [
    {
      name: "Image Studio",
      href: "/image-studio",
      icon: <ImageIcon className="w-4 h-4 text-pink-500" />,
      isPro: true,
    },
    {
      name: "Video Studio",
      href: "/video-studio",
      icon: <Video className="w-4 h-4 text-purple-500" />,
      isPro: true,
    },
    {
      name: "Compare Models",
      href: "/compare",
      icon: <GitCompare className="w-4 h-4 text-cyan-500" />,
    },
    {
      name: "Connectors",
      href: "/connectors",
      icon: <Cable className="w-4 h-4 text-emerald-500" />,
    },
    {
      name: "History",
      href: "/history",
      icon: <History className="w-4 h-4 text-slate-400" />,
    },
    {
      name: "Store",
      href: "/store",
      icon: <ShoppingBag className="w-4 h-4 text-amber-500" />,
    },
  ];

  const workflowList = [
    {
      name: "AI Tasks",
      href: "/tasks",
      icon: <ListTodo className="w-4 h-4 text-blue-500" />,
    },
    {
      name: "AI Job Analysis",
      href: "/job-analysis",
      icon: <FileSearch className="w-4 h-4 text-indigo-500" />,
    },
    {
      name: "AI SOP Builder",
      href: "/sop-builder",
      icon: <FileCode className="w-4 h-4 text-teal-500" />,
    },
  ];

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      <aside
        className={`fixed lg:static top-0 left-0 z-50 h-full w-64 border-r border-[var(--border-color)] bg-[var(--bg-secondary)] flex flex-col justify-between p-4 shrink-0 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="space-y-6 overflow-hidden flex flex-col flex-1">
          <div className="flex items-center justify-between px-2 shrink-0">
            {/* <Link
              href="/"
              onClick={onClose}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-teal-400 flex items-center justify-center text-white shadow-xl shadow-purple-500/20">
          <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
              <span className="font-bold text-lg tracking-wider text-[var(--text-primary)]">
                EchoGPT
              </span>
            </Link> */}

             <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-md shadow-purple-500/20">
                ✦
              </div>
              <span className="text-xl font-bold font-heading text-slate-900 dark:text-white tracking-wide">
                EchoGPT
              </span>
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <Link
            href="/chat"
            onClick={onClose}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-600/25 transition-all shrink-0 active:scale-95"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>New Chat</span>
          </Link>

          <div className="space-y-5 overflow-y-auto flex-1 pr-1 custom-scrollbar">
            <div>
              <p className="px-2 text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-2">
                Engagement
              </p>
              <nav className="space-y-1">
                {engagementList.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={onClose}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                        isActive
                          ? "bg-purple-600/15 text-purple-400 font-semibold border border-purple-500/20"
                          : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span>{item.name}</span>
                      </div>
                      {item.isPro && (
                        <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase rounded bg-purple-500/20 text-purple-400 border border-purple-500/30">
                          Pro
                        </span>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div>
              <p className="px-2 text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-2">
                AI Workflows
              </p>
              <nav className="space-y-1">
                {workflowList.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={onClose}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                        isActive
                          ? "bg-purple-600/15 text-purple-400 font-semibold border border-purple-500/20"
                          : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]"
                      }`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>

        <div className="p-4 mt-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 relative overflow-hidden shrink-0">
          <div className="flex items-center justify-between mb-1.5">
            <span className="flex items-center gap-1.5 text-xs font-bold text-purple-400">
              <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />{" "}
              Unlock Pro
            </span>
            <ShieldCheck className="w-4 h-4 text-purple-400" />
          </div>
          <p className="text-[11px] text-[var(--text-secondary)] mb-3 leading-relaxed">
            Get unlimited access to GPT-5 & Claude 3.5.
          </p>
          <Link
            href="/pricing"
            onClick={onClose}
            className="w-full py-2 bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1"
          >
            <span>Upgrade to Pro</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </aside>
    </>
  );
}
