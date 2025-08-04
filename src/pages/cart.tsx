import { useCartStore } from '@/stores/useCartStore'
import Link from 'next/link'
import Head from 'next/head'
import { ShoppingCart, Trash2 } from 'lucide-react'
import Header from "@/components/Header";

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
      <Header/>
      <main className="min-h-screen bg-[#f5f5f5] flex flex-col items-center px-4 py-10">
        <div className="w-full max-w-xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-6 h-6 text-black" />
              <h1 className="text-2xl font-semibold text-gray-800">Your Cart</h1>
            </div>
            
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="flex items-center gap-1 text-sm text-red-600 hover:underline"
              >
                <Trash2 className="w-4 h-4" />
                Clear Cart
              </button>
            )}
          </div>
          
          {items.length === 0 ? (
            <div className="text-center text-gray-600">
              <p className="mb-4">Your cart is empty.</p>
              <Link href="/">
                <button className="px-6 py-2 bg-purple-700 text-white rounded hover:bg-purple-800 transition">
                  CONTINUE SHOPPING
                </button>
              </Link>
            </div>
          ) : (
            <>
              <div className="bg-white rounded-xl shadow p-6 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b pb-3 last:border-none"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm">{item.quantity}</span>
                      <span className="text-sm text-gray-800 max-w-[180px] truncate">
                        {item.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-gray-800">
                        USD {(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-800 transition"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-right mt-4 text-lg font-semibold text-gray-800">
                Total: USD {total.toFixed(2)}
              </div>
              
              <div className="mt-8 text-center">
                <Link href="/">
                  <button className="px-6 py-2 bg-purple-700 text-white rounded hover:bg-purple-800 shadow-md uppercase text-sm tracking-wide transition">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  )
}
