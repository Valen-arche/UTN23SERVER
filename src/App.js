import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Contacto from './pages/Contacto';
import Servicios from './pages/Servicios';
import MapaAstral from './pages/MapaAstral';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Body from './components/Body';


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

         <Body/><Footer/>

        </div>


  );
 
}

export default App;
