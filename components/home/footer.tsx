import { InstagramIcon, YoutubeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const COMPANY_INFO = {
  name: "Exterview Inc",
  tagline: "Agentic Talent Intelligence Platform for Enterprise Hiring",
  logo: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68f78e04844071b89bfb27ba_Logo-White%205%20(1)-p-2000.png",
  address: [
    "H 602, MY HOME",
    "BHOOJA, 6TH FLOOR, SY",
    "NO 83/1,",
    "KNOWLEDGE",
    "CITY, RAIDURG",
    "PANMAKTHA,",
    "HYDERABAD",
    "TELANGANA - INDIA -",
    "500081",
  ],
  phone: {
    display: "+91 96525 21125",
    link: "tel:+919652521125",
  },
  email: {
    display: "support@exterview.ai",
    link: "mailto:support@exterview.ai",
  },
};

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/exterview.ai",
    ariaLabel: "Visit our Instagram",
    icon: InstagramIcon,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@exterview.ai",
    ariaLabel: "Visit our YouTube channel",
    icon: YoutubeIcon,
  },
  {
    name: "X",
    href: "https://x.com/exterview_ai",
    ariaLabel: "Visit our X (Twitter) profile",
    customIcon: (
      <svg
        className="size-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/exterview",
    ariaLabel: "Visit our LinkedIn page",
    customIcon: (
      <Image
        src="https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/6880a697c6cb5b8be6f98e70_Group.svg"
        alt=""
        width={20}
        height={20}
        aria-hidden="true"
      />
    ),
  },
];

const FooterLinkBlock = ({
  title,
  href,
  label,
}: {
  title: string;
  href: string;
  label: string;
}) => (
  <div className="space-y-3">
    <h4 className="text-base font-semibold text-white">{title}</h4>
    <Link
      href={href}
      className="inline-block text-sm text-gray-400 transition-colors hover:text-white"
    >
      {label}
    </Link>
  </div>
);

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#1c1c1c] px-6 py-12 text-[#a4a4a4]">
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Main Grid */}
        <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          {/* Company */}
          <div className="space-y-4 md:min-w-7">
            <Link href="/" aria-label="Exterview Home" className="inline-block">
              <Image
                src={COMPANY_INFO.logo}
                alt="Exterview"
                width={150}
                height={36}
                priority
                className="h-9 w-auto object-contain"
              />
            </Link>

            <p className="text-sm leading-relaxed text-gray-400">
              {COMPANY_INFO.tagline}
            </p>

            <h3 className="pt-2 text-3xl font-semibold text-[#cfcfcf]">
              {COMPANY_INFO.name}
            </h3>
          </div>

          {/* Address */}
          <div className="space-y-3">
            <h4 className="text-base font-semibold text-white">Address</h4>
            <address className="text-sm leading-relaxed text-gray-400 uppercase not-italic">
              {COMPANY_INFO.address.map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
          </div>

          {/* Phone */}
          <FooterLinkBlock
            title="Phone"
            href={COMPANY_INFO.phone.link}
            label={COMPANY_INFO.phone.display}
          />

          {/* Support */}
          <FooterLinkBlock
            title="Support"
            href={COMPANY_INFO.email.link}
            label={COMPANY_INFO.email.display}
          />

          {/* Microsoft Badge */}
          <div className="flex items-start">
            <Link
              href="https://www.microsoft.com/en-us/startups"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Microsoft for Startups Partner"
            >
              <Image
                src="https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68e8de4e69e51953a3a21709_image%202.png"
                alt="Microsoft for Startups Partner"
                width={185}
                height={80}
                className="rounded object-contain transition-opacity hover:opacity-90"
              />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-8 border-t border-[#ffffff1a]" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Exterview, Inc. All rights reserved.
          </p>

          {/* Social Icons */}
          <nav aria-label="Social media links">
            <ul className="flex items-center gap-4">
              {SOCIAL_LINKS.map(
                ({ name, href, ariaLabel, icon: Icon, customIcon }) => (
                  <li key={name}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={ariaLabel}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#ffffff1a] text-white transition-all duration-300 hover:border-[#0045d9] hover:bg-[#0045d9]"
                    >
                      {customIcon ?? (
                        <Icon className="size-5" aria-hidden="true" />
                      )}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>

        {/* Glowing Background Text */}
        <div className="relative mt-4 h-40 overflow-hidden">
          <div
            className="pointer-events-none flex h-full items-center justify-center select-none"
            aria-hidden="true"
          >
            <h2
              className="animate-glow-pulse text-[120px] leading-none font-extrabold tracking-wider text-transparent sm:text-[150px] lg:text-[170px]"
              style={{ WebkitTextStroke: "1px #0033a0" }}
            >
              Exterview
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
};
