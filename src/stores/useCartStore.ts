import { create } from 'zustand'

interface CartItem {
  id: number
  title: string
  price: number
  quantity: number
}

interface CartState {
  items: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
  getTotalQuantity: () => number
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addToCart: (item) => {
    const items = get().items
    const existing = items.find(i => i.id === item.id)
    if (existing) {
      set({
        items: items.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      })
    } else {
      set({ items: [...items, { ...item, quantity: 1 }] })
    }
  },
  removeFromCart: (id) => {
    set({ items: get().items.filter(i => i.id !== id) })
  },
  clearCart: () => set({ items: [] }),
  getTotalQuantity: () => get().items.reduce((acc, i) => acc + i.quantity, 0),
}))
