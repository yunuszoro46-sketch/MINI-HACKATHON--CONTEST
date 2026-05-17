'use client'

import Image from 'next/image'
import { Star, Check, Clock, Plus, Minus } from 'lucide-react'
import { Product } from '@/lib/data'

interface ProductCardProps {
  product: Product
  isInComparison?: boolean
  onCompareToggle?: (product: Product) => void
  badge?: 'cheapest' | 'highest-rated' | 'fastest' | null
}

export function ProductCard({ product, isInComparison, onCompareToggle, badge }: ProductCardProps) {
  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100) 
    : null

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border/50 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/5 hover:ring-primary/20">
      {badge && (
        <div className={`
          absolute left-3 top-3 z-10 rounded-full px-2.5 py-1 text-xs font-medium
          ${badge === 'cheapest' ? 'bg-success text-success-foreground' : ''}
          ${badge === 'highest-rated' ? 'bg-primary text-primary-foreground' : ''}
          ${badge === 'fastest' ? 'bg-foreground text-background' : ''}
        `}>
          {badge === 'cheapest' && 'Best Deal'}
          {badge === 'highest-rated' && 'Top Rated'}
          {badge === 'fastest' && 'Fast Delivery'}
        </div>
      )}
      
      {discount && !badge && (
        <div className="absolute left-3 top-3 z-10 rounded-full bg-destructive/10 px-2.5 py-1 text-xs font-medium text-destructive">
          -{discount}%
        </div>
      )}

      <div className="relative aspect-square overflow-hidden bg-secondary/30 p-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
            {product.store}
          </span>
          <span className={`
            flex items-center gap-1 text-xs
            ${product.availability === 'In Stock' ? 'text-success' : ''}
            ${product.availability === 'Limited Stock' ? 'text-chart-4' : ''}
            ${product.availability === 'Out of Stock' ? 'text-destructive' : ''}
          `}>
            {product.availability === 'In Stock' && <Check className="h-3 w-3" />}
            {product.availability}
          </span>
        </div>

        <h3 className="line-clamp-2 flex-1 text-sm font-medium leading-snug text-foreground">
          {product.title}
        </h3>

        <div className="flex items-center gap-1">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.floor(product.rating)
                    ? 'fill-chart-4 text-chart-4'
                    : 'fill-muted text-muted'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            {product.rating} ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5" />
          {product.delivery}
        </div>

        <div className="mt-auto flex items-end justify-between pt-2">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-foreground">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          {onCompareToggle && (
            <button
              onClick={() => onCompareToggle(product)}
              className={`
                flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium transition-all
                ${isInComparison 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
                }
              `}
            >
              {isInComparison ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
              {isInComparison ? 'Remove' : 'Compare'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
