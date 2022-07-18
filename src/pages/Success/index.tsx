import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import motoboyImg from '../../assets/motoboy.svg'

import styles from './styles.module.scss'

export function Success() {
  return (
    <div>
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <div>
          <div>
            <div>
              <MapPin weight="fill" />
            </div>
            <div>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </div>
          <div>
            <div>
              <Timer weight="fill" />
            </div>
            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </div>
          <div>
            <div>
              <CurrencyDollar />
            </div>
            <div>
              <span>Pagamento na entrega</span>
              <strong>Cartão de Crédito</strong>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src={motoboyImg}
          alt="Entregador em uma moto azul levando um pedido da Coffee Delivery"
        />
      </div>
    </div>
  )
}
