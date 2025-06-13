import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import { FileBarChart, Scale, TrendingUp, ShieldCheck, Lightbulb, BarChart3 } from "lucide-react" // Removed ChevronDown
import ContactForm from "@/components/contact-form"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import MoreServicesSection from "@/components/sections/more-services-section"

export default function AccountingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden bg-gray-900 flex items-center justify-center">
          <Image
            src="/accounting.png"
            alt="Accounting Background"
            fill
            className="object-cover object-center opacity-40"
          />
          <div className="relative z-10 text-center text-white space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Accounting Services</h1>
            <p className="text-lg md:text-xl">Comprehensive financial management for your business.</p>
          </div>
        </section>

        {/* What is Accounting Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto space-y-8 text-center">
            <div className="inline-block rounded-full bg-primary-green px-3 py-1 text-sm font-medium text-white">
              WHAT WE DO
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What is Accounting?</h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
              Accounting goes beyond bookkeeping, involving the interpretation, classification, analysis, verification,
              and reporting of financial data. It provides a holistic view of your business's financial performance and
              position, essential for strategic planning and compliance.
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
                What's Included in Our Accounting Services?
              </h2>
              <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
                Our accounting services provide a deeper level of financial insight and strategic support for your
                business.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Accordion type="multiple" className="w-full space-y-4">
                <AccordionItem value="item-1" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <FileBarChart className="h-6 w-6 text-primary-green" />
                      </div>
                      Financial Reporting & Analysis
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Preparation and analysis of comprehensive financial statements, including income statements, balance
                    sheets, and cash flow statements.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <Scale className="h-6 w-6 text-primary-green" />
                      </div>
                      General Ledger Management
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Maintaining and reviewing your general ledger to ensure accuracy and integrity of financial data.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <TrendingUp className="h-6 w-6 text-primary-green" />
                      </div>
                      Budgeting & Forecasting
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Assisting with the creation of detailed budgets and financial forecasts to guide your business
                    decisions.
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
                      Compliance & Regulatory Reporting
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Ensuring adherence to accounting standards (GAAP) and preparing necessary regulatory reports.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <Lightbulb className="h-6 w-6 text-primary-green" />
                      </div>
                      Audit Preparation & Support
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Preparing all necessary documentation and providing support during external audits.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <BarChart3 className="h-6 w-6 text-primary-green" />
                      </div>
                      Custom Financial Insights
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Providing tailored financial insights and recommendations to improve your business performance.
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
              Why Choose Atlas TACS for Accounting?
            </h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
              Our accounting services provide the strategic financial oversight you need to thrive.
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-3 text-left">
                <h3 className="text-xl font-bold">Strategic Financial Guidance</h3>
                <p className="text-muted-foreground">
                  We provide more than just numbers; we offer insights that help you make informed strategic decisions.
                </p>
              </div>
              <div className="space-y-3 text-left">
                <h3 className="text-xl font-bold">Enhanced Compliance</h3>
                <p className="text-muted-foreground">
                  Stay compliant with evolving accounting standards and regulations, minimizing risks and penalties.
                </p>
              </div>
            </div>
            <div className="space-y-3 text-left">
              <h3 className="text-xl font-bold">Improved Financial Health</h3>
              <p className="text-muted-foreground">
                Gain a clearer picture of your financial standing, enabling better resource allocation and growth.
              </p>
            </div>
            <div className="space-y-3 text-left">
              <h3 className="text-xl font-bold">Access to Expertise</h3>
              <p className="text-muted-foreground">
                Leverage our team's extensive experience without the overhead of an in-house accounting department.
              </p>
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
              Frequently Asked Questions About Accounting
            </h2>
            <Accordion type="single" collapsible className="w-full text-left">
              <AccordionItem value="faq-1" className="border-b border-gray-200">
                <AccordionTrigger className="flex items-center justify-between py-4 text-lg font-semibold hover:no-underline">
                  How does accounting differ from bookkeeping?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  While bookkeeping focuses on recording transactions, accounting involves analyzing, summarizing, and
                  interpreting financial data to provide strategic insights and ensure compliance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2" className="border-b border-gray-200">
                <AccordionTrigger className="flex items-center justify-between py-4 text-lg font-semibold hover:no-underline">
                  What kind of financial reports do you provide?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  We provide comprehensive financial reports including Income Statements (Profit & Loss), Balance
                  Sheets, Cash Flow Statements, and custom reports tailored to your business needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3" className="border-b border-gray-200">
                <AccordionTrigger className="flex items-center justify-between py-4 text-lg font-semibold hover:no-underline">
                  Can you help with audit preparation?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  Yes, we assist with all aspects of audit preparation, ensuring your financial records are organized,
                  accurate, and ready for a smooth audit process.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4" className="border-b border-gray-200">
                <AccordionTrigger className="flex items-center justify-between py-4 text-lg font-semibold hover:no-underline">
                  How do you ensure compliance with accounting standards (GAAP)?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  Our team consists of experienced professionals who are continuously updated on the latest GAAP
                  standards and regulatory changes, ensuring your financial statements are always compliant.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5" className="border-b border-gray-200">
                <AccordionTrigger className="flex items-center justify-between py-4 text-lg font-semibold hover:no-underline">
                  Do you offer customized financial analysis?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  Absolutely. We work closely with you to understand your specific business goals and provide tailored
                  financial analysis and insights to support your strategic decision-making.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* More Services Section */}
        <MoreServicesSection currentService="Accounting" />

        {/* Contact Form Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 text-center space-y-8">
            <div className="text-sm font-semibold uppercase text-primary-green">GET IN TOUCH</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Discuss Your Accounting Needs
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
              Fill out the form below to schedule a consultation and learn how our accounting services can benefit your
              organization.
            </p>
            <div className="bg-gray-100 shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
