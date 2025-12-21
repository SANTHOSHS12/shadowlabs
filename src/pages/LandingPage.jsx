
import Hero from "../components/Hero";
import FeaturesBusiness from "../components/FeaturesBusiness";
import FeaturesSales from "../components/FeaturesSales";
import FeaturesCore from "../components/FeaturesCore";
import WhyUs from "../components/WhyUs";
import Integrations from "../components/Integrations";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import PrivacySection from "../components/PrivacySection";

export default function LandingPage() {
    return (
        <>
            <Hero />
            <FeaturesBusiness />
            <FeaturesSales />
            <FeaturesCore />
            <WhyUs />
            <Integrations />
            <Pricing />
            <PrivacySection />
            <FAQ />
        </>
    );
}
