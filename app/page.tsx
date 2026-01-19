import { AiSection } from "@/components/home/ai-section";
import { BlogInsightsSection } from "@/components/home/blog-insights-section";
import { FaqSection } from "@/components/home/faq-section";
import { Footer } from "@/components/home/footer";
import { FraudProofSection } from "@/components/home/fraud-proof-section";
import { Header } from "@/components/home/header";
import { HeroSection } from "@/components/home/hero-section";
import { HiringCTA } from "@/components/home/hiring-cta";
import { HiringImpact } from "@/components/home/hiring-impact";
import { HiringWorkflowSuite } from "@/components/home/hiring-workflow-suite";
import { ResultSection } from "@/components/home/result-section";
import { SamayaSection } from "@/components/home/samaya-section";
import { SolutionSection } from "@/components/home/solution-section";
import { StreamlineSection } from "@/components/home/streamline-section";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="relative flex flex-col pt-14">
        <HeroSection />
        <HiringImpact />
        <HiringWorkflowSuite />
        <FraudProofSection />
        <ResultSection />
        <SolutionSection />
        <AiSection />
        <StreamlineSection />
        <SamayaSection />
        <FaqSection />
        <BlogInsightsSection />
        <HiringCTA />
      </main>

      <Footer />
    </>
  );
}
