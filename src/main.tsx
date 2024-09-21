import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartContextProvider } from './context/CartContext.tsx'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </StrictMode>
)
