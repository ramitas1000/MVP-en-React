import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import imagen_inf from '../assets/informatica.png'

export const CursosPage = () => {
  
  const navigate = useNavigate();

  const disenio = () => {
    navigate('/diu');
  };

  const cc = () => {
    navigate('/cc');
  };

  return (
    <div className='cursos-page'>

    <h1> 
      <b>Mis Cursos</b>
    </h1>
    <div style={{ display: 'flex', flexDirection: 'row' ,shapeMargin: "10px", gap:"35px", maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
    
    <button onClick={disenio} 
      style={{ display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          cursor: 'pointer',
          background: 'white', }}>
      <img
        src={imagen_inf}
        alt="Icono"
        style={{ width: 400, height: 130, marginBottom: 8 }}
      />
      <span>(202501)(INF322) DISEÑO DE INTERFACES USUARIAS|Paralelos:200</span>
    </button>


      <button onClick={cc} 
      style={{ display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          cursor: 'pointer',
          background: 'white', }}>
      <img
        src={imagen_inf}
        alt="Icono"
        style={{ width: 400, height: 130, marginBottom: 8 }}
      />
      <span>(202501)(INF285) COMPUTACIÓN CIENTÍFICA|Paralelos:200/201</span>
    </button>
     
      
    </div>
    </div>
  )
}

export default CursosPage
