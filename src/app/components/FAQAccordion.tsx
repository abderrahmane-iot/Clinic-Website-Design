import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-[#5C2D5C]/10 rounded-2xl overflow-hidden bg-white shadow-sm"
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-right hover:bg-[#FDF0F5]/50 transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="text-[#2A1A2E] text-sm text-right flex-1" style={{ fontWeight: 600 }}>
              {item.question}
            </span>
            <ChevronDown
              size={18}
              className={`text-[#5C2D5C] shrink-0 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === i && (
            <div className="px-5 pb-5 text-sm text-[#7A6080] leading-relaxed border-t border-[#5C2D5C]/08">
              <div className="pt-3">{item.answer}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
