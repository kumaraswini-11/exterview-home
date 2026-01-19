"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { SectionHeader } from "@/components/section-header";
import { FAQS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div
      onClick={onToggle}
      className="cursor-pointer rounded-xl border border-neutral-200 bg-white transition-all"
    >
      {/* Question */}
      <div
        className="flex w-full items-center justify-between px-8 pt-5 text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-black md:text-xl">
          {question}
        </h3>

        <ChevronDown
          className={cn(
            "size-5 shrink-0 text-neutral-500 transition-transform duration-300",
            isOpen && "rotate-180",
          )}
        />
      </div>

      {/* Answer with smooth expand/collapse */}
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden px-8 pb-5 text-base leading-relaxed text-gray-600">
          {answer}
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#f3f8fe]">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-16">
        {/* Header */}
        <SectionHeader
          badge="FAQs"
          title="Your Questions, Our Answers"
          titleClassName="text-[36px] md:text-[56px]"
        />

        {/* FAQ List */}
        <div className="mx-auto mt-12 space-y-5">
          {FAQS.map((faq, index) => (
            <FaqItem
              key={faq.question}
              {...faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
