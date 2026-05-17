'use client'

import { Navbar } from '@/components/navbar'
import { SearchBar } from '@/components/search-bar'
import { Search, GitCompare, TrendingUp, ShoppingCart, Sparkles, Zap, Shield, Clock } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Search Once',
    description: 'Enter your product name, brand, or category. Our powerful search engine scans multiple stores simultaneously.',
    icon: Search,
    color: 'from-purple-500 to-blue-500',
  },
  {
    number: '02',
    title: 'Compare Results',
    description: 'View side-by-side comparisons of prices, ratings, delivery times, and availability across all major retailers.',
    icon: GitCompare,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: '03',
    title: 'Get Smart Insights',
    description: 'Our AI identifies the best deals, highest-rated options, and fastest delivery - helping you make informed decisions.',
    icon: TrendingUp,
    color: 'from-cyan-500 to-purple-500',
  },
  {
    number: '04',
    title: 'Shop with Confidence',
    description: 'Click through to your preferred store and complete your purchase, knowing you got the best deal available.',
    icon: ShoppingCart,
    color: 'from-purple-500 to-pink-500',
  },
]

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Insights',
    description: 'Our smart algorithms analyze thousands of products to find you the best deals instantly.',
  },
  {
    icon: Zap,
    title: 'Real-Time Updates',
    description: 'Prices and availability are updated in real-time, so you never miss a deal.',
  },
  {
    icon: Shield,
    title: 'Trusted Retailers',
    description: 'We only partner with verified, trusted retailers to ensure safe shopping.',
  },
  {
    icon: Clock,
    title: 'Save Time & Money',
    description: 'Stop visiting multiple sites. Find the best price in seconds, not hours.',
  },
]

const stores = [
  { name: 'Amazon', logo: 'A' },
  { name: 'eBay', logo: 'e' },
  { name: 'Walmart', logo: 'W' },
  { name: 'Alibaba', logo: 'Al' },
  { name: 'Daraz', logo: 'D' },
  { name: 'Target', logo: 'T' },
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-purple-500/5 to-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-400 ring-1 ring-purple-500/20">
              <Sparkles className="h-4 w-4" />
              Simple & Powerful
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              How{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Shop Fusion
              </span>{' '}
              Works
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Finding the best deals has never been easier. Follow these simple steps to start saving time and money on every purchase.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative rounded-2xl bg-card p-6 ring-1 ring-border/50 transition-all duration-300 hover:ring-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 sm:p-8"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden h-0.5 w-8 bg-gradient-to-r from-purple-500/50 to-transparent lg:block" />
                )}
                
                <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${step.color} p-3 shadow-lg`}>
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                
                <span className="absolute right-6 top-6 text-4xl font-bold text-white/5 transition-colors group-hover:text-purple-500/10 sm:text-5xl">
                  {step.number}
                </span>
                
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="border-y border-border/50 bg-card/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Try It Now
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Enter a product below to see Shop Fusion in action
            </p>
          </div>
          
          <div className="mx-auto mt-10 max-w-2xl">
            <SearchBar />
          </div>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
            <span>Popular searches:</span>
            {['iPhone 15', 'Nike Shoes', 'Samsung TV', 'Headphones'].map((term) => (
              <a
                key={term}
                href={`/search?q=${encodeURIComponent(term)}`}
                className="rounded-full bg-secondary px-3 py-1.5 transition-colors hover:bg-purple-500/20 hover:text-purple-400"
              >
                {term}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Why Choose Shop Fusion?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Powerful features designed to save you time and money
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl bg-card p-6 ring-1 ring-border/50 transition-all duration-300 hover:ring-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="mb-4 inline-flex rounded-xl bg-purple-500/10 p-3 text-purple-400 transition-colors group-hover:bg-purple-500 group-hover:text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Stores */}
      <section className="border-t border-border/50 bg-card/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Our Partner Stores
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We compare prices from the world&apos;s leading retailers
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-6 sm:gap-6">
            {stores.map((store) => (
              <div
                key={store.name}
                className="flex aspect-square items-center justify-center rounded-2xl bg-card ring-1 ring-border/50 transition-all duration-300 hover:ring-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="text-center">
                  <span className="text-2xl font-bold text-foreground sm:text-3xl">
                    {store.logo}
                  </span>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {store.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500 to-blue-600 p-8 sm:p-12 lg:p-16">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
            
            <div className="relative text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Ready to Start Saving?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                Join millions of smart shoppers who use Shop Fusion to find the best deals every day.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="/search"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-purple-600 shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
                >
                  Start Searching
                </a>
                <a
                  href="/deals"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  View Today&apos;s Deals
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; 2026 Shop Fusion. Search Once. Shop Everywhere.
          </p>
        </div>
      </footer>
    </div>
  )
}
