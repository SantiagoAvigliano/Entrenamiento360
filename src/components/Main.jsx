import React from 'react'
import '../index.css';
import PlaceImg from '../images/PlaceImage.jpeg'
import Info from './Info';
import Schedule from './Schedule';
const Main = () => {
  return (
    <div className='h-screen flex flex-col justify-start items-center mb-10 '>
        <h1 className='text-green-800 text-3xl font-extrabold mt-32 mb-4 '>ENTRENAMIENTO 360</h1>
        <div className='flex justify-center border-4 border-[#009e3a] w-[80%] h-[8%] rounded-md'>
          <h3 className='text-black text-md w-[80%] text-center mb-10'>• Entrenamientos adaptados a tus necesidades y objetivos •</h3>
        </div>
       
        <img className=" mt-4 " src={PlaceImg} alt="" />
        <Info/>
        <Schedule/>
        
    </div>
  )
}

export default Main