import React from 'react'
import '../stylesheets/Testimonio.css'

const Testimonio = ({ imagen, nombre, pais, cargo, empresa, testimonio } ) => {

    return (
        <div className="user-contenedor">
                    <img className="user-img" src={imagen} />
                    <div className="user-contenedor-texto">
                    <p className="user-nombre"><strong>{nombre}</strong> en {pais}</p>
                    <p className="user-cargo">{cargo} en <strong>{empresa}</strong></p>
                    <p className="user-testimonio">"{testimonio}"</p>
                    </div>
        </div>

    )
}

export default Testimonio