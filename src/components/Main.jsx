// import React, { useState } from 'react'
// import '../index.css';
// import PicEntrenamiento2 from '../images/Entrenamiento2opacity.jpeg'
// import Info from './Info';
// import Schedule from './Schedule';





// const Main = () => {

// const [funcionalDescriptionVisible, setFuncionalDescriptionVisible] = useState(false);
// const [deportivoDescriptionVisible, setDeportivoDescriptionVisible] = useState(false);

// const toggleFuncionalDescription = (e) => {
//   e.preventDefault();
//   const DescriptionFuncional = document.querySelector('#DescriptionFuncional');
//   if (DescriptionFuncional.classList.contains('hidden')){
//     DescriptionFuncional.classList.remove('hidden');
//     setFuncionalDescriptionVisible(!funcionalDescriptionVisible);
//   } else {
//     DescriptionFuncional.classList.add('hidden')
//     setFuncionalDescriptionVisible(false);
//   }
// }

// const toggleDeportivoDescription = (e) => {
//   e.preventDefault();
//   const DescriptionDeportivo = document.querySelector('#DescriptionDeportivo');
//   if (DescriptionDeportivo.classList.contains('hidden')){
//     DescriptionDeportivo.classList.remove('hidden');
//     setDeportivoDescriptionVisible(true);
//   } else {
//     DescriptionDeportivo.classList.add('hidden')
//     setDeportivoDescriptionVisible(false)
//   }
// }

// const closeDescriptions = () => {
//   if (funcionalDescriptionVisible) {
//     const DescriptionDeportivo = document.querySelector('#DescriptionDeportivo');
//     DescriptionDeportivo.classList.add('hidden');
//   }
//   if (deportivoDescriptionVisible) {
//     const DescriptionFuncional = document.querySelector('#DescriptionFuncional');
//     DescriptionFuncional.classList.add('hidden')
//   }
// }

//   return (
//     <div className='h-[98%] flex flex-col  bg-center bg-cover   '
//          style={{backgroundImage:`url("${PicEntrenamiento2}")`}}>
//         <h1 className='text-[#009e3a] text-3xl font-extrabold mt-32 mb-4 pl-4 '>ENTRENAMIENTO 360</h1>
        
//         <h3 className='text-white text-lg w-[85%] pl-4 font-semibold'>Entrenamientos adaptados a tus necesidades y objetivos</h3>
//         <h4 className='text-white text-lg w-[85%] pl-4 mt-4 text-center font-semibold'>¿Que tipo de entrenamiento estas buscando?</h4>
//         <div className='flex justify-between mt-4 px-4 ' onClick={closeDescriptions}> 
//           <button className='bg-[#009e3a] h-12 w-40 text-white text-xl rounded-lg font-semibold shadow-md shadow-black' 
//                   id='ButtonFuncional' 
//                   onClick={toggleFuncionalDescription}
//                   >Funcional 
//                   {funcionalDescriptionVisible ? <i className="ti ti-chevron-up pl-2"></i> : <i className="ti ti-chevron-down pl-2"></i>}
//             <p className='hidden bg-[#009e3a] h-74 w-full absolute rounded-lg left-0 mt-6' id='DescriptionFuncional'>Funcional, ipsum dolor sit amet consectetur adipisicing elit. Debitis unde dolore, voluptatibus nesciunt provident accusantium cupiditate, itaque adipisci officia, aut reprehenderit quis expedita sequi totam </p>
//           </button>
//           <button className='bg-[#009e3a] h-12 w-40 text-white text-xl rounded-lg font-semibold shadow-md shadow-black' 
//                   id='ButtonDeportivo' 
//                   onClick={toggleDeportivoDescription}
//                   >Deportivo 
//                    {deportivoDescriptionVisible ? <i className="ti ti-chevron-up pl-2"></i> : <i className="ti ti-chevron-down pl-2"></i>}
//           <p className='hidden bg-[#009e3a] h-78 w-full absolute rounded-lg left-0 mt-6 ' id='DescriptionDeportivo'> Deportivo, ipsum dolor sit amet consectetur adipisicing elit. Debitis unde dolore, voluptatibus nesciunt provident accusantium cupiditate, itaque adipisci officia, aut reprehenderit quis expedita sequi totam </p>
//           </button>
//         </div>
//         <div className='h-48 w-full bg-gradient-to-t from-black to-transparent '></div>
//         <Schedule/>
//         <Info/>
        
//     </div>
//   )
// }

// export default Main

import React, { useState } from 'react';
import PicEntrenamiento2 from '../images/Entrenamiento2opacity.jpeg';
import Info from './Info';
import Schedule from './Schedule';

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
      className="h-[98%] flex flex-col bg-center bg-cover"
      style={{ backgroundImage: `url("${PicEntrenamiento2}")` }}
    >
      <h1 className="text-[#009e3a] text-3xl font-extrabold mt-32 mb-4 pl-4 ">
        ENTRENAMIENTO 360
      </h1>

      <h3 className="text-white text-lg w-[85%] pl-4 font-semibold">
        Entrenamientos adaptados a tus necesidades y objetivos
      </h3>
      <h4 className="text-white text-lg w-[85%] pl-4 mt-4 text-center font-semibold">
        ¿Que tipo de entrenamiento estas buscando?
      </h4>
      <div className="flex justify-between mt-4 px-4 ">
        <button
          className="bg-[#009e3a] h-12 w-40 text-white text-xl rounded-lg font-semibold shadow-md shadow-zinc-800"
          id="ButtonFuncional"
          onClick={toggleFuncional}
        >
          Funcional{' '}
          {openFuncional ? (
            <i className="ti ti-chevron-up pl-2"></i>
          ) : (
            <i className="ti ti-chevron-down pl-2"></i>
          )}
          {openFuncional && (
            <p className="bg-[#009e3a] h-74 w-full absolute rounded-lg left-0 mt-6">
              Funcional, ipsum dolor sit amet consectetur adipisicing elit.
              Debitis unde dolore, voluptatibus nesciunt provident accusantium
              cupiditate, itaque adipisci officia, aut reprehenderit quis
              expedita sequi totam
            </p>
          )}
        </button>
        <button
          className="bg-[#009e3a] h-12 w-40 text-white text-xl rounded-lg font-semibold shadow-md shadow-zinc-800"
          id="ButtonDeportivo"
          onClick={toggleDeportivo}
        >
          Deportivo{' '}
          {openDeportivo ? (
            <i className="ti ti-chevron-up pl-2"></i>
          ) : (
            <i className="ti ti-chevron-down pl-2"></i>
          )}
          {openDeportivo && (
            <p className="bg-[#009e3a] h-78 w-full absolute rounded-lg left-0 mt-6">
              Deportivo, ipsum dolor sit amet consectetur adipisicing elit.
              Debitis unde dolore, voluptatibus nesciunt provident accusantium
              cupiditate, itaque adipisci officia, aut reprehenderit quis
              expedita sequi totam
            </p>
          )}
        </button>
      </div>        
      <div className='h-48 w-full bg-gradient-to-t from-black to-transparent '></div>
      <Schedule/>
      <Info/>
        
    </div>   )
}

export default Main
