import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import { FileText, DollarSign, Landmark, ShieldCheck, Lightbulb, Receipt } from "lucide-react" // Removed ChevronDown
import ContactForm from "@/components/contact-form"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import MoreServicesSection from "@/components/sections/more-services-section"

export default function BusinessTaxesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden bg-gray-900 flex items-center justify-center">
          <Image
            src="/tax.png"
            alt="Business Taxes Background"
            fill
            className="object-cover object-center opacity-40"
          />
          <div className="relative z-10 text-center text-white space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Business Tax Services</h1>
            <p className="text-lg md:text-xl">Expert tax planning and preparation for your business.</p>
          </div>
        </section>

        {/* What are Business Tax Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto space-y-8 text-center">
            <div className="inline-block rounded-full bg-primary-green px-3 py-1 text-sm font-medium text-white">
              WHAT WE DO
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What are Business Tax Services?
            </h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
              Business tax services involve the preparation, filing, and strategic planning of taxes for businesses of
              all sizes and structures. Our goal is to ensure compliance with federal, state, and local tax laws while
              identifying opportunities to minimize your tax liabilities and maximize your financial efficiency.
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
                What's Included in Our Business Tax Services?
              </h2>
              <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
                Our comprehensive business tax services are designed to simplify your tax obligations and optimize your
                tax position.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Accordion type="multiple" className="w-full space-y-4">
                <AccordionItem value="item-1" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <FileText className="h-6 w-6 text-primary-green" />
                      </div>
                      Corporate & Partnership Tax Preparation
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Accurate preparation and filing of federal and state tax returns for corporations and partnerships,
                    ensuring compliance and maximizing deductions.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <DollarSign className="h-6 w-6 text-primary-green" />
                      </div>
                      Tax Planning & Advisory
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Proactive strategies to minimize tax liabilities and maximize deductions throughout the year,
                    tailored to your business's unique financial situation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <Landmark className="h-6 w-6 text-primary-green" />
                      </div>
                      State & Local Tax (SALT) Compliance
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Navigating complex state and local tax requirements to ensure multi-jurisdictional compliance and
                    avoid penalties.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="multiple" className="w-full space-y-4">
                <AccordionItem value="item-4" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <ShieldCheck className="h-6 w-6 text-primary-green" />
                      </div>
                      IRS Representation
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Professional representation and support during IRS audits, inquiries, and appeals, ensuring your
                    rights are protected.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <Receipt className="h-6 w-6 text-primary-green" />
                      </div>
                      Sales & Use Tax Services
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Assistance with sales and use tax compliance, including registration, calculation, and timely
                    filing.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <Lightbulb className="h-6 w-6 text-primary-green" />
                      </div>
                      Tax Credit & Incentive Identification
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Identifying and securing available tax credits and incentives to reduce your tax burden and improve
                    cash flow.
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
              Why Choose Atlas TACS for Business Taxes?
            </h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
              Ensure your business is tax-efficient and compliant with our expert guidance.
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-3 text-left">
                <h3 className="text-xl font-bold">Maximized Savings</h3>
                <p className="text-muted-foreground">
                  We work to identify every possible deduction and credit to minimize your tax liability.
                </p>
              </div>
              <div className="space-y-3 text-left">
                <h3 className="text-xl font-bold">Guaranteed Compliance</h3>
                <p className="text-muted-foreground">
                  Stay up-to-date with ever-changing tax laws and avoid costly penalties.
                </p>
              </div>
              <div className="space-y-3 text-left">
                <h3 className="text-xl font-bold">Strategic Planning</h3>
                <p className="text-muted-foreground">
                  Proactive tax planning helps you make informed financial decisions throughout the year.
                </p>
              </div>
              <div className="space-y-3 text-left">
                <h3 className="text-xl font-bold">Peace of Mind</h3>
                <p className="text-muted-foreground">
                  Rest assured that your business taxes are handled by experienced professionals.
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
              Frequently Asked Questions About Business Taxes
            </h2>
            <Accordion type="single" collapsible className="w-full text-left">
              <AccordionItem value="faq-1" className="border-b border-gray-200">
                <AccordionTrigger className="flex items-center justify-between py-4 text-lg font-semibold hover:no-underline">
                  What types of business taxes do you handle?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  We handle a wide range of business taxes, including corporate income tax, partnership tax, sales and
                  use tax, and state and local taxes (SALT).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2" className="border-b border-gray-200">
                <AccordionTrigger className="flex items-center justify-between py-4 text-lg font-semibold hover:no-underline">
                  How can tax planning benefit my business?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  Tax planning helps you proactively identify opportunities to reduce your tax burden, optimize cash
                  flow, and ensure compliance throughout the year, rather than just at tax season.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3" className="border-b border-gray-200">
                <AccordionTrigger className="flex items-center justify-between py-4 text-lg font-semibold hover:no-underline">
                  Do you offer IRS audit support?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  Yes, we provide professional representation and support during IRS audits and inquiries, guiding you
                  through the process and advocating on your behalf.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4" className="border-b border-gray-200">
                <AccordionTrigger className="flex items-center justify-between py-4 text-lg font-semibold hover:no-underline">
                  How do you stay updated on changing tax laws?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  Our tax professionals regularly attend seminars, workshops, and subscribe to industry publications to
                  stay abreast of the latest federal, state, and local tax law changes, ensuring accurate and compliant
                  advice.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5" className="border-b border-gray-200">
                <AccordionTrigger className="flex items-center justify-between py-4 text-lg font-semibold hover:no-underline">
                  Can you help with multi-state tax compliance?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  Yes, we have extensive experience in multi-state tax compliance, helping businesses navigate the
                  complexities of varying tax regulations across different jurisdictions to ensure proper filing and
                  minimize risks.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* More Services Section */}
        <MoreServicesSection currentService="Business Taxes" />

        {/* Contact Form Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 text-center space-y-8">
            <div className="text-sm font-semibold uppercase text-primary-green">GET IN TOUCH</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Optimize Your Business Taxes
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
              Fill out the form below to schedule a consultation and learn how our tax services can benefit your
              organization.
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
