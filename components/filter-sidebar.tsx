'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Star, X } from 'lucide-react'
import { stores } from '@/lib/data'

interface FilterSidebarProps {
  priceRange: [number, number]
  onPriceRangeChange: (range: [number, number]) => void
  selectedStores: string[]
  onStoresChange: (stores: string[]) => void
  minRating: number
  onMinRatingChange: (rating: number) => void
  onClearFilters: () => void
}

export function FilterSidebar({
  priceRange,
  onPriceRangeChange,
  selectedStores,
  onStoresChange,
  minRating,
  onMinRatingChange,
  onClearFilters,
}: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    stores: true,
    rating: true,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const handleStoreToggle = (storeName: string) => {
    if (selectedStores.includes(storeName)) {
      onStoresChange(selectedStores.filter((s) => s !== storeName))
    } else {
      onStoresChange([...selectedStores, storeName])
    }
  }

  const hasActiveFilters = priceRange[0] > 0 || priceRange[1] < 1000 || selectedStores.length > 0 || minRating > 0

  return (
    <aside className="w-full rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border/50 lg:w-64">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Filters</h2>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="h-3 w-3" />
            Clear all
          </button>
        )}
      </div>

      {/* Price Range */}
      <div className="border-t border-border/50 py-4">
        <button
          onClick={() => toggleSection('price')}
          className="flex w-full items-center justify-between"
        >
          <span className="text-sm font-medium text-foreground">Price Range</span>
          {expandedSections.price ? (
            <ChevronUp className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
        {expandedSections.price && (
          <div className="mt-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <label className="mb-1.5 block text-xs text-muted-foreground">Min</label>
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => onPriceRangeChange([Number(e.target.value), priceRange[1]])}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="$0"
                />
              </div>
              <span className="mt-6 text-muted-foreground">—</span>
              <div className="flex-1">
                <label className="mb-1.5 block text-xs text-muted-foreground">Max</label>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => onPriceRangeChange([priceRange[0], Number(e.target.value)])}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="$1000"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Store Filter */}
      <div className="border-t border-border/50 py-4">
        <button
          onClick={() => toggleSection('stores')}
          className="flex w-full items-center justify-between"
        >
          <span className="text-sm font-medium text-foreground">Stores</span>
          {expandedSections.stores ? (
            <ChevronUp className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
        {expandedSections.stores && (
          <div className="mt-4 space-y-2">
            {stores.map((store) => (
              <label
                key={store.name}
                className="flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors hover:bg-secondary/50"
              >
                <input
                  type="checkbox"
                  checked={selectedStores.includes(store.name)}
                  onChange={() => handleStoreToggle(store.name)}
                  className="h-4 w-4 rounded border-input text-primary focus:ring-primary"
                />
                <span className="text-sm text-foreground">{store.name}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rating Filter */}
      <div className="border-t border-border/50 py-4">
        <button
          onClick={() => toggleSection('rating')}
          className="flex w-full items-center justify-between"
        >
          <span className="text-sm font-medium text-foreground">Rating</span>
          {expandedSections.rating ? (
            <ChevronUp className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
        {expandedSections.rating && (
          <div className="mt-4 space-y-2">
            {[4, 3, 2, 1].map((rating) => (
              <label
                key={rating}
                className="flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors hover:bg-secondary/50"
              >
                <input
                  type="radio"
                  name="rating"
                  checked={minRating === rating}
                  onChange={() => onMinRatingChange(rating)}
                  className="h-4 w-4 border-input text-primary focus:ring-primary"
                />
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3.5 w-3.5 ${
                        i < rating ? 'fill-chart-4 text-chart-4' : 'fill-muted text-muted'
                      }`}
                    />
                  ))}
                  <span className="ml-1 text-xs text-muted-foreground">& up</span>
                </div>
              </label>
            ))}
          </div>
        )}
      </div>
    </aside>
  )
}
