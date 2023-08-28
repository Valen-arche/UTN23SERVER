import React, { useState } from 'react';
import './../styles/MapaAstral.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function MapaAstral() {
  const [datos, setDatos] = useState({
    nombre: "María",
    edad: 28,
    pais: "España"
  });

  const handleChange = (campo, valor) => {
    setDatos({ ...datos, [campo]: valor });
  };

  return (
    <div>
      <h2>Tabla de Ejemplo</h2>
    
      <table className="tabla">
        <thead>
          <tr>
            <th className="nombre">Nombre</th>
            <th>Edad</th>
            <th>País</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{datos.nombre}</td>
            <td>{datos.edad}</td>
            <td>{datos.pais}</td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                value={datos.nombre}
                onChange={(e) => handleChange('nombre', e.target.value)}
              />
              <FontAwesomeIcon
                icon={faEdit}
                onClick={() => handleChange('nombre', 'Nuevo Nombre')}
              />
            </td>
            <td>
              <input
                type="number"
                value={datos.edad}
                onChange={(e) => handleChange('edad', e.target.value)}
              />
              <FontAwesomeIcon
                icon={faEdit}
                onClick={() => handleChange('edad', 99)}
              />
            </td>
            <td>
              <input
                type="text"
                value={datos.pais}
                onChange={(e) => handleChange('pais', e.target.value)}
              />
              <FontAwesomeIcon
                icon={faEdit}
                onClick={() => handleChange('pais', 'Nuevo País')}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MapaAstral;
