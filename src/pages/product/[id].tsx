import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import { useCartStore } from '@/stores/useCartStore'
import { Product } from '@/services/api'
import Link from 'next/link'

interface ProductPageProps {
  product: Product
}

export default function ProductPage({ product }: ProductPageProps) {
  const addToCart = useCartStore((state) => state.addToCart)
  
  return (
    <>
      <Head>
        <title>{product.title} | Product</title>
      </Head>
      
      <main className="p-6 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="relative w-full md:w-1/2 h-96">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
            />
          </div>
          
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-xl font-semibold text-green-700 mb-6">
              ${product.price.toFixed(2)}
            </p>
            
            <button
              onClick={() =>
                addToCart({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.image,
                  quantity: 1,
                })
              }
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
            
            <div className="mt-4">
              <Link href="/" className="text-sm text-blue-500 hover:underline">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  
  if (!res.ok) {
    return {
      notFound: true,
    }
  }
  
  const product = await res.json()
  return { props: { product } }
}
