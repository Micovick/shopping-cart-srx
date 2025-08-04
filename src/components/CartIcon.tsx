import Link from 'next/link'
import { useCartStore } from '@/stores/useCartStore'
import { ShoppingCart } from 'lucide-react'

export default function CartIcon() {
  const totalItems = useCartStore((state) =>
    state.items.reduce((acc, item) => acc + item.quantity, 0)
  )
  
  return (
    <Link href="/cart" className="relative">
      <ShoppingCart className="w-8 h-8 text-white hover:text-purple-400 transition" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 text-xs bg-purple-700 text-white px-2 py-0.5 rounded-full shadow-sm font-semibold">
          {totalItems}
        </span>
      )}
    </Link>
  )
}
