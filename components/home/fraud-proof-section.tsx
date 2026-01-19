"use client";

import { AudioWaveformIcon, Link2Icon, UserIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { SectionHeader } from "@/components/section-header";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { LAYOUT } from "@/lib/constants";
import { cn } from "@/lib/utils";

const INTERVIEW_TYPES = [
  {
    icon: AudioWaveformIcon,
    question: "AI Voice Interview",
    image:
      "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68cabb21211f1d3796430660_Fraud%20Proof%20Ai%20Voice-p-2000.png",
  },
  {
    icon: UserIcon,
    question: "AI Avatar Interview",
    image:
      "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68cabb48748c5a961db5eb7f_2%20screen-p-2000.png",
  },
  {
    icon: Link2Icon,
    question: "L2 Human Interview",
    image:
      "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68cabb799d7b688e6fe92846_Ouestion%20screen%204-p-2000.png",
  },
] as const;

export function FraudProofSection() {
  const [openItem, setOpenItem] = useState<string | undefined>();

  return (
    <section
      className={cn(
        "mx-auto w-full",
        LAYOUT.MAX_WIDTH,
        LAYOUT.SECTION_SPACING,
        LAYOUT.PADDING_X,
      )}
    >
      {/* Header */}
      <SectionHeader
        badge="Fraud Proof"
        title={
          <>
            AI-Assisted L1 and L2 Human <br />
            Interviews, Secured and Fraud Proof.
          </>
        }
      />

      {/* Accordion */}
      <Accordion
        type="single"
        collapsible
        value={openItem}
        onValueChange={setOpenItem}
        className="space-y-4"
      >
        {INTERVIEW_TYPES.map((item, index) => {
          const Icon = item.icon;
          const value = `item-${index}`;
          const isOpen = openItem === value;

          return (
            <div key={value} className="flex w-full items-start gap-5">
              {/* Left Icon Indicator */}
              <div
                className={cn(
                  "flex size-12 shrink-0 items-center justify-center rounded-lg transition-colors duration-200",
                  isOpen ? "bg-blue-600 text-white" : "bg-gray-300 text-black",
                )}
              >
                {index === 2 ? (
                  <span className="text-base font-semibold">L2</span>
                ) : (
                  <Icon className="size-6" />
                )}
              </div>

              {/* Accordion Item */}
              <div className="flex-1">
                <AccordionItem value={value} className="w-full">
                  {/* Header */}
                  <AccordionTrigger
                    className={cn(
                      "flex items-center justify-between rounded-lg bg-gray-200 px-4 py-4 transition-colors duration-200",
                      "[&>svg]:size-7 [&>svg]:text-blue-600",
                    )}
                  >
                    <span className="text-left text-2xl font-semibold text-black">
                      {item.question}
                    </span>
                  </AccordionTrigger>

                  {/* Content */}
                  <AccordionContent className="bg-white px-4 pt-2 pb-4">
                    <div className="mt-4 overflow-hidden shadow-md">
                      <Image
                        src={item.image}
                        alt={item.question}
                        width={900}
                        height={500}
                        className="w-full rounded-lg object-cover"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </div>
            </div>
          );
        })}
      </Accordion>
    </section>
  );
}
