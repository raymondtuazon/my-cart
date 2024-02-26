import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      totalPrice: 0,
      addToCart: (item) => {
        const price = parseFloat(item.price)
        set((state) => ({
          cart: [...state.cart, item],
          totalPrice: state.totalPrice + price,
        }))
      },
      deleteProduct: (itemId) => {
        const itemToRemove = get().cart.find((item) => item.id === itemId)
        if (!itemToRemove) return
        const price = parseFloat(itemToRemove.price)
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== itemId),
          totalPrice: state.totalPrice - price,
        }))
      },
    }),
    {
      name: 'cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
