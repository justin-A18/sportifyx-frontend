import {
  LandingHero,
  SportsGrid,
  FeaturesSection,
  StatsSection,
  CTASection,
  LandingFooter,
  LandingNavbar,
} from "@/modules/public/components";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      <main>
        <LandingHero />
        <SportsGrid />
        <FeaturesSection />
        <StatsSection />
        <CTASection />
      </main>
      <LandingFooter />
    </div>
  );
}
