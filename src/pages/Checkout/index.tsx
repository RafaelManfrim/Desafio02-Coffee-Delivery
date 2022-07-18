import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { CoffeeInCartCard } from '../../components/CoffeeInCartCard'
import { PaymentOption } from '../../components/PaymentOption'

import styles from './styles.module.scss'

export function Checkout() {
  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.completeYourOrderContainer}>
        <h4>Complete seu pedido</h4>
        <div>
          <div
            className={`${styles.checkoutCardTitle} ${styles.iconYellowDark}`}
          >
            <MapPinLine size={22} />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <div className={styles.inputsContainer}>
            <div>
              <input
                type="text"
                placeholder="CEP"
                className={styles.checkoutInput}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Rua"
                className={`${styles.checkoutInput} ${styles.fullInput}`}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Número"
                className={styles.checkoutInput}
              />
              <input
                type="text"
                placeholder="Complemento"
                className={`${styles.checkoutInput} ${styles.fullInput}`}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Bairro"
                className={styles.checkoutInput}
              />
              <input
                type="text"
                placeholder="Cidade"
                className={`${styles.checkoutInput} ${styles.fullInput}`}
              />
              <input
                type="text"
                placeholder="UF"
                className={`${styles.checkoutInput} ${styles.miniInput}`}
              />
            </div>
          </div>
        </div>
        <div>
          <div className={`${styles.checkoutCardTitle} ${styles.iconPurple}`}>
            <CurrencyDollar size={22} />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <div className={styles.paymentOptionsContainer}>
            <PaymentOption name="Cartão de crédito" icon="credit" />
            <PaymentOption name="Cartão de débito" icon="debit" />
            <PaymentOption name="Dinheiro" icon="money" isSelected />
          </div>
        </div>
      </div>
      <div className={styles.cartContainer}>
        <h4>Cafés selecionados</h4>
        <div>
          <div>
            <CoffeeInCartCard />
            <CoffeeInCartCard />
          </div>
          <div className={styles.cartOrderDetailsContainer}>
            <span>Total de itens</span>
            <span>R$ 29,70</span>
            <span>Entrega</span>
            <span>R$ 3,50</span>
            <strong>Total</strong>
            <strong>R$ 33,20</strong>
          </div>
          <button className={styles.processOrderButton}>
            confirmar pedido
          </button>
        </div>
      </div>
    </div>
  )
}
