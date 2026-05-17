import { Navbar } from '@/components/navbar'
import { SearchBar } from '@/components/search-bar'
import { StoreLogos } from '@/components/store-logos'
import { ShopFusionLogo, ShopFusionBrand } from '@/components/shop-fusion-logo'
import { Search, Zap, BarChart3, Shield } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-20 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[100px]" />
          <div className="absolute right-1/4 top-40 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]" />
        </div>
        
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <div className="mb-8">
              <ShopFusionLogo size="large" />
            </div>
            
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-400">
              <Zap className="h-4 w-4" />
              Compare prices instantly
            </div>
            
            <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-foreground">Search Once.</span>{' '}
              <span className="gradient-text">Shop Everywhere.</span>
            </h1>
            
            <p className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
              Find the best prices across multiple stores instantly. Stop wasting time checking different websites.
            </p>
            
            <div className="mt-10 w-full max-w-2xl">
              <SearchBar size="large" />
            </div>
            
            <p className="mt-4 text-sm text-muted-foreground">
              Try searching for &quot;AirPods&quot;, &quot;Sony Headphones&quot;, or &quot;Samsung Buds&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Store Logos Section */}
      <section className="border-y border-border/50 bg-card/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StoreLogos />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="text-foreground">Why Choose </span>
              <span className="gradient-text">Shop Fusion?</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Smart shopping made simple
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative rounded-2xl bg-card p-8 ring-1 ring-border/50 transition-all duration-300 hover:ring-purple-500/30">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl gradient-bg">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  One Search, All Stores
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Search once and see results from Amazon, eBay, Walmart, Alibaba, and Daraz all in one place.
                </p>
              </div>
            </div>
            
            <div className="group relative rounded-2xl bg-card p-8 ring-1 ring-border/50 transition-all duration-300 hover:ring-purple-500/30">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl gradient-bg">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Side-by-Side Comparison
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Compare prices, ratings, delivery times, and availability across different sellers instantly.
                </p>
              </div>
            </div>
            
            <div className="group relative rounded-2xl bg-card p-8 ring-1 ring-border/50 transition-all duration-300 hover:ring-purple-500/30 sm:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl gradient-bg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Smart Insights
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Get intelligent recommendations highlighting the best deals, top-rated products, and fastest shipping.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-foreground">Ready to find the </span>
            <span className="gradient-text">best deals?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Start your smart shopping journey today and save time and money.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/search"
              className="inline-flex items-center justify-center gap-2 rounded-full gradient-bg px-8 py-3 text-base font-medium text-white transition-all hover:opacity-90 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Search className="h-5 w-5" />
              Start Searching
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <ShopFusionBrand size="small" />
            <p className="text-sm text-muted-foreground">
              © 2026 Shop Fusion. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
