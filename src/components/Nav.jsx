import React from 'react'
import Logo from '../images/BlackLogo.jpeg'


const Nav = () => {
  return (
    <nav className='text-2xl bg-[#000000] w-full h-24 flex justify-between fixed'>
        <img src={Logo}  alt="" />
        <i className="ti ti-dots-vertical text-white mt-8"></i>
    </nav>
  )
}

export default Nav