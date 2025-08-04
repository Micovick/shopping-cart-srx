import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import { useCartStore } from '@/stores/useCartStore'
import { Product } from '@/services/api'
import Link from 'next/link'
import Header from '@/components/Header'

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
      
      <Header />
      
      <main className="min-h-screen bg-[#f5f5f5] flex justify-center px-4 py-10">
        <div className="bg-white rounded-xl shadow-md max-w-4xl w-full p-6 flex flex-col md:flex-row gap-8">
          <div className="relative w-full md:w-1/2 h-96">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
            />
          </div>
          
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 mb-2">{product.title}</h1>
              <p className="text-gray-600 text-sm mb-6">{product.description}</p>
              <p className="text-xl font-bold text-purple-700 mb-4">
                USD {product.price.toFixed(2)}
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
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
                className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition"
              >
                Add to Cart
              </button>
              
              <Link href="/" className="text-sm text-gray-600 hover:underline">
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
