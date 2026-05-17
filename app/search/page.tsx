'use client'

import { useState, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { ArrowUpDown, LayoutGrid, List } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { SearchBar } from '@/components/search-bar'
import { FilterSidebar } from '@/components/filter-sidebar'
import { ProductCard } from '@/components/product-card'
import { ComparisonTable } from '@/components/comparison-table'
import { SmartInsights } from '@/components/smart-insights'
import { mockProducts, Product, getProductInsights } from '@/lib/data'

type SortOption = 'best-match' | 'lowest-price' | 'highest-rating'

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])
  const [selectedStores, setSelectedStores] = useState<string[]>([])
  const [minRating, setMinRating] = useState(0)
  const [sortBy, setSortBy] = useState<SortOption>('best-match')
  const [comparisonList, setComparisonList] = useState<Product[]>([])
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(true)

  const filteredProducts = useMemo(() => {
    let products = [...mockProducts]

    // Filter by price
    products = products.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    )

    // Filter by store
    if (selectedStores.length > 0) {
      products = products.filter((p) => selectedStores.includes(p.store))
    }

    // Filter by rating
    if (minRating > 0) {
      products = products.filter((p) => p.rating >= minRating)
    }

    // Sort
    switch (sortBy) {
      case 'lowest-price':
        products.sort((a, b) => a.price - b.price)
        break
      case 'highest-rating':
        products.sort((a, b) => b.rating - a.rating)
        break
      default:
        // best-match - keep original order
        break
    }

    return products
  }, [priceRange, selectedStores, minRating, sortBy])

  const insights = getProductInsights(filteredProducts)

  const handleCompareToggle = (product: Product) => {
    if (comparisonList.some((p) => p.id === product.id)) {
      setComparisonList(comparisonList.filter((p) => p.id !== product.id))
    } else if (comparisonList.length < 4) {
      setComparisonList([...comparisonList, product])
    }
  }

  const handleRemoveFromComparison = (productId: string) => {
    setComparisonList(comparisonList.filter((p) => p.id !== productId))
  }

  const clearFilters = () => {
    setPriceRange([0, 1000])
    setSelectedStores([])
    setMinRating(0)
  }

  const getBadge = (product: Product): 'cheapest' | 'highest-rated' | 'fastest' | null => {
    if (!insights) return null
    if (product.id === insights.cheapest.id) return 'cheapest'
    if (product.id === insights.highestRated.id && product.id !== insights.cheapest.id) return 'highest-rated'
    if (product.id === insights.fastestDelivery.id && product.id !== insights.cheapest.id && product.id !== insights.highestRated.id) return 'fastest'
    return null
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Search Header */}
      <div className="border-b border-border/50 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <SearchBar defaultValue={query} />
          </div>
          {query && (
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Showing {filteredProducts.length} results for &quot;{query}&quot;
            </p>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Smart Insights */}
        {filteredProducts.length > 0 && (
          <div className="mb-8">
            <SmartInsights products={filteredProducts} />
          </div>
        )}

        {/* Comparison Section */}
        {comparisonList.length > 0 && (
          <div className="mb-8">
            <ComparisonTable
              products={comparisonList}
              onRemove={handleRemoveFromComparison}
            />
          </div>
        )}

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Filter Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
            <FilterSidebar
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
              selectedStores={selectedStores}
              onStoresChange={setSelectedStores}
              minRating={minRating}
              onMinRatingChange={setMinRating}
              onClearFilters={clearFilters}
            />
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-purple-500/20 hover:text-purple-400 lg:hidden"
                >
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </button>
                <div className="hidden items-center gap-1 rounded-lg bg-secondary p-1 sm:flex">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`rounded-md p-2 transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-card text-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`rounded-md p-2 transition-colors ${
                      viewMode === 'list'
                        ? 'bg-card text-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="appearance-none rounded-lg border border-input bg-card py-2 pl-4 pr-10 text-sm font-medium text-foreground outline-none transition-colors focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  >
                    <option value="best-match">Best Match</option>
                    <option value="lowest-price">Lowest Price</option>
                    <option value="highest-rating">Highest Rating</option>
                  </select>
                  <ArrowUpDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3'
                    : 'flex flex-col gap-4'
                }
              >
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isInComparison={comparisonList.some((p) => p.id === product.id)}
                    onCompareToggle={handleCompareToggle}
                    badge={getBadge(product)}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-2xl bg-card p-12 text-center ring-1 ring-border/50">
                <p className="text-lg font-medium text-foreground">No products found</p>
                <p className="mt-2 text-muted-foreground">
                  Try adjusting your filters or search for something else.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 rounded-lg gradient-bg px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-90"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Comparison hint */}
            {comparisonList.length > 0 && comparisonList.length < 4 && (
              <div className="mt-8 rounded-xl bg-purple-500/5 p-4 text-center ring-1 ring-purple-500/20">
                <p className="text-sm text-foreground">
                  <span className="font-medium text-purple-400">{comparisonList.length}/4</span> products selected for comparison.
                  {comparisonList.length < 2 && ' Add at least 2 products to compare.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  )
}
