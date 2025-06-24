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
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md" 
          : "bg-white/80 backdrop-blur-sm"
      )}
    >
      {/* Top Bar */}
      <div className="bg-[#F97316] text-white py-2">
        <div className="container flex items-center justify-between text-sm">
          <div className="hidden md:flex items-center gap-6">
            <span className="flex items-center gap-1">
              <Phone className="h-3.5 w-3.5" />
              <a href="tel:0462021430" className="font-semibold">046 202 1430</a>
            </span>
            <span className="text-white/80">|</span>
            <span>✓ Gratis offerte</span>
            <span className="text-white/80">|</span>
            <span>✓ 10 jaar garantie</span>
            <span className="text-white/80">|</span>
            <span>✓ 4.9★ (180+ reviews)</span>
          </div>
          <div className="w-full md:w-auto text-center md:text-right">
            <span className="font-semibold">✓ Binnen 24 uur reactie gegarandeerd!</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="p-2 bg-[#F97316] rounded-lg">
              <AirVent className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg text-gray-900">StayCool Airco</span>
              <span className="text-xs text-gray-600 block -mt-1">Brunssum & Limburg</span>
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
                            "bg-transparent hover:bg-transparent focus:bg-transparent",
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
                          "px-4 py-2 text-sm font-medium transition-colors hover:text-[#F97316]",
                          pathname === item.href 
                            ? "text-[#F97316]" 
                            : "text-gray-700"
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
                className="border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white"
              >
                <Link href="/offerte">
                  Gratis Offerte
                </Link>
              </Button>
              <Button 
                asChild
                className="bg-[#F97316] hover:bg-[#EA580C] text-white shadow-lg"
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
                  className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white"
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
                  className="w-full border-[#F97316] text-[#F97316]"
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