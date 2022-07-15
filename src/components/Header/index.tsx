import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCoffeeDelivery from '../../assets/logo.svg'
import styles from './styles.module.scss'

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <div>
        <img
          src={logoCoffeeDelivery}
          alt="Logo da Coffee Delivery contendo um copo roxo com um desenho de um foguete no meio."
        />
      </div>
      <div className={styles.headerMenu}>
        <button className={styles.location}>
          <MapPin size={22} weight="fill" />
          Novo Horizonte, SP
        </button>
        <div className={styles.cart}>
          <button className={styles.cartButton}>
            <ShoppingCart size={22} weight="fill" />
          </button>
          <span className={styles.cartBadge}>3</span>
        </div>
      </div>
    </div>
  )
}
