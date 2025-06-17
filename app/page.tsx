import Header from "@/components/layout/header"
import HeroSection from "@/components/sections/hero-section"
import AboutUsSection from "@/components/sections/about-us-section"
import ServicesSection from "@/components/sections/services-section"
import SmallBusinessesSolutionsSection from "@/components/sections/small-businesses-solutions-section"
import MissionVideoSection from "@/components/sections/mission-video-section"
import FaqContactSection from "@/components/sections/faq-contact-section" // Re-import
import PricingPlansSection from "@/components/sections/pricing-plans-section"
import Footer from "@/components/layout/footer"
import NonprofitCfoSection from "@/components/sections/nonprofit-cfo-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <NonprofitCfoSection />
        <AboutUsSection />
        <ServicesSection />
        <SmallBusinessesSolutionsSection />
        <MissionVideoSection />
        <FaqContactSection /> {/* Added back here */}
        {/* <PricingPlansSection /> */}
      </main>
      <Footer />
    </div>
  )
}
