import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { CoffeeInCartCard } from '../../components/CoffeeInCartCard'
import { PaymentMethod } from '../../components/PaymentMethod'
import { useOrder } from '../../hooks/useOrder'
import { useCoffees } from '../../hooks/useCoffees'

import styles from './styles.module.scss'
import { useForm } from 'react-hook-form'

export function Checkout() {
  const { cartItems, paymentMethods, paymentMethodSelect, deliveryAddress } =
    useOrder()
  const { coffees } = useCoffees()

  const { register, handleSubmit } = useForm({})

  const totalPrice = cartItems.reduce((acc, item) => {
    const coffee = coffees.find((coffee) => coffee.id === item.coffeeId)
    if (coffee) {
      return acc + coffee.price * item.amount
    } else {
      return acc
    }
  }, 0)

  const deliveryTax = cartItems.length > 0 ? totalPrice * 0.025 + 2.5 : 0

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
          <div className={styles.paymentMethodsContainer}>
            {paymentMethods.map((method) => (
              <PaymentMethod
                key={method}
                method={method}
                isSelected={method === paymentMethodSelect}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.cartContainer}>
        <h4>Cafés selecionados</h4>
        <div>
          <div>
            {cartItems.map((item) => {
              const coffee = coffees.find(
                (coffee) => coffee.id === item.coffeeId,
              )
              if (coffee) {
                return (
                  <CoffeeInCartCard
                    key={coffee.id}
                    id={coffee.id}
                    name={coffee.name}
                    image={coffee.image}
                    amount={item.amount}
                    price={coffee.price}
                  />
                )
              } else {
                return null
              }
            })}
          </div>
          <div className={styles.cartOrderDetailsContainer}>
            <span>Total de itens</span>
            <span>
              {Intl.NumberFormat('pt-br', {
                currency: 'BRL',
                style: 'currency',
              }).format(totalPrice)}
            </span>
            <span>Entrega</span>
            <span>
              {Intl.NumberFormat('pt-br', {
                currency: 'BRL',
                style: 'currency',
              }).format(deliveryTax)}
            </span>
            <strong>Total</strong>
            <strong>
              {Intl.NumberFormat('pt-br', {
                currency: 'BRL',
                style: 'currency',
              }).format(totalPrice + deliveryTax)}
            </strong>
          </div>
          <button className={styles.processOrderButton}>
            confirmar pedido
          </button>
        </div>
      </div>
    </div>
  )
}
