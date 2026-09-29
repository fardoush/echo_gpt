
"use client";
import React, { useState } from 'react';
import FaqItems from './FaqItems';

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }
    const faqs = [
    {
      question: 'What is EchoGPT?',
      answer:
        'EchoGPT is a Chrome extension that brings multiple AI assistants into a single browser sidebar. You can chat with GPT-5, Claude, Gemini, Grok, DeepSeek, and more without leaving your current tab. Summarize webpages, explain selected text, compare model responses, and get writing assistance — all in one place.',
    },
    {
      question: 'How does EchoGPT handle my privacy?',
      answer:
        'Your privacy is our top priority. EchoGPT utilizes HTTPS encryption and local storage to store your preferences. We never log, track, or sell your private browsing data or queries.',
    },
    {
      question: 'Which AI models are supported?',
      answer:
        'EchoGPT supports leading AI models including OpenAI GPT-5, Anthropic Claude 4.7, Google Gemini 3.1, xAI Grok 3, DeepSeek R1, and Meta Llama 3.3.',
    },
    {
      question: 'Do I need my own API keys?',
      answer:
        'No, EchoGPT works out of the box with built-in subscription access. However, if you prefer using your own API keys for pay-as-you-go usage, you can easily add them in settings.',
    },
    {
      question: 'Can I compare responses from different AI models?',
      answer:
        'Yes! EchoGPT features a Side-by-Side comparison tool that lets you send the same prompt to multiple AI models simultaneously to compare their reasoning, speed, and accuracy.',
    },
    {
      question: 'How do I install EchoGPT?',
      answer:
        'Simply click the "Add to Chrome" button at the top of the page to visit the Chrome Web Store, then click "Add to Chrome" to install the extension in seconds.',
    },
    {
      question: 'Is EchoGPT available on other browsers?',
      answer:
        'Currently, EchoGPT is optimized for Chromium-based browsers including Google Chrome, Brave, Microsoft Edge, and Arc.',
    },
  ];
    return (
        <section id='faq' className="relative py-10 md:py-16 lg:py-24 overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 block text-[var(--accent-primary)]">
            FAQ
          </span>

          <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading leading-tight mb-4">
            <span className="inline-block">Frequently asked</span>{' '}
            <span className="inline-block text-[var(--accent-primary)]">
              questions
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {
            faqs.map((faq,index) => (
                <FaqItems key={index} faq={faq} isOpen ={openIndex === index} onToggle={() => handleToggle(index)}/>
            ))
          }
        </div>
      </div>
    </section>
    );
};

export default FaqSection;