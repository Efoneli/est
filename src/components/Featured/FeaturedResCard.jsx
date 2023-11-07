import React from 'react'
import Image10 from '../components/Assets/images/Image10.png'
import badge1 from '../components/Assets/images/badge1.png'
import { BsTagFill } from "react-icons/bs";
import { BiSolidTimeFive } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

function FeaturedRes() {
  return (
    <>
    <h1 className='font-extrabold text-center m-5'>Featured Restuarants</h1>
        <div className='mx-8 my-3'>
            <div className='relative '>
            <img src={Image10} alt='...' className='h-[200px] rounded-xl' />
            <div className='absolute top-0 left-0 right-0px-4 py-2 px-2 flex items-center'>
                <button className='flex items-center text-white text-sm bg-orangeColor rounded-md mx-1 px-3 py-1'>
                    <BsTagFill />
                    20% off
                </button>
                <button className='flex items-center text-white text-sm bg-yellowColor rounded-md mx-1 px-3 py-1'>                    <BiSolidTimeFive />
                    fast
                </button>
            </div>
            </div>

        <div className='flex items-center my-2 text-xs'>
            <img src={badge1} alt='...' className='mr-1'/>
            <div className='mx-1'>
            <p className='font-extrabold text-gray-600'>FoodWorld</p>
            <div className='flex items-center text-yellowColor'>
                <AiFillStar />
                <p className=''>46</p>
            </div>
            </div>
        </div>

        <button className="py-1 px-2 text-xs font-bold bg-[#f6ddcf] text-orangeColor rounded-md">
            Opens Tomorrow
        </button>
        </div>   
    </>
  )
}

export default FeaturedRes