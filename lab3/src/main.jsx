import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CounterApp } from './components/CounterApp.jsx'
import { SimpleForm } from './components/SimpleForm.jsx'
import { OnePieceFruitCard } from './components/Card.jsx'
import { CustomHook } from './components/CustomHook.jsx'
import { Focus } from './Focus.jsx'
import { CallbackHook } from './CallbackHook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CallbackHook/>
  </StrictMode>,
)
