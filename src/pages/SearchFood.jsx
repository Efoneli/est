import React from 'react'
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";


function SearchFood() {
  return (
    <>
        <div className='bg-orange-50'>
            <div className='flex items-center justify-around'>
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

        <div>
            
        </div>

        </div>
    </>
  )
}

export default SearchFood