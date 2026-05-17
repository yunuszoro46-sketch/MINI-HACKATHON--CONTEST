import { Navbar } from '@/components/navbar'
import { SearchBar } from '@/components/search-bar'
import { StoreLogos } from '@/components/store-logos'
import { Search, Zap, BarChart3, Shield } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        </div>
        
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Zap className="h-4 w-4" />
              Compare prices instantly
            </div>
            
            <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Search Once.{' '}
              <span className="text-primary">Compare Everywhere.</span>
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
      <section className="border-y border-border/50 bg-card/50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StoreLogos />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose Find It Once?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Smart shopping made simple
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:ring-primary/20">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                One Search, All Stores
              </h3>
              <p className="mt-2 text-muted-foreground">
                Search once and see results from Amazon, eBay, Walmart, Alibaba, and Daraz all in one place.
              </p>
            </div>
            
            <div className="group rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:ring-primary/20">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Side-by-Side Comparison
              </h3>
              <p className="mt-2 text-muted-foreground">
                Compare prices, ratings, delivery times, and availability across different sellers instantly.
              </p>
            </div>
            
            <div className="group rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:ring-primary/20 sm:col-span-2 lg:col-span-1">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
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
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/50 bg-card/50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to find the best deals?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Start your smart shopping journey today and save time and money.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/search"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
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
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Search className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold text-foreground">Find It Once</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 Find It Once. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
