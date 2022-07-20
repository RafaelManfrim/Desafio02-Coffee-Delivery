import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import motoboyImg from '../../assets/motoboy.svg'
import { useOrder } from '../../hooks/useOrder'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'

import styles from './styles.module.scss'

export function Success() {
  const { width } = useWindowDimensions()
  const { deliveryAddress, paymentMethodSelect, cartItems } = useOrder()

  return (
    <div className={styles.successContainer}>
      <div className={styles.successContainerInformations}>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <div className={styles.orderInformation}>
          <div className={styles.information}>
            <div className={`${styles.iconCircle} ${styles.bgPurple}`}>
              <MapPin weight="fill" size={16} />
            </div>
            <div className={styles.informationText}>
              <span>
                Entrega em{' '}
                <strong>
                  {deliveryAddress?.street}, {deliveryAddress?.number}
                </strong>
              </span>
              <span>
                {deliveryAddress?.city} - {deliveryAddress?.stateUF}
              </span>
            </div>
          </div>
          <div className={styles.information}>
            <div className={`${styles.iconCircle} ${styles.bgYellow}`}>
              <Timer weight="fill" size={16} />
            </div>
            <div className={styles.informationText}>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </div>
          <div className={styles.information}>
            <div className={`${styles.iconCircle} ${styles.bgYellowDark}`}>
              <CurrencyDollar size={16} />
            </div>
            <div className={styles.informationText}>
              <span>Pagamento na entrega</span>
              {paymentMethodSelect === 'debit' && (
                <strong>Cartão de débito</strong>
              )}
              {paymentMethodSelect === 'credit' && (
                <strong>Cartão de crédito</strong>
              )}
              {paymentMethodSelect === 'money' && <strong>Dinheiro</strong>}
            </div>
          </div>
        </div>
      </div>
      {width > 1280 && (
        <img
          src={motoboyImg}
          alt="Entregador em uma moto azul levando um pedido da Coffee Delivery"
        />
      )}
    </div>
  )
}
