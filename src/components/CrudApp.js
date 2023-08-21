import React, { useState, useEffect } from "react";
import server from "../server"



const CrudApp = () => {
  const [data, setData] = useState([]); // Inicializa tus datos aquí

  useEffect(() => {
    // Llamar a una función del módulo server para obtener datos del servidor
    server.fetchData()
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {/* Mostrar los datos en la página */}
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default CrudApp;
