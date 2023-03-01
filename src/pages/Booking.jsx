import React from 'react'
import Nav from '../components/Nav'
const Booking = () => {
  return (
    <div>
      <Nav />
      <form action='' className='bg-[#21683c] flex flex-col h-screen text-white justify-start pt-28 px-4'>
        <label className='text-2xl'>Selecciona el horario:</label> 
        <select className='h-10 tet-xl bg-[#0d3b1e] font-semibold my-6 pl-4'>
          <option value="">8:00</option>
          <option value="">9:00</option>
          <option value="">10:00</option>
          <option value="">11:00</option>
          <option value="">16:00</option>
          <option value="">17:00</option>
          <option value="">18:00</option>
          <option value="">19:00</option>
          <option value="">20:00</option>
        </select>
        <div className='flex justify-center items-center py-4'>
          <button className='bg-[#0d3b1e] w-32 hover:text-[#009e3a] hover:bg-[#104423] text-slate  rounded-md px-5 py-[5px] shadow-md hover:shadow-4xl'>Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default Booking