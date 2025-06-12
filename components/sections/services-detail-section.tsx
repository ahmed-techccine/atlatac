import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Briefcase, Users, BarChart, Shield, Lightbulb } from "lucide-react"

export default function ServicesDetailSection() {
  const services = [
    {
      icon: Users,
      title: "Outsourced Accounting",
      description:
        "Streamline your financial operations with our expert outsourced accounting services, tailored for businesses of all sizes.",
    },
    {
      icon: Briefcase,
      title: "Professional Bookkeeping",
      description:
        "Accurate and timely bookkeeping ensures your financial records are always in order, providing clear insights into your business health.",
    },
    {
      icon: DollarSign,
      title: "Tax Planning & Preparation",
      description:
        "Minimize your tax liabilities and ensure compliance with our comprehensive tax planning and preparation services for individuals and businesses.",
    },
    {
      icon: BarChart,
      title: "Financial Advisory",
      description:
        "Gain strategic financial insights and guidance to make informed decisions that drive growth and profitability for your enterprise.",
    },
    {
      icon: Shield,
      title: "Audit & Assurance",
      description:
        "Ensure transparency and compliance with our independent audit and assurance services, providing confidence in your financial statements.",
    },
    {
      icon: Lightbulb,
      title: "Business Consulting",
      description:
        "Unlock your business's full potential with our expert consulting, offering solutions for operational efficiency and strategic growth.",
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
            <Card
              key={index}
              className="flex flex-col items-center p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
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
          ))}
        </div>
      </div>
    </section>
  )
}
