import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'
import { Perfil } from './pages/Perfil'
import { Login } from './pages/Login'
import { Layout } from './pages/Layout';
import { Navbar } from './components/NavBar';
import {FooterCom} from './components/Footer'
import { About } from './pages/About';

function App() {
  return (
      <div>
        <Navbar />
          <Routes>
            <Route path="Dashboard" element={ <Dashboard /> }></Route>
            <Route path="Home" element={ <Home /> }></Route>
            <Route path="Login" element={ <Login /> }></Route>
            <Route path="Perfil" element={ <Perfil /> }></Route>
            <Route path="About" element={ <About /> }></Route>
            <Route path="*" element={ <Login /> }></Route>
          </Routes>
      <FooterCom />
      </div>
  )
}

export default App
