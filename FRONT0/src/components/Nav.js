import React from "react";
import './../components/NavStyle.css';
import { Link } from 'react-router-dom';


const Nav = (props) => { 
  return (
    <div className="Nav">
      <ul>
        <li><Link to="/"> <p>Home</p></Link></li>
        <li><Link to="/MapaAstral"> <p>Mapa Astral</p></Link></li>
        <li><Link to="/contacto"> <p>Contacto</p></Link></li>
        <li><Link to="/servicios"><p> Servicios</p></Link></li>
      </ul>

    </div>
)}


export default Nav
