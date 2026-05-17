import { TrendingDown, Trophy, Zap } from 'lucide-react'
import { Product, getProductInsights } from '@/lib/data'

interface SmartInsightsProps {
  products: Product[]
}

export function SmartInsights({ products }: SmartInsightsProps) {
  const insights = getProductInsights(products)

  if (!insights || products.length < 2) {
    return null
  }

  return (
    <div className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border/50">
      <h2 className="mb-4 text-lg font-semibold text-foreground">Smart Insights</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="group flex items-start gap-3 rounded-xl bg-success/5 p-4 ring-1 ring-success/20 transition-all hover:ring-success/40">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-success/10">
            <TrendingDown className="h-5 w-5 text-success" />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-success">Cheapest Today</p>
            <p className="mt-1 text-lg font-bold text-foreground">
              ${insights.cheapest.price.toFixed(2)}
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              from {insights.cheapest.store}
            </p>
          </div>
        </div>

        <div className="group flex items-start gap-3 rounded-xl bg-primary/5 p-4 ring-1 ring-primary/20 transition-all hover:ring-primary/40">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <Trophy className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-primary">Highest Rated</p>
            <p className="mt-1 text-lg font-bold text-foreground">
              {insights.highestRated.rating}★
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {insights.highestRated.reviewCount.toLocaleString()} reviews
            </p>
          </div>
        </div>

        <div className="group flex items-start gap-3 rounded-xl bg-foreground/5 p-4 ring-1 ring-foreground/10 transition-all hover:ring-foreground/20">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground/10">
            <Zap className="h-5 w-5 text-foreground" />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Fastest Delivery</p>
            <p className="mt-1 text-lg font-bold text-foreground">
              {insights.fastestDelivery.delivery}
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              from {insights.fastestDelivery.store}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
