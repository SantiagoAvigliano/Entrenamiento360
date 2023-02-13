import React from 'react'

const Info = () => {
  return (
    <div className='bg-black w-full h-auto flex flex-col pl-4 py-10 text-lg text-white'>
        <div className='flex pb-5 items-center'>
            <i className="ti ti-map-pin "></i>
            <p>Maipu 1966 (Parque Batlle) </p>
        </div>
        <div className='flex pb-5 items-center'>
            <i className="ti ti-phone"></i>
            <p> 098891523 / 098632252</p>
        </div>
        <div className='flex items-center'>
            <i className="ti ti-school"></i>    
            <p>Bruno Ramponi / Martin Salustio</p>
        </div>
        

    </div>
  )
}

export default Info