import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowRight, BarChart, Calculator, FileText, DollarSign, ReceiptText, Laptop } from "lucide-react"

interface MoreServicesSectionProps {
  currentService: string // e.g., "Bookkeeping", "Accounting"
}

export default function MoreServicesSection({ currentService }: MoreServicesSectionProps) {
  const allServices = [
    {
      name: "Bookkeeping",
      icon: ReceiptText,
      description: "Accurate and timely recording of financial transactions for clear insights.",
      href: "/services/bookkeeping",
      bgColorClass: "bg-white",
      textColorClass: "text-gray-900",
      iconBgClass: "bg-primary-green/10",
      iconColorClass: "text-primary-green",
    },
    {
      name: "Accounting",
      icon: Calculator,
      description:
        "Minimize stress, save time and money, and impress stakeholders with streamlined accounting operations managed by your dedicated team.",
      href: "/services/accounting",
      bgColorClass: "bg-primary-green",
      textColorClass: "text-white",
      iconBgClass: "bg-white/20",
      iconColorClass: "text-white",
    },
    {
      name: "CFO Services",
      icon: BarChart,
      description:
        "You need a partner that can steer you through pivotal moments. Through budgeting and forecasting, cash flow management, and strategic planning, our CFOs ensure your financial strategy is effective.",
      href: "/services/cfo-services",
      bgColorClass: "bg-white",
      textColorClass: "text-gray-900",
      iconBgClass: "bg-primary-green/10",
      iconColorClass: "text-primary-green",
    },
    {
      name: "Business & Personal Taxes",
      icon: DollarSign,
      description:
        "Take the guesswork out of taxes. Our expert services optimize your strategy, maximize benefits, and minimize liabilities, giving you peace of mind.",
      href: "/services/business-taxes",
      bgColorClass: "bg-white",
      textColorClass: "text-gray-900",
      iconBgClass: "bg-primary-green/10",
      iconColorClass: "text-primary-green",
    },
    {
      name: "Payroll",
      icon: FileText,
      description:
        "Streamline your payroll processes with our fast, accurate, and compliant solutions tailored for your business needs.",
      href: "/services/payroll",
      bgColorClass: "bg-primary-green",
      textColorClass: "text-white",
      iconBgClass: "bg-white/20",
      iconColorClass: "text-white",
    },
    {
      name: "Technology & BI",
      icon: Laptop,
      description: "Leveraging technology and business intelligence for data-driven insights.",
      href: "/services/technology-bi",
      bgColorClass: "bg-white",
      textColorClass: "text-gray-900",
      iconBgClass: "bg-primary-green/10",
      iconColorClass: "text-primary-green",
    },
  ]

  const filteredServices = allServices.filter((service) => service.name !== currentService)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 text-center space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore More Services</h2>
        <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
          Discover our full range of accounting and advisory solutions designed to support your business.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 pt-8">
          {filteredServices.map((service, index) => (
            <Link key={index} href={service.href} target="_blank" rel="noopener noreferrer">
              <Card
                className={`relative h-64 rounded-[2rem] p-6 flex flex-col justify-between items-start text-left ${service.bgColorClass} shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex flex-col items-start">
                  <div className={`${service.iconBgClass} p-3 rounded-full mb-4`}>
                    <service.icon className={`h-8 w-8 ${service.iconColorClass}`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${service.textColorClass}`}>{service.name}</h3>
                  <p
                    className={`text-sm ${service.textColorClass === "text-white" ? "text-gray-200" : "text-gray-600"}`}
                  >
                    {service.description}
                  </p>
                </div>
                <div className="absolute top-6 right-6">
                  <ArrowRight className={`h-6 w-6 ${service.textColorClass}`} />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
