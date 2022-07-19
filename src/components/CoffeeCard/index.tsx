import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { useOrder } from '../../hooks/useOrder'

import { CoffeeDTO } from '../../types/CoffeeDTO'

import styles from './styles.module.scss'

type CoffeeCardProps = CoffeeDTO

export function CoffeeCard({
  id,
  name,
  description,
  image,
  tags,
  price,
}: CoffeeCardProps) {
  const [coffeeAmount, setCoffeeAmount] = useState(1)
  const { cartItems, addCoffeeToCart, addAmountToCart } = useOrder()

  function addOneToCoffeeAmount() {
    setCoffeeAmount((state) => state + 1)
  }

  function removeOneFromCoffeeAmount() {
    if (coffeeAmount > 1) {
      setCoffeeAmount((state) => state - 1)
    }
  }

  function handleAddCoffeeToCart() {
    const coffeeAlreadyInCart = cartItems.find((item) => item.coffeeId === id)

    if (coffeeAlreadyInCart) {
      addAmountToCart({
        coffeeId: id,
        amount: coffeeAmount,
      })
    } else {
      addCoffeeToCart({
        coffeeId: id,
        amount: coffeeAmount,
      })
    }

    setCoffeeAmount(1)
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.coffeeImageContainer}>
        <img src={`/src/assets/${image}`} alt={name} />
      </div>
      <div className={styles.coffeeTagsContainer}>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className={styles.infoContainer}>
        <h3>{name}</h3>
        <p>{description}</p>

        <div>
          <div className={styles.priceContainer}>
            R$ <strong>{String(price).replace('.', ',')}</strong>
          </div>
          <div className={styles.addToCartContainer}>
            <div className={styles.selectAmountContainer}>
              <button onClick={removeOneFromCoffeeAmount}>
                <Minus weight="bold" size={16} />
              </button>
              <span>{coffeeAmount}</span>
              <button onClick={addOneToCoffeeAmount}>
                <Plus weight="bold" size={16} />
              </button>
            </div>
            <button
              className={styles.addToCartButton}
              onClick={handleAddCoffeeToCart}
            >
              <ShoppingCart size={22} weight="fill" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
