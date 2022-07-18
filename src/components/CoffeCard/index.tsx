import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import { CoffeeDTO } from '../../types/CoffeeDTO'

import styles from './styles.module.scss'

type CoffeeCardProps = CoffeeDTO

export function CoffeeCard({
  name,
  description,
  image,
  tags,
  price,
}: CoffeeCardProps) {
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
              <button>
                <Minus weight="bold" size={16} />
              </button>
              <span>1</span>
              <button>
                <Plus weight="bold" size={16} />
              </button>
            </div>
            <button className={styles.addToCartButton}>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
