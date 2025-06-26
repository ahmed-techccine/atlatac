import Link from "next/link"
import { Twitter, Facebook, Instagram, Linkedin, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full bg-[#222222] text-white py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Background pattern - simplified */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(/placeholder.svg?width=200&height=200)`, // Using a larger placeholder for better pattern
          backgroundSize: "200px 200px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 relative z-10">
        {/* Company Info */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white">
          <div className="relative w-[180px] h-[70px] md:w-[220px] md:h-[100px]">
            <Image
              src="/logo.png"
              alt="logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
          <p className="text-sm text-gray-400">Great Experience for Building Customers & Businesses</p>
          <div className="flex space-x-2">
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gray-600"
            >
              <Twitter className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gray-600"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gray-600"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gray-600"
            >
              <Instagram className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Explore Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Explore</h3>
          <ul className="grid grid-cols-2 gap-y-2 text-sm text-gray-400">
            <li>
              <Link href="#" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Support
              </Link>
            </li>
            <li>
              
              <Link href="/meet-our-team" target="_blank" className="hover:text-white">
                Meet our team
              </Link>
              
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Terms of use
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Help
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Newsletter</h3>
          <p className="text-sm text-gray-400">Subsrcibe for our upcoming latest articles and resources</p>
          <div className="relative">
            <Input
              type="email"
              placeholder="Email address"
              className="w-full bg-white border-none text-gray-900 pr-10"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full text-primary-green hover:bg-transparent hover:text-primary-green/80"
            >
              <Send className="h-5 w-5" />
              <span className="sr-only">Subscribe</span>
            </Button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Stafford VA 22554</li>
            <li className="text-primary-green text-lg font-bold">+1- (917) 995 - 8332</li>
            <li>
              <Link href="mailto:contact@atlastacs.com" className="text-primary-green hover:text-primary-green/80">
                contact@atlastacs.com
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="container text-center text-sm text-gray-500 mt-12 pt-8 border-t border-gray-700 relative z-10">
        © Copyright {new Date().getFullYear()} by IProspect
      </div>
    </footer>
  )
}
