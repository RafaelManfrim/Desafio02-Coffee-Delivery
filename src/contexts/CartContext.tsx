import { createContext, ReactNode, useState } from 'react'
// import { useCoffees } from '../hooks/useCoffees'

interface CartItem {
  coffeeId: number
  amount: number
}

interface CartContextData {
  cartItems: CartItem[]
  addCoffeeToCart: (item: CartItem) => void
  addAmountToCart: ({ coffeeId, amount }: CartItem) => void
  removeOneFromCart: (coffeeId: number) => void
  removeFromCart: (coffeeId: number) => void
}

export const CartContext = createContext({} as CartContextData)

interface CartProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addCoffeeToCart(item: CartItem) {
    setCartItems((prevCartItems) => [...prevCartItems, item])
  }

  function addAmountToCart({ coffeeId, amount }: CartItem) {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.coffeeId === coffeeId
          ? { ...item, amount: item.amount + amount }
          : item,
      ),
    )
  }

  function removeOneFromCart(coffeeId: number) {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.coffeeId === coffeeId
          ? { ...item, amount: item.amount - 1 }
          : item,
      ),
    )
  }

  function removeFromCart(coffeeId: number) {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.coffeeId !== coffeeId),
    )
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        addAmountToCart,
        removeOneFromCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
