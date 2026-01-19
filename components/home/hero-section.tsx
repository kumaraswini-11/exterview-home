"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FLOATING_ICONS, IMAGES } from "@/lib/constants";

interface FloatingIconProps {
  src: string;
  top: string;
  left?: string;
  right?: string;
  rotate?: number;
  controls: ReturnType<typeof useAnimation>;
}

const FloatingIcon = ({
  src,
  top,
  left,
  right,
  rotate = 0,
  controls,
}: FloatingIconProps) => (
  <motion.div
    initial={{ y: 0, rotate }}
    animate={controls}
    transition={{ type: "spring", stiffness: 60, damping: 15 }}
    className="absolute hidden size-26 items-center justify-center rounded-xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-md lg:flex"
    style={{ top, left, right }}
  >
    <div className="relative h-full w-full">
      <Image src={src} alt="Hero Icon" fill className="object-contain p-1" />
    </div>
  </motion.div>
);

export function HeroSection() {
  const controls = useAnimation();
  const lastScrollY = useRef(0);

  // Scroll-based animation for floating icons
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolling
      controls.start({
        y: currentScrollY > lastScrollY.current ? 15 : -15,
      });

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <section
      className="relative mx-auto my-8 flex min-h-[85vh] w-full max-w-[96.5%] flex-col items-center justify-start overflow-visible rounded-4xl bg-cover bg-center py-4 pt-20 shadow-2xl"
      style={{
        backgroundImage: `url('${IMAGES.heroBackground}')`,
      }}
    >
      {/* Floating Icons */}
      {FLOATING_ICONS.map((icon) => (
        <FloatingIcon key={icon.src} {...icon} controls={controls} />
      ))}

      {/* Hero Content */}
      <div className="z-10 px-6 text-center">
        <Badge className="mb-6 rounded-full border-none bg-white px-5 py-1.5 text-sm font-bold text-blue-600 shadow-sm hover:bg-white">
          AI For Hiring
        </Badge>

        <h1 className="mb-10 max-w-4xl text-5xl leading-[1.1] font-bold tracking-tight text-white md:text-7xl">
          Powering The Future Of <br className="hidden md:block" /> Enterprise
          Hiring
        </h1>

        <div className="mb-12 flex justify-center gap-4">
          <Button
            size="lg"
            animatedGradient
            className="rounded-full font-semibold"
          >
            Book a Demo
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="rounded-full font-semibold"
          >
            Watch Video
          </Button>
        </div>
      </div>

      {/* Dashboard Preview with perspective */}
      <div
        className="relative mt-auto mb-12 w-full max-w-5xl overflow-visible rounded-t-3xl px-4 shadow-2xl"
        style={{ perspective: 1000 }}
      >
        <Image
          src={IMAGES.dashboardPreview}
          alt="Dashboard Preview"
          width={2000}
          height={1200}
          className="h-auto w-full object-contain"
          priority
        />
      </div>
    </section>
  );
}
