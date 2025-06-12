import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      <Image
        src="/hero.png"
        alt="Background image of hands on a calculator"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
        <div className="relative z-10 max-w-4xl space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Outsourced Accounting <br className="hidden md:block" /> and Advisory Services
          </h1>
          <Button className="bg-primary-green hover:bg-primary-green/90 text-white px-8 py-3 rounded-md text-lg font-semibold">
            Discover More
          </Button>
        </div>
        <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <ArrowLeft className="h-6 w-6" />
            <span className="sr-only">Previous</span>
          </Button>
        </div>
        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <ArrowRight className="h-6 w-6" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
