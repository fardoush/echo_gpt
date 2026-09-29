import Image from "next/image";
import Hero from "./components/landing/Hero";
import Features from "./components/landing/Features";
import AIModels from "./components/landing/AIModels";
import ProductPreview from "./components/landing/ProductPreview";
import ChooseEcho from "./components/landing/ChooseEcho";
import FaqSection from "./components/landing/FaqSection";
import Cta from "./components/landing/Cta";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Features/>
      <AIModels/>
      <ProductPreview/>
      <ChooseEcho/>
      <FaqSection/>
      <Cta/>
      
    </div>
  );
}
