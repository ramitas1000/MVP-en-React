import React, { useState } from 'react'


import imagen from '../assets/donramon.jpg'

export const LightbulbPage = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className='lightbulb-page'>
          <h1> 
              <b>Area personal</b>
          </h1>
          <h2> 
          <p>Nada por ahora</p>
          </h2>
          <img src={imagen} alt="Don ramon" />
    </div>
  )
}

export default LightbulbPage
