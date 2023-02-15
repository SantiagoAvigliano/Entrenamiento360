import React from 'react'

const Info = () => {
  return (
    <div className='bg-black w-full h-auto flex pl-2 flex-col pt-8 pb-8 text-md text-white absolut bottom-0 '>
        <h3 className='text-white font-extrabold text-center text-2xl pb-2'>INFORMACIÓN</h3>
        <div className='flex mb-5 items-center font-semibold h-12 '>
          <div className=' border-2 border-white rounded-full h-10 w-10 ml-2'>
            <i className="ti ti-map-pin text-2xl pl-[6px]"></i>
          </div>
          <p className='pl-2'>Dirección: Maipú 1966 (Parque Batlle) </p>
        </div>
        <div className='flex mb-5 items-center font-semibold h-12 '>
          <div className=' border-2 border-white rounded-full h-10 w-10 ml-2'>
            <i className="ti ti-phone text-2xl pl-[6px]"></i>
          </div>
          <p className='pl-2'>Contacto: 098891523 / 098632252</p>
        </div>
        <div className='flex items-center font-semibold h-12 '>
          <div className=' border-2 border-white rounded-full h-10 w-10 ml-2'>
            <i className="ti ti-school text-2xl  pl-[6px]"></i>  
          </div>    
            <p className='pl-2'>Staff: Bruno Ramponi / Martín Salustio</p>
        </div>
        

    </div>
  )
}

export default Info