import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import { Monitor, CreditCard, FileText, Banknote, CalendarCheck, Cloud } from "lucide-react" // Removed ChevronDown
import ContactForm from "@/components/contact-form"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import MoreServicesSection from "@/components/sections/more-services-section"

export default function BookkeepingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden bg-gray-900 flex items-center justify-center">
          <Image
            src="/book.png"
            alt="Bookkeeping Background"
            fill
            className="object-cover object-center opacity-40"
          />
          <div className="relative z-10 text-center text-white space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Online Bookkeeping Services</h1>
            <p className="text-lg md:text-xl">Accurate, timely, and efficient financial record-keeping.</p>
          </div>
        </section>

        {/* What is Bookkeeping Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto space-y-8 text-center">
            <div className="inline-block rounded-full bg-primary-green px-3 py-1 text-sm font-medium text-white">
              WHAT WE DO
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What is Bookkeeping?</h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
              Bookkeeping is the process of recording all financial transactions of a business. It forms the foundation
              of your financial records, providing a clear picture of your company's financial health. Accurate
              bookkeeping is crucial for tax compliance, financial analysis, and strategic decision-making.
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
                What's Included in Our Bookkeeping Services?
              </h2>
              <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
                Our comprehensive bookkeeping services cover all aspects of your daily financial operations, ensuring
                accuracy and efficiency.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Accordion type="multiple" className="w-full space-y-4">
                <AccordionItem value="item-1" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <Monitor className="h-6 w-6 text-primary-green" />
                      </div>
                      Accurate Financial Record-Keeping
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    We meticulously record all your financial transactions, ensuring every entry is precise and
                    categorized correctly for clear and reliable financial statements.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <FileText className="h-6 w-6 text-primary-green" />
                      </div>
                      Real-Time Transaction Categorization
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Our team categorizes your transactions in real-time, providing you with up-to-the-minute financial
                    data and insights into your spending and income.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <CalendarCheck className="h-6 w-6 text-primary-green" />
                      </div>
                      Monthly Financial Statement Preparation
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Receive professional, comprehensive financial statements each month without lifting a finger. We
                    generate balance sheets, income statements, and cash flow reports that give you a clear snapshot of
                    your business's performance. These reports are invaluable for tracking progress, securing funding,
                    and planning for the future.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="multiple" className="w-full space-y-4">
                <AccordionItem value="item-4" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <Banknote className="h-6 w-6 text-primary-green" />
                      </div>
                      Accounts Payable and Receivable Management
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    We handle your invoicing, vendor payments, and customer collections, ensuring smooth cash flow and
                    strong relationships with your partners.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <CreditCard className="h-6 w-6 text-primary-green" />
                      </div>
                      Bank and Credit Card Reconciliations
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Eliminate discrepancies and catch errors early with our thorough reconciliation services. We
                    regularly compare your books against bank and credit card statements to ensure everything matches
                    up. This process helps prevent fraud, identifies missing transactions, and provides an accurate
                    financial picture.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <Cloud className="h-6 w-6 text-primary-green" />
                      </div>
                      Cloud-Based Document Management
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Securely store and manage all your financial documents in the cloud, ensuring easy access and robust
                    security.
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
              Why Choose Atlas TACS for Bookkeeping?
            </h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
              Partnering with us for your bookkeeping needs means gaining peace of mind and access to expert financial
              management.
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-3 text-left">
                <h3 className="text-xl font-bold">Accuracy & Compliance</h3>
                <p className="text-muted-foreground">
                  We ensure your financial records are accurate and compliant with all relevant regulations, reducing
                  the risk of errors and penalties.
                </p>
              </div>
              <div className="space-y-3 text-left">
                <h3 className="text-xl font-bold">Time & Cost Savings</h3>
                <p className="text-muted-foreground">
                  Outsourcing bookkeeping frees up your valuable time and reduces overhead costs associated with hiring
                  in-house staff.
                </p>
              </div>
              <div className="space-y-3 text-left">
                <h3 className="text-xl font-bold">Data-Driven Insights</h3>
                <p className="text-muted-foreground">
                  With clean and organized books, you'll have the reliable data needed to make informed business
                  decisions.
                </p>
              </div>
              <div className="space-y-3 text-left">
                <h3 className="text-xl font-bold">Scalability</h3>
                <p className="text-muted-foreground">
                  Our services scale with your business, adapting to your needs as you grow without interruption.
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
              Frequently Asked Questions About Bookkeeping
            </h2>
            <Accordion type="single" collapsible className="w-full text-left">
              <AccordionItem value="faq-1" className="border-b border-gray-200">
                <AccordionTrigger className="flex items-center justify-between py-4 text-lg font-semibold hover:no-underline">
                  What is the difference between bookkeeping and accounting?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  Bookkeeping is the process of recording financial transactions, while accounting involves analyzing,
                  interpreting, and reporting on that financial data to provide insights and ensure compliance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2" className="border-b border-gray-200">
                <AccordionTrigger className="flex items-center justify-between py-4 text-lg font-semibold hover:no-underline">
                  How often will my books be updated?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  We offer flexible options, including daily, weekly, or monthly updates, depending on your business
                  volume and needs. Our goal is to provide real-time insights.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3" className="border-b border-gray-200">
                <AccordionTrigger className="flex items-center justify-between py-4 text-lg font-semibold hover:no-underline">
                  What software do you use for bookkeeping?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  We are proficient in various accounting software, including QuickBooks Online, Xero, and NetSuite. We
                  can work with your existing system or recommend the best solution for your business.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4" className="border-b border-gray-200">
                <AccordionTrigger className="flex items-center justify-between py-4 text-lg font-semibold hover:no-underline">
                  How do you ensure the accuracy of my financial records?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  We implement a multi-layered review process, including automated checks and manual verification by
                  experienced bookkeepers, to ensure the highest level of accuracy in your financial records.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5" className="border-b border-gray-200">
                <AccordionTrigger className="flex items-center justify-between py-4 text-lg font-semibold hover:no-underline">
                  Can you help with historical bookkeeping cleanup?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  Yes, we offer services to clean up and organize your historical financial data, bringing your books
                  up-to-date and ensuring accuracy for past periods.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* More Services Section */}
        <MoreServicesSection currentService="Bookkeeping" />

        {/* Contact Form Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 text-center space-y-8">
            <div className="text-sm font-semibold uppercase text-primary-green">GET IN TOUCH</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Streamline Your Bookkeeping?
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
              Fill out the form below to schedule a consultation and learn how our bookkeeping services can benefit your
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
