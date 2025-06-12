import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import AboutUsContentSection from "@/components/sections/about-us-content-section" // New text section
import CallToActionSection from "@/components/sections/call-to-action-section" // New CTA section
import ContactForm from "@/components/contact-form" // Existing contact form

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section for About Us */}
        <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden bg-gray-900 flex items-center justify-center">
          <Image
            src="/about.jpg"
            alt="About Us Background"
            fill
            className="object-cover object-center opacity-40"
          />
          <div className="relative z-10 text-center text-white space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">About Us</h1>
            <p className="text-lg md:text-xl">Learn more about our mission and values.</p>
          </div>
        </section>

        {/* New Text-Based About Us Content */}
        <AboutUsContentSection />

        {/* Call Now CTA Section */}
        <CallToActionSection />

        {/* Contact Form Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 text-center space-y-8">
            <div className="text-sm font-semibold uppercase text-primary-green">GET IN TOUCH</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Have Questions? Request a Call Back
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
              Fill out the form below and our team will get back to you shortly.
            </p>
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
