import { useCartStore } from '@/stores/useCartStore'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import {ShoppingCart, Trash2} from "lucide-react";

export default function CartPage() {
  const items = useCartStore((state) => state.items)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const clearCart = useCartStore((state) => state.clearCart)
  
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  
  return (
    <>
      <Head>
        <title>Shopping Cart</title>
      </Head>
      
      <main className="p-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <ShoppingCart className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-bold">Your Cart</h1>
        </div>
        
        {items.length === 0 ? (
          <div>
            <p className="text-gray-500 mb-4">Your cart is empty.</p>
            <Link href="/">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Continue Shopping
              </button>
            </Link>
          </div>
        
        ) : (
          <div className="space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border-b pb-4"
              >
                <div className="relative w-24 h-24 shrink-0">
                  <Image
                    src={item.image || 'https://via.placeholder.com/150'}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                
                <div className="flex-1">
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                  <p className="text-sm font-medium">
                    Price: ${item.price.toFixed(2)}
                  </p>
                </div>
                
                <div className="text-right flex flex-col items-end gap-2">
                  <span className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    className="text-red-600 hover:underline text-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            
            <div className="flex justify-between items-center border-t pt-6 mt-6">
              <div className="font-bold text-lg">
                <span>Total: ${total.toFixed(2)}</span>
              </div>
              
              <button
                onClick={clearCart}
                className="flex items-center gap-1 text-sm text-red-600 hover:underline"
              >
                <Trash2 className="w-4 h-4" />
                Clear Cart
              </button>
            </div>
            
            <div className="mt-6">
              <Link href="/">
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        )}
      </main>
    </>
  )
}
