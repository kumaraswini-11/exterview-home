import Image from "next/image";

import { Button } from "@/components/ui/button";
import { IMAGES } from "@/lib/constants";

export function HiringWorkflowSuite() {
  return (
    <section className="pb-12">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-4xl bg-[radial-gradient(120%_120%_at_10%_0%,#0b1b3a_0%,#000_45%,#001b12_100%)] px-12 py-16 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
        {/* Heading */}
        <h2 className="mx-auto max-w-4xl text-center text-4xl leading-tight font-semibold text-white capitalize md:text-5xl">
          Our Intelligent Hiring Suite & Workflow Automation
        </h2>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Button className="relative rounded-full border border-transparent bg-black px-6 py-5 text-base font-semibold text-white">
            Book a demo
          </Button>
        </div>

        {/* Workflow Diagram */}
        <div className="mt-12 flex justify-center">
          <Image
            src={IMAGES.workflowDiagram}
            alt="Intelligent Hiring Workflow"
            width={1600}
            height={900}
            priority
            className="h-auto w-full max-w-6xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
