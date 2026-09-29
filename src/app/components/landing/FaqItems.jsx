import { ChevronDown } from 'lucide-react';
import React from 'react';

const FaqItems = ({faq,isOpen, onToggle}) => {
    const {question,answer} = faq;
    return (
        <div
      className={`rounded-2xl transition-all duration-300 border ${
        isOpen
          ? 'bg-[var(--bg-secondary)] border-[var(--accent-primary)] shadow-[0_0_15px_rgba(124,58,237,0.15)]'
          : 'bg-[var(--bg-secondary)] border-[var(--border-color)] hover:border-[var(--border-color)]'
      }`}
    >

      <button
        onClick={onToggle}
        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg focus:outline-none cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-[var(--text-primary)]">
          {question}
        </span>

        <ChevronDown
          className={`w-5 h-5 shrink-0 text-[var(--text-secondary)] transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-[var(--accent-primary)]' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-sm sm:text-base leading-relaxed text-[var(--text-primary)]/60 border-t border-[var(--border-color)]/30 mt-1">
          <p className="pt-4">{answer}</p>
        </div>
      )}
    </div>
    );
};

export default FaqItems;