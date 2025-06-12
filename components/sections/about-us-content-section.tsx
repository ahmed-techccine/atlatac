import { CheckCircle } from "lucide-react"

export default function AboutUsContentSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-block rounded-lg bg-primary-green px-3 py-1 text-sm font-medium text-white">
            Our Story
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Dedicated to Your Financial Success</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
            Atlas TACS is a leading accounting and advisory firm committed to providing exceptional financial services
            to businesses and individuals. With years of experience and a client-centric approach, we help you navigate
            complex financial landscapes and achieve your goals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-muted-foreground">
              Our mission is to empower our clients with accurate financial insights and strategic advice, enabling them
              to make informed decisions, optimize performance, and achieve sustainable growth. We strive to be a
              trusted partner in their journey to financial prosperity.
            </p>
            <ul className="grid gap-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary-green" />
                Client-focused solutions
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary-green" />
                Unwavering integrity
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary-green" />
                Commitment to excellence
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Our Values</h3>
            <p className="text-muted-foreground">
              Integrity, professionalism, and innovation are at the core of everything we do. We believe in building
              long-term relationships based on trust and mutual respect, delivering value that goes beyond numbers.
            </p>
            <ul className="grid gap-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary-green" />
                Transparency and honesty
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary-green" />
                Continuous learning and adaptation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary-green" />
                Community engagement
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
