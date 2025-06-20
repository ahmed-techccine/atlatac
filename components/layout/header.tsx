"use client"

import { NavigationMenuContent } from "@/components/ui/navigation-menu"

import { NavigationMenuTrigger } from "@/components/ui/navigation-menu"

import { NavigationMenuItem } from "@/components/ui/navigation-menu"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet" // Import SheetTitle
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu" // Removed NavigationMenuContent, NavigationMenuTrigger
import { Phone, Twitter, Facebook, Instagram, Search, Menu, ChevronRight, Linkedin } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import * as VisuallyHidden from "@radix-ui/react-visually-hidden" // Import VisuallyHidden
import Image from "next/image"

export default function Header() {
  return (
    <header className="w-full bg-[#222222] text-white">
      {/* Top Bar */}
      <div className="hidden lg:flex items-center justify-between px-8 py-3 border-b border-gray-700">
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary-green" />
            <span>Need help? Talk to an expert +1 (917) 995 - 8332</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-gray-400 hover:text-white">
            <Twitter className="h-4 w-4" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <Facebook className="h-4 w-4" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <Instagram className="h-4 w-4" />
          </Link>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white">
          <div className="relative w-[180px] h-[70px] md:w-[220px] md:h-[120px]">
            <Image
              src="/logo.png"
              alt="logo"
              fill
              className="object-contain px-6"
              priority
              />
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Simplified Home Link */}
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent hover:text-primary-green focus:bg-accent focus:text-primary-green focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Home
                </NavigationMenuLink>
              </Link>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-primary-green data-[state=open]:text-primary-green">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[400px] ">
                    <ListItem href="/services/bookkeeping" title="Bookkeeping">
                      Accurate records for clear financial insights.
                    </ListItem>
                    <ListItem href="/services/accounting" title="Accounting">
                      Comprehensive financial management for your business.
                    </ListItem>
                    <ListItem href="/services/cfo-services" title="CFO Services">
                      Strategic financial leadership for your business.
                    </ListItem>
                    <ListItem href="/services/business-taxes" title="Business & Personal Taxes">
                      Expert tax planning and preparation.
                    </ListItem>
                    <ListItem href="/services/payroll" title="Payroll">
                      Efficient and accurate payroll management.
                    </ListItem>
                    <ListItem href="/services/technology-bi" title="Technology & BI">
                      Leveraging data for smarter financial decisions.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent hover:text-primary-green focus:bg-accent focus:text-primary-green focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  About
                </NavigationMenuLink>
              </Link>              
              <Link href="/nonprofit-cfo" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent hover:text-primary-green focus:bg-accent focus:text-primary-green focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Nonprofit & CFO
                </NavigationMenuLink>
              </Link>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent hover:text-primary-green focus:bg-accent focus:text-primary-green focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#222222] text-white border-l border-gray-700">
            {/* Add VisuallyHidden SheetTitle for accessibility */}
            <VisuallyHidden.Root>
              <SheetTitle>Mobile Navigation Menu</SheetTitle>
            </VisuallyHidden.Root>
            <Link href="#" className="flex items-center gap-2 text-2xl font-bold text-white mb-6">
              Atlas TACS
            </Link>
            <div className="grid gap-4 py-6">
              {/* Simplified Home Link in mobile menu */}
              <Link href="/" className="flex w-full items-center py-2 text-lg font-semibold">
                Home
              </Link>
              <Link href="/about" className="flex w-full items-center py-2 text-lg font-semibold">
                About
              </Link>
              <Collapsible className="grid gap-2">
                <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                  Services <ChevronRight className="ml-auto h-5 w-5 transition-all" />
                </CollapsibleTrigger>
                <CollapsibleContent className="grid gap-2 pl-4">
                  <Link href="/services/bookkeeping" className="flex w-full items-center py-2 text-base">
                    Bookkeeping
                  </Link>
                  <Link href="/services/accounting" className="flex w-full items-center py-2 text-base">
                    Accounting
                  </Link>
                  <Link href="/services/cfo-services" className="flex w-full items-center py-2 text-base">
                    CFO Services
                  </Link>
                  <Link href="/services/business-taxes" className="flex w-full items-center py-2 text-base">
                    Business & Personal Taxes
                  </Link>
                  <Link href="/services/payroll" className="flex w-full items-center py-2 text-base">
                    Payroll
                  </Link>
                  <Link href="/services/technology-bi" className="flex w-full items-center py-2 text-base">
                    Technology & BI
                  </Link>
                </CollapsibleContent>
              </Collapsible>
              <Link href="/nonprofit-cfo" className="flex w-full items-center py-2 text-lg font-semibold">
                Nonprofit & CFO
              </Link>
              <Link href="/contact" className="flex w-full items-center py-2 text-lg font-semibold">
                Contact
              </Link>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-700">
              <div className="flex items-center gap-2 text-sm mb-2">
                <Phone className="h-4 w-4 text-primary-green" />
                <span>+1 (246) 333 - 0079</span>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

const ListItem = ({ title, children, href }: { title: string; children: React.ReactNode; href: string }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
