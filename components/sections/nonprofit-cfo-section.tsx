import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Handshake } from "lucide-react"

export default function NonprofitCfoSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container grid items-center gap-8 px-4 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div className="space-y-6">
          <div className="inline-block rounded-full bg-primary-green px-3 py-1 text-sm font-medium text-white">
            SPECIALIZED SERVICES
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nonprofit Accounting & Fractional CFO Services
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-lg">
            With over <span className="font-bold text-primary-green">15 years of dedicated experience</span> in managing
            nonprofit accounting, we understand the unique financial challenges and compliance requirements faced by
            mission-driven organizations. Our expertise ensures your financial health and operational efficiency.
          </p>
          <ul className="grid gap-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary-green" />
              Specialized Nonprofit Accounting
            </li>
            <li className="flex items-center gap-2">
              <Handshake className="h-4 w-4 text-primary-green" />
              Strategic Fractional CFO Support
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-primary-green" />
              Compliance & Grant Management
            </li>
          </ul>
          <Button
            asChild
            className="bg-primary-green hover:bg-primary-green/90 text-white px-6 py-2 rounded-md text-base font-semibold"
          >
            <Link href="/nonprofit-cfo">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
          {/* Placeholder for an image related to non-profit or CFO services */}
          <img
            src="/cfo.jpg"
            alt="Nonprofit accounting and fractional CFO services"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}
