import React from 'react'
import logo from '../Assets/images/Logo.png'
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";

function Header() {
  return (
    <>
    <div className='flex justify-around items-center m-3 p-2'>

    <div>
      <img src={logo} alt='logo' />
    </div>

      <div className='flex justify-center items-center'>
        <FaLocationDot className='text-yellowColor' />
      <p>Deliver to:</p>
      <div>
        current location <span>Mohammed Bus stand, dhak</span>
      </div>
      </div>

      <div className='flex justify-between items-center'> 
        <div className='flex justify-between items-center'>
          <div className='text-yellowColor text-bold'>
          <AiOutlineSearch />
          </div>
          <p className='text-bold'>Search Food</p>
        </div>

        <div className='flex justify-between items-center'>
        <button className='flex items-center justify-between shadow-lg shadow-red-500 rounded-md px-3 py-1 text-orangeColor'>
        <BiSolidUser className='text-yellowColor' />
          Login
        </button>
        </div> 
         
      </div>
    </div>
    
    </>
  )
}

export default Header