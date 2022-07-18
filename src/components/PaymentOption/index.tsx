import { Bank, CreditCard, Money } from 'phosphor-react'

import styles from './styles.module.scss'

interface PaymentOptionProps {
  icon: 'debit' | 'credit' | 'money'
  name: string
  isSelected?: boolean
}

export function PaymentOption({ icon, name, isSelected }: PaymentOptionProps) {
  return (
    <div className={`${styles.paymentOption} ${isSelected && styles.selected}`}>
      {icon === 'debit' && <Bank size={16} />}
      {icon === 'credit' && <CreditCard size={16} />}
      {icon === 'money' && <Money size={16} />}
      <span>{name}</span>
    </div>
  )
}
