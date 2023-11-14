// import {useState} from 'react'

// function Home() {
//   const [data, setData] = useState([])
//   const url = 'https://jsonplaceholder.typicode.com/users'

//   fetch(url)
//   .then(res => {
//     console.log('response')
//   })
//   .catch(err => {
//     console.log('err', err)
//   })

//   return (
//     <div>
//       hi, and welcome
//     </div>
//   )
// }

// export default Home





import React from "react";
import { BiSolidShoppingBag } from "react-icons/bi";
import { MdPedalBike } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import ImageHome from "../components/Assets/images/ImageHome.png";
import FlashCard from "./FlashCard";
import HowWorks from "../components/How/HowWorks";
import PopularItems from "./PopularItems";
import FeaturedRes from "./FeaturedRes";
import SearchFood from "./SearchFood";
import InstallApp from "./InstallApp";
import BestDeals from "./BestDeals";

function Home() {
  return (
    <div className=" ">
    <div className="w-screen bg-gradient-to-br from-yellow-400 to-yellow-600 pt-5 mb-8 ">
      <div className="">
      <h1 className="text-white font-extrabold ml-0 text-3xl phone:pt-10 pb-5 phone:ml-16 pl-16 ">Are you starving?</h1>
      <p className="text-xs text-gray-700 ml-0 py-2 phone:ml-16 pl-16">
        Within a few clicks, find meals that are accessible near you
      </p>
      </div>

{/* Pickup form div */}

      <div className=" flex flex-col-reverse pb-8 phone:flex-row justify-around items-center">
        <div className="bg-white rounded-lg mx-8">
          <div className="flex justify-start items-center p-2 m-2">
            <div className="flex justify-around items-center m-1 py-1 px-3 text-sm font-bold bg-[#f6ddcf] text-orangeColor rounded">
              <MdPedalBike className="mr-2" />
              <button>Delivery</button>
            </div>
            <div className="flex justify-between items-center m-1 py-1 px-3 text-sm font-bold bg-gray-100 text-gray-500 rounded">
              <BiSolidShoppingBag className="mr-2" />
              <button>Pickup</button>
            </div>
          </div>

          <hr />

          <div className="m-2 py-1 px-2">
            <form className="flex justify-between items-center py-3">
              <div className="relative mr-2">
                <input
                  placeholder="Enter your Email"
                  type="text"
                  id="address"
                  name="address"
                  className="pl-10 py-2 px-4 rounded-lg bg-greyColor"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-orangeColor pointer-events-none">
                  <FaLocationDot />
                </div>
              </div>
              <div className="relative">
                <button className="bg-orangeColor rounded pl-10 px-2 py-2 text-white font-bold">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <AiOutlineSearch />
                  </div> 
                  <p>
                    Find Food
                  </p>             
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="">
          <img src={ImageHome} height='350px' width='350px' alt="food" />
        </div>
      </div>
    </div>

    <FlashCard />
    <HowWorks />
    <PopularItems />
    <FeaturedRes />
    <SearchFood />
    <InstallApp />
    <BestDeals />
    </div>
  );
}

export default Home;
