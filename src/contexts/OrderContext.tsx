import { createContext, ReactNode, useEffect, useReducer } from 'react'

import { AddressSchema } from '../pages/Checkout'
import { CartItem, ordersReducer } from '../reducers/orders/reducer'
import {
  addAmountToCartAction,
  addCoffeeToCartAction,
  confirmOrderAction,
  removeFromCartAction,
  removeOneFromCartAction,
  setDeliveryAddressAction,
  setPaymentMethodAction,
} from '../reducers/orders/actions'
import { api } from '../services/api'

interface OrderContextData {
  cartItems: CartItem[]
  paymentMethods: ['debit', 'credit', 'money']
  paymentMethodSelect?: 'debit' | 'credit' | 'money'
  deliveryAddress?: AddressSchema
  addCoffeeToCart: (item: CartItem) => void
  addAmountToCart: ({ coffeeId, amount }: CartItem) => void
  removeOneFromCart: (coffeeId: number) => void
  removeFromCart: (coffeeId: number) => void
  setPaymentMethod: (method: 'debit' | 'credit' | 'money') => void
  completeOrder: (address: AddressSchema) => Promise<void>
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

  async function completeOrder(address: AddressSchema) {
    dispatch(setDeliveryAddressAction(address))
    try {
      const newOrder = {
        items: cartItems,
        paymentMethod: paymentMethodSelect,
        orderDate: new Date(),
        deliveryAddress: address,
      }

      await api.post('/orders/', { ...newOrder })
      dispatch(confirmOrderAction())
    } catch (error) {
      console.log(error)
    }
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
        completeOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
