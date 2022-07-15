import { ShoppingCart } from 'phosphor-react'

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
            R$ <span>{price}</span>
          </div>
          <div> - 1 + </div>
          <div>
            <ShoppingCart size={22} weight="fill" />
          </div>
        </div>
      </div>
    </div>
  )
}
