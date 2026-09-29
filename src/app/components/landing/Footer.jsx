"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Features", href: "#features" },
      { label: "AI Models", href: "#models" },
      { label: "Pricing", href: "#pricing" },
      { label: "Chrome Extension", href: "#extension" },
      { label: "Web App", href: "#webapp" },
    ],
    resources: [
      { label: "Documentation", href: "#docs" },
      { label: "FAQ", href: "#faq" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Blog", href: "#blog" },
    ],
    company: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#careers" },
      { label: "Press Kit", href: "#press" },
    ],
  };

  return (
    <footer className="relative bg-[var(--bg-primary)] text-[var(--text-primary)] border-t border-[var(--border-color)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          <div className="lg:col-span-2 space-y-6 pr-0 lg:pr-6">
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
            <p className="text-sm text-[var(--text-primary)]/60 leading-relaxed max-w-sm">
              Chat with multiple AI models in one secure browser sidebar.
              Summarize webpages, explain text, and compare responses — all
              without leaving your current tab.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all duration-200"
                aria-label="Twitter"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all duration-200"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all duration-200"
                aria-label="YouTube"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.product.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-[var(--text-primary)]/60 hover:text-[var(--text-primary)] transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.resources.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-[var(--text-primary)]/60 hover:text-[var(--text-primary)] transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.company.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-[var(--text-primary)]/60 hover:text-[var(--text-primary)] transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-primary)]/70">
          <p>© {currentYear} EchoGPT. All rights reserved.</p>
          <p>Built with precision for modern browsers.</p>
        </div>
      </div>
    </footer>
  );
}
