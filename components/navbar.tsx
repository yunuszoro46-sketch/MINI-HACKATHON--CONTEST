'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Search, Menu, X, Sparkles } from 'lucide-react'
import { ShopFusionBrand } from './shop-fusion-logo'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-transform duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Top announcement bar */}
      <div className="gradient-bg py-2 text-center text-sm font-medium text-white">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="h-4 w-4" />
          <span>Compare prices across 500+ stores instantly</span>
          <Sparkles className="h-4 w-4" />
        </div>
      </div>

      <div className="border-b border-white/10 bg-background/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center">
            <ShopFusionBrand size="small" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            <Link 
              href="/" 
              className="group relative text-sm font-medium text-foreground transition-colors"
            >
              Home
              <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-100 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
            </Link>
            <Link 
              href="/search" 
              className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Search
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all group-hover:w-full" />
            </Link>
            <Link 
              href="#how-it-works" 
              className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              How It Works
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all group-hover:w-full" />
            </Link>
            <Link 
              href="#deals" 
              className="group relative flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Deals
              <span className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                HOT
              </span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all group-hover:w-full" />
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/search"
              className="hidden rounded-full border border-white/10 p-2.5 text-muted-foreground transition-all hover:border-purple-500/50 hover:text-foreground hover:shadow-lg hover:shadow-purple-500/20 sm:flex"
            >
              <Search className="h-5 w-5" />
            </Link>
            
            <Link 
              href="/search"
              className="gradient-bg group relative overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-purple-500/30"
            >
              <span className="relative z-10">Start Comparing</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-600 to-purple-600 transition-transform duration-300 group-hover:translate-x-0" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-foreground lg:hidden"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-background px-4 py-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {[
                { label: 'Home', href: '/' },
                { label: 'Search', href: '/search' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Deals', href: '#deals' },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
