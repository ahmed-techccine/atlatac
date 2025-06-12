import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export default function CallToActionSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-green text-white text-center">
      <div className="container px-4 md:px-6 space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Finances?</h2>
        <p className="max-w-[800px] mx-auto text-lg md:text-xl">
          Contact us today for a free consultation and discover how our expert team can help you achieve your financial
          goals.
        </p>
        <Button
          asChild
          className="bg-white text-primary-green hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-semibold"
        >
          <Link href="tel:+12463330079">
            <Phone className="h-5 w-5 mr-2" />
            Call Now: +1- (917) 995 - 8332
          </Link>
        </Button>
      </div>
    </section>
  )
}
