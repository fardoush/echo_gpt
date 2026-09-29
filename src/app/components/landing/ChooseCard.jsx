import React from "react";

const ChooseCard = ({ choose, IconComponent }) => {
  const { title, description } = choose;
  return (
    <div className="group p-6 sm:p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] transition-all duration-300 hover:-translate-y-1 flex items-start gap-5">
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 bg-[var(--bg-secondary)] border border-[var(--border-color)]">
        <IconComponent className="w-5 h-5 text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors duration-300" />
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2 tracking-tight text-[var(--text-primary)]">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[var(--text-primary)]/60">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ChooseCard;
