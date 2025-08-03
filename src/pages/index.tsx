import { useProducts } from '@/hooks/useProducts'
import { ProductCard } from '@/components/ProductCard'
import Header from '@/components/Header'
import PaginationButton from '@/components/PaginationButton'

export default function Home() {
  const { displayed, search, loadMore, error } = useProducts()
  
  return (
    <div>
      <Header />
      <main className="p-4 max-w-5xl mx-auto">
        {error && <p className="text-red-600 mb-4">{error}</p>}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {displayed.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        {displayed.length > 0 && (
          <PaginationButton onClick={loadMore} />
        )}
      </main>
    </div>
  )
}
