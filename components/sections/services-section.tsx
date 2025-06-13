import { Card } from "@/components/ui/card"
import { Briefcase, DollarSign, Users, LayoutDashboard, ReceiptText, Laptop } from "lucide-react" // Updated icons
import Link from "next/link" // Add this import

export default function ServicesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container grid items-center gap-8 px-4 md:grid-cols-2 md:gap-12 lg:gap-16">
        {/* Left Text Block */}
        <div className="space-y-4">
          <div className="text-sm font-semibold uppercase text-primary-green">SERVICES</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Comprehensive Services</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-lg">
            We offer a full spectrum of accounting and financial advisory services designed to support your business
            growth and ensure financial clarity.
          </p>
        </div>

        {/* Right Cards Block */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* Bookkeeping Card */}
          <Link href="/services/bookkeeping" target="_blank" rel="noopener noreferrer">
            <Card className="bg-[#333333] shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-white h-full">
              {" "}
              {/* Added h-full for consistent height */}
              <div className="bg-primary-green/10 p-4 rounded-full mb-4">
                <ReceiptText className="h-8 w-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bookkeeping</h3>
              <p className="text-sm text-gray-300">
                Accurate and timely recording of financial transactions for clear insights.
              </p>
            </Card>
          </Link>
          {/* Accounting Card */}
          <Link href="/services/accounting" target="_blank" rel="noopener noreferrer">
            <Card className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center h-full">
              {" "}
              {/* Added h-full */}
              <div className="bg-primary-green/10 p-4 rounded-full mb-4">
                <Briefcase className="h-8 w-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Accounting</h3>
              <p className="text-sm text-gray-600">
                Comprehensive financial reporting, analysis, and compliance services.
              </p>
            </Card>
          </Link>
          {/* CFO Services Card */}
          <Link href="/services/cfo-services" target="_blank" rel="noopener noreferrer">
            <Card className="bg-[#333333] shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-white h-full">
              {" "}
              {/* Added h-full */}
              <div className="bg-primary-green/10 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">CFO Services</h3>
              <p className="text-sm text-gray-300">
                Strategic financial leadership and advisory for executive decision-making.
              </p>
            </Card>
          </Link>
          {/* Business Taxes Card */}
          <Link href="/services/business-taxes" target="_blank" rel="noopener noreferrer">
            <Card className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center h-full">
              {" "}
              {/* Added h-full */}
              <div className="bg-primary-green/10 p-4 rounded-full mb-4">
                <DollarSign className="h-8 w-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Business Taxes</h3>
              <p className="text-sm text-gray-600">
                Expert tax planning and preparation to minimize liabilities and ensure compliance.
              </p>
            </Card>
          </Link>
          {/* Payroll Card */}
          <Link href="/services/payroll" target="_blank" rel="noopener noreferrer">
            <Card className="bg-[#333333] shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-white h-full">
              {" "}
              {/* Added h-full */}
              <div className="bg-primary-green/10 p-4 rounded-full mb-4">
                <LayoutDashboard className="h-8 w-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Payroll</h3>
              <p className="text-sm text-gray-300">
                Efficient and accurate payroll processing, ensuring timely payments and compliance.
              </p>
            </Card>
          </Link>
          {/* Technology and BI Card */}
          <Link href="/services/technology-bi" target="_blank" rel="noopener noreferrer">
            <Card className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center h-full">
              {" "}
              {/* Added h-full */}
              <div className="bg-primary-green/10 p-4 rounded-full mb-4">
                <Laptop className="h-8 w-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Technology & BI</h3>
              <p className="text-sm text-gray-600">
                Leveraging technology and business intelligence for data-driven insights.
              </p>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  )
}
