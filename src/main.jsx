import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import Saludo from './components/Saludo.jsx'
import './main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pagina404 from './components/404.jsx'
import Cuadricula from './components/Cuadricula.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Cuadricula />} />
        <Route path='saludo' element={<Saludo />} />
      </Route>
      <Route path='*' element={<Pagina404 />} />
    </Routes>
  </BrowserRouter>
)
