import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Agendamentos } from './Componentes/pages/Agendamentos/Agendamentos'
import { Equipe } from './Componentes/pages/Equipe/Equipe'
import { Home } from './Componentes/pages/Home/Home'
import { Studios } from './Componentes/pages/Studios/Studios'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/agendamentos" element={<Agendamentos/>} />
        <Route path="/studios" element={<Studios/>} />
        <Route path="/equipe" element={<Equipe/>} />
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
