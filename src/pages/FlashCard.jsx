import React from "react";
import Image1 from "../components/Assets/images/Image1.png";

function FlashCard() {
  return (
    <>
      <div className="grid grid-cols-2  phone:grid-cols-4 laptop:mx-8">

        <div className="m-2 p-2">
          <div className="relative">
            <img src={Image1} alt="image" className="rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0px-4 py-1 px-2 bg-yellowColor flex items-center rounded-tr-lg rounded-bl-lg">
              <h2 className="text-4xl text-white font-bold">15</h2>
              <div>
                <p className="text-2xl text-white font-bold pl-1">%</p>
                <p className="text-md text-white">off</p>
              </div>
            </div>
          </div>

          <p className="text-xs mt-5 mb-2 font-bold">Greys Vage</p>
          <button className="py-1 px-2 text-xs font-bold bg-[#f6ddcf] text-orangeColor rounded-md">
            6 Days Remaining
          </button>
        </div>

        <div className="m-2 p-2">
          <div className="relative">
            <img src={Image1} alt="image" className="rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0px-4 py-1 px-2 bg-yellowColor flex items-center rounded-tr-lg rounded-bl-lg">
              <h2 className="text-4xl text-white font-bold">15</h2>
              <div>
                <p className="text-2xl text-white font-bold pl-1">%</p>
                <p className="text-md text-white">off</p>
              </div>
            </div>
          </div>

          <p className="text-xs mt-5 mb-2 font-bold">Greys Vage</p>
          <button className="py-1 px-2 text-xs font-bold bg-[#f6ddcf] text-orangeColor rounded-md">
            6 Days Remaining
          </button>
        </div>

        <div className="m-2 p-2">
          <div className="relative">
            <img src={Image1} alt="image" className="rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0px-4 py-1 px-2 bg-yellowColor flex items-center rounded-tr-lg rounded-bl-lg">
              <h2 className="text-4xl text-white font-bold">15</h2>
              <div>
                <p className="text-2xl text-white font-bold pl-1">%</p>
                <p className="text-md text-white">off</p>
              </div>
            </div>
          </div>

          <p className="text-xs mt-5 mb-2 font-bold">Greys Vage</p>
          <button className="py-1 px-2 text-xs font-bold bg-[#f6ddcf] text-orangeColor rounded-md">
            6 Days Remaining
          </button>
        </div>

        <div className="m-2 p-2">
          <div className="relative">
            <img src={Image1} alt="image" className="rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0px-4 py-1 px-2 bg-yellowColor flex items-center rounded-tr-lg rounded-bl-lg">
              <h2 className="text-4xl text-white font-bold">15</h2>
              <div>
                <p className="text-2xl text-white font-bold pl-1">%</p>
                <p className="text-md text-white">off</p>
              </div>
            </div>
          </div>

          <p className="text-xs mt-5 mb-2 font-bold">Greys Vage</p>
          <button className="py-1 px-2 text-xs font-bold bg-[#f6ddcf] text-orangeColor rounded-md">
            6 Days Remaining
          </button>
        </div>

      </div>
    </>
  );
}

export default FlashCard;
