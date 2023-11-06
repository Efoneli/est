import React from 'react'
import { BiSolidShoppingBag } from "react-icons/bi";
import { GrBike } from "react-icons/gr";


function Home() {
  return (
    <div className='home p-5 h-screen'>
        <h1 className='text-white font-extrabold text-3xl'>Are you starving?</h1>
        <p>Within a few clicks, find meals that are accessible near you</p>

        <div>
          <div className='flex justify-between items-center'>
            <div className='flex justify-around items-center'>
              <BiSolidShoppingBag />
            <button>Deliver</button>
            </div>
            <div className='flex justify-around items-center'>
              <GrBike />
            <button>Pickup</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home