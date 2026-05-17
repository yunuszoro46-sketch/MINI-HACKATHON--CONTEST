export interface Product {
  id: string
  title: string
  price: number
  originalPrice?: number
  image: string
  store: string
  rating: number
  reviewCount: number
  availability: 'In Stock' | 'Limited Stock' | 'Out of Stock'
  delivery: string
  url: string
}

export const stores = [
  { name: 'Amazon', logo: '/stores/amazon.svg' },
  { name: 'eBay', logo: '/stores/ebay.svg' },
  { name: 'Walmart', logo: '/stores/walmart.svg' },
  { name: 'Alibaba', logo: '/stores/alibaba.svg' },
  { name: 'Daraz', logo: '/stores/daraz.svg' },
]

export const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Apple AirPods Pro (2nd Generation) with MagSafe Charging Case',
    price: 189.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop',
    store: 'Amazon',
    rating: 4.8,
    reviewCount: 12453,
    availability: 'In Stock',
    delivery: '2-day delivery',
    url: '#',
  },
  {
    id: '2',
    title: 'Apple AirPods Pro (2nd Gen) Wireless Earbuds',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop',
    store: 'Walmart',
    rating: 4.7,
    reviewCount: 8234,
    availability: 'In Stock',
    delivery: '3-day delivery',
    url: '#',
  },
  {
    id: '3',
    title: 'AirPods Pro 2nd Generation - Certified Refurbished',
    price: 159.99,
    originalPrice: 189.99,
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop',
    store: 'eBay',
    rating: 4.5,
    reviewCount: 3421,
    availability: 'Limited Stock',
    delivery: '5-7 day delivery',
    url: '#',
  },
  {
    id: '4',
    title: 'Sony WH-1000XM5 Wireless Noise Canceling Headphones',
    price: 328.00,
    originalPrice: 399.99,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop',
    store: 'Amazon',
    rating: 4.9,
    reviewCount: 9876,
    availability: 'In Stock',
    delivery: '2-day delivery',
    url: '#',
  },
  {
    id: '5',
    title: 'Sony WH-1000XM5 Over-Ear Headphones Black',
    price: 348.00,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop',
    store: 'Walmart',
    rating: 4.8,
    reviewCount: 5432,
    availability: 'In Stock',
    delivery: '3-day delivery',
    url: '#',
  },
  {
    id: '6',
    title: 'Sony Noise Canceling Headphones XM5 Series',
    price: 315.00,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop',
    store: 'eBay',
    rating: 4.6,
    reviewCount: 2341,
    availability: 'In Stock',
    delivery: '4-6 day delivery',
    url: '#',
  },
  {
    id: '7',
    title: 'Samsung Galaxy Buds2 Pro True Wireless Earbuds',
    price: 149.99,
    originalPrice: 229.99,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    store: 'Amazon',
    rating: 4.6,
    reviewCount: 7654,
    availability: 'In Stock',
    delivery: '2-day delivery',
    url: '#',
  },
  {
    id: '8',
    title: 'Samsung Galaxy Buds2 Pro Wireless',
    price: 169.99,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    store: 'Walmart',
    rating: 4.5,
    reviewCount: 4321,
    availability: 'In Stock',
    delivery: '3-day delivery',
    url: '#',
  },
  {
    id: '9',
    title: 'JBL Tune 760NC Wireless Over-Ear Headphones',
    price: 79.95,
    originalPrice: 129.95,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    store: 'Amazon',
    rating: 4.4,
    reviewCount: 6543,
    availability: 'In Stock',
    delivery: '2-day delivery',
    url: '#',
  },
  {
    id: '10',
    title: 'Bose QuietComfort Ultra Headphones',
    price: 379.00,
    originalPrice: 429.00,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop',
    store: 'Amazon',
    rating: 4.7,
    reviewCount: 3245,
    availability: 'In Stock',
    delivery: '2-day delivery',
    url: '#',
  },
  {
    id: '11',
    title: 'Bose QuietComfort Ultra Premium Headphones',
    price: 399.00,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop',
    store: 'Walmart',
    rating: 4.6,
    reviewCount: 2134,
    availability: 'Limited Stock',
    delivery: '3-day delivery',
    url: '#',
  },
  {
    id: '12',
    title: 'Apple Watch Series 9 GPS 45mm Aluminum Case',
    price: 399.00,
    originalPrice: 429.00,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop',
    store: 'Amazon',
    rating: 4.8,
    reviewCount: 8765,
    availability: 'In Stock',
    delivery: '2-day delivery',
    url: '#',
  },
]

export function getProductInsights(products: Product[]) {
  if (products.length === 0) return null
  
  const cheapest = products.reduce((min, p) => p.price < min.price ? p : min, products[0])
  const highestRated = products.reduce((max, p) => p.rating > max.rating ? p : max, products[0])
  const fastestDelivery = products.find(p => p.delivery.includes('2-day')) || products[0]
  
  return {
    cheapest,
    highestRated,
    fastestDelivery,
  }
}
