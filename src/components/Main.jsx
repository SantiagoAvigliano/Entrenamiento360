import React, { useState } from 'react'
import '../index.css';
import PicEntrenamiento2 from '../images/Entrenamiento2opacity.jpeg'
import Info from './Info';
import Schedule from './Schedule';


const clickFuncional = (e) => {
  e.preventDefault();
  const DescriptionFuncional = document.querySelector('#DescriptionFuncional');
  if (DescriptionFuncional.classList.contains('hidden')){
    DescriptionFuncional.classList.remove('hidden')
  } else {
    DescriptionFuncional.classList.add('hidden')
  }
}

const clickDeportivo = (e) => {
  e.preventDefault();
  const DescriptionDeportivo = document.querySelector('#DescriptionDeportivo');
  if (DescriptionDeportivo.classList.contains('hidden')){
    DescriptionDeportivo.classList.remove('hidden')
  } else {
    DescriptionDeportivo.classList.add('hidden')
  }
}



const Main = () => {
  return (
    <div className='h-[98%] flex flex-col  bg-center bg-cover   '
    style={{backgroundImage:`url("${PicEntrenamiento2}")`}}>
        <h1 className='text-[#009e3a] text-3xl font-extrabold mt-32 mb-4 pl-4 '>ENTRENAMIENTO 360</h1>
        
        <h3 className='text-white text-lg w-[85%] pl-4 font-semibold'>Entrenamientos adaptados a tus necesidades y objetivos</h3>
        <h4 className='text-white text-lg w-[85%] pl-4 mt-4 text-center font-semibold'>¿Que tipo de entrenamiento estas buscando?</h4>
        <div className='flex justify-between mt-4 px-4 '> 
          <button className='bg-[#009e3a] h-12 w-40 text-white text-xl rounded-lg font-semibold shadow-md shadow-black' 
                  id='ButtonFuncional' 
                  onClick={clickFuncional} >Funcional 
                  <i className="ti ti-chevron-down pl-2"></i>
            <p className='hidden bg-[#009e3a] h-74 w-full absolute rounded-lg left-0 mt-6' id='DescriptionFuncional'>Funcional, ipsum dolor sit amet consectetur adipisicing elit. Debitis unde dolore, voluptatibus nesciunt provident accusantium cupiditate, itaque adipisci officia, aut reprehenderit quis expedita sequi totam </p>
          </button>
          <button className='bg-[#009e3a] h-12 w-40 text-white text-xl rounded-lg font-semibold shadow-md shadow-black' 
                  id='ButtonDeportivo' 
                  onClick={clickDeportivo} >Deportivo 
                  <i className="ti ti-chevron-down pl-2"></i>
          <p className='hidden bg-[#009e3a] h-78 w-full absolute rounded-lg left-0 mt-6 ' id='DescriptionDeportivo'> Deportivo, ipsum dolor sit amet consectetur adipisicing elit. Debitis unde dolore, voluptatibus nesciunt provident accusantium cupiditate, itaque adipisci officia, aut reprehenderit quis expedita sequi totam </p>
          </button>
        </div>
        <div className='h-48 w-full bg-gradient-to-t from-black to-transparent '></div>
        <Schedule/>
        <Info/>
        
    </div>
  )
}

export default Main