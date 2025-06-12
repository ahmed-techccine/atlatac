import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ContactForm from "@/components/contact-form" // Import the ContactForm component

export default function FaqContactSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container grid items-start gap-8 px-4 md:grid-cols-2 md:gap-12 lg:gap-16">
        {/* FAQ Section */}
        <div className="space-y-6">
          <div className="text-sm font-semibold uppercase text-gray-800">FAQ</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">We Always Answer Your Doubts</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-lg">
            Find answers to the most common questions about our outsourced accounting and advisory services. If you
            don't find what you're looking for, feel free to contact us directly.
          </p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-gray-200">
              <AccordionTrigger className="bg-primary-green text-white hover:no-underline hover:bg-primary-green/90 px-6 py-4 rounded-md text-left data-[state=open]:bg-primary-green data-[state=open]:text-white [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-white">
                What types of businesses do you serve?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-muted-foreground">
                We serve a wide range of businesses, from startups and small to mid-sized companies, to non-profits and
                government contractors. Our services are scalable to meet diverse industry needs.
              </AccordionContent>
            </AccordionItem>
            <p className="max-w-[600px] text-muted-foreground text-sm mt-4">
              Our goal is to provide clear and concise information to help you understand our services better.
            </p>
            <AccordionItem value="item-2" className="border-b border-gray-200 mt-4">
              <AccordionTrigger className="bg-gray-100 text-gray-800 hover:no-underline hover:bg-gray-200 px-6 py-4 rounded-md text-left data-[state=open]:bg-gray-100 data-[state=open]:text-gray-800 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-gray-800">
                How does outsourced accounting work?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-muted-foreground">
                Outsourced accounting involves delegating your financial tasks to our expert team. We handle everything
                from daily transactions to financial reporting, using secure cloud-based systems to ensure efficiency
                and accuracy.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b border-gray-200 mt-4">
              <AccordionTrigger className="bg-gray-100 text-gray-800 hover:no-underline hover:bg-gray-200 px-6 py-4 rounded-md text-left data-[state=open]:bg-gray-100 data-[state=open]:text-gray-800 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-gray-800">
                What are your pricing plans?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-muted-foreground">
                We offer three basic service plans: Bronze (focused on small businesses), Silver (accounting & finance
                for all organizations), and Gold (finance plus for non-profits and government contractors). You can find
                more details on our Pricing Plans section.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b border-gray-200 mt-4">
              <AccordionTrigger className="bg-gray-100 text-gray-800 hover:no-underline hover:bg-gray-200 px-6 py-4 rounded-md text-left data-[state=open]:bg-gray-100 data-[state=open]:text-gray-800 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-gray-800">
                Is my financial data secure with you?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-muted-foreground">
                Absolutely. We prioritize the security and confidentiality of your financial data. We utilize
                industry-standard encryption and secure cloud platforms, and our team adheres to strict privacy
                protocols.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
          <div className="text-sm font-semibold uppercase text-gray-800">SEND A MESSAGE</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Request A Call Back</h2>
          <ContactForm /> {/* Reusing the ContactForm component */}
        </div>
      </div>
    </section>
  )
}
