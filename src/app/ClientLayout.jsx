"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./components/dashboard/Sidebar";
import Topbar from "./components/dashboard/Topbar";
import Navbar from "./components/landing/Navbar";
import Footer from "./components/landing/Footer";

export default function ClientLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("GPT-5");
  const pathname = usePathname();

  const isLandingOrAuthPage =
    pathname === "/" ||
    pathname === "/landing" ||
    pathname === "/login" ||
    pathname === "/register";

  if (isLandingOrAuthPage) {
    return (
      <div className="w-full min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div className="flex-1 h-full min-w-0 flex flex-col overflow-y-auto">
        <div className="sticky top-0 z-30 w-full bg-[var(--bg-primary)]">
          <Topbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            selectedModel={selectedModel}
            setSelectedModel={setSelectedModel}
          />
        </div>
        <main className="flex-1 w-full">{children}</main>
      </div>
    </div>
  );
}