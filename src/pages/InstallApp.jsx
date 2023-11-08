import React from 'react'
import Icon1 from '../components/Assets/images/Icon1.png'
import Icon2 from '../components/Assets/images/Icon2.png'
import Icon3 from '../components/Assets/images/Icon3.png'
import mobile from '../components/Assets/images/mobile.png'


function InstallApp() {
  return (
    <>
       <div className='bg-orange-100 px-6 pt-12'>

        <div className='bg-white flex justify-around items-center rounded-2xl w-[450px] h-[110px] p-6'>
            <div className='flex items-center justify-center border-r'>
                <img src={Icon1} alt="icon" className='h-[50px] px-2 pl-4' />
                <p className='text-sm pr-3'>Daily <br />Discounts</p>
            </div>

            <div className='flex items-center justify-center border-r'>
                <img src={Icon2} alt="icon" className='h-[50px] px-2 pl-4' />
                <p className='text-sm pr-3'>Live <br />Tracing</p>
            </div>

            <div className='flex items-center justify-center'>
                <img src={Icon3} alt="icon" className='h-[50px] px-2 pl-4' />
                <p className='text-sm pr-3'>Quick <br />Delivery</p>
            </div>
        </div>
        
        <div className='flex justify-center'>
            <img src={mobile} alt="mobile" />
            <div className='flex flex-col'>
                <h2 className='font-extrabold text-2xl text-gradient-to-r from-yellow-400 to-orangeColor'>Install the app</h2>
                <p className='text-[0.6rem] text-gray-500'>
                It's never been easier to order food. Look for the <br /> finest discounts and you'll be lost in a world of <br />delectable food.
                </p>

                <div className='flex'>
                    <div>
                        playstore
                        <div>
                            <p>GET IT ON</p>
                            <h2>Google Play</h2>
                        </div>
                    </div>

                    <div>
                        playstore
                        <div>
                            <p>DOWNLOAD ON THE</p>
                            <h2>App Store</h2>
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