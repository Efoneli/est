import React from 'react'
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import search1 from '../components/Assets/images/search1.png'
import search2 from '../components/Assets/images/search2.png'
import search3 from '../components/Assets/images/search3.png'
import search4 from '../components/Assets/images/search4.png'
import search5 from '../components/Assets/images/search5.png'
import search6 from '../components/Assets/images/search6.png'



function SearchFood() {
  return (
    <>
        <div className='bg-orange-50 mt-[50px] p-6'>
            <div className='flex items-center justify-between px-10'>
                <h2 className='font-extrabold text-lg'>Search by Food</h2>
                <div className='flex '>
                    <div className='flex items-center text-yellowColor text-xs m-3'>
                    <p className='text-xs'>View All</p>
                    <AiOutlineRight />
                    </div>
                    <div className='flex'>
                        <div className='bg-yellowColor rounded-full p-3 mx-1 text-center text-white font-extrabold text-lg' >
                        <AiOutlineLeft />
                        </div>
                        <div className='bg-yellowColor rounded-full p-3 mx-1 text-center text-white font-extrabold text-lg' >
                        <AiOutlineRight className=' font-extrabold text-lg' />
                        </div>
                    </div>
                </div>
            </div>

        <div className='grid grid-cols-2 gap-5 my-8 p-5 text-gray-700 font-bold phone:grid-cols-6'>
            <div className='flex flex-col justify-start items-center'>
                <img src={search1} alt="food" className='rounded-full h-[150px] w-[150px]' />
                <p className='m-2 p-2'>Pizza</p>
            </div>

            <div className='flex flex-col justify-start items-center'>
                <img src={search2} alt="food" className='rounded-full h-[150px] w-[150px]' />
                <p className='m-2 p-2'>Burger</p>
            </div>

            <div className='flex flex-col justify-start items-center'>
                <img src={search3} alt="food" className='rounded-full h-[150px] w-[150px]' />
                <p className='m-2 p-2'>Noodles</p>
            </div>

            <div className='flex flex-col justify-start items-center'>
                <img src={search4} alt="food" className='rounded-full h-[150px] w-[150px]' />
                <p className='m-2 p-2'>Sub-sandwich</p>
            </div>

             <div className='flex flex-col justify-start items-center'>
                <img src={search5} alt="food" className='rounded-full h-[150px] w-[150px]' />
                <p className='m-2 p-2'>Chowmein</p>
            </div>

            <div className='flex flex-col justify-start items-center'>
                <img src={search6} alt="food" className='rounded-full h-[150px] w-[150px]' />
                <p className='m-2 p-2'>Steak</p>
            </div>
        </div>

        </div>
    </>
  )
}

export default SearchFood