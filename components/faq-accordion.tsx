"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="rounded-[24px] border border-[rgba(16,36,63,0.08)] bg-white px-6">
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <div key={item.question} className="border-b border-[rgba(16,36,63,0.08)] last:border-b-0">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className="text-lg font-black">{item.question}</span>
              <ChevronDown className={`transition ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen ? <p className="pb-5 pr-8">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
