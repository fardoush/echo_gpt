"use client";

import React, { useState } from "react";
import ImageGallery from "../components/image-studio/ImageGallery";
import StudioControls from "../components/image-studio/StudioControls";
import StudioHeader from "../components/image-studio/StudioHeader";

export default function ImageStudioPage() {
  const [prompt, setPrompt] = useState("");
  const [aspectRatio, setAspectRatio] = useState("1:1");
  const [imageCount, setImageCount] = useState(1);
  const [selectedModel, setSelectedModel] = useState("Nano Banana 2 Lite");
  const [isModelOpen, setIsModelOpen] = useState(false);

  const aspectRatios = ["1:1", "16:9", "9:16", "4:3", "3:2"];
  const imageCounts = [1, 2, 3, 4];
  const models = [
    "Nano Banana 2 Lite",
    "FLUX.1 Schnell",
    "Midjourney v6 Alpha",
    "DALL-E 3 HD",
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 space-y-8">
      <StudioHeader/>

      <StudioControls
        prompt={prompt}
        setPrompt={setPrompt}
        aspectRatio={aspectRatio}
        setAspectRatio={setAspectRatio}
        imageCount={imageCount}
        setImageCount={setImageCount}
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
        isModelOpen={isModelOpen}
        setIsModelOpen={setIsModelOpen}
        aspectRatios={aspectRatios}
        imageCounts={imageCounts}
        models={models}
      />

      <ImageGallery />
    </div>
  );
}