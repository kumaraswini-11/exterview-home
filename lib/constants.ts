export const LAYOUT = {
  MAX_WIDTH: "max-w-7xl",
  PADDING_X: "px-6 md:px-16",
  PADDING_Y: "py-18",
  SECTION_SPACING: "py-18",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Agents", href: "#agents" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Releases", href: "#releases" },
] as const;

export const COMPANY_INFO = {
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
} as const;

export const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/exterview.ai",
    ariaLabel: "Visit our Instagram",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@exterview.ai",
    ariaLabel: "Visit our YouTube channel",
  },
  {
    name: "X",
    href: "https://x.com/exterview_ai",
    ariaLabel: "Visit our X (Twitter) profile",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/exterview",
    ariaLabel: "Visit our LinkedIn page",
  },
] as const;

export const IMAGES = {
  logo: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68cc06b9fbee380cfd40f248_Logo-White%205.png",
  microsoftPartner:
    "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68e8de4e69e51953a3a21709_image%202.png",
  chatGPTIcon:
    "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/687f704396765309929376ec_image%2024.png",
  heroBackground:
    "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68763d3bb7c300bc9ab75792_Nothingness%20in%20Blur%2020.avif",
  dashboardPreview:
    "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68d1421249aeb654630f721b_Step-7-p-2000.png",
  workflowDiagram:
    "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68ec89e17c9bd7423c5f6465_Group%201597882367-11-p-2000.png",
  samayaBento:
    "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68cac43949a62a453deb5ba1_bento%20image%20for%20key%20features.png",
} as const;

export const FLOATING_ICONS = [
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68763d3bb7c300bc9ab756fb_Hero%20Icon%2006.svg",
    top: "12%",
    left: "10%",
    rotate: -15,
  },
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68763d3bb7c300bc9ab75708_Hero%20Icon%2001.svg",
    top: "35%",
    left: "8%",
    rotate: 10,
  },
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68763d3bb7c300bc9ab756eb_Hero%20Icon%2002.svg",
    top: "55%",
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
    top: "40%",
    right: "8%",
    rotate: -8,
  },
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68763d3bb7c300bc9ab756ea_Hero%20Icon%2005.svg",
    top: "60%",
    right: "8%",
    rotate: 10,
  },
] as const;

export const HIRING_STATS = [
  {
    value: "10 Mins",
    label: "Average interview scheduling time",
  },
  {
    value: "1 Mins",
    label: "Instant AI candidate reports",
  },
  {
    value: "90%",
    label: "Interview Completion Rate",
  },
  {
    value: "100%",
    label: "AI-led screening consistency",
  },
] as const;

export const IMPACT_BARS = [
  {
    value: "90%",
    label: "candidate satisfaction",
    barClass:
      "w-45 h-80 bg-[#0045d94d] rounded-t-3xl border-t-4 border-blue-600 shadow-lg",
  },
  {
    value: "10x",
    label: "Faster Hiring",
    barClass:
      "w-27 h-70 bg-[#0045d94d] border-t-4 border-blue-600/40 rounded-t-3xl shadow-lg",
  },
] as const;

export const FAQS = [
  {
    question: "What is Exterview?",
    answer:
      "Exterview is an AI Interview Talent Intelligence Platform that makes hiring faster, fairer, and more effective.",
  },
  {
    question: "How does Exterview Job Creation work?",
    answer:
      "Upload a JD or give a prompt. Our AI extracts skills, suggests missing ones, shortlists candidates, and generates a ready-to-use JD and interview flow in minutes.",
  },
  {
    question: "What makes Exterview screening process smarter?",
    answer:
      "AI ranks candidates with instant match scores, predicts success, and automates shortlisting and rejection.",
  },
  {
    question: "How do AI Avatar and Voice Interviews work?",
    answer:
      "Candidates interact with 24/7 AI avatars or voice agents that run interviews, analyze skills and sentiment, and generate reports.",
  },
  {
    question: "How is interview integrity ensured?",
    answer:
      "Fraud detection includes face recognition, liveness checks, lip-sync matching, tab-switch alerts, and secure recordings.",
  },
  {
    question: "What integrations are supported?",
    answer:
      "Exterview integrates with 20+ ATS/HRMS platforms like Darwinbox, Workday, SAP, Greenhouse, and more.",
  },
  {
    question: "How does Exterview mitigate bias?",
    answer:
      "It removes personal identifiers, standardizes evaluations, and provides real-time bias alerts to ensure fair hiring.",
  },
  {
    question: "How secure and compliant is Exterview?",
    answer:
      "Fully compliant with SOC 2, ISO 27001, GDPR, and HIPAA with encryption, MFA, and role-based access.",
  },
] as const;
