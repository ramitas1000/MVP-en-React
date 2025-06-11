import React, { useState } from 'react'

import imagen from '../assets/donramon.jpg'
import { useNavigate } from 'react-router-dom';


import pdf_img from '../assets/pdf.png'
import descarga from '../assets/descarga.png'
import link_img from '../assets/link.png'
import subida from '../assets/subida.png'


const buttonStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  cursor: 'pointer',
  background: 'white'
};

const buttonStyle2 = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '10px',
  width: '1050px',   
  height: '120px',
  border: '2px solid #ccc',
  borderRadius: '20px',
  cursor: 'pointer',
  background: 'white',
  gap: "10px"
};

const buttonStyle3 = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '120px',   
  height: '120px',
  padding: '10px',
  border: '2px solid #ccc',
  borderRadius: '20px',
  cursor: 'pointer',
  background: 'white'
};

export const diutareaPage = () => {

  const navigate = useNavigate();

  const disenio = () => {
    navigate('/diu');
  };

  const cc = () => {
    navigate('/cc');
  };

  const cert = () => {
    navigate('/diucert');
  };

   const tarea = () => {
        navigate('/diutarea');
    };

    const material = () => {
        navigate('/diumat');
    };

    const proyecto = () => {
        navigate('/diupro');
    };

     const pdf = () => {
        navigate('/pdf');
    };

    const up = () => {
        navigate('/up');
    };
  
  
  return (
<div className='diu-page'>
          <h1 style={{ marginLeft: '90px' }}>  
    <b>(202501)(INF322) DISEÑO DE INTERFACES USUARIAS | Paralelos: 200</b>
  </h1>

  {/* Contenedor de botones en fila */}
  <div style={{ 
    display: 'flex', 
    flexDirection: 'row', 
    gap: '10px', // Espaciado entre botones
    flexWrap: 'wrap', // Opcional: para que pasen a otra línea si no caben
    marginLeft: '90px'
  }}>
    <button onClick={disenio} style={buttonStyle}>
      <span>Información General</span>
    </button>

    <button onClick={cert} style={buttonStyle}>
      <span>Certámenes</span>
    </button>

    <button onClick={material} style={buttonStyle}>
      <span>Material</span>
    </button>

    <button onClick={tarea} style={buttonStyle}>
      <span>Tareas</span>
    </button>

    <button onClick={proyecto} style={buttonStyle}>
      <span>Proyecto</span>
    </button>
  </div>
    <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '20px',
            display: 'flex',        
            gap: '20px',            
            flexWrap: 'wrap'        
            }}>
            <h1>
              03 de Junio: Tarea React 
            </h1> 

            <button onClick={up} style={buttonStyle2}>
                        <img
                              src={subida}
                              alt="Icono"
                              style={{ width: 100, height: 100, marginBottom: 8 }}
                        />
                        <span>Informe React</span>
            </button>
            <button onClick={pdf} style={buttonStyle2}>
               <img
                      src={pdf_img}
                      alt="Icono"
                      style={{ width: 100, height: 100, marginBottom: 8 }}
                />
              <span>Tarea React</span>
            </button>
    
                <button onClick={() => alert('Archivo descargado')} style={buttonStyle3}>
                      <img
                          src={descarga}
                          alt="Icono"
                          style={{ width: 100, height: 100, marginBottom: 8 }}
                />
                </button>
      
            <h1>
              6 de Mayo: Menú CLC
            </h1> 
            <button onClick={up} style={buttonStyle2}>
                        <img
                              src={subida}
                              alt="Icono"
                              style={{ width: 100, height: 100, marginBottom: 8 }}
                        />
                        <span>Menú CLC</span>
            </button>
      
          <h1>15 de Abril: Prototipo en papel</h1>  
          
            <button onClick={up} style={buttonStyle2}>
                        <img
                              src={subida}
                              alt="Icono"
                              style={{ width: 100, height: 100, marginBottom: 8 }}
                        />
                        <span>Prototipo en papel</span>
            </button>
                
          </div>
</div>
  )
}

export default diutareaPage