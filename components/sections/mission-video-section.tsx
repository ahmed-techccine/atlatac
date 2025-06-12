import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function MissionVideoSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-black">
      <Image
        src="/video-bg.png"
        alt="Background image of a person holding a clipboard"
        fill
        className="object-cover object-center opacity-50"
      />
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4 z-10">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Mission is to Protect <br className="hidden md:block" /> your Businesses & Much More
          </h2>
          <Button className="bg-primary-green hover:bg-primary-green/90 text-white px-8 py-3 rounded-md text-lg font-semibold">
            Discover More
          </Button>
          <div className="flex flex-col items-center justify-center space-y-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-20 w-20 rounded-full border-2 border-primary-green text-primary-green hover:bg-primary-green/20"
            >
              <Play className="h-10 w-10 fill-primary-green" />
              <span className="sr-only">Play video</span>
            </Button>
            <span className="text-white text-lg italic">Watch video</span>
          </div>
        </div>
      </div>
    </section>
  )
}
