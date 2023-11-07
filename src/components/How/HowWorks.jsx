import React from 'react'
import { datas }  from '../Assets/data/howDatas'
import HowCard from './HowCard'


const HowWorks = () => {
  return (
    <div className="bg-gradient-to-b from-orange-50 p-5">
       <h1 className="font-bold text-3xl text-orangeColor text-center m-5">
        How does it work
      </h1>
      <div className='grid grid-cols-1 place-content-center mr-6 ml-6 phone:grid-cols-4'>
      {datas.map((data) => <HowCard key={ data.id} data={data} />)}
    </div>
    </div>
   
  )
}

export default HowWorks