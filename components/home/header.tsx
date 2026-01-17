"use client";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Agents", href: "#agents" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Releases", href: "#releases" },
] as const;

function NavLinks({
  onClick,
  variant = "desktop",
}: {
  onClick?: () => void;
  variant?: "desktop" | "mobile";
}) {
  return (
    <>
      {NAV_LINKS.map(({ label, href }) => {
        const isActive = label === "Home";

        const base = "font-semibold transition-all";
        const desktop =
          "px-2.5 py-2 text-base rounded-full " +
          (isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600");
        const mobile =
          "text-base " + (isActive ? "text-blue-600" : "text-gray-800");

        return (
          <Link
            key={label}
            href={href}
            onClick={onClick}
            className={cn(base, variant === "desktop" ? desktop : mobile)}
          >
            {label}
          </Link>
        );
      })}
    </>
  );
}

function LogoSection() {
  return (
    <div className="flex items-center gap-4 lg:gap-6">
      <div className="relative h-9 w-38.5 md:w-37.5">
        <Image
          src="https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68cc06b9fbee380cfd40f248_Logo-White%205.png"
          alt="Exterview"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative h-11.5 w-27.5 md:h-9.5 md:w-22.5">
        <Image
          src="https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68e8de4e69e51953a3a21709_image%202.png"
          alt="Microsoft partner"
          fill
          loading="lazy"
          className="rounded object-contain"
        />
      </div>
    </div>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-background/80 absolute top-0 z-50 w-full px-3.5 py-4 backdrop-blur-md sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-2 sm:px-0">
        {/* Logo */}
        <LogoSection />

        {/* Desktop Navigation */}
        <div className="bg-accent -ml-12 hidden items-center gap-1 rounded-full px-4 md:flex">
          <NavLinks />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Desktop Book Demo */}
          <Button size="lg" className="hidden rounded-full md:block">
            Book a Demo
          </Button>

          {/* Mobile Hamburger */}
          <Button
            variant="secondary"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className={cn(
              "flex size-11 items-center justify-center rounded-full bg-[#0052FF] text-white shadow-md hover:bg-[#0052FF] hover:opacity-85 md:hidden",
            )}
          >
            <MenuIcon className="size-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-background animate-in fade-in slide-in-from-top-2 absolute top-full left-0 w-full rounded-sm border border-gray-100 p-3 shadow-xs duration-200 md:hidden">
          <div className="bg-accent flex flex-col items-center gap-3 rounded-2xl p-2">
            <NavLinks variant="mobile" onClick={closeMenu} />

            <div className="mt-2 flex flex-col gap-2">
              <Button size="sm" className="rounded-full">
                Sign Up
              </Button>
              <Button size="sm" className="rounded-full">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
