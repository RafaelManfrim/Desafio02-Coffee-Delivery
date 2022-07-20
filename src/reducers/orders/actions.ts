import { AddressSchema } from '../../pages/Checkout'
import { CartItem } from './reducer'

export enum ActionTypes {
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  ADD_AMOUNT_TO_CART = 'ADD_AMOUNT_TO_CART',
  REMOVE_ONE_FROM_CART = 'REMOVE_ONE_FROM_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  SET_PAYMENT_METHOD = 'SET_PAYMENT_METHOD',
  SET_DELIVERY_ADDRESS = 'SET_DELIVERY_ADDRESS',
  CONFIRM_ORDER = 'CONFIRM_ORDER',
}

export function addCoffeeToCartAction(item: CartItem) {
  return { type: ActionTypes.ADD_COFFEE_TO_CART, payload: { item } }
}

export function addAmountToCartAction(item: CartItem) {
  return { type: ActionTypes.ADD_AMOUNT_TO_CART, payload: { item } }
}

export function removeOneFromCartAction(coffeeId: number) {
  return { type: ActionTypes.REMOVE_ONE_FROM_CART, payload: { coffeeId } }
}

export function removeFromCartAction(coffeeId: number) {
  return { type: ActionTypes.REMOVE_FROM_CART, payload: { coffeeId } }
}

export function setPaymentMethodAction(method: 'debit' | 'credit' | 'money') {
  return { type: ActionTypes.SET_PAYMENT_METHOD, payload: { method } }
}

export function setDeliveryAddressAction(address: AddressSchema) {
  return { type: ActionTypes.SET_DELIVERY_ADDRESS, payload: { address } }
}

export function confirmOrderAction() {
  return { type: ActionTypes.CONFIRM_ORDER }
}
