"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const FLOATING_ICONS = [
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68763d3bb7c300bc9ab756fb_Hero%20Icon%2006.svg",
    top: "12%",
    left: "10%",
    rotate: -15,
  },
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68763d3bb7c300bc9ab75708_Hero%20Icon%2001.svg",
    top: "40%",
    left: "8%",
    rotate: 10,
  },
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68763d3bb7c300bc9ab756eb_Hero%20Icon%2002.svg",
    top: "40%",
    left: "8%",
    rotate: 10,
  },
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68763d3bb7c300bc9ab75714_Hero%20Icon%2004.svg",
    top: "15%",
    right: "12%",
    rotate: 12,
  },
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68763d3bb7c300bc9ab756fd_Hero%20Icon%2003.svg",
    top: "45%",
    right: "8%",
    rotate: -8,
  },
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68763d3bb7c300bc9ab756ea_Hero%20Icon%2005.svg",
    top: "40%",
    left: "8%",
    rotate: 10,
  },
];

export const HeroSection = () => {
  const controls = useAnimation();
  const lastScrollY = useRef(0);

  // Detect scroll direction
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
        backgroundImage:
          "url('https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68763d3bb7c300bc9ab75792_Nothingness%20in%20Blur%2020.avif')",
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
          <Button size="lg" className="rounded-full font-semibold">
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

      {/* Dashboard Preview */}
      <div
        className="relative mt-auto mb-12 w-full max-w-5xl overflow-visible rounded-t-3xl border-x border-t border-white/30 px-4 shadow-2xl"
        style={{ perspective: 1000 }}
      >
        <Image
          src="https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68d1421249aeb654630f721b_Step-7-p-2000.png"
          alt="Dashboard Preview"
          width={2000}
          height={1200}
          className="h-auto w-full object-contain"
          priority
        />
      </div>
    </section>
  );
};

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
