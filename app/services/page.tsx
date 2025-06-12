import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import ServicesDetailSection from "@/components/sections/services-detail-section" // Import the new section
import PricingPlansSection from "@/components/sections/pricing-plans-section"
import ContactForm from "@/components/contact-form"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section for Services */}
        <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden bg-gray-900 flex items-center justify-center">
          <Image
            src="/services.jpg"
            alt="Services Background"
            fill
            className="object-cover object-center opacity-40"
          />
          <div className="relative z-10 text-center text-white space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Our Services</h1>
            <p className="text-lg md:text-xl">Comprehensive solutions for your business needs.</p>
          </div>
        </section>

        {/* New Services Detail Section */}
        <ServicesDetailSection />

        {/* Contact Form Section on Services Page */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 text-center space-y-8">
            <div className="text-sm font-semibold uppercase text-primary-green">GET IN TOUCH</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Have Questions About Our Services?
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
              Fill out the form below and our team will get back to you shortly to discuss how we can help.
            </p>
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Reusing PricingPlansSection */}
        <PricingPlansSection />
      </main>
      <Footer />
    </div>
  )
}
