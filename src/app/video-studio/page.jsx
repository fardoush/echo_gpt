"use client";

import React, { useState } from "react";
import VideoGallery from "../components/video-studio/VideoGallery";
import VideoControls from "../components/video-studio/VideoControls";
import VideoHeader from "../components/video-studio/VideoHeader";


export default function VideoStudio() {
  const [prompt, setPrompt] = useState("");
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [selectedModel, setSelectedModel] = useState("Veo 3.1 fast");
  const [isModelOpen, setIsModelOpen] = useState(false);

  const aspectRatios = ["16:9", "9:16", "1:1"];
  const models = [
    "Veo 3.1 fast",
    "Sora v1.0",
    "Runway Gen-3 Alpha",
    "Luma Dream Machine",
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 space-y-8">
      <VideoHeader />
      <VideoControls
        prompt={prompt}
        setPrompt={setPrompt}
        aspectRatio={aspectRatio}
        setAspectRatio={setAspectRatio}
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
        isModelOpen={isModelOpen}
        setIsModelOpen={setIsModelOpen}
        aspectRatios={aspectRatios}
        models={models}
      />
      <VideoGallery />
    </div>
  );
}