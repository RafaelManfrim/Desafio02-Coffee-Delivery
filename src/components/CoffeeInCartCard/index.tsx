import { Minus, Plus, Trash } from 'phosphor-react'

import cafe from '../../assets/americano.png'
import styles from './styles.module.scss'

export function CoffeeInCartCard() {
  return (
    <>
      <div className={styles.coffeeInCartCardContainer}>
        <div>
          <img src={cafe} alt="" />
          <div className={styles.coffeeInCartInformationsContainer}>
            <span>Americano</span>
            <div className={styles.actionsContainer}>
              <div className={styles.selectAmountContainer}>
                <button>
                  <Minus weight="bold" size={16} />
                </button>
                <span>1</span>
                <button>
                  <Plus weight="bold" size={16} />
                </button>
              </div>
              <button className={styles.removeFromCartButton}>
                <Trash size={16} />
                Remover
              </button>
            </div>
          </div>
        </div>
        <strong>R$ 9,90</strong>
      </div>
      <div className={styles.separatorContainer}>
        <hr />
      </div>
    </>
  )
}
