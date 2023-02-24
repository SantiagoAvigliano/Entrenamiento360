import React, { useState } from 'react';
import Logo from '../images/Logo.jpg';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className='relative flex items-center justify-between w-full h-24 px-4 py-2 bg-black text-white'>
      <div className='flex items-center'>
        <img className='h-20' src={Logo} alt='Logo' />
      </div>
      <button
        className='text-3xl hover:text-gray-400 focus:outline-none lg:hidden'
        onClick={handleToggle}
      >
        {isOpen ? (
          <div
            className='text-white hover:text-gray-400 text-3xl focus:outline-none absolute top-0 right-0 mt-8 mr-4'
            
            onClick={handleToggle}
          >
            <i className='ti ti-x'></i>
          </div>
        ) : (
          <i className='ti ti-menu'></i>
        )}
      </button>
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute top-24 left-0 w-full bg-black bg-opacity-75 z-20 flex flex-col justify-center items-start text-4xl pl-4`}
      >
        <li className='py-4'>
          <i className='ti ti-pencil'></i>
          <a href='#' className='text-white hover:text-[#009e3a]'>
            Registro
          </a>
        </li>
        <li className='py-4'>
          <i className='ti ti-calendar-due'></i>
          <a href='#' className='text-white hover:text-[#009e3a]'>
            Agenda
          </a>
        </li>
        <li className='py-4'>
          <i className='ti ti-barbell'></i>
          <a href='#' className='text-white hover:text-[#009e3a]'>
            Control 
          </a>
        </li>
        <li className='py-4'>
          <i className='ti ti-hand-click'></i>
          <a href='#' className='text-white hover:text-[#009e3a]'>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;





