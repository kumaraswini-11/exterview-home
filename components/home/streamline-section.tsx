"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const PROCESS_SLIDES = [
  {
    image:
      "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68763d3bb7c300bc9ab75781_62d81c55e750b2364a0694b96850154b_work%20process%203-p-2000.png",
    title: "Hired",
    description:
      "Indicates how many candidates were finally selected after the interview process.",
  },
  {
    image:
      "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68d39def68f35b05a96d0cab_ChatGPT%20Image%20Sep%2024%2C%202025%2C%2012_57_19%20PM%201-p-2000.png",
    title: "Scheduled Interviews",
    description:
      "Tracks how many interviews (AI or Human) have been scheduled.",
  },
  {
    image:
      "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68763d3bb7c300bc9ab7577d_cc841eac96c856d15018d49316af12cf_work%20process%202-p-2000.png",
    title: "Completed Interviews",
    description: "Measures how many interviews were successfully conducted.",
  },
] as const;

export function StreamlineSection() {
  const [api, setApi] = useState<CarouselApi | undefined>();

  return (
    <section className="relative overflow-hidden bg-black bg-[url('https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68763d3bb7c300bc9ab757b3_bg.avif')] bg-cover bg-center py-28">
      {/* Background Animated Text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="animate-marquee text-[20vw] leading-none font-extrabold tracking-tight whitespace-nowrap text-white/10 select-none">
          Exterview
        </span>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-16">
        <h2 className="text-center text-[56px] font-semibold text-white">
          Streamline Your Process
        </h2>

        <div className="relative mx-auto mt-20 max-w-2xl">
          {/* Carousel Card */}
          <Carousel
            setApi={setApi}
            opts={{ loop: true }}
            className="rounded-4xl border border-white/15 bg-white/4 p-10 shadow-inner backdrop-blur-sm"
          >
            <CarouselContent className="-ml-4">
              {PROCESS_SLIDES.map((slide, i) => (
                <CarouselItem key={i} className="basis-full">
                  <div>
                    <p className="text-xl text-white/70">
                      Organisation Business Key Metrics – (03)
                    </p>

                    <div className="mt-10 flex justify-center">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        width={400}
                        height={300}
                      />
                    </div>

                    <h3 className="mt-8 text-3xl font-bold text-white">
                      {slide.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-base text-white">
                      {slide.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Carousel Navigation Buttons */}
          <Button
            size="icon-lg"
            onClick={() => api?.scrollPrev()}
            className="absolute bottom-1 -left-20 size-18 rounded-xl border border-white/20 bg-white/5 text-white hover:bg-white/10"
            aria-label="Previous slide"
          >
            <ArrowLeft className="size-9 -rotate-45" />
          </Button>

          <Button
            size="icon-lg"
            onClick={() => api?.scrollNext()}
            className="absolute -right-20 bottom-1 size-18 rounded-xl border border-white/20 bg-white/5 text-white hover:bg-white/10"
            aria-label="Next slide"
          >
            <ArrowRight className="size-9 -rotate-45" />
          </Button>
        </div>
      </div>
    </section>
  );
}
