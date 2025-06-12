import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutUsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container grid items-center gap-8 px-4 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div className="w-full overflow-hidden mx-auto">
  <Image
    src="/intro.png"
    alt="Two professionals working together"
    className="object-cover object-center"
    width={580}
    height={790}
  />
</div>
        <div className="space-y-6">
          <div className="inline-block rounded-full bg-primary-green px-3 py-1 text-sm font-medium text-white">
            OUR INTRODUCTION
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            We&apos;re Best Consultant Agency
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-lg">
            We are a virtual company headquartered in Virginia We provide outsourced accounting services to clients in
            the Washington DC area and beyond.
          </p>
          <ul className="grid gap-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-primary-green" />
              DMV area
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-primary-green" />
              Washington DC
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-primary-green" />
              Maryland
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-primary-green" />
              Virginia
            </li>
          </ul>
          <p className="max-w-[600px] text-muted-foreground text-sm">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered dimply free
            text alteration in some form, by injected humour, or randomised.
          </p>
          <Button className="bg-primary-green hover:bg-primary-green/90 text-white px-6 py-2 rounded-md text-base font-semibold">
            Discover More
          </Button>
        </div>
      </div>
    </section>
  )
}
