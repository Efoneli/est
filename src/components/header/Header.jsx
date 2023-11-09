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
        <div className='text-xs flex items-center justify-between'>
        <p className='hidden md:block font-bold px-2'>Deliver to:</p>
        <div className='px-2 text-lg text-yellowColor'>
        <FaLocationDot />
        </div>
      <p className='hidden md:block'>
        current location <span className='font-bold'>Mohammed Bus stand, dhak</span>
      </p>
        </div>
   
      </div>

      <div className='flex justify-between items-center'> 
        <div className='flex justify-between items-center'>
          <div className='text-yellowColor font-bold text-lg pl-1 pr-4'>
            <AiOutlineSearch />
          </div>
          <p className='hidden md:block text-xs font-bold px-2'>Search Food</p>
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