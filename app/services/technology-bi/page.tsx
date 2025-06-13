import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import { Cloud, Laptop, BarChart, Settings, Lightbulb, Database } from "lucide-react" // Removed ChevronDown
import ContactForm from "@/components/contact-form"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import MoreServicesSection from "@/components/sections/more-services-section"

export default function TechnologyBiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden bg-gray-900 flex items-center justify-center">
          <Image
            src="/bi.png"
            alt="Technology & BI Background"
            fill
            className="object-cover object-center opacity-40"
          />
          <div className="relative z-10 text-center text-white space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Technology & Business Intelligence</h1>
            <p className="text-lg md:text-xl">Leveraging data for smarter financial decisions.</p>
          </div>
        </section>

        {/* What are Technology & BI Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto space-y-8 text-center">
            <div className="inline-block rounded-full bg-primary-green px-3 py-1 text-sm font-medium text-white">
              WHAT WE DO
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What are Technology & Business Intelligence Services?
            </h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
              Our Technology & Business Intelligence services focus on optimizing your financial operations through
              modern software solutions and data analytics. We help you implement efficient accounting systems, automate
              processes, and transform raw financial data into actionable insights, enabling smarter and faster
              decision-making.
            </p>
          </div>
        </section>

        {/* Services Included Section - Redesigned as Accordion */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-block rounded-full bg-primary-green px-3 py-1 text-sm font-medium text-white">
                OUR OFFERINGS
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What's Included in Our Technology & BI Services?
              </h2>
              <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
                We provide comprehensive support to help you leverage technology for financial efficiency and strategic
                insights.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Accordion type="multiple" className="w-full space-y-4">
                <AccordionItem value="item-1" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <Laptop className="h-6 w-6 text-primary-green" />
                      </div>
                      Accounting Software Implementation
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Assistance with selecting, implementing, and optimizing accounting software like QuickBooks, Xero,
                    or NetSuite to fit your business needs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <Cloud className="h-6 w-6 text-primary-green" />
                      </div>
                      Cloud Accounting Solutions
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Setting up and managing cloud-based accounting systems for remote access, enhanced collaboration,
                    and real-time financial data.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <BarChart className="h-6 w-6 text-primary-green" />
                      </div>
                      Custom Financial Dashboards
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Developing tailored dashboards to visualize key financial metrics and performance indicators,
                    providing a clear overview of your business health.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="multiple" className="w-full space-y-4">
                <AccordionItem value="item-4" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <Database className="h-6 w-6 text-primary-green" />
                      </div>
                      Data Analytics & Reporting
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Transforming raw financial data into actionable reports and insights for strategic decision-making
                    and improved business performance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <Settings className="h-6 w-6 text-primary-green" />
                      </div>
                      Process Automation
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Identifying and automating repetitive financial tasks to improve efficiency and reduce manual
                    errors, and free up resources.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <Lightbulb className="h-6 w-6 text-primary-green" />
                      </div>
                      System Integration
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Integrating various financial systems to ensure seamless data flow, consistency, and a unified view
                    of your financial landscape.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto space-y-8 text-center">
            <div className="inline-block rounded-full bg-primary-green px-3 py-1 text-sm font-medium text-white">
              WHY US
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose Atlas TACS for Technology & BI?
            </h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
              Unlock your data's potential and streamline your financial operations with our expert technology and BI
              services.
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-3 text-left">
                <h3 className="text-xl font-bold">Enhanced Efficiency</h3>
                <p className="text-muted-foreground">
                  Automate tasks and streamline workflows, saving time and reducing operational costs.
                </p>
              </div>
              <div className="space-y-3 text-left">
                <h3 className="text-xl font-bold">Data-Driven Decisions</h3>
                <p className="text-muted-foreground">
                  Gain clear, actionable insights from your financial data to make smarter business choices.
                </p>
              </div>
              <div className="space-y-3 text-left">
                <h3 className="text-xl font-bold">Scalable Solutions</h3>
                <p className="text-muted-foreground">
                  Implement technology solutions that grow with your business, adapting to future needs.
                </p>
              </div>
              <div className="space-y-3 text-left">
                <h3 className="text-xl font-bold">Expert Implementation</h3>
                <p className="text-muted-foreground">
                  Benefit from our expertise in selecting and implementing the right financial technologies for your
                  business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto space-y-8 text-center">
            <div className="inline-block rounded-full bg-primary-green px-3 py-1 text-sm font-medium text-white">
              FAQ
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently Asked Questions About Technology & BI
            </h2>
            <Accordion type="single" collapsible className="w-full text-left">
              <AccordionItem value="faq-1" className="border-b border-gray-200">
                <AccordionTrigger className="flex items-center justify-between py-4 text-lg font-semibold hover:no-underline">
                  What accounting software do you support?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  We work with popular accounting software like QuickBooks Online, Xero, NetSuite, and can adapt to
                  other systems based on your business needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2" className="border-b border-gray-200">
                <AccordionTrigger className="flex items-center justify-between py-4 text-lg font-semibold hover:no-underline">
                  How can BI dashboards help my business?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  BI dashboards provide real-time visual insights into your key financial metrics, allowing you to
                  quickly identify trends, track performance, and make data-driven decisions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3" className="border-b border-gray-200">
                <AccordionTrigger className="flex items-center justify-between py-4 text-lg font-semibold hover:no-underline">
                  Do you help with automating financial processes?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  Yes, we specialize in identifying and implementing automation solutions for repetitive financial tasks
                  like data entry, reconciliation, and reporting, saving you time and reducing errors.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4" className="border-b border-gray-200">
                <AccordionTrigger className="flex items-center justify-between py-4 text-lg font-semibold hover:no-underline">
                  Can you integrate our existing systems?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  Yes, we offer system integration services to connect your various financial and operational platforms,
                  ensuring seamless data flow and a unified view of your business.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5" className="border-b border-gray-200">
                <AccordionTrigger className="flex items-center justify-between py-4 text-lg font-semibold hover:no-underline">
                  What kind of data security measures do you implement?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  We prioritize data security by utilizing industry-standard encryption, secure cloud platforms, and
                  strict access controls. Our team adheres to robust privacy protocols to protect your sensitive
                  financial information.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* More Services Section */}
        <MoreServicesSection currentService="Technology & BI" />

        {/* Contact Form Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 text-center space-y-8">
            <div className="text-sm font-semibold uppercase text-primary-green">GET IN TOUCH</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Unlock Your Data's Potential
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
              Fill out the form below to schedule a consultation and learn how our technology and BI services can
              benefit your organization.
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
