"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/posts", label: "Posts" },
    { href: "/about", label: "About" },
    { href: "/join", label: "Join" },
  ]

  return (
    <div className="app-bar flex flex-col bg-surface-100-800-token space-y-4 p-4 z-[1000] w-full fixed top-0 left-0 shadow-lg transition-all backdrop-blur-md bg-background/80">
      <div className="app-bar-row-main grid items-center grid-cols-3 gap-4">
        {/* Logo */}
        <div className="app-bar-slot-lead flex-none flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity">
            <Image
              alt="ACM Chapter Logo"
              src="/acm_sc_logo.png"
              width={48}
              height={48}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full p-1"
            />
            <div className="flex flex-col">
              <span className="text-grey-800 dark:text-white text-lg sm:text-xl font-bold tracking-tight">
                ACM ISCTE
              </span>
              <span className="text-grey-800/70 dark:text-white/70 text-xs hidden sm:block">Student Chapter</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="app-bar-slot-default flex-auto place-self-center">
          <div className="hidden md:flex space-x-6 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group text-white transition-all duration-300 ease-in-out"
              >
                <span className="bg-left-bottom text-white bg-gradient-to-r from-white to-blue-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out font-medium">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="app-bar-slot-trail flex-none flex items-center space-x-4 place-content-end">
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            {/* Sign Up Button */}
            <Link
              href="/register"
              className="bg-white text-blue-800 max-sm:hidden px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors shadow-md font-medium"
            >
              Join
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden flex items-center p-2 rounded-lg text-white hover:bg-blue-500/20 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md rounded-lg p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 px-4 text-foreground hover:bg-accent rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/register"
            className="block py-2 px-4 bg-primary text-primary-foreground rounded-md text-center font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  )
}
