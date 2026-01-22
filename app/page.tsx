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
import { LiveWaveformDemo } from "@/components/voice-agent/live-waveform-demo";

export default function HomePage() {
  // Rounded Animated Waveform
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-50/50 p-4 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-lg">
        <LiveWaveformDemo />
      </div>

      {/* Optional: Footer hint for UX */}
      <p className="text-muted-foreground mt-6 text-center text-xs">
        Ensure microphone permissions are enabled in your browser.
      </p>
    </main>
  );

  // Exterview Home UI Screen
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
