import {
	CTASection,
	FeaturesSection,
	LandingFooter,
	LandingHero,
	LandingNavbar,
	SportsGrid,
	StatsSection,
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
