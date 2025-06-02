import React, { useState } from 'react'

import imagen from '../assets/donramon.jpg'

export const CcPage = () => {
  
  return (
    <div className='cc-page'>
    <h1> 
        <b>(202501)(INF285) COMPUTACIÓN CIENTÍFICA|Paralelos:200/201</b>
    </h1>
    <h2> 
    <p>Nada por ahora</p>
    </h2>
    <img src={imagen} alt="Don ramon" />
    </div>
  )
}

export default CcPage
