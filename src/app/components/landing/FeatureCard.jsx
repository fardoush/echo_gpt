import React from "react";

const FeatureCard = ({ feature, IconComponent }) => {
  const {title,description} = feature;
  return (
    <div className="group p-6 sm:p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 bg-[var(--bg-secondary)] border border-[var(--border-color)] flex flex-col justify-start">

      <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-[var(--bg-secondary)] border border-[var(--border-color)]">
        <IconComponent className="w-5 h-5 text-[var(--accent-primary)]" />
      </div>
      <h3 className="text-lg font-bold mb-3 tracking-tight leading-snug">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-[var(--text-primary)]/60">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
