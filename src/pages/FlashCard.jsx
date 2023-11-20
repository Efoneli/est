import React from "react";
import Image1 from "../components/Assets/images/Image1.png";
import Image2 from "../components/Assets/images/Image2.png";
import Image3 from "../components/Assets/images/Image3.png";
import Image4 from "../components/Assets/images/Image4.png";


function FlashCard() {
  return (
    <>
      <div className="grid grid-cols-2  phone:grid-cols-4 mx-10 my-6 mt-6">

        <div className="m-2 p-2">
          <div className="relative">
            <img src={Image1} alt="imge" className="rounded-lg" />
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
            <img src={Image2} alt="imag" className="rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0px-4 py-1 px-2 bg-yellowColor flex items-center rounded-tr-lg rounded-bl-lg">
              <h2 className="text-4xl text-white font-bold">10</h2>
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
            <img src={Image3} alt="imag" className="rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0px-4 py-1 px-2 bg-yellowColor flex items-center rounded-tr-lg rounded-bl-lg">
              <h2 className="text-4xl text-white font-bold">25</h2>
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
            <img src={Image4} alt="imag" className="rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0px-4 py-1 px-2 bg-yellowColor flex items-center rounded-tr-lg rounded-bl-lg">
              <h2 className="text-4xl text-white font-bold">20</h2>
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
