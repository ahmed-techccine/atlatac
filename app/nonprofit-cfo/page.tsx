import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import { CheckCircle, Lightbulb, DollarSign, Scale, Users, Briefcase } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"

export default function NonprofitCfoPage() {
  const services = [
    {
      icon: Scale,
      title: "Grant & Fund Accounting",
      description:
        "Expert management of restricted funds and grant compliance to ensure proper utilization and reporting.",
    },
    {
      icon: Users,
      title: "Board Reporting & Governance",
      description:
        "Clear, concise financial reports and strategic insights for your board, supporting effective governance.",
    },
    {
      icon: DollarSign,
      title: "Budgeting & Forecasting",
      description:
        "Develop robust budgets and accurate financial forecasts to guide your nonprofit's strategic planning.",
    },
    {
      icon: Briefcase,
      title: "Fractional CFO Services",
      description:
        "Strategic financial leadership without the overhead of a full-time executive, tailored to your needs.",
    },
    {
      icon: Lightbulb,
      title: "Internal Controls & Compliance",
      description: "Establish strong internal controls and ensure adherence to all regulatory and donor requirements.",
    },
    {
      icon: CheckCircle,
      title: "Audit Preparation & Support",
      description:
        "Seamless preparation and support throughout your annual audit process, ensuring a smooth experience.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden bg-gray-900 flex items-center justify-center">
          <Image
            src="/cfo.jpg"
            alt="Nonprofit Accounting Background"
            fill
            className="object-cover object-center opacity-40"
          />
          <div className="relative z-10 text-center text-white space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Non-profit Accounting & Fractional CFO Services</h1>
            <p className="text-lg md:text-xl">Strategic financial leadership for mission-driven organizations.</p>
          </div>
        </section>

        {/* Introduction Section with Experience Highlight */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container grid items-center gap-8 px-4 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/cfo-1.png"
                alt="Nonprofit professionals collaborating"
                fill
                className="object-cover object-center"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-green transform rotate-45" />
            </div>
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-primary-green px-3 py-1 text-sm font-medium text-white">
                OUR EXPERTISE
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Over 15 Years of Dedicated Nonprofit Financial Management
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                With more than <span className="font-bold text-primary-green">15 years of hands-on experience</span> in
                managing the intricate financial operations of nonprofit organizations, we bring unparalleled insight
                and strategic guidance to your mission. Our deep understanding of nonprofit specific accounting
                standards, compliance, and reporting requirements ensures your organization's financial integrity and
                sustainability.
              </p>
              <ul className="grid gap-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary-green" />
                  Deep understanding of FASB and GAAP for nonprofits
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary-green" />
                  Expertise in grant and donor restricted fund accounting
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary-green" />
                  Proven track record in audit preparation and compliance
                </li>
              </ul>
              <p className="max-w-[600px] text-muted-foreground text-sm">
                We partner with you to optimize financial processes, enhance transparency, and provide the strategic
                financial leadership necessary for your nonprofit to thrive and achieve its impactful goals.
              </p>
            </div>
          </div>
        </section>

        {/* Services Offered Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary-green px-3 py-1 text-sm font-medium text-white">
                  OUR SERVICES
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Comprehensive Solutions for Nonprofits
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From daily accounting operations to high-level financial strategy, our services are designed to meet
                  the unique needs of nonprofit organizations and provide the financial clarity you need.
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

        {/* Contact Form Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 text-center space-y-8">
            <div className="text-sm font-semibold uppercase text-primary-green">GET IN TOUCH</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Discuss Your Nonprofit's Financial Needs?
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
              Fill out the form below to schedule a consultation and learn how our specialized services can benefit your
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
