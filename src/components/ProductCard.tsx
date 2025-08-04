import { useCartStore } from '@/stores/useCartStore'
import Image from 'next/image'
import { Plus } from 'lucide-react'
import Link from "next/link";

type Product = {
  id: number
  title: string
  description: string
  price: number
  image: string
}

export const ProductCard = ({ id, title, description, price, image }: Product) => {
  const addToCart = useCartStore((state) => state.addToCart)
  
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between relative group hover:shadow-lg transition">
      
      <div className="absolute top-2 left-2 z-10">
        <button
          onClick={(e) => {
            e.stopPropagation()
            addToCart({ id, title, price, image, quantity: 1 })
          }}
          className="bg-white border border-gray-400 w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100"
          title="Add to cart"
        >
          <Plus className="w-4 h-4 text-black" />
        </button>
      </div>
      
      <div className="relative mb-4">
        <Link href={`/product/${id}`} className="relative w-full block h-48 mb-2">
          <Image
            src={image}
            alt={title}
            width={300}
            height={300}
            className="object-contain w-full h-48 mx-auto"
          />
        </Link>
        
        <div className="absolute bottom-0 right-0 bg-purple-600 text-white text-sm px-2 py-1 rounded-tl-md">
          USD {price.toFixed(2)}
        </div>
      </div>
      
      <Link href={`/product/${id}`}>
        <h3 className="text-sm font-medium text-gray-900 mb-1 hover:underline">
          {title}
        </h3>
      </Link>
      
      <p className="text-xs text-gray-500 leading-snug line-clamp-3">
        {description}
      </p>
    </div>
  )
}
