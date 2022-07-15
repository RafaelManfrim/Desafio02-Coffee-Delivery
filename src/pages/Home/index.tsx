import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import copoImg from '../../assets/copo.png'

import styles from './styles.module.scss'

export function Home() {
  return (
    <div>
      <section className={styles.introContainer}>
        <div>
          <h1>
            Encontre o café perfeito <br /> para qualquer hora do dia
          </h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a <br />{' '}
            qualquer hora
          </span>
          <div className={styles.advantagesList}>
            <span>
              <div className={styles.bgYellowDark}>
                <ShoppingCart size={16} weight="fill" />
              </div>
              Compra simples e segura
            </span>
            <span>
              <div className={styles.bgText}>
                <Package size={16} weight="fill" />
              </div>
              Embalagem mantém o café intacto
            </span>
            <span>
              <div className={styles.bgYellow}>
                <Timer size={16} weight="fill" />
              </div>
              Entrega rápida e rastreada
            </span>
            <span>
              <div className={styles.bgPurple}>
                <Coffee size={16} weight="fill" />
              </div>
              O café chega fresquinho até você
            </span>
          </div>
        </div>
        <img
          src={copoImg}
          alt="Imagem de copo com uma faixa cinza contendo o logo da Coffe Delivery e vários grão de café ao redor"
        />
      </section>
      <main className={styles.listContainer}>CoffeList</main>
    </div>
  )
}
