import { AutomationWorkflowSection } from "@/components/home/automation-workflow-section";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { HeroSection } from "@/components/home/hero-section";
import { HiringImpact } from "@/components/home/hiring-impact";
import { HiringWorkflowSuite } from "@/components/home/hiring-workflow-suite";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="relative flex flex-col gap-12 pt-14">
        <HeroSection />
        <HiringImpact />
        <HiringWorkflowSuite />
        <AutomationWorkflowSection />
      </main>

      <Footer />
    </>
  );
}
