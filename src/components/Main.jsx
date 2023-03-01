import React, { useState } from 'react';
import PicEntrenamiento2 from '../images/Entrenamiento2opacity.jpeg';


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
      className='h-screen flex flex-col bg-center bg-cover justify-center '
      style={{ backgroundImage: `url("${PicEntrenamiento2}")` }}
    >
      
      <h1 className='text-[#009e3a] font-extrabold text-3xl pl-4 '>
        ENTRENAMIENTO 360
      </h1>


      <h3 className='text-white text-lg w-[85%] pl-4 font-semibold'>
        Entrenamientos adaptados a tus necesidades y objetivos
      </h3>
      <h4 className='text-white text-lg w-[85%] pl-4 mt-4 text-center font-semibold'>
        ¿Que tipo de entrenamiento estas buscando?
      </h4>
      <div className='flex justify-between mt-4 px-4 '>
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
            <p className='bg-[#009e3a] h-74 w-full absolute rounded-lg left-0 mt-6 opacity-90'>
              Funcional, ipsum dolor sit amet consectetur adipisicing elit.
              Debitis unde dolore, voluptatibus nesciunt provident accusantium
              cupiditate, itaque adipisci officia, aut reprehenderit quis
              expedita sequi totam
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
            <p className='bg-[#009e3a] h-78 w-full absolute rounded-lg left-0 mt-6 opacity-90'>
              Deportivo, ipsum dolor sit amet consectetur adipisicing elit.
              Debitis unde dolore, voluptatibus nesciunt provident accusantium
              cupiditate, itaque adipisci officia, aut reprehenderit quis
              expedita sequi totam
            </p>
          )}
        </button>
      </div>
    </div>)
}

export default Main
