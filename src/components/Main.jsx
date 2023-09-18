import React, { useState } from 'react';
import PicEntrenamiento212 from '../images/Entrenamiento212.jpeg';


const Main = () => {
  const [openFuncional, setOpenFuncional] = useState(false);
  const [openDeportivo, setOpenDeportivo] = useState(false);

  const toggleFuncional = () => {
    setOpenFuncional((prevState) => !prevState);
    setOpenDeportivo(false);
  };

  const toggleDeportivo = () => {
    setOpenDeportivo((prevState) => !prevState);
    setOpenFuncional(false);
  };

  return (
    <div
      className='h-screen flex flex-col bg-center bg-cover justify-center'
      style={{ backgroundImage: `url("${PicEntrenamiento212}")` }}    >

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <h3 className='text-white text-lg w-[85%] pl-4  text-center font-semibold'>
        Entrenamientos adaptados a tus necesidades y objetivos
      </h3>
      <h4 className='text-white text-lg w-[85%] pl-4 mt-4 text-center font-semibold'>
        ¿Que tipo de entrenamiento estas buscando?
      </h4>
      <div className='flex justify-between mt-3 px-4 '>
        <button
          className='bg-[#009e3a] h-12 w-40 text-white text-xl rounded-lg font-semibold shadow-md shadow-zinc-800'
          id="ButtonFuncional"
          onClick={toggleFuncional}
        >
          Funcional{' '}
          {openFuncional ? (
            <i className='ti ti-chevron-up pl-2'></i>
          ) : (
            <i className='ti ti-chevron-down pl-2'></i>
          )}
          {openFuncional && (
            <p className='bg-[#009e3a] h-74 w-full absolute rounded-lg left-0 mt-6 opacity-90 shadow-md shadow-zinc-800'>
              Está orientado al desarrollo físico y mental a través de programas de entrenamiento que incluyen trabajos de movilidad, capacidades coordinativas, fuerza y desarrollo energético
            </p>
          )}
        </button>
        <button
          className='bg-[#009e3a] h-12 w-40 text-white text-xl rounded-lg font-semibold shadow-md shadow-zinc-800'
          id="ButtonDeportivo"
          onClick={toggleDeportivo}
        >
          Deportivo{' '}
          {openDeportivo ? (
            <i className='ti ti-chevron-up pl-2'></i>
          ) : (
            <i className='ti ti-chevron-down pl-2'></i>
          )}
          {openDeportivo && (
            <p className='bg-[#009e3a] h-78 w-full absolute rounded-lg left-0 mt-6 opacity-90 shadow-md shadow-zinc-800'>
              Está dirigido a optimizar y potenciar el rendimiento del deportista a través de la prevención de lesiones, el desarrollo de la agilidad y las destrezas de movimiento a la par del entrenamiento de la fuerza.
            </p>
          )}
        </button>
      </div>
    </div>)
}

export default Main
