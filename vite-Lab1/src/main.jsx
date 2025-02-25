import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HelloWord from './HelloWord.jsx'
import { MyAppLab1 } from './MyAppLab1.jsx'
import { Quinto } from './Quinto.jsx'
import { Sexto } from './Sexto.jsx'
import { Septimo } from './Septimo.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Septimo title = "Hola" subtitle = "adios"></Septimo>
  </StrictMode>,
)
