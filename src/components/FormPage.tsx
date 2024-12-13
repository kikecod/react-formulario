import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



function FormPage({ setData }) {
  const [localformData, setLocalFormData] = useState({ nombre: '', apellido: '', email: ''})
  const navigate = useNavigate();

  const handleChange = (e) =>{
    setLocalFormData({ ...localformData, [e.target.name]: e.target.value});
  
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    setData(localformData);
    navigate('/display')
  }

  return (
    <div>
      <h1>Ingrese sus Datos</h1>
      <form onSubmit={handleSubmit}>
        <input 
        name='nombre'
        placeholder='Nombre'
        value={localformData.nombre} 
        onChange={handleChange}/>
        <br /> <br />
        <input 
        name='apellido'
        placeholder='Apellido'
        value={localformData.apellido}
        onChange={handleChange} />
        <br /><br />
        <input 
        name='email'
        placeholder='Email'
        value={localformData.email}
        onChange={handleChange} />
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  )
}

export default FormPage