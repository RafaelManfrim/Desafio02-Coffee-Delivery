import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'
import { CoffeeDTO } from '../types/CoffeeDTO'

interface CoffeesContextData {
  coffees: CoffeeDTO[]
}

export const CoffeesContext = createContext({} as CoffeesContextData)

interface CoffeesProviderProps {
  children: ReactNode
}

export function CoffeesContextProvider({ children }: CoffeesProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeDTO[]>([])

  useEffect(() => {
    async function loadCoffees() {
      try {
        const response = await api.get('/coffees')
        setCoffees(response.data)
      } catch (err) {
        console.log(err)
      }
    }

    loadCoffees()
  }, [])

  return (
    <CoffeesContext.Provider value={{ coffees }}>
      {children}
    </CoffeesContext.Provider>
  )
}
