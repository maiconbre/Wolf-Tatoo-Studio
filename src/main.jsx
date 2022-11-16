import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Agendamentos } from './Componentes/pages/Agendamentos'
import { Home } from './Componentes/pages/Home'
import { Tatuadores } from './Componentes/pages/Tatuadores'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tatuadores" element={<Tatuadores/>} />
        <Route path="/agendamento" element={<Agendamentos/>} />
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
