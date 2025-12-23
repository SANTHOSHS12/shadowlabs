import Hero from "../components/Hero";
import FeaturesSection from "../components/FeaturesSection";
import BusinessSection from "../components/BusinessSection";
import SalesSection from "../components/SalesSection";
import FeaturesIntegrations from "../components/FeaturesIntegrations";
import WhyUs from "../components/WhyUs";

import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import ReadyToStart from "../components/ReadyToStart";

export default function LandingPage() {
    return (
        <>
            <Hero />
            <FeaturesSection />
            <BusinessSection />
            <SalesSection />
            <WhyUs />
            <FeaturesIntegrations />
            <ReadyToStart />
            <Pricing />
            <FAQ />

        </>
    );
}
