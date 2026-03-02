"use client";

import { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenIndexes((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      }
      return allowMultiple ? [...prev, index] : [index];
    });
  };

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndexes.includes(i);
        return (
          <div
            key={i}
            className="bg-white rounded-2xl border border-sand-dark overflow-hidden transition-shadow hover:shadow-sm"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between px-6 py-5 text-left group"
            >
              <span className="text-[15px] font-medium text-ink pr-4 leading-snug">
                {item.title}
              </span>
              <div
                className={`flex-shrink-0 w-7 h-7 rounded-full bg-forest/10 flex items-center justify-center transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <svg
                  className="w-4 h-4 text-forest"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-5 text-sm text-ink-muted leading-relaxed border-t border-sand">
                  <div className="pt-4">{item.content}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
