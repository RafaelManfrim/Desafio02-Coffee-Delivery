import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logoCoffeeDelivery from '../../assets/logo.svg'
import { useCart } from '../../hooks/useCart'
import styles from './styles.module.scss'

export function Header() {
  const { cartItems } = useCart()

  return (
    <div className={styles.headerContainer}>
      <NavLink to="/">
        <img
          src={logoCoffeeDelivery}
          alt="Logo da Coffee Delivery contendo um copo roxo com um desenho de um foguete no meio."
        />
      </NavLink>
      <div className={styles.headerMenu}>
        <NavLink to="/checkout">
          <button className={styles.location}>
            <MapPin size={22} weight="fill" />
            Novo Horizonte, SP
          </button>
        </NavLink>
        <NavLink className={styles.cart} to="/checkout">
          <button className={styles.cartButton}>
            <ShoppingCart size={22} weight="fill" />
          </button>
          {cartItems.length > 0 && (
            <span className={styles.cartBadge}>{cartItems.length}</span>
          )}
        </NavLink>
      </div>
    </div>
  )
}
