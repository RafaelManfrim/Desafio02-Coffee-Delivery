import { useContext } from 'react'
import { CoffeesContext } from '../contexts/CoffeesContext'

export const useCoffees = () => useContext(CoffeesContext)
