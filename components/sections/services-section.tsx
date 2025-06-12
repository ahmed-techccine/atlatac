import { Card } from "@/components/ui/card"
import { Briefcase, Globe, Users } from "lucide-react"
import Link from "next/link"

export default function ServicesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 px-12">
      <div className="container px-4 flex flex-col gap-12 lg:flex-row items-start">
        {/* Left Text Block */}
        <div className="space-y-4 lg:w-1/3">
          <div className="text-sm font-semibold uppercase text-primary-green">SERVICES</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Service<br /> Include</h2>
          <p className="max-w-[400px] text-muted-foreground md:text-lg">
            Nam commodo accumsan leo. Praesent cursus felis id nisi auctor<br />
            auctor id in ligula. Morbi in sapien
            tristique, tempus lorem sed, finibus neque.
          </p>
        </div>

        {/* Right Cards Block */}
        <div className="grid gap-6 w-full sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {/* Outsource Accounting Card (Dark) */}
          <Link href="/services">
          <Card className="w-full h-full bg-[#333333] shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-white transition-transform duration-300 hover:scale-105">
            <div className="bg-primary-green/10 p-4 rounded-sm mb-4">
              <Users className="h-8 w-8 text-primary-green" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Outsource Accounting</h3>
            <p className="text-sm text-gray-300">
              Are you a start up seeking to outsource accounting functions? Are established small or mid-sized not for
              profit paying high costs for accounting ?
            </p>
          </Card>
          </Link>
          {/* Bookkeeping Card (White) */}
          <Link href="/services">
          <Card className="w-full h-full bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
            <div className="bg-primary-green/10 p-4 rounded-full mb-4">
              <Briefcase className="h-8 w-8 text-primary-green" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Bookkeeping</h3>
            <p className="text-sm text-gray-600">
              Do you need to get better insight into your data and/or you are paying high costs for finance function ?
            </p>
          </Card>
          </Link>
          {/* Accounting Systems Card (White) */}
          <Link href="/services">
          <Card className="w-full h-full bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
            <div className="bg-primary-green/10 p-4 rounded-full mb-4">
              <Globe className="h-8 w-8 text-primary-green" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Accounting Systems</h3>
            <p className="text-sm text-gray-600">
              Nam commodo accumsan leo. Nam commodo accumsan leo. Praesent cursus
            </p>
          </Card>
          </Link>
        </div>
      </div>
    </section>
  )
}