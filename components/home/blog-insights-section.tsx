"use client";

import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { LAYOUT } from "@/lib/constants";
import { cn } from "@/lib/utils";

const FEATURED_BLOG = {
  image:
    "https://cdn.prod.website-files.com/68763d3bb7c300bc9ab75643/68e60542d42bbe53c5e00fa0_How%20Exterview.ai%20is%20Revolutionizi.png",
  category: "AI Tools",
  title:
    "How Exterview.ai is Revolutionizing Talent Acquisition: From 30 Days to 3 Days",
} as const;

const SIDE_BLOGS = [
  {
    image:
      "https://cdn.prod.website-files.com/68763d3bb7c300bc9ab75643/68e50f35c7134edf8eff0682_From%20Resumes%20to%20Reasoning.png",
    category: "AI Tools",
    title:
      "From Resumes to Reasoning, How Exterview Agentic AI is Building Your Future Team!",
  },
  {
    image:
      "https://cdn.prod.website-files.com/68763d3bb7c300bc9ab75643/68e52a6efae72c42070fd934_Rethinking%20the%20Interview.png",
    category: "AI Tools",
    title:
      "Rethinking the Interview Experience Groundup and Engineering AI to Solve the Hardest Part of Hiring!",
  },
  {
    image:
      "https://cdn.prod.website-files.com/68763d3bb7c300bc9ab75643/68e603a1909881683b7d4efb_Use%20Cases%20%26%20Success%20Stories.png",
    category: "AI Insights",
    title:
      "Use Cases & Success Stories: Transforming Hiring from Weeks to Days",
  },
] as const;

function SideBlogCard({
  image,
  category,
  title,
}: {
  image: string;
  category: string;
  title: string;
}) {
  return (
    <Link
      href="#"
      aria-label={`Read blog post: ${title}`}
      className="group flex items-center gap-4"
    >
      <Image
        src={image}
        alt={title}
        width={160}
        height={160}
        className="size-40 shrink-0 rounded-2xl object-cover"
      />

      <div className="max-w-sm">
        <span className="text-sm font-bold text-black">{category}</span>

        <h4 className="mt-3 text-base leading-snug font-semibold text-black group-hover:underline">
          {title}
        </h4>
      </div>
    </Link>
  );
}

export function BlogInsightsSection() {
  return (
    <section
      className={cn("mx-auto px-4 py-12", LAYOUT.MAX_WIDTH, LAYOUT.PADDING_X)}
    >
      {/* Header */}
      <div className="max-w-3xl">
        <Badge className="px-6 py-1.5 text-sm font-bold">Blogs</Badge>

        <h2 className="mt-6 text-[36px] leading-tight font-bold text-black md:text-[56px]">
          Stay Ahead With Exterview
          <br />
          AI Insights
        </h2>
      </div>

      {/* Content */}
      <div className="mt-16 flex flex-col gap-4 md:flex-row">
        {/* Featured Blog */}
        <div className="relative w-full overflow-hidden rounded-3xl md:w-[53%]">
          <Image
            src={FEATURED_BLOG.image}
            alt="Featured blog"
            width={900}
            height={600}
            priority
            className="h-130 w-full object-cover"
          />

          {/* Overlay Content */}
          <div className="absolute inset-x-3 bottom-3 rounded-[10px] bg-white/10 p-4 backdrop-blur-md">
            <Badge className="bg-black px-3 py-0.5 text-sm font-bold">
              {FEATURED_BLOG.category}
            </Badge>

            <h3 className="mt-4 max-w-xl text-xl leading-snug font-semibold text-white capitalize">
              {FEATURED_BLOG.title}
            </h3>
          </div>
        </div>

        {/* Side Blogs */}
        <div className="flex flex-col gap-4 md:w-[40%]">
          {SIDE_BLOGS.map((blog) => (
            <SideBlogCard key={blog.title} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
