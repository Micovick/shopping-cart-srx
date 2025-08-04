import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { useCartStore } from '@/stores/useCartStore'
import { vi } from 'vitest'
import {ProductCard} from "@/components/ProductCard";
import { describe, it, expect, beforeEach } from 'vitest'


// Mock Zustand store
vi.mock('@/stores/useCartStore', () => ({
  useCartStore: vi.fn(),
}))

describe('ProductCard', () => {
  const mockAddToCart = vi.fn()
  
  beforeEach(() => {
    (useCartStore as any).mockReturnValue(mockAddToCart)
  })
  
  const product = {
    id: 1,
    title: 'Test Product',
    description: 'This is a test product',
    price: 29.99,
    image: '/test.png',
  }
  
  it('renders product info correctly', () => {
    render(<ProductCard {...product} />)
    
    expect(screen.getByText(/Test Product/)).toBeInTheDocument()
    expect(screen.getByText(/USD 29.99/)).toBeInTheDocument()
    expect(screen.getByText(/This is a test product/)).toBeInTheDocument()
  })
  
  it('calls addToCart when + button is clicked', () => {
    render(<ProductCard {...product} />)
    
    const button = screen.getByRole('button', { name: /Add to cart/i })
    
    fireEvent.click(button)
    
    expect(mockAddToCart).toHaveBeenCalledWith({
      id: 1,
      title: 'Test Product',
      price: 29.99,
      image: '/test.png',
      quantity: 1,
    })
  })
})
