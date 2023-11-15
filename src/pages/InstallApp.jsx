import React from 'react'
import Icon1 from '../components/Assets/images/Icon1.png'
import Icon2 from '../components/Assets/images/Icon2.png'
import Icon3 from '../components/Assets/images/Icon3.png'
import mobile from '../components/Assets/images/mobile.png'
import { BsGooglePlay, BsApple } from "react-icons/bs";


function InstallApp() {
  return (
    <>
       <div className='flex flex-col  items-center bg-orange-100 px-6 pt-12'>

        <div className='bg-white flex justify-center items-center rounded-2xl w-full h-auto p-6 shadow-lg shadow-yellowColor md:w-[450px]'>
            <div className='flex items-center justify-center border-r'>
                <img src={Icon1} alt="icon" className='sm:w-full h-[30px] lg:h-[50px] px-2 pl-4' />
                <p className='text-sm pr-3'>Daily <br />Discounts</p>
            </div>

            <div className='flex items-center justify-center border-r px-2'>
                <img src={Icon2} alt="icon" className='sm:w-full h-[30px] lg:h-[50px] px-2 pl-4' />
                <p className='text-sm pr-3'>Live <br />Tracing</p>
            </div>

            <div className='flex items-center justify-center'>
                <img src={Icon3} alt="icon" className='sm:w-full h-[30px] lg:h-[50px] px-2 pl-4' />
                <p className='text-sm pr-3'>Quick <br />Delivery</p>
            </div>
        </div>
        
        <div className='sm:flex flex-col md:flex-row justify-around mt-9 pt-9'>
            <div className=''>
            <img src={mobile} alt="mobile" />
            </div>

            <div className='flex items-center justify-center flex-col '>
                <div>
                <h2 className='font-extrabold text-2xl bg-gradient-to-r from-yellowColor to-orangeColor inline-block text-transparent bg-clip-text'>Install the app</h2>
                <p className='text-[0.6rem] text-gray-500'>
                It's never been easier to order food. Look for the <br /> finest discounts and you'll be lost in a world of <br />delectable food.
                </p>
                </div>             

                <div className='flex items-center justify-center'>
                    <div className='flex items-center justify-between bg-white rounded-md m-2 p-2 '>
                        <div>
                        <BsGooglePlay className='text-orangeColor mr-2 h-[25px]' />
                        </div>
                        <div className='text-xs'>
                            <p className='text-[0.45rem] leading-[0.45rem]'>GET IT ON</p>
                            <h2 className='font-bold'>Google Play</h2>
                        </div>
                    </div>

                    <div className='flex items-center justify-between bg-white m-2 p-2 rounded-md'>                        <div>
                        <BsApple className='text-orangeColor h-[25px] mr-2' />
                        </div>
                        <div className='text-xs pr-4'>
                            <p className='text-[0.45rem] leading-[0.45rem]'>DOWNLOAD ON THE</p>
                            <h2 className='font-bold'>App Store</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div> 
    </>
  )
}

export default InstallApp