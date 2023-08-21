import React from "react";
import CrudTable from "./CrudTable";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, constellation, id } = el;

  return (
    <CrudTable>
      <CrudTableRow>{name}
      <td>{constellation}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
        </td>
        
      </CrudTableRow>
    </CrudTable>
  );
};

export default CrudTableRow;
