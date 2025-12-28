import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { UserProvider } from './Context/UserContext.jsx'
import { ProductProvider } from './Context/ProductContext.jsx'
import { CartProvider } from './Context/CartContext.jsx'
import { CategoryProvider } from './Context/CategoryContext.jsx'
import { OrderProvider } from './Context/OrderContext.jsx'
import { ThemeProvider } from './Context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
     <OrderProvider>
      <ProductProvider>
        <CategoryProvider>
          <CartProvider>
            <UserProvider>

              <App />

            </UserProvider>
          </CartProvider>
        </CategoryProvider>
      </ProductProvider>
      </OrderProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)

