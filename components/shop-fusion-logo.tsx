export function ShopFusionLogo({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) {
  const sizeClasses = {
    small: 'w-8 h-8',
    default: 'w-10 h-10',
    large: 'w-20 h-20'
  }

  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={sizeClasses[size]}
    >
      <defs>
        <linearGradient id="shopFusionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      
      {/* Shopping bag handle */}
      <path
        d="M35 15 Q50 5 65 15"
        stroke="url(#shopFusionGradient)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Shopping bag body with S shape */}
      <path
        d="M30 25 L30 80 Q30 90 40 90 L60 90 Q70 90 70 80 L70 25 Q70 20 65 18 L35 18 Q30 20 30 25 Z"
        fill="url(#shopFusionGradient)"
      />
      
      {/* S curve inside the bag */}
      <path
        d="M42 35 Q55 35 55 45 Q55 55 45 55 Q35 55 35 65 Q35 75 50 75"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />
      
      {/* Speed lines */}
      <line x1="15" y1="40" x2="25" y2="40" stroke="url(#shopFusionGradient)" strokeWidth="4" strokeLinecap="round" />
      <line x1="12" y1="52" x2="24" y2="52" stroke="url(#shopFusionGradient)" strokeWidth="4" strokeLinecap="round" />
      <line x1="18" y1="64" x2="26" y2="64" stroke="url(#shopFusionGradient)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export function ShopFusionBrand({ size = 'default', showTagline = false }: { size?: 'small' | 'default' | 'large', showTagline?: boolean }) {
  const textSizes = {
    small: 'text-lg',
    default: 'text-xl',
    large: 'text-3xl'
  }

  const taglineSizes = {
    small: 'text-[10px]',
    default: 'text-xs',
    large: 'text-sm'
  }

  return (
    <div className="flex items-center gap-2">
      <ShopFusionLogo size={size} />
      <div className="flex flex-col">
        <span className={`${textSizes[size]} font-bold tracking-tight`}>
          <span className="text-purple-400">shop</span>
          <span className="text-blue-400"> fusion</span>
        </span>
        {showTagline && (
          <span className={`${taglineSizes[size]} uppercase tracking-[0.2em] text-muted-foreground`}>
            Search Once. Shop Everywhere.
          </span>
        )}
      </div>
    </div>
  )
}
