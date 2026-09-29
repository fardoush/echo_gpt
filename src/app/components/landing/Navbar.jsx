"use client";

import { useState } from "react";
import Link from "next/link";
import { Dna, ExternalLink, Menu, X } from "lucide-react";
import ThemeToogle from "../ui/ThemeToogle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "AI Models", href: "#models" },
    { name: "Why Echo", href: "#why-us" },
    { name: "FAQ", href: "#faq" },
    { name: "Get Started", href: "#get-started" },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    setIsOpen(false); 

    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);

      if (elem) {
        elem.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-purple-900/30 bg-white/90 dark:bg-[#0D0B18]/90 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-md shadow-purple-500/20">
                ✦
              </div>
              <span className="text-xl font-bold font-heading text-slate-900 dark:text-white tracking-wide">
                EchoGPT
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4 xl:gap-5">
            <ThemeToogle />
            <Link
              href="/chat"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-lg shadow-md shadow-purple-500/20 transition-all duration-200 transform hover:-translate-y-0.5 shrink-0"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open App</span>
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <ThemeToogle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none">
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-purple-900/30 bg-white dark:bg-[#0D0B18] px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 pt-2 pb-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <Link
              href="#open-app"
              onClick={(e) => handleScroll(e, "#open-app")}
              className="px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors">
              Open App
            </Link>
            <a
              href="#extension"
              onClick={(e) => handleScroll(e, "#extension")}
              className="px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
            >
              Extension
            </a>
          </div>
          <div className="pt-2 border-t border-slate-200 dark:border-purple-900/30">
            <a
              href="#add-to-chrome"
              onClick={(e) => handleScroll(e, "#add-to-chrome")}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-lg shadow-md transition-all"
            >
              <Dna className="w-4 h-4" />
              <span>Add to Chrome</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}