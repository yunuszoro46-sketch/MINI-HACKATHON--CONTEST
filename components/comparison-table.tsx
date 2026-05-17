'use client'

import Image from 'next/image'
import { Star, Check, Clock, Trophy, Zap, TrendingDown, X } from 'lucide-react'
import { Product, getProductInsights } from '@/lib/data'

interface ComparisonTableProps {
  products: Product[]
  onRemove: (productId: string) => void
}

export function ComparisonTable({ products, onRemove }: ComparisonTableProps) {
  if (products.length === 0) {
    return null
  }

  const insights = getProductInsights(products)
  const cheapestId = insights?.cheapest.id

  return (
    <div className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border/50">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Compare Products</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {products.length} product{products.length !== 1 ? 's' : ''} selected
          </p>
        </div>
        {insights && (
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1.5 text-xs font-medium text-success">
              <TrendingDown className="h-3.5 w-3.5" />
              Cheapest: ${insights.cheapest.price.toFixed(2)}
            </div>
            <div className="hidden items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary sm:flex">
              <Trophy className="h-3.5 w-3.5" />
              Top Rated: {insights.highestRated.rating}★
            </div>
            <div className="hidden items-center gap-1.5 rounded-full bg-foreground/10 px-3 py-1.5 text-xs font-medium text-foreground md:flex">
              <Zap className="h-3.5 w-3.5" />
              Fastest: {insights.fastestDelivery.delivery}
            </div>
          </div>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-border/50">
              <th className="pb-4 text-left text-sm font-medium text-muted-foreground">Product</th>
              <th className="pb-4 text-left text-sm font-medium text-muted-foreground">Store</th>
              <th className="pb-4 text-left text-sm font-medium text-muted-foreground">Price</th>
              <th className="pb-4 text-left text-sm font-medium text-muted-foreground">Rating</th>
              <th className="pb-4 text-left text-sm font-medium text-muted-foreground">Delivery</th>
              <th className="pb-4 text-left text-sm font-medium text-muted-foreground">Status</th>
              <th className="pb-4 text-right text-sm font-medium text-muted-foreground"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className={`
                  border-b border-border/30 transition-colors
                  ${product.id === cheapestId ? 'bg-success/5' : 'hover:bg-secondary/30'}
                `}
              >
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-secondary/30">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="max-w-[200px]">
                      <p className="line-clamp-2 text-sm font-medium text-foreground">
                        {product.title}
                      </p>
                      {product.id === cheapestId && (
                        <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-success px-2 py-0.5 text-xs font-medium text-success-foreground">
                          <Trophy className="h-3 w-3" />
                          Best Deal
                        </span>
                      )}
                    </div>
                  </div>
                </td>
                <td className="py-4">
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                    {product.store}
                  </span>
                </td>
                <td className="py-4">
                  <div className="flex flex-col">
                    <span className={`text-base font-bold ${product.id === cheapestId ? 'text-success' : 'text-foreground'}`}>
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-muted-foreground line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-chart-4 text-chart-4" />
                    <span className="text-sm font-medium text-foreground">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">
                      ({product.reviewCount.toLocaleString()})
                    </span>
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {product.delivery}
                  </div>
                </td>
                <td className="py-4">
                  <span className={`
                    flex items-center gap-1 text-xs font-medium
                    ${product.availability === 'In Stock' ? 'text-success' : ''}
                    ${product.availability === 'Limited Stock' ? 'text-chart-4' : ''}
                    ${product.availability === 'Out of Stock' ? 'text-destructive' : ''}
                  `}>
                    {product.availability === 'In Stock' && <Check className="h-3 w-3" />}
                    {product.availability}
                  </span>
                </td>
                <td className="py-4 text-right">
                  <button
                    onClick={() => onRemove(product.id)}
                    className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
