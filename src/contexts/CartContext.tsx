import { createContext, ReactNode, useState } from 'react'
// import { useCoffees } from '../hooks/useCoffees'

interface CartItem {
  coffeeId: number
  amount: number
}

interface CartContextData {
  cartItems: CartItem[]
  addCoffeeToCart: (item: CartItem) => void
  addMoreOneToCart: (coffeeId: number) => void
  removeOneFromCoffeeAmountInCart: (coffeeId: number) => void
  removeCoffeeFromCart: (coffeeId: number) => void
}

export const CartContext = createContext({} as CartContextData)

interface CartProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addCoffeeToCart(item: CartItem) {
    console.log(item)
    setCartItems((prevCartItems) => [...prevCartItems, item])
  }

  function addMoreOneToCart(coffeeId: number) {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.coffeeId === coffeeId
          ? { ...item, amount: item.amount + 1 }
          : item,
      ),
    )
  }

  function removeOneFromCoffeeAmountInCart(coffeeId: number) {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.coffeeId === coffeeId
          ? { ...item, amount: item.amount - 1 }
          : item,
      ),
    )
  }

  function removeCoffeeFromCart(coffeeId: number) {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.coffeeId !== coffeeId),
    )
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        addMoreOneToCart,
        removeOneFromCoffeeAmountInCart,
        removeCoffeeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
