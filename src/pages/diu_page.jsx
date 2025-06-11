import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import pdf_img from '../assets/pdf.png'
import foro_img from '../assets/foro.png'
import descarga from '../assets/descarga.png'
import utfsmLogo from '../assets/25.-USM.png';


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

const buttonStyleActive = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px',
  border: '1px solid #222',
  borderRadius: '8px',
  cursor: 'pointer',
  background: '#333',
  color: 'white',
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


export const DiuPage = () => {


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

     const foro = () => {
        navigate('/foro');
    };

  return (

  <div className='diu-page'>
          <h1 style={{marginLeft: '90px'}}> 
  <b>(202501)(INF322) DISEÑO DE INTERFACES USUARIAS | Paralelos: 200</b>
  </h1>

  <div style={{ 
    display: 'flex', 
    flexDirection: 'row', 
    gap: '10px', 
    flexWrap: 'wrap',
    marginLeft: '90px'
  }}>
    <button onClick={disenio} style={buttonStyleActive}>
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
  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
  <h3>Profesora: Lioubov Dombrovskaia</h3>
    <p>Horario: Ma 3-6 F406</p>
    <p>Oficina: K603</p>
    <p>Horario de atención: Ma 14:00 - 15:30</p>
  
  <p>
    Descripción de la asignatura:  El estudiante comprende los conceptos generales asociados a la interacción entre personas y computadores. Evalúa la complejidad de dichas interacciones y desarrolla la habilidad de diseñar interfaces de sistemas interactivos, aplicando la metodología centrada en el usuario. Realiza análisis de requerimientos, diseño de prototipos, revisión y mantención de las interfaces. Utiliza guías para el diseño de diferentes estilos de interacción, tales como: sitios de internet, redes sociales y aplicaciones móviles, entre otras
  </p>
  </div>

    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      display: 'flex',        
      gap: '20px',            
      flexWrap: 'wrap'        
      }}>
      <button onClick={foro} style={buttonStyle2}>
         <img
                src={foro_img}
                alt="Icono"
                style={{ width: 100, height: 100, marginBottom: 8 }}
          />
        <span>Noticias y Avisos</span>
      </button>


      <button onClick={pdf} style={buttonStyle2}>
          <img
                src={pdf_img}
                alt="Icono"
                style={{ width: 100, height: 100, marginBottom: 8 }}
          />
          <span>Cronograma</span>
      </button>

      
      <button onClick={() => alert('Archivo descargado')} style={buttonStyle3}>
            <img
                src={descarga}
                alt="Icono"
                style={{ width: 100, height: 100, marginBottom: 8 }}
      />
      </button>
      

      <button onClick={foro} style={buttonStyle2}>
         <img
                src={foro_img}
                alt="Icono"
                style={{ width: 100, height: 100, marginBottom: 8 }}
          />
          <span>Consultas</span>
      </button>
    </div>
  
</div>
  )
}

export default DiuPage
