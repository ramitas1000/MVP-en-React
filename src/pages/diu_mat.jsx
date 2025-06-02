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

export const diumatPage = () => {

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
  
  return (
<div className='diu-page'>
  <h1> 
    <b>(202501)(INF322) DISEÑO DE INTERFACES USUARIAS | Paralelos: 200</b>
  </h1>

  {/* Contenedor de botones en fila */}
  <div style={{ 
    display: 'flex', 
    flexDirection: 'row', 
    gap: '10px', // Espaciado entre botones
    flexWrap: 'wrap' // Opcional: para que pasen a otra línea si no caben
  }}>
    <button onClick={disenio} style={buttonStyle}>
      <span>Información general</span>
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
            3 de Junio: Web 
          </h1> 
          <button onClick={pdf} style={buttonStyle2}>
             <img
                    src={pdf_img}
                    alt="Icono"
                    style={{ width: 100, height: 100, marginBottom: 8 }}
              />
            <span>13 - Web</span>
          </button>
  
              <button onClick={() => alert('Archivo descargado')} style={buttonStyle3}>
                    <img
                        src={descarga}
                        alt="Icono"
                        style={{ width: 100, height: 100, marginBottom: 8 }}
              />
              </button>
    
          <h1>
            27 de Mayo: Componentes
          </h1> 
          <button onClick={pdf} style={buttonStyle2}>
              <img
                    src={pdf_img}
                    alt="Icono"
                    style={{ width: 100, height: 100, marginBottom: 8 }}
              />
              <span>12 - Componentes</span>
          </button>
          
          <button onClick={() => alert('Archivo descargado')} style={buttonStyle3}>
                    <img
                        src={descarga}
                        alt="Icono"
                        style={{ width: 100, height: 100, marginBottom: 8 }}
              />
              </button>
               <button onClick={() => alert('Link abierto en nueva pestaña')} style={buttonStyle2}>
                 <img
                        src={link_img}
                        alt="Icono"
                        style={{ width: 90, height: 90, marginBottom: 8 }}
                  />
                <span>Material Design 3 is Google’s open-source design system for building beautiful, usable products</span>
              </button>
    
        <h1>13 de Mayo: Organización de espacio / ventana</h1>  
        
              <button onClick={pdf} style={buttonStyle2}>
                  <img
                        src={pdf_img}
                        alt="Icono"
                        style={{ width: 100, height: 100, marginBottom: 8 }}
                  />
                  <span>11 - Organización ventana</span>
              </button>
        
              
              <button onClick={() => alert('Archivo descargado')} style={buttonStyle3}>
                    <img
                        src={descarga}
                        alt="Icono"
                        style={{ width: 100, height: 100, marginBottom: 8 }}
              />
              </button>

              <button onClick={pdf} style={buttonStyle2}>
                  <img
                        src={pdf_img}
                        alt="Icono"
                        style={{ width: 100, height: 100, marginBottom: 8 }}
                  />
                  <span>10 - Organización espacio</span>
              </button>
        
              
              <button onClick={() => alert('Archivo descargado')} style={buttonStyle3}>
                    <img
                        src={descarga}
                        alt="Icono"
                        style={{ width: 100, height: 100, marginBottom: 8 }}
              />
              </button>
              
            ...
        </div>
</div>
  )
}

export default diumatPage