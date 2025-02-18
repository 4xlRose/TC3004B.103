import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HelloWord from './HelloWord.jsx'
import { MyAppLab1 } from './MyAppLab1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyAppLab1></MyAppLab1>
  </StrictMode>,
)
