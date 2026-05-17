'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'

interface SearchBarProps {
  defaultValue?: string
  size?: 'default' | 'large'
}

export function SearchBar({ defaultValue = '', size = 'default' }: SearchBarProps) {
  const [query, setQuery] = useState(defaultValue)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  const isLarge = size === 'large'

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className={`
        group relative flex items-center overflow-hidden rounded-2xl 
        bg-card ring-1 ring-border/50
        transition-all duration-300
        hover:ring-purple-500/30
        focus-within:ring-purple-500/50 focus-within:shadow-lg focus-within:shadow-purple-500/10
        ${isLarge ? 'h-16 sm:h-20' : 'h-12 sm:h-14'}
      `}>
        <div className={`flex items-center justify-center ${isLarge ? 'pl-5 sm:pl-6' : 'pl-4'}`}>
          <Search className={`text-muted-foreground/60 transition-colors group-focus-within:text-purple-400 ${isLarge ? 'h-5 w-5 sm:h-6 sm:w-6' : 'h-4 w-4 sm:h-5 sm:w-5'}`} />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products across all stores..."
          className={`
            flex-1 bg-transparent outline-none placeholder:text-muted-foreground/50 text-foreground
            ${isLarge ? 'px-4 text-base sm:text-lg' : 'px-3 text-sm sm:text-base'}
          `}
        />
        <button
          type="submit"
          className={`
            flex items-center justify-center gap-2 gradient-bg font-medium text-white
            transition-all hover:opacity-90 hover:shadow-lg hover:shadow-purple-500/25
            ${isLarge ? 'm-2 rounded-xl px-6 py-3 sm:m-3 sm:px-8 sm:py-4 text-sm sm:text-base' : 'm-1.5 rounded-lg px-4 py-2 sm:m-2 sm:px-6 text-sm'}
          `}
        >
          <Search className={isLarge ? 'h-4 w-4 sm:h-5 sm:w-5' : 'h-4 w-4'} />
          <span className="hidden sm:inline">Search</span>
        </button>
      </div>
    </form>
  )
}
