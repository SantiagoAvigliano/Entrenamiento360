import React from 'react'
import '../index.css';
import PicEntrenamiento2 from '../images/Entrenamiento2opacity.jpeg'
import Info from './Info';
import Schedule from './Schedule';

const Main = () => {
  return (
    <div className='h-[98%] flex flex-col  bg-center bg-cover   '
    style={{backgroundImage:`url("${PicEntrenamiento2}")`}}>
        <h1 className='text-[#009e3a] text-3xl font-extrabold mt-32 mb-4 pl-4 '>ENTRENAMIENTO 360</h1>
        
        <h3 className='text-white text-lg w-[85%] pl-4 '>Entrenamientos adaptados a tus necesidades y objetivos</h3>
        
        <div className='h-48 w-full bg-gradient-to-t from-black to-transparent '></div>
        <Schedule/>
        <Info/>
        
    </div>
  )
}

export default Main