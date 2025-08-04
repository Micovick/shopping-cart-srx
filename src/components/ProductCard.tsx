import { useCartStore } from '@/stores/useCartStore'
import Image from 'next/image'
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
    <div className="border rounded-lg p-4 shadow-sm flex flex-col">
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="object-contain" />
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      <div className="mt-2 flex justify-between items-center gap-2">
        <span className="text-green-700 font-bold">${price.toFixed(2)}</span>
        
        <div className="flex gap-2">
          <Link href={`/product/${id}`}>
            <button className="text-sm px-3 py-1 border rounded hover:bg-gray-100">
              Details
            </button>
          </Link>
          
          <button
            className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
            onClick={() => addToCart({ id, title, price, image, quantity: 1 })}
          >
            Add
          </button>
        </div>
      </div>
    
    </div>
  )
}
