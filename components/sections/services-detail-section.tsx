import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Briefcase, Users, ReceiptText, LayoutDashboard, Laptop } from "lucide-react"
import Link from "next/link"

export default function ServicesDetailSection() {
  const services = [
    {
      icon: ReceiptText,
      title: "Bookkeeping",
      description:
        "Accurate and timely recording of financial transactions, ensuring your books are always up-to-date and providing clear insights into your business health.",
      href: "/services/bookkeeping",
    },
    {
      icon: Briefcase,
      title: "Accounting",
      description:
        "Comprehensive financial reporting, analysis, and compliance services, tailored to meet your business's unique needs and regulatory requirements.",
      href: "/services/accounting",
    },
    {
      icon: Users,
      title: "CFO Services",
      description:
        "Strategic financial leadership and advisory, providing executive-level insights to guide your business decisions and drive growth without the overhead of a full-time CFO.",
      href: "/services/cfo-services",
    },
    {
      icon: DollarSign,
      title: "Business Taxes",
      description:
        "Expert tax planning and preparation services designed to minimize your tax liabilities, ensure compliance with current regulations, and optimize your financial position.",
      href: "/services/business-taxes",
    },
    {
      icon: LayoutDashboard,
      title: "Payroll",
      description:
        "Efficient and accurate payroll processing, including tax filings, direct deposits, and compliance management, ensuring your employees are paid on time and correctly.",
      href: "/services/payroll",
    },
    {
      icon: Laptop,
      title: "Technology & BI",
      description:
        "Leveraging cutting-edge financial technology and business intelligence tools to streamline operations, automate processes, and provide data-driven insights for strategic decision-making.",
      href: "/services/technology-bi",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary-green px-3 py-1 text-sm font-medium text-white">
              Our Expertise
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive Accounting Solutions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a wide range of accounting and advisory services designed to meet the unique needs of your
              business, ensuring financial health and strategic growth.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 md:grid-cols-2">
          {services.map((service, index) => (
            <Link key={index} href={service.href} target="_blank" rel="noopener noreferrer" className="h-full">
              <Card className="flex flex-col items-center p-6 text-center hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader>
                  <div className="bg-primary-green/10 p-4 rounded-full mb-4">
                    <service.icon className="h-8 w-8 text-primary-green" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
