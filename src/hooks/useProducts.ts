import { useEffect, useState } from 'react'
import { fetchProducts, Product } from '@/services/api'

export const useProducts = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([])
  const [filtered, setFiltered] = useState<Product[]>([])
  const [displayed, setDisplayed] = useState<Product[]>([])
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const PAGE_SIZE = 3
  
  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchProducts()
        setAllProducts(data)
        setFiltered(data)
        setDisplayed(data.slice(0, PAGE_SIZE))
      } catch (e) {
        setError('Erro ao carregar produtos')
      }
    }
    load()
  }, [])
  
  const search = (term: string) => {
    const filteredList = allProducts.filter(p =>
      p.title.toLowerCase().includes(term.toLowerCase())
    )
    setFiltered(filteredList)
    setPage(1)
    setDisplayed(filteredList.slice(0, PAGE_SIZE))
  }
  
  const loadMore = () => {
    const nextPage = page + 1
    setPage(nextPage)
    setDisplayed(filtered.slice(0, nextPage * PAGE_SIZE))
  }
  
  return { displayed, search, loadMore, error }
}
