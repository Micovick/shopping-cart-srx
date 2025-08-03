import Link from 'next/link'
import { useCartStore } from '@/stores/useCartStore'
import {ShoppingCart} from "lucide-react";

export default function CartIcon() {
  const totalItems = useCartStore((state) =>
    state.items.reduce((acc, item) => acc + item.quantity, 0)
  )
  
  return (
    <Link href="/cart" className="relative">
      <ShoppingCart className="w-6 h-6 text-white hover:text-blue-500 transition" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-2 text-xs bg-red-600 text-white px-1 rounded-full">
          {totalItems}
        </span>
      )}
    </Link>
  )
}
