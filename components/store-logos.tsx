import { stores } from '@/lib/data'

export function StoreLogos() {
  return (
    <div className="w-full">
      <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Comparing prices across
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
        {stores.map((store) => (
          <div
            key={store.name}
            className="group flex items-center justify-center opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
          >
            <span className="text-lg font-semibold text-muted-foreground transition-colors group-hover:text-foreground sm:text-xl">
              {store.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
