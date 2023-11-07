import React from 'react'
import { featuredDatas } from '../Assets/data/featuredDatas'
import FeaturedResCard from './FeaturedResCard'

function FeaturedList() {
  return (
    <>
         <h1 className='font-extrabold text-center m-5'>Featured Restuarants</h1>
         <div className='grid grid-cols-1 place-content-center mr-6 ml-6 phone:grid-cols-4'>
         {featuredDatas.map((featuredData) => <FeaturedResCard key={ featuredData.id} featuredData={featuredData} />)}
</div>

    </>
  )
}

export default FeaturedList