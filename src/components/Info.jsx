import React from 'react';

const Info = () => {
  return (
    <div className='bg-black w-full h-auto flex pl-2 flex-col pt-8 pb-8 text-md text-white absolut bottom-0 '>
      <h3 className='text-white font-extrabold text-center text-2xl pb-2'>INFORMACIÓN</h3>
      <div className='flex mb-5 items-center font-semibold h-12 '>
        <div className=' border-2 border-white rounded-full h-10 w-10 ml-2'>
          <i className='ti ti-map-pin text-2xl pl-[6px]'></i>
        </div>
        <p className='pl-2'>Dirección: Maipú 1966 (Parque Batlle) </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9256.241216501328!2d-56.15204462974999!3d-34.89200539344651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81249743e8b5%3A0xe76e602bb480168!2sEntrenamiento%20360!5e0!3m2!1ses-419!2suy!4v1677353636823!5m2!1ses-419!2suy"
        allowfullscreen="" className='w-full px-2 h-60 rounded-md pr-4 " loading="lazy" referrerpolicy="no-referrer-when-downgrade'>

      </iframe>
      <div className='flex mb-5 items-center mt-4 font-semibold h-12 '>
        <div className=' border-2 border-white rounded-full h-10 w-10 ml-2'>
          <i className='ti ti-phone text-2xl pl-[6px]'></i>
        </div>
        <p className='pl-2'>Contacto: 098891523 / 098632252</p>
      </div>
      <div className='flex items-center font-semibold h-12 '>
        <div className=' border-2 border-white rounded-full h-10 w-10 ml-2'>
          <i className='ti ti-school text-2xl  pl-[6px]'></i>
        </div>
        <p className='pl-2'>Staff: Bruno Ramponi / Martín Salustio</p>
      </div>
    </div>
  );
};

export default Info;
