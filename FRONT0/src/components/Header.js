import React from 'react';
import logo from '../assets/img/Magisterius-logo.png'; // Ajusta la ruta según la ubicación de tu logo
import './../components/HeaderStyle.css';

function Header() {
  return (
    <div className='HeaderStyle'>
      <a href="">
        <img src={logo} alt="Logo de Magisterius" />
      </a>
       </div>
  );
}

export default Header;

