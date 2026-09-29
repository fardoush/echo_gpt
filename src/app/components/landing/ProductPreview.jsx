import Image from "next/image";
import React from "react";

const ProductPreview = () => {
  return (
    <section className="relative py-10 md:py-16 lg:py-24 overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 block text-[var(--accent-primary)]">
            product preview
          </span>

          <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading leading-tight mb-4">
            <span className="">See EchoGPT </span>
            <span className="text-[var(--accent-primary)]">in action</span>
          </h2>

          <p className=" text-[var(--text-primary)]/60 text-base sm:text-lg font-normal text- max-w-2xl mx-auto">
            A clean sidebar that lives in your browser. No new tabs, no context
            switching, no friction.
          </p>
        </div>

        <div className="relative w-full aspect-[16/9] max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10 border border-white/10">
  <Image
    src="/echo1.png"
    alt="dashboard"
    fill
    className="object-contain rounded-2xl"
    sizes="(max-width: 1200px) 100vw, 1200px"
    priority
  />
</div>
      </div>
    </section>
  );
};

export default ProductPreview;
