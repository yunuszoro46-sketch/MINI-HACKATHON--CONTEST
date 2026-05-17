'use client'

import Link from 'next/link'
import { ShopFusionBrand } from './shop-fusion-logo'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <ShopFusionBrand size="small" />
        </Link>
        
        <nav className="hidden items-center gap-8 md:flex">
          <Link 
            href="/" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
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
            href="#" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            How It Works
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="gradient-bg rounded-full px-5 py-2 text-sm font-medium text-white transition-all hover:opacity-90 hover:shadow-lg hover:shadow-purple-500/25">
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}
