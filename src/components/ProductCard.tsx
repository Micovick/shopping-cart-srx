import { useCartStore } from '@/stores/useCartStore'
import Image from 'next/image'

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
      <div className="mt-auto flex justify-between items-center pt-4">
        <span className="font-semibold text-lg">${price.toFixed(2)}</span>
        <button
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
          onClick={() => addToCart({ id, title, price, quantity: 1 })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
