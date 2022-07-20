import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import Skeleton from 'react-loading-skeleton'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { CoffeeInCartCard } from '../../components/CoffeeInCartCard'
import { PaymentMethod } from '../../components/PaymentMethod'
import { useOrder } from '../../hooks/useOrder'
import { useCoffees } from '../../hooks/useCoffees'
import { cepMask } from '../../utils/cepMask'

import styles from './styles.module.scss'
import 'react-loading-skeleton/dist/skeleton.css'

const addressSchema = zod.object({
  cep: zod.string().length(10, 'CEP inválido'),
  city: zod.string(),
  street: zod.string(),
  number: zod.string(),
  complement: zod.string(),
  district: zod.string(),
  stateUF: zod.string(),
})

export type AddressSchema = zod.infer<typeof addressSchema>

export function Checkout() {
  const {
    cartItems,
    paymentMethods,
    paymentMethodSelect,
    deliveryAddress,
    completeOrder,
  } = useOrder()

  const { coffees, isLoadingCoffees } = useCoffees()
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm<AddressSchema>({
    defaultValues: {
      cep: deliveryAddress?.cep,
      city: deliveryAddress?.city,
      street: deliveryAddress?.street,
      number: deliveryAddress?.number,
      complement: deliveryAddress?.complement,
      district: deliveryAddress?.district,
      stateUF: deliveryAddress?.stateUF,
    },
    resolver: zodResolver(addressSchema),
  })

  const totalPrice = cartItems.reduce((acc, item) => {
    const coffee = coffees.find((coffee) => coffee.id === item.coffeeId)
    if (coffee) {
      return acc + coffee.price * item.amount
    } else {
      return acc
    }
  }, 0)

  const deliveryTax = cartItems.length > 0 ? totalPrice * 0.025 + 2.5 : 0

  function handleCompleteOrder(data: AddressSchema) {
    completeOrder(data)
    navigate('/success')
  }

  return (
    <form
      className={styles.checkoutContainer}
      onSubmit={handleSubmit(handleCompleteOrder)}
    >
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
                {...register('cep')}
                onChange={(event) => {
                  const { value } = event.target
                  event.target.value = cepMask(value)
                }}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Rua"
                className={`${styles.checkoutInput} ${styles.fullInput}`}
                {...register('street')}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Número"
                className={styles.checkoutInput}
                {...register('number')}
              />
              <input
                type="text"
                placeholder="Complemento"
                className={`${styles.checkoutInput} ${styles.fullInput}`}
                {...register('complement')}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Bairro"
                className={styles.checkoutInput}
                {...register('district')}
              />
              <input
                type="text"
                placeholder="Cidade"
                className={`${styles.checkoutInput} ${styles.fullInput}`}
                {...register('city')}
              />
              <input
                type="text"
                placeholder="UF"
                maxLength={2}
                className={`${styles.checkoutInput} ${styles.miniInput}`}
                {...register('stateUF')}
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
              if (isLoadingCoffees) {
                return (
                  <>
                    <Skeleton height={64} width={300} />
                    <div className={styles.separatorContainer}>
                      <hr />
                    </div>
                  </>
                )
              }
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
          <button
            className={styles.processOrderButton}
            type="submit"
            disabled={cartItems.length === 0}
          >
            confirmar pedido
          </button>
        </div>
      </div>
    </form>
  )
}
