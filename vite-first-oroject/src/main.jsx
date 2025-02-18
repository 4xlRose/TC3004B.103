import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Segundo from './Segundo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Segundo></Segundo>
  </StrictMode>,
)
