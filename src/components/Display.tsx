import React from 'react'



function Display({ data }) {
  return (
    <div>
        <h1>Datos Ingresados</h1>
        <p><strong>Nombre: </strong>{ data.nombre }</p>
        <p><strong>Apellido: </strong>{ data.apellido } </p>
        <p><strong>Email: </strong>{ data.email } </p>
    </div>
  )
}

export default Display