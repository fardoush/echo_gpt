import React from "react";
import { Video } from "lucide-react";

export default function VideoHeader() {
  return (
    <div className="text-center space-y-2 pt-2">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold">
        <Video className="w-3.5 h-3.5" />
        <span>AI Video Generation</span>
      </div>
      <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
        Video Studio
      </h1>
      <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-md mx-auto">
        Just type what you imagine, and the video makes itself.
      </p>
    </div>
  );
}
