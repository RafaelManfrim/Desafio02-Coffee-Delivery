import { BrowserRouter } from 'react-router-dom'
import { OrderContextProvider } from './contexts/OrderContext'
import { CoffeesContextProvider } from './contexts/CoffeesContext'
import { Router } from './Router'

export function App() {
  return (
    <CoffeesContextProvider>
      <OrderContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </OrderContextProvider>
    </CoffeesContextProvider>
  )
}
