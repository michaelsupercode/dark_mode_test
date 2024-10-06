import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MainProvider from './context/useContext.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainProvider>
        <App />
      </MainProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
