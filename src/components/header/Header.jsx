import React from 'react'
import logo from '../Assets/images/Logo.png'
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";

function Header() {
  return (
    <>
    <div className='flex justify-between items-center'>

    <div>
      <img src={logo} alt='logo' />
    </div>

      <div className='flex justify-center items-center'>
        <FaLocationDot className='text-red-500' />
      <p>Deliver to:</p>
      <div>
        current location <span>Mohammed Bus stand, dhak</span>
      </div>
      </div>

      <div className='flex '> 
        <div>
          <AiOutlineSearch />
        </div>
        <div className='flex justify-between items-center'>
        <BiSolidUser />
        <button className='shadow-lg shadow-red-500 rounded-md px-3 py-1'>
          Login
        </button>
        </div>  
      </div>
    </div>
    
    </>
  )
}

export default Header