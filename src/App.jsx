import React from 'react'
import './App.css'
import Testimonio from './components/Testimonio'
import { usuarios } from './usuarios'

function App() {

  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {usuarios.map(user => (
          <Testimonio key={user.nombre} nombre={user.nombre} imagen={user.imagen} pais={user.pais} cargo={user.cargo} empresa={user.empresa} testimonio={user.testimonio} />
        ))
        }

      </div>
    </div>
  )
}

export default App
