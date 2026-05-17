'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Search, Menu, X, ChevronDown, Sparkles } from 'lucide-react'
import { ShopFusionBrand } from './shop-fusion-logo'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top announcement bar */}
      <div className="gradient-bg px-4 py-2 text-center text-sm font-medium text-white">
        <span className="flex items-center justify-center gap-2">
          <Sparkles className="h-4 w-4" />
          Compare prices from 50+ stores instantly
          <Sparkles className="h-4 w-4" />
        </span>
      </div>
      
      {/* Main navbar */}
      <div className="border-b border-white/10 bg-background/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center">
            <ShopFusionBrand size="small" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            <Link 
              href="/" 
              className="group relative px-4 py-2 text-sm font-medium text-foreground transition-colors"
            >
              Home
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-3/4" />
            </Link>
            <Link 
              href="/search" 
              className="group relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Search
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-3/4" />
            </Link>
            <div className="group relative px-4 py-2">
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                Categories
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              {/* Dropdown */}
              <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                <div className="w-56 rounded-xl border border-white/10 bg-card p-2 shadow-xl shadow-black/20">
                  {['Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Books'].map((cat) => (
                    <Link
                      key={cat}
                      href={`/search?category=${cat.toLowerCase()}`}
                      className="block rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link 
              href="#how-it-works" 
              className="group relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              How It Works
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-3/4" />
            </Link>
            <Link 
              href="#deals" 
              className="group relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="flex items-center gap-1.5">
                Deals
                <span className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-2 py-0.5 text-[10px] font-semibold text-white">
                  HOT
                </span>
              </span>
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-3/4" />
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Search button */}
            <Link
              href="/search"
              className="hidden rounded-full border border-white/10 bg-white/5 p-2.5 text-muted-foreground transition-all hover:border-purple-500/50 hover:bg-white/10 hover:text-foreground sm:flex"
            >
              <Search className="h-5 w-5" />
            </Link>
            
            {/* CTA Button */}
            <Link 
              href="/search"
              className="gradient-bg group relative overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-purple-500/30"
            >
              <span className="relative z-10">Start Comparing</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-600 to-purple-600 transition-transform duration-300 group-hover:translate-x-0" />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-foreground lg:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-background px-4 py-6 lg:hidden">
            <nav className="flex flex-col gap-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Search', href: '/search' },
                { label: 'Categories', href: '#' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Deals', href: '#deals' },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
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
