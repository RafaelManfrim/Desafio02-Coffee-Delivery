import { Minus, Plus, Trash } from 'phosphor-react'
import { useOrder } from '../../hooks/useOrder'

import styles from './styles.module.scss'

interface CoffeeInCardProps {
  id: number
  name: string
  amount: number
  image: string
  price: number
}

export function CoffeeInCartCard(props: CoffeeInCardProps) {
  const { id, name, amount, image, price } = props

  const { addAmountToCart, removeOneFromCart, removeFromCart } = useOrder()

  function handleAddOneToCart() {
    addAmountToCart({ coffeeId: id, amount: 1 })
  }

  function handleRemoveOneFromCart() {
    removeOneFromCart(id)
  }

  function handleRemoveCoffee() {
    removeFromCart(id)
  }

  return (
    <>
      <div className={styles.coffeeInCartCardContainer}>
        <div>
          <img src={`/src/assets/${image}`} alt="" />
          <div className={styles.coffeeInCartInformationsContainer}>
            <span>{name}</span>
            <div className={styles.actionsContainer}>
              <div className={styles.selectAmountContainer}>
                <button onClick={handleRemoveOneFromCart}>
                  <Minus weight="bold" size={16} />
                </button>
                <span>{amount}</span>
                <button onClick={handleAddOneToCart}>
                  <Plus weight="bold" size={16} />
                </button>
              </div>
              <button
                className={styles.removeFromCartButton}
                onClick={handleRemoveCoffee}
              >
                <Trash size={16} />
                Remover
              </button>
            </div>
          </div>
        </div>
        <strong>
          {Intl.NumberFormat('pt-br', {
            currency: 'BRL',
            style: 'currency',
          }).format(price * amount)}
        </strong>
      </div>
      <div className={styles.separatorContainer}>
        <hr />
      </div>
    </>
  )
}
