import PricingCard from "@/components/pricing-card"
import { Globe } from "lucide-react" // Import Globe only

export default function PricingPlansSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-green/10">
      <div className="container px-4 text-center space-y-8">
        <div className="text-sm font-semibold uppercase text-gray-800">WE OPERATE THE FOLLOWING</div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
          Three Basic Service Plans
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 pt-8">
          <PricingCard
            icon={Globe} // Changed to Globe
            iconColor="hsl(var(--bronze-icon))"
            planName="BRONZE PLAN"
            description="ACCOUNTING FOCUSED FOR SMALL BUSINESSES"
            price="$49"
          />
          <PricingCard
            icon={Globe} // Changed to Globe
            iconColor="hsl(var(--silver-icon))"
            planName="SILVER PLAN"
            description="ACCOUNTING & FINANCE FOCUSED FOR ALL ORGANIZATIONS"
            price="$99"
          />
          <PricingCard
            icon={Globe} // Changed to Globe
            iconColor="hsl(var(--gold-icon))"
            planName="GOLD PLAN"
            description="FINANCE PLUS FOR NONPROFITS AND GOVERNMENT CONTRACTORS"
            price="$149"
          />
        </div>
      </div>
    </section>
  )
}
