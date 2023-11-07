import React from "react";
import { BiSolidShoppingBag } from "react-icons/bi";
import { GrBike } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import ImageHome from "../components/Assets/images/ImageHome.png";
import FlashCard from "./FlashCard";
import HowWorks from "../components/How/HowWorks";
import PopularItems from "./PopularItems";

function Home() {
  return (
    <>
    <div className="home p-5">
      <h1 className="text-white font-extrabold text-3xl phone:pt-10 pb-5 ml-20 pl-9 ">Are you starving?</h1>
      <p className="text-xs py-2 phone:ml-20 pl-9">
        Within a few clicks, find meals that are accessible near you
      </p>

      <div className="flex flex-col-reverse  phone:flex-row justify-around items-center">
        <div className="bg-white rounded-lg">
          <div className="flex justify-start items-center p-2 m-2">
            <div className="flex justify-around items-center py-1 px-3 text-sm font-bold bg-[#f6ddcf] text-orangeColor rounded">
              <GrBike className="mx-1 text-orangeColor" />
              <button>Delivery</button>
            </div>
            <div className="flex justify-between items-center py-1 px-3 text-sm font-bold text-gray-500 rounded">
              <BiSolidShoppingBag />
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
                  Find Food
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="my-2 py-2">
          <img src={ImageHome} height='350px' width='350px' alt="food" />
        </div>
      </div>
    </div>

    <FlashCard />
    <HowWorks />
    <PopularItems />
    </>
  );
}

export default Home;
