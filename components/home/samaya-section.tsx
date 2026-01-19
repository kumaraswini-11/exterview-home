import Image from "next/image";

import { SectionHeader } from "@/components/section-header";
import { IMAGES, LAYOUT } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SamayaSection() {
  return (
    <section
      className={cn("mx-auto pt-16", LAYOUT.MAX_WIDTH, LAYOUT.PADDING_X)}
    >
      {/* Header */}
      <SectionHeader
        badge="Samay"
        title={
          <>
            Meet Smaya. Your AI Agent For End To End <br />
            Recruitment Activities
          </>
        }
      />

      {/* Hero Image */}
      <Image
        src={IMAGES.samayaBento}
        alt="Samaya AI Agent Interface"
        width={1920}
        height={1080}
        className="mt-5 inline-block w-full object-contain"
        priority
      />
    </section>
  );
}
