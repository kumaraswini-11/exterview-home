"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";

const DECORATIVE_IMAGES = [
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/6880a12eb8ff68c722db9d9d_Spin%20Image.png",
    alt: "Decoration Star",
    width: 90,
    height: 90,
    className: "absolute top-12 left-12",
  },
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/6880a12eff49b1cd6a5892a4_CTA%20Image%20(1).png",
    alt: "Interview list",
    width: 290,
    height: 220,
    className: "absolute bottom-0 left-1",
  },
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/6880a12ef02485c8ce748de8_CTA%20Image.png",
    alt: "Hiring card",
    width: 290,
    height: 220,
    className: "absolute -right-4 -bottom-17",
  },
] as const;

export function HiringCTA() {
  return (
    <section className="relative h-76 overflow-hidden bg-[#efefef]">
      {/* Decorative Images */}
      {DECORATIVE_IMAGES.map((img) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          className={img.className}
          loading="lazy"
        />
      ))}

      {/* Center Content */}
      <div className="relative z-10 mx-auto max-w-3xl pt-16 text-center">
        <h2 className="text-5xl font-bold text-black">
          Ready To Transform Your Hiring?
        </h2>

        <div className="mt-14 flex justify-center">
          <Button
            size="lg"
            animatedGradient
            className="rounded-full"
            aria-label="Book a demo"
          >
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
