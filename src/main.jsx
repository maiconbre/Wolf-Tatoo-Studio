import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Agendamentos } from './Componentes/pages/Agendamentos'
import { Equipe } from './Componentes/pages/Equipe'
import { Home } from './Componentes/pages/Home'
import { Studios } from './Componentes/pages/Studios'
import { Tatuadores } from './Componentes/pages/Tatuadores'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tatuadores" element={<Tatuadores/>} />
        <Route path="/agendamentos" element={<Agendamentos/>} />
        <Route path="/studios" element={<Studios/>} />
        <Route path="/equipe" element={<Equipe/>} />
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
