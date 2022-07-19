import { createContext, ReactNode, useEffect, useReducer } from 'react'
import {
  addAmountToCartAction,
  addCoffeeToCartAction,
  removeFromCartAction,
  removeOneFromCartAction,
  setPaymentMethodAction,
} from '../reducers/orders/actions'
import {
  CartItem,
  DeliveryAddress,
  ordersReducer,
} from '../reducers/orders/reducer'

interface OrderContextData {
  cartItems: CartItem[]
  paymentMethods: ['debit', 'credit', 'money']
  paymentMethodSelect?: 'debit' | 'credit' | 'money'
  deliveryAddress?: DeliveryAddress
  addCoffeeToCart: (item: CartItem) => void
  addAmountToCart: ({ coffeeId, amount }: CartItem) => void
  removeOneFromCart: (coffeeId: number) => void
  removeFromCart: (coffeeId: number) => void
  setPaymentMethod: (method: 'debit' | 'credit' | 'money') => void
}

export const OrderContext = createContext({} as OrderContextData)

interface OrderProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderProviderProps) {
  const [ordersState, dispatch] = useReducer(
    ordersReducer,
    {
      cartItems: [],
      paymentMethods: ['debit', 'credit', 'money'],
      deliveryAddress: undefined,
      paymentMethodSelect: undefined,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:orders-state-2.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      } else {
        return {
          cartItems: [],
          paymentMethods: ['debit', 'credit', 'money'],
          deliveryAddress: undefined,
          paymentMethodSelect: undefined,
        }
      }
    },
  )

  const { cartItems, paymentMethods, paymentMethodSelect, deliveryAddress } =
    ordersState

  function addCoffeeToCart(item: CartItem) {
    dispatch(addCoffeeToCartAction(item))
  }

  function addAmountToCart(item: CartItem) {
    dispatch(addAmountToCartAction(item))
  }

  function removeOneFromCart(coffeeId: number) {
    dispatch(removeOneFromCartAction(coffeeId))
  }

  function removeFromCart(coffeeId: number) {
    dispatch(removeFromCartAction(coffeeId))
  }

  function setPaymentMethod(method: 'debit' | 'credit' | 'money') {
    dispatch(setPaymentMethodAction(method))
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(ordersState)
    localStorage.setItem('@coffee-delivery:orders-state-2.0.0', stateJSON)
  }, [ordersState])

  return (
    <OrderContext.Provider
      value={{
        cartItems,
        paymentMethods,
        paymentMethodSelect,
        deliveryAddress,
        addCoffeeToCart,
        addAmountToCart,
        removeOneFromCart,
        removeFromCart,
        setPaymentMethod,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
