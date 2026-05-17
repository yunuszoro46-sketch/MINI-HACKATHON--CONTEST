'use client'

import { useState, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { ArrowUpDown, LayoutGrid, List, SlidersHorizontal, X } from 'lucide-react'
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
  const [showFilters, setShowFilters] = useState(false)
  const [showMobileFilters, setShowMobileFilters] = useState(false)

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

  const activeFiltersCount = (selectedStores.length > 0 ? 1 : 0) + (minRating > 0 ? 1 : 0) + (priceRange[0] > 0 || priceRange[1] < 1000 ? 1 : 0)

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
      <div className="border-b border-border/50 bg-gradient-to-b from-purple-500/5 to-transparent">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
          <div className="mx-auto max-w-2xl">
            <SearchBar defaultValue={query} />
          </div>
          {query && (
            <p className="mt-4 text-center text-sm text-muted-foreground sm:text-base">
              Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> results for{' '}
              <span className="font-semibold text-purple-400">&quot;{query}&quot;</span>
            </p>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        {/* Smart Insights */}
        {filteredProducts.length > 0 && (
          <div className="mb-6 sm:mb-8">
            <SmartInsights products={filteredProducts} />
          </div>
        )}

        {/* Comparison Section */}
        {comparisonList.length > 0 && (
          <div className="mb-6 sm:mb-8">
            <ComparisonTable
              products={comparisonList}
              onRemove={handleRemoveFromComparison}
            />
          </div>
        )}

        {/* Mobile Filter Button */}
        <div className="mb-4 flex items-center justify-between gap-4 lg:hidden">
          <button
            onClick={() => setShowMobileFilters(true)}
            className="inline-flex items-center gap-2 rounded-xl bg-card px-4 py-2.5 text-sm font-medium text-foreground ring-1 ring-border/50 transition-all hover:ring-purple-500/50"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
            {activeFiltersCount > 0 && (
              <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-500 text-xs text-white">
                {activeFiltersCount}
              </span>
            )}
          </button>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-lg bg-card p-1 ring-1 ring-border/50">
              <button
                onClick={() => setViewMode('grid')}
                className={`rounded-md p-2 transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-purple-500/20 text-purple-400'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`rounded-md p-2 transition-colors ${
                  viewMode === 'list'
                    ? 'bg-purple-500/20 text-purple-400'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Filter Drawer */}
        {showMobileFilters && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowMobileFilters(false)} />
            <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto rounded-t-3xl bg-background p-6 shadow-xl">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-foreground">Filters</h2>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="rounded-full bg-secondary p-2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <FilterSidebar
                priceRange={priceRange}
                onPriceRangeChange={setPriceRange}
                selectedStores={selectedStores}
                onStoresChange={setSelectedStores}
                minRating={minRating}
                onMinRatingChange={setMinRating}
                onClearFilters={clearFilters}
              />
              <div className="mt-6 flex gap-3">
                <button
                  onClick={clearFilters}
                  className="flex-1 rounded-xl bg-secondary py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary/80"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="flex-1 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 py-3 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-purple-500/25"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block">
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
            {/* Desktop Toolbar */}
            <div className="mb-6 hidden items-center justify-between lg:flex">
              <div className="flex items-center gap-1 rounded-lg bg-card p-1 ring-1 ring-border/50">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`rounded-md p-2 transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-purple-500/20 text-purple-400'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`rounded-md p-2 transition-colors ${
                    viewMode === 'list'
                      ? 'bg-purple-500/20 text-purple-400'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="appearance-none rounded-xl border border-input bg-card py-2.5 pl-4 pr-10 text-sm font-medium text-foreground outline-none transition-colors focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  >
                    <option value="best-match">Best Match</option>
                    <option value="lowest-price">Lowest Price</option>
                    <option value="highest-rating">Highest Rating</option>
                  </select>
                  <ArrowUpDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>
            </div>

            {/* Mobile Sort */}
            <div className="mb-4 flex items-center gap-3 lg:hidden">
              <span className="text-sm text-muted-foreground">Sort:</span>
              <div className="relative flex-1">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="w-full appearance-none rounded-xl border border-input bg-card py-2.5 pl-4 pr-10 text-sm font-medium text-foreground outline-none transition-colors focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                >
                  <option value="best-match">Best Match</option>
                  <option value="lowest-price">Lowest Price</option>
                  <option value="highest-rating">Highest Rating</option>
                </select>
                <ArrowUpDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3'
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
              <div className="flex flex-col items-center justify-center rounded-2xl bg-card p-8 text-center ring-1 ring-border/50 sm:p-12">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/10">
                  <SlidersHorizontal className="h-8 w-8 text-purple-400" />
                </div>
                <p className="text-lg font-medium text-foreground">No products found</p>
                <p className="mt-2 max-w-sm text-muted-foreground">
                  Try adjusting your filters or search for something else.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-6 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2.5 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-purple-500/25"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Comparison hint */}
            {comparisonList.length > 0 && comparisonList.length < 4 && (
              <div className="mt-6 rounded-xl bg-purple-500/5 p-4 text-center ring-1 ring-purple-500/20 sm:mt-8">
                <p className="text-sm text-foreground">
                  <span className="font-semibold text-purple-400">{comparisonList.length}/4</span> products selected for comparison.
                  {comparisonList.length < 2 && ' Add at least 2 products to compare.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto border-t border-border/50 bg-card/30 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; 2026 Shop Fusion. Search Once. Shop Everywhere.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-purple-500 border-t-transparent" />
          <span className="text-muted-foreground">Loading...</span>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  )
}
