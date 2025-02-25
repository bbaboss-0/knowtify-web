"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Bell, Sun, Moon } from 'lucide-react'
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#team", label: "Team" },
  { href: "blog", label: "Blog" },
  { href: "#contact", label: "Contact" }
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState("light") // Default theme

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) {
      setTheme(storedTheme)
      document.documentElement.classList[storedTheme === "dark" ? "add" : "remove"]("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.classList[newTheme === "dark" ? "add" : "remove"]("dark")
    localStorage.setItem("theme", newTheme)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.span 
              className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent dark:from-emerald-400 dark:to-green-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              KNOWTIFY
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-medium transition-all text-gray-700 dark:text-gray-300 group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              className="hidden md:flex"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            <Button className="bg-emerald-600 hover:bg-emerald-700 hidden md:flex">
              Get Started
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          className="fixed inset-0 top-16 bg-white/95 dark:bg-gray-900 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="container p-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative flex items-center justify-between p-3 rounded-lg text-lg transition-colors hover:bg-gray-100 text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    <ChevronDown className="h-5 w-5 opacity-50" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 grid gap-4">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                Get Started
              </Button>

              <div className="flex justify-center gap-4">
                <Button variant="outline" size="icon" onClick={toggleTheme}>
                  {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                </Button>
                <Button variant="outline" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  )
}
