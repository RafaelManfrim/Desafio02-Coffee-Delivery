import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'
import { CoffeeDTO } from '../types/CoffeeDTO'

interface CoffeesContextData {
  coffees: CoffeeDTO[]
  isLoadingCoffees: boolean
}

export const CoffeesContext = createContext({} as CoffeesContextData)

interface CoffeesProviderProps {
  children: ReactNode
}

export function CoffeesContextProvider({ children }: CoffeesProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeDTO[]>([])
  const [isLoadingCoffees, setIsLoadingCoffees] = useState(true)

  useEffect(() => {
    async function loadCoffees() {
      setIsLoadingCoffees(true)
      try {
        const response = await api.get('/coffees')
        setIsLoadingCoffees(false)
        setCoffees(response.data)
      } catch (err) {
        console.log(err)
      }
    }

    loadCoffees()
  }, [])

  return (
    <CoffeesContext.Provider value={{ coffees, isLoadingCoffees }}>
      {children}
    </CoffeesContext.Provider>
  )
}
