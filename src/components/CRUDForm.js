import React, { useState } from "react";
import CrudTable from "./CrudTable";

const CRUDForm = () => {
  const [data, setData] = useState([]); // Inicializa tus datos aquí
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (newData) => {
    // Lógica para agregar nuevos datos
    setData([...data, newData]);
  };

  const updateData = (updatedData) => {
    // Lógica para actualizar datos existentes
    const updatedArray = data.map((item) =>
      item.id === updatedData.id ? updatedData : item
    );
    setData(updatedArray);
  };

  const deleteData = (id) => {
    // Lógica para eliminar datos
    const updatedArray = data.filter((item) => item.id !== id);
    setData(updatedArray);
  };

  return (
    <div>
      
      <CrudTable data={data} setDataToEdit={setDataToEdit} deleteData={deleteData} />
   

      
    </div>
  );
};

export default CRUDForm;
