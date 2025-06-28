"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AirVent, Phone, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Diensten",
    href: "/diensten",
    submenu: [
      { name: "Airco Installatie", href: "/diensten", description: "Professionele installatie vanaf €1.299" },
      { name: "Airco Onderhoud", href: "/diensten", description: "Jaarlijks onderhoud vanaf €89" },
      { name: "Airco Reparatie", href: "/diensten", description: "Snelle storingsdienst" },
    ]
  },
  { name: "Merken", href: "/merken" },
  { name: "Kennisbank", href: "/kennisbank" },
  { name: "Over Ons", href: "/over-ons" },
  { name: "Contact", href: "/contact" },
]

export function HeaderOptimized() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 bg-white",
        isScrolled 
          ? "shadow-lg border-b border-[#F3F4F6]" 
          : "shadow-md border-b border-[#F3F4F6]"
      )}
    >
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white py-2.5">
        <div className="container flex items-center justify-between text-sm">
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:0462021430" className="flex items-center gap-1.5 font-medium hover:opacity-90 transition-opacity">
              <Phone className="h-3.5 w-3.5" />
              <span>046 202 1430</span>
            </a>
            <span className="text-white/40">•</span>
            <span className="flex items-center gap-1.5">
              <span className="text-yellow-300">★★★★★</span>
              <span className="font-medium">4.7/5</span>
              <span className="text-white/80">(163 reviews)</span>
            </span>
            <span className="text-white/40">•</span>
            <span className="text-white/90">Ma-vr: 09:00-17:00</span>
          </div>
          <div className="w-full md:w-auto text-center md:text-right">
            <span className="inline-flex items-center gap-2 font-medium">
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              Binnen 24 uur reactie
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F97316] to-[#EA580C] rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-2.5 bg-gradient-to-br from-[#F97316] to-[#EA580C] rounded-xl shadow-lg">
                <AirVent className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <span className={cn(
                "font-bold text-lg transition-all duration-300",
                isScrolled || !isHomePage ? "text-[#111827]" : "text-white"
              )}>Airco Brunssum</span>
              <span className={cn(
                "text-xs block transition-all duration-300",
                isScrolled || !isHomePage ? "text-[#4B5563]" : "text-white/80"
              )}>Specialist in heel Limburg</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.submenu ? (
                      <>
                        <NavigationMenuTrigger 
                          className={cn(
                            "bg-transparent hover:bg-transparent focus:bg-transparent font-semibold data-[state=open]:text-[#F97316] text-[#374151] hover:text-[#F97316]",
                            pathname === item.href && "text-[#F97316]"
                          )}
                        >
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4">
                            {item.submenu.map((subitem) => (
                              <li key={subitem.name}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subitem.href}
                                    className={cn(
                                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                      pathname === subitem.href && "bg-accent"
                                    )}
                                  >
                                    <div className="text-sm font-medium leading-none">{subitem.name}</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      {subitem.description}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "px-4 py-2 text-sm font-semibold transition-all duration-200",
                          pathname === item.href 
                            ? "text-[#F97316]" 
                            : "text-[#374151] hover:text-[#F97316]"
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <Button 
                asChild
                variant="outline"
                className={cn(
                  "font-semibold transition-all duration-300 border-2",
                  "border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white"
                )}
              >
                <Link href="/offerte">
                  Gratis Offerte
                </Link>
              </Button>
              <Button 
                asChild
                className="bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <Link href="tel:0462021430">
                  <Phone className="mr-2 h-4 w-4" />
                  Bel Direct
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t">
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-4 py-2 text-base font-medium rounded-md transition-colors",
                      pathname === item.href 
                        ? "bg-[#FFF7ED] text-[#F97316]" 
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-6 mt-2 space-y-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-[#F97316]"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="px-4 pt-4 space-y-3 border-t">
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-semibold shadow-lg"
                  size="lg"
                >
                  <Link href="tel:0462021430">
                    <Phone className="mr-2 h-5 w-5" />
                    Bel: 046 202 1430
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="w-full border-2 border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white font-semibold"
                  size="lg"
                >
                  <Link href="/offerte">
                    Gratis Offerte Aanvragen
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}