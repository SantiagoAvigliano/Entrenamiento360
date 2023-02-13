import React from 'react'
import Logo from '../images/BlackLogo.jpeg'
import '../index.css';

const Nav = () => {
  return (
    <nav className='text-2xl bg-[#000000] w-full h-24 flex justify-between fixed'>
        <img src={Logo}  alt="" />
        <i className="ti ti-dots-vertical text-white mt-8"></i>
        {/* <button className='mt-8' id='burguer'>
          <div></div>
          <div></div>
          <div></div>
        </button> */}
    </nav>
  )
}

export default Nav