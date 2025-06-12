

import type React from "react"
// Removed useState as flip animation is removed
import { Card } from "@/components/ui/card"

interface PricingCardProps {
  icon: React.ElementType
  iconColor: string
  planName: string
  description: string
  price: string // Still keeping price prop for potential future use or if user wants it displayed statically
}

export default function PricingCard({ icon: Icon, iconColor, planName, description, price }: PricingCardProps) {
  // Removed isFlipped state and handlers

  return (
    <div className="relative w-full h-[300px]">
      {" "}
      {/* Removed perspective-1000 */}
      <Card
        className={`w-full h-full rounded-tr-[2rem] rounded-bl-[2rem] p-8 flex flex-col items-center justify-center text-center border-2 border-primary-green`} // Adjusted roundedness and removed flip classes
      >
        {/* Front of the card - now static */}
        <div className="flex flex-col items-center justify-center">
          {" "}
          {/* Simplified structure */}
          {/* Icon directly rendered without extra wrapper, applying color */}
          <Icon className="h-10 w-10 mb-6" style={{ color: iconColor }} />
          <h3 className="text-2xl font-bold mb-2 text-gray-900">{planName}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>

        {/* Removed Back of the card */}
      </Card>
    </div>
  )
}
