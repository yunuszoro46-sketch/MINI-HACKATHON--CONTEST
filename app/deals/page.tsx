'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Clock, Flame, Tag, Percent, Star, ArrowRight, Timer, TrendingDown, Sparkles } from 'lucide-react'

interface Deal {
  id: string
  title: string
  image: string
  originalPrice: number
  salePrice: number
  discount: number
  store: string
  rating: number
  reviews: number
  endsIn: string
  category: string
  badge?: 'hot' | 'flash' | 'limited'
}

const deals: Deal[] = [
  {
    id: '1',
    title: 'Apple AirPods Pro (2nd Gen)',
    image: 'https://images.unsplash.com/photo-1588423771073-b8903fba77ac?w=400&h=400&fit=crop',
    originalPrice: 249,
    salePrice: 189,
    discount: 24,
    store: 'Amazon',
    rating: 4.8,
    reviews: 12543,
    endsIn: '2h 34m',
    category: 'Electronics',
    badge: 'hot',
  },
  {
    id: '2',
    title: 'Nike Air Max 270 Sneakers',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    originalPrice: 150,
    salePrice: 89,
    discount: 41,
    store: 'Nike',
    rating: 4.6,
    reviews: 8234,
    endsIn: '5h 12m',
    category: 'Fashion',
    badge: 'flash',
  },
  {
    id: '3',
    title: 'Samsung 65" QLED 4K Smart TV',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop',
    originalPrice: 1299,
    salePrice: 899,
    discount: 31,
    store: 'Walmart',
    rating: 4.7,
    reviews: 5621,
    endsIn: '1d 6h',
    category: 'Electronics',
    badge: 'limited',
  },
  {
    id: '4',
    title: 'Sony WH-1000XM5 Headphones',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop',
    originalPrice: 399,
    salePrice: 278,
    discount: 30,
    store: 'eBay',
    rating: 4.9,
    reviews: 9876,
    endsIn: '8h 45m',
    category: 'Electronics',
    badge: 'hot',
  },
  {
    id: '5',
    title: 'Dyson V15 Detect Vacuum',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=400&fit=crop',
    originalPrice: 749,
    salePrice: 549,
    discount: 27,
    store: 'Amazon',
    rating: 4.8,
    reviews: 4532,
    endsIn: '3h 20m',
    category: 'Home',
  },
  {
    id: '6',
    title: 'iPad Air (5th Generation)',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
    originalPrice: 599,
    salePrice: 499,
    discount: 17,
    store: 'Target',
    rating: 4.9,
    reviews: 7654,
    endsIn: '12h 30m',
    category: 'Electronics',
    badge: 'flash',
  },
  {
    id: '7',
    title: 'Levi\'s 501 Original Jeans',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
    originalPrice: 98,
    salePrice: 59,
    discount: 40,
    store: 'Levi\'s',
    rating: 4.5,
    reviews: 3421,
    endsIn: '2d 4h',
    category: 'Fashion',
  },
  {
    id: '8',
    title: 'Instant Pot Duo Plus 9-in-1',
    image: 'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=400&h=400&fit=crop',
    originalPrice: 149,
    salePrice: 89,
    discount: 40,
    store: 'Amazon',
    rating: 4.7,
    reviews: 15234,
    endsIn: '6h 15m',
    category: 'Home',
    badge: 'limited',
  },
]

const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Sports', 'Beauty']

const getBadgeStyles = (badge: Deal['badge']) => {
  switch (badge) {
    case 'hot':
      return 'bg-gradient-to-r from-orange-500 to-red-500'
    case 'flash':
      return 'bg-gradient-to-r from-yellow-500 to-orange-500'
    case 'limited':
      return 'bg-gradient-to-r from-purple-500 to-pink-500'
    default:
      return ''
  }
}

const getBadgeIcon = (badge: Deal['badge']) => {
  switch (badge) {
    case 'hot':
      return <Flame className="h-3 w-3" />
    case 'flash':
      return <Timer className="h-3 w-3" />
    case 'limited':
      return <Tag className="h-3 w-3" />
    default:
      return null
  }
}

const getBadgeLabel = (badge: Deal['badge']) => {
  switch (badge) {
    case 'hot':
      return 'Hot Deal'
    case 'flash':
      return 'Flash Sale'
    case 'limited':
      return 'Limited'
    default:
      return ''
  }
}

export default function DealsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredDeals = selectedCategory === 'All'
    ? deals
    : deals.filter(deal => deal.category === selectedCategory)

  const totalSavings = deals.reduce((acc, deal) => acc + (deal.originalPrice - deal.salePrice), 0)

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-orange-500/5 via-purple-500/5 to-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500/20 to-purple-500/20 px-4 py-1.5 text-sm font-medium text-orange-400 ring-1 ring-orange-500/30">
              <Flame className="h-4 w-4" />
              Updated Every Hour
            </span>
            
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Today&apos;s{' '}
              <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Best Deals
              </span>
            </h1>
            
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Handpicked deals from across the web. Save up to 50% on top brands.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground sm:text-4xl">{deals.length}</div>
                <div className="text-sm text-muted-foreground">Active Deals</div>
              </div>
              <div className="h-10 w-px bg-border/50" />
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 sm:text-4xl">${totalSavings}</div>
                <div className="text-sm text-muted-foreground">Total Savings</div>
              </div>
              <div className="h-10 w-px bg-border/50" />
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 sm:text-4xl">50%</div>
                <div className="text-sm text-muted-foreground">Max Discount</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-0 z-30 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide sm:justify-center sm:gap-3 sm:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all sm:px-6 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-card text-muted-foreground ring-1 ring-border/50 hover:text-foreground hover:ring-purple-500/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Deal Banner */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 p-6 sm:rounded-3xl sm:p-8 lg:p-12">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
          
          <div className="relative flex flex-col items-center gap-6 lg:flex-row lg:gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                Deal of the Day
              </div>
              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Save 30% on Sony WH-1000XM5
              </h2>
              <p className="mt-3 text-base text-white/80 sm:text-lg">
                Industry-leading noise cancellation with exceptional sound quality. Limited time offer!
              </p>
              <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-white sm:text-4xl">$278</span>
                  <span className="text-lg text-white/60 line-through">$399</span>
                </div>
                <a
                  href="/search?q=sony+headphones"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-purple-600 shadow-lg transition-all hover:bg-white/90 hover:shadow-xl sm:text-base"
                >
                  Shop Now
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="relative h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56">
              <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop"
                alt="Sony WH-1000XM5"
                className="relative h-full w-full rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute -right-2 -top-2 flex items-center gap-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1.5 text-sm font-bold text-white shadow-lg">
                <TrendingDown className="h-4 w-4" />
                30% OFF
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deals Grid */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mb-6 flex items-center justify-between sm:mb-8">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            {selectedCategory === 'All' ? 'All Deals' : `${selectedCategory} Deals`}
          </h2>
          <span className="text-sm text-muted-foreground">
            {filteredDeals.length} deals found
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {filteredDeals.map((deal) => (
            <div
              key={deal.id}
              className="group relative overflow-hidden rounded-2xl bg-card ring-1 ring-border/50 transition-all duration-300 hover:ring-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10"
            >
              {/* Badge */}
              {deal.badge && (
                <div className={`absolute left-3 top-3 z-10 flex items-center gap-1 rounded-full ${getBadgeStyles(deal.badge)} px-2.5 py-1 text-xs font-semibold text-white shadow-lg`}>
                  {getBadgeIcon(deal.badge)}
                  {getBadgeLabel(deal.badge)}
                </div>
              )}

              {/* Discount Badge */}
              <div className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full bg-green-500 px-2.5 py-1 text-xs font-bold text-white shadow-lg">
                <Percent className="h-3 w-3" />
                {deal.discount}% OFF
              </div>

              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-secondary/50">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    {deal.store}
                  </span>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-foreground">{deal.rating}</span>
                    <span className="text-muted-foreground">({deal.reviews.toLocaleString()})</span>
                  </div>
                </div>

                <h3 className="mb-3 line-clamp-2 text-base font-semibold text-foreground transition-colors group-hover:text-purple-400 sm:text-lg">
                  {deal.title}
                </h3>

                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-foreground sm:text-2xl">
                    ${deal.salePrice}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    ${deal.originalPrice}
                  </span>
                  <span className="ml-auto text-sm font-medium text-green-400">
                    Save ${deal.originalPrice - deal.salePrice}
                  </span>
                </div>

                {/* Timer */}
                <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-4">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-orange-400" />
                    <span>Ends in <span className="font-semibold text-orange-400">{deal.endsIn}</span></span>
                  </div>
                  <a
                    href={`/search?q=${encodeURIComponent(deal.title)}`}
                    className="flex items-center gap-1 text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
                  >
                    View Deal
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-10 flex justify-center sm:mt-12">
          <button className="inline-flex items-center gap-2 rounded-full bg-card px-8 py-3 text-base font-medium text-foreground ring-1 ring-border/50 transition-all hover:ring-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
            Load More Deals
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="border-t border-border/50 bg-card/30 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Never Miss a Deal
            </h2>
            <p className="mt-3 text-muted-foreground">
              Get the best deals delivered to your inbox daily.
            </p>
            <div className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-input bg-background px-5 py-3 text-foreground placeholder:text-muted-foreground focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <button className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:shadow-purple-500/25">
                Subscribe
              </button>
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
