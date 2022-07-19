import { Bank, CreditCard, Money } from 'phosphor-react'
import { useOrder } from '../../hooks/useOrder'

import styles from './styles.module.scss'

interface PaymentMethodProps {
  method: 'debit' | 'credit' | 'money'
  isSelected?: boolean
}

export function PaymentMethod({ method, isSelected }: PaymentMethodProps) {
  const { setPaymentMethod } = useOrder()

  function handleSetPaymentMethod() {
    setPaymentMethod(method)
  }

  return (
    <div
      className={`${styles.paymentMethod} ${isSelected && styles.selected}`}
      onClick={handleSetPaymentMethod}
    >
      {method === 'debit' && (
        <>
          <Bank size={16} />
          <span>Cartão de débito</span>
        </>
      )}
      {method === 'credit' && (
        <>
          <CreditCard size={16} />
          <span>Cartão de crédito</span>
        </>
      )}
      {method === 'money' && (
        <>
          <Money size={16} />
          <span>Dinheiro</span>
        </>
      )}
    </div>
  )
}
