import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Creditos from './components/creditos';
import Contactos from './components/Contactos';
import Navbarprimero from './layouts/Navbarprimero';
import Accesorios from './components/Accesorios';
import Footer1 from './layouts/Footer1';
import MarcasAsociadas from './components/MarcasAsociadas';


function App() {
  return (
    <div className="App">
      <div>
        
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Navbarprimero />} >
          <Route index element={<Home />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="Contactos" element={<Contactos />} />
          <Route path="Accesorios" element={<Accesorios />} /> 
          <Route path="Creditos" element={<Creditos />} />
          <Route path="Marcas Asociadas" element={<MarcasAsociadas />} />
          <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
        
      </BrowserRouter>
   
      </div>
<Footer1/>

    </div>

    
  );
}

export default App;