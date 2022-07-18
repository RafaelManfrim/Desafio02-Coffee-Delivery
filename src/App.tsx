import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './contexts/CartContext'
import { CoffeesContextProvider } from './contexts/CoffeesContext'
import { Router } from './Router'

export function App() {
  return (
    <CoffeesContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartContextProvider>
    </CoffeesContextProvider>
  )
}
