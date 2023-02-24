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
        } absolute top-24 left-0 w-full bg-black bg-opacity-75 z-20 flex flex-col justify-center items-center text-4xl`}
      >
        <li className='py-4'>
          <a href='#' className='text-white hover:text-gray-400'>
            Home
          </a>
        </li>
        <li className='py-4'>
          <a href='#' className='text-white hover:text-gray-400'>
            About Us
          </a>
        </li>
        <li className='py-4'>
          <a href='#' className='text-white hover:text-gray-400'>
            Services
          </a>
        </li>
        <li className='py-4'>
          <a href='#' className='text-white hover:text-gray-400'>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;





