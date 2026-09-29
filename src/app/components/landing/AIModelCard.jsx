import React from "react";

const AIModelCard = ({ model }) => {
  const {
    name,
    provider,
    badge,
    description,
    tags,
    Icon,
    accentColor,
    hoverShadow,
    hoverBorder,
    badgeBg,
    badgeText,
    iconBg,
    iconColor,
  } = model;

  return (
    <div
      className={`group relative p-5 sm:p-6 md:p-7 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden ${hoverShadow} ${hoverBorder}`}>
      <div
        className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none ${accentColor}`}/>
      <div>
        <div className="flex items-start justify-between gap-2 mb-5">
          <div className="flex items-center gap-3 min-w-0">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center border border-white/5 shrink-0 ${iconBg}`}>
              <Icon className={`w-5 h-5 ${iconColor}`} />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-base sm:text-lg font-bold tracking-tight text-[var(--text-primary)] group-hover:text-white transition-colors truncate">
                {name}
              </h3>
              <p className="text-xs text-[var(--text-primary)]/60 truncate">
                {provider}
              </p>
            </div>
          </div>

          {badge && (
            <span
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-full shrink-0 ${badgeBg} ${badgeText}`}>
              {badge}
            </span>
          )}
        </div>

        <p className="text-sm leading-relaxed text-[var(--text-primary)]/70 mb-6 line-clamp-3">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 pt-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs font-medium px-2.5 py-1 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)]/70 group-hover:border-white/10 transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AIModelCard;