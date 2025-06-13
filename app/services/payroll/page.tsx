import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import { Users, FileText, Banknote, CalendarCheck, ShieldCheck, Receipt } from "lucide-react" // Removed ChevronDown
import ContactForm from "@/components/contact-form"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import MoreServicesSection from "@/components/sections/more-services-section"

export default function PayrollPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden bg-gray-900 flex items-center justify-center">
          <Image
            src="/payroll.png"
            alt="Payroll Background"
            fill
            className="object-cover object-center opacity-40"
          />
          <div className="relative z-10 text-center text-white space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Corporate Payroll Services</h1>
            <p className="text-lg md:text-xl">Efficient and accurate payroll management for your business.</p>
          </div>
        </section>

        {/* What is Corporate Payroll Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto space-y-8 text-center">
            <div className="inline-block rounded-full bg-primary-green px-3 py-1 text-sm font-medium text-white">
              WHAT WE DO
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What is Corporate Payroll?</h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
              Corporate payroll services involve managing all aspects of employee compensation, including calculating
              wages, withholding taxes, processing deductions, and ensuring timely payments. It also encompasses filing
              payroll taxes and complying with labor laws, ensuring your business remains compliant and your employees
              are paid accurately.
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
                What's Included in Our Payroll Services?
              </h2>
              <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
                Our comprehensive payroll services handle everything from calculations to compliance, ensuring a smooth
                and accurate payroll process.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Accordion type="multiple" className="w-full space-y-4">
                <AccordionItem value="item-1" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <Users className="h-6 w-6 text-primary-green" />
                      </div>
                      Payroll Processing
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Accurate calculation of wages, overtime, bonuses, and commissions for all employees, ensuring timely
                    and correct payments.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <FileText className="h-6 w-6 text-primary-green" />
                      </div>
                      Tax Withholding & Filings
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Correct calculation and timely submission of federal, state, and local payroll taxes, ensuring your
                    business remains compliant.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <Banknote className="h-6 w-6 text-primary-green" />
                      </div>
                      Direct Deposit & Pay Stubs
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Secure direct deposit services and online access to detailed pay stubs for employees, enhancing
                    convenience and efficiency.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="multiple" className="w-full space-y-4">
                <AccordionItem value="item-4" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <CalendarCheck className="h-6 w-6 text-primary-green" />
                      </div>
                      New Hire Reporting
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Ensuring compliance with new hire reporting requirements to relevant government agencies, avoiding
                    potential penalties.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <Receipt className="h-6 w-6 text-primary-green" />
                      </div>
                      W-2 & 1099 Preparation
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Annual preparation and filing of W-2s for employees and 1099s for contractors, simplifying year-end
                    tax processes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-none rounded-xl shadow-md bg-white">
                  <AccordionTrigger className="flex items-center justify-between p-6 text-lg font-semibold hover:no-underline data-[state=open]:bg-white data-[state=open]:rounded-t-xl data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary-green/10 group-data-[state=open]:bg-white">
                        <ShieldCheck className="h-6 w-6 text-primary-green" />
                      </div>
                      Compliance Management
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Staying up-to-date with changing payroll laws and regulations to ensure your business remains
                    compliant and avoids penalties.
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
              Why Choose Atlas TACS for Payroll?
            </h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
              Simplify your payroll process and ensure accuracy with our expert services.
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-3 text-left">
                <h3 className="text-xl font-bold">Accuracy & Timeliness</h3>
                <p className="text-muted-foreground">
                  Ensure your employees are paid correctly and on schedule, every time.
                </p>
              </div>
              <div className="space-y-3 text-left">
                <h3 className="text-xl font-bold">Compliance Assurance</h3>
                <p className="text-muted-foreground">
                  Stay compliant with all federal, state, and local payroll tax laws and regulations.
                </p>
              </div>
              <div className="space-y-3 text-left">
                <h3 className="text-xl font-bold">Reduced Administrative Burden</h3>
                <p className="text-muted-foreground">
                  Free up your time and resources by outsourcing complex payroll tasks.
                </p>
              </div>
              <div className="space-y-3 text-left">
                <h3 className="text-xl font-bold">Expert Support</h3>
                <p className="text-muted-foreground">
                  Access to experienced payroll professionals who can answer your questions and resolve issues.
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
              Frequently Asked Questions About Payroll
            </h2>
            <Accordion type="single" collapsible className="w-full text-left">
              <AccordionItem value="faq-1" className="border-b border-gray-200">
                <AccordionTrigger className="flex items-center justify-between py-4 text-lg font-semibold hover:no-underline">
                  What information do you need to process payroll?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  We typically need employee details (name, address, SSN), pay rates, hours worked, and any deductions
                  or benefits information. We'll provide a checklist to ensure nothing is missed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2" className="border-b border-gray-200">
                <AccordionTrigger className="flex items-center justify-between py-4 text-lg font-semibold hover:no-underline">
                  How do you ensure payroll compliance?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  Our team stays updated on all federal, state, and local payroll tax laws and regulations. We handle
                  all filings and ensure your business adheres to current compliance standards.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3" className="border-b border-gray-200">
                <AccordionTrigger className="flex items-center justify-between py-4 text-lg font-semibold hover:no-underline">
                  Can you handle payroll for businesses with employees in multiple states?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  Yes, we have expertise in multi-state payroll processing, ensuring correct tax withholdings and
                  filings for employees across different jurisdictions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4" className="border-b border-gray-200">
                <AccordionTrigger className="flex items-center justify-between py-4 text-lg font-semibold hover:no-underline">
                  Do you handle W-2 and 1099 preparation?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  Yes, as part of our comprehensive payroll services, we prepare and file all necessary year-end tax
                  forms, including W-2s for employees and 1099s for contractors, ensuring timely and accurate
                  submission.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5" className="border-b border-gray-200">
                <AccordionTrigger className="flex items-center justify-between py-4 text-lg font-semibold hover:no-underline">
                  What about benefits administration?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  While our primary focus is payroll processing and tax compliance, we can integrate with your existing
                  benefits providers to ensure accurate deductions and reporting for employee benefits.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* More Services Section */}
        <MoreServicesSection currentService="Payroll" />

        {/* Contact Form Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 text-center space-y-8">
            <div className="text-sm font-semibold uppercase text-primary-green">GET IN TOUCH</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simplify Your Payroll</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
              Fill out the form below to schedule a consultation and learn how our payroll services can benefit your
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
