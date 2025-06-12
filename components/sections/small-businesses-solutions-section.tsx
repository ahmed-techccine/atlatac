import Image from "next/image"

export default function SmallBusinessesSolutionsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container grid items-center gap-8 px-4 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div className="space-y-6">
          <div className="inline-block rounded-full bg-primary-green px-3 py-1 text-sm font-medium text-white">
            OUR BENEFITS
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Small Businesses Solutions</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-lg">
            Our outsourced accounting services support <span className="font-bold">small businesses</span> to streamline
            their accounting processes, reducing overhead costs, and enhancing financial accuracy and transparency. In
            addition, we offer access to advanced accounting technology, specialized expertise, and on-demand support.
          </p>
          <p className="max-w-[600px] text-muted-foreground md:text-lg">
            By leveraging our services your <span className="font-bold">small businesses</span> can focus on your
            specialities and provide high-quality services to your clients, while leaving the accounting tasks to the
            experts.
          </p>
          <p className="max-w-[600px] text-muted-foreground md:text-lg">
            Our top priority is to become familiar with your goals by actively listening, asking questions, and applying
            our expertise to support you in achieving them.
          </p>
        </div>
        <div className="w-full h-auto rounded-lg overflow-hidden">
          <Image
            src="/benfits.png"
            alt="Two professionals working on a computer"
            className="object-cover object-center"
            width={780}
            height={680}
          />
        </div>
      </div>
    </section>
  )
}
