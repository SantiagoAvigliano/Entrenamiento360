import React from 'react'
import Horarios from '../images/horarios.jpeg'
const Schedule = () => {
  return (
    <div className='bg-black'> 
      <p className='text-center py-2 text-2xl text-white font-extrabold bg-black'>HORARIOS</p>
      <img 
      className='w-full px-4 pt-4'
      src={Horarios} alt="" />
    </div>
  )
}

export default Schedule