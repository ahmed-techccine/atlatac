import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import ContactForm from "@/components/contact-form"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section for Contact */}
        <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden bg-gray-900 flex items-center justify-center">
          <Image
            src="/contact.jpg"
            alt="Contact Background"
            fill
            className="object-cover object-center opacity-40"
          />
          <div className="relative z-10 text-center text-white space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Contact Us</h1>
            <p className="text-lg md:text-xl">Get in touch with our team.</p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container grid items-start gap-8 px-4 md:grid-cols-2 md:gap-12 lg:gap-16">
            {/* Contact Info Section */}
            <div className="space-y-6">
              <div className="text-sm font-semibold uppercase text-primary-green">GET IN TOUCH</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                We&apos;d Love to Hear From You
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Have questions or need assistance? Reach out to us through the following channels.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary-green/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-muted-foreground">+1- (917) 995 - 8332</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary-green/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground">hussaini.jafar@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary-green/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-muted-foreground">60 road, broklyn golden street new york. USA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
              <div className="text-sm font-semibold uppercase text-primary-green">SEND A MESSAGE</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Request A Call Back</h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
