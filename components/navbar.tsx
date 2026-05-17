'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Search, Menu, X } from 'lucide-react'
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
      <div className="border-b border-white/10 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center">
            <ShopFusionBrand size="small" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            <Link 
              href="/" 
              className="text-sm font-medium text-foreground transition-colors hover:text-purple-400"
            >
              Home
            </Link>
            <Link 
              href="/search" 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Search
            </Link>
            <Link 
              href="#how-it-works" 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              How It Works
            </Link>
            <Link 
              href="#deals" 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Deals
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/search"
              className="hidden rounded-full border border-white/10 p-2 text-muted-foreground transition-colors hover:border-purple-500/50 hover:text-foreground sm:flex"
            >
              <Search className="h-4 w-4" />
            </Link>
            
            <Link 
              href="/search"
              className="gradient-bg rounded-full px-5 py-2 text-sm font-medium text-white transition-shadow hover:shadow-lg hover:shadow-purple-500/25"
            >
              Start Comparing
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-foreground lg:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
                  className="rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
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
