import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './context/StoreContex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <StoreContextProvider>
  <App />
  </StoreContextProvider>
 </BrowserRouter>
 
  
  
)
