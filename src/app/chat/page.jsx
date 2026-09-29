"use client";

import React, { useState } from "react";
import StarterCanvas from "../components/dashboard/StarterCanvas";

export default function ChatPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("GPT-5");

  return (
    <div className="flex justify-center">
      <div>
        <StarterCanvas />
      </div>
    </div>
  );
}
