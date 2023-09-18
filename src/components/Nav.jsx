import React, { useState } from 'react';
import Logo from '../images/Logo.jpg';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className='fixed flex items-center justify-between w-full h-24 px-4 py-2 bg-black text-white'>
      <div className='flex items-center'>
        
        <Link to={`/`}>
          <img className='h-20' src={Logo} alt='Logo 360' />
        </Link>
       
      </div>
      <h1 className='text-[#009e3a] font-bold round-full text-xl pl-3 '>
        
      </h1>
      <button
        className='text-3xl hover:text-[#009e3a] focus:outline-none lg:hidden'
        onClick={handleToggle}
      >
        {isOpen ? (
          <div
            className='text-white hover:text-[#009e3a] text-3xl focus:outline-none absolute top-0 right-0 mt-8 mr-4'
            onClick={handleToggle}
          >
            <i className='ti ti-x '></i>
          </div>
        ) : (
          <i className='ti ti-menu-2'></i>
        )}
      </button>
      <ul
        className={`${isOpen ? "block" : "hidden"
          } absolute top-24 left-0 w-full z-20 bg-black bg-opacity-95 flex flex-col justify-center items-start text-xl pl-4`}
      >
        <Link to={'/login'}>
          <li className='py-4 text-white hover:text-2xl'>
          <a href="#" className='text-white hover:text-[#009e3a]'>
          
              <i className="ti ti-user pr-2"></i>
              Iniciar sesión
              </a>
          </li>
            
          
        </Link>
        <Link to={'/formulario'}>
          <li className='py-4'>
            
              <i className='ti ti-pencil pr-2'></i>
              Mi Perfil
            
          </li>
        </Link>
        <Link to={'/'}>
          <li className='py-4'>
            <a href="#" className='text-white hover:text-[#009e3a]'>
              <i className='ti ti-home pr-2'></i>
              Home
            </a>
          </li>
        </Link>
        <Link to={'/agenda'}>
          <li className='py-4'>
            <a href="#" className='text-white hover:text-[#009e3a]'>
              <i className='ti ti-calendar-due pr-2'></i>
              Agenda
            </a>
          </li>
        </Link>
        <li className='py-4'>
          <a href="#" className='text-white hover:text-[#009e3a]'>
            <i className='ti ti-barbell pr-2'></i>
            Control de cargas
          </a>
        </li>
        <li className='py-4'>
          <a href="#" className='text-white hover:text-[#009e3a]'>
            <i className='ti ti-address-book pr-2'></i>
            Contacto
          </a>
        </li>
      </ul>
    </nav>

  );
};

export default Nav;





