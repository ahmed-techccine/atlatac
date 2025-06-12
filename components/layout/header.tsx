"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Phone, Twitter, Facebook, Instagram, Search, Menu, ChevronRight, Linkedin } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Image from "next/image"

export default function Header() {
  return (
    <header className="w-full bg-[#222222] text-white">
      {/* Top Bar */}
      <div className="hidden lg:flex items-center justify-between px-8 py-3 border-b border-gray-700">
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary-green" />
            <span>Need help? Talk to an expert +1- (917) 995 - 8332</span>
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
        <Link href="/" className="flex px-12 items-center gap-2 text-2xl font-bold text-white">
          <div className="relative w-[120px] h-[38px] md:w-[190px] md:h-[60px]">
            <Image
              src="/logo.png"
              alt="logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent hover:text-primary-green focus:bg-accent focus:text-primary-green focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent hover:text-primary-green focus:bg-accent focus:text-primary-green focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/services" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent hover:text-primary-green focus:bg-accent focus:text-primary-green focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Services
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/nonprofit-cfo" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent hover:text-primary-green focus:bg-accent focus:text-primary-green focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Nonprofit & CFO
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent hover:text-primary-green focus:bg-accent focus:text-primary-green focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
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
            <Link href="#" className="flex items-center gap-2 text-2xl font-bold text-white mb-6">
              Atlas TACS
            </Link>
            <div className="grid gap-4 py-6">
              <Collapsible className="grid gap-2">
                <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                  Home <ChevronRight className="ml-auto h-5 w-5 transition-all" />
                </CollapsibleTrigger>
                <CollapsibleContent className="grid gap-2 pl-4">
                  <Link href="/" className="flex w-full items-center py-2 text-base">
                    Home V1
                  </Link>
                  <Link href="#" className="flex w-full items-center py-2 text-base">
                    Home V2
                  </Link>
                  <Link href="#" className="flex w-full items-center py-2 text-base">
                    Home V3
                  </Link>
                </CollapsibleContent>
              </Collapsible>
              <Link href="/about" className="flex w-full items-center py-2 text-lg font-semibold">
                About
              </Link>
              <Link href="/services" className="flex w-full items-center py-2 text-lg font-semibold">
                Services
              </Link>
              <Link href="/contact" className="flex w-full items-center py-2 text-lg font-semibold">
                Contact
              </Link>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-700">
              <div className="flex items-center gap-2 text-sm mb-2">
                <Phone className="h-4 w-4 text-primary-green" />
                <span>+1- (917) 995 - 8332</span>
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
