import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/App.css'
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Contacto from './pages/Contacto';
import Servicios from './pages/Servicios';
import MapaAstral from './pages/MapaAstral';

function App() {
  return (
    <div className='App'>
      <div className='body'>
        
      <BrowserRouter> 
        <Header />        
        <Nav />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/MapaAstral" element={<MapaAstral />} />
        </Routes> 
      </BrowserRouter>
      <h1> HELLO</h1>
      <Footer />
    </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);

export default App;
