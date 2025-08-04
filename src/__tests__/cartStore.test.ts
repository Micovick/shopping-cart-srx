import { useCartStore } from '@/stores/useCartStore'
import { describe, it, expect, beforeEach } from 'vitest'

describe('useCartStore', () => {
  beforeEach(() => {
    useCartStore.setState({ items: [] })
  })
  
  it('adds item to cart', () => {
    useCartStore.getState().addToCart({
      id: 1,
      title: 'Item',
      price: 10,
      image: 'img.jpg',
      quantity: 1,
    })
    
    const items = useCartStore.getState().items
    expect(items).toHaveLength(1)
    expect(items[0].id).toBe(1)
  })
  
  it('removes item from cart', () => {
    useCartStore.setState({
      items: [{ id: 1, title: 'Item', price: 10, image: '', quantity: 1 }],
    })
    
    useCartStore.getState().removeFromCart(1)
    
    expect(useCartStore.getState().items).toHaveLength(0)
  })
  
  it('clears cart', () => {
    useCartStore.setState({
      items: [
        { id: 1, title: 'Item', price: 10, image: '', quantity: 1 },
        { id: 2, title: 'Item 2', price: 20, image: '', quantity: 1 },
      ],
    })
    
    useCartStore.getState().clearCart()
    
    expect(useCartStore.getState().items).toHaveLength(0)
  })
})
