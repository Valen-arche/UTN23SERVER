import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Contacto from './pages/Contacto';
import Servicios from './pages/Servicios';
import MapaAstral from './pages/MapaAstral';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
<div className='App'>

 
  <BrowserRouter> 
   <Header/>        
  <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Contacto" element= {<Contacto/>} />
        <Route path="/Servicios" element= {<Servicios/>} />
        <Route path="/MapaAstral" element= {<MapaAstral/>} />
        </Routes>
        </BrowserRouter>
        
         <Footer/>

        </div>
          
           
  );
 
}

export default App;

