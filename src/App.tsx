import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormPage from './components/FormPage'
import Display from './components/Display'



function App() {
  const [data, setData] = useState({ nombre: '', apellido: '', email: ''})

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<FormPage setData={setData}/>} />
        <Route path='/display' element = {<Display data={data}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App