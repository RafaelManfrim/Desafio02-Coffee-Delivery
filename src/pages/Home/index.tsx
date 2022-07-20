import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import Skeleton from 'react-loading-skeleton'

import { CoffeeCard } from '../../components/CoffeeCard'
import { useCoffees } from '../../hooks/useCoffees'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import copoImg from '../../assets/copo.png'

import 'react-loading-skeleton/dist/skeleton.css'
import styles from './styles.module.scss'

export function Home() {
  const { coffees, isLoadingCoffees } = useCoffees()
  const { width } = useWindowDimensions()

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
        {width > 1440 && (
          <img
            src={copoImg}
            alt="Imagem de copo com uma faixa cinza contendo o logo da Coffe Delivery e vários grão de café ao redor"
          />
        )}
      </section>
      <main className={styles.listContainer}>
        <h2>Nossos cafés</h2>
        <div className={styles.productList}>
          {isLoadingCoffees ? (
            <>
              <Skeleton height={300} />
              <Skeleton height={300} />
              <Skeleton height={300} />
              <Skeleton height={300} />
              <Skeleton height={300} />
              <Skeleton height={300} />
              <Skeleton height={300} />
            </>
          ) : (
            coffees.map((coffee) => (
              <CoffeeCard
                key={coffee.id}
                id={coffee.id}
                image={coffee.image}
                description={coffee.description}
                name={coffee.name}
                tags={coffee.tags}
                price={coffee.price}
              />
            ))
          )}
        </div>
      </main>
    </div>
  )
}
