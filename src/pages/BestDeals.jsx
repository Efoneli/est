import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import best1 from "../components/Assets/images/best1.png";
import best2 from "../components/Assets/images/best2.png";
import best3 from "../components/Assets/images/best3.png";
import order from "../components/Assets/images/order.png";

function BestDeals() {
  return (
    <>
      <div className="bg-white grid gap-6 place-items-center m-8 p-5">
        <div className="max-w-sm shadow-xl rounded-lg flex flex-col items-center justify-center md:flex-row md:max-w-xl">
          <div>
            <div className="p-5">
              <h2 className="font-extrabold text-xl">
                Best deals{" "}
                <span className="text-yellowColor">Crispy Sandwiches</span>
              </h2>
              <p className="text-xs leading-4 text-gray-500">
                Enjoy the large size of sandwiches. Complete perfect slice of
                sandwiches.
              </p>

              <button className="bg-gradient-to-r from-yellowColor to-orangeColor shadow-md shadow-yellowColor text-white text-xs px-4 py-2 mt-7 rounded-md flex items-center font-bold">
                PROCEED TO ORDER
                <AiOutlineRight className="" />
              </button>
            </div>
          </div>

          <div className="">
            <img
              src={best1}
              alt="deals"
              className="h-[16.5rem] w-[64rem] rounded-b-lg object-fill md:rounded-r-lg"
            />
          </div>
        </div>

        <div className="max-w-sm shadow-xl rounded-lg flex flex-col-reverse items-center justify-center md:flex-row md:max-w-xl">
          <div className="">
            <img
              src={best2}
              alt="deals"
              className="h-[16.5rem] w-[64rem] rounded-b-lg md:rounded-l-lg"
            />
          </div>

          <div>
            <div className="p-5">
              <h2 className="font-extrabold text-xl">
                Celebrate parties with{" "}
                <span className="text-yellowColor">Fried Chicken</span>
              </h2>
              <p className="text-xs leading-4 text-gray-500">
                Get the best fried chicken smeared with a lip smacking lemon
                chili flavor. Check out best deals for fried chicken.
              </p>

              <button className="bg-gradient-to-r from-yellowColor to-orangeColor shadow-md shadow-yellowColor text-white text-xs px-4 py-2 mt-7 rounded-md flex items-center font-bold">
                PROCEED TO ORDER
                <AiOutlineRight className="" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-sm shadow-xl rounded-lg flex flex-col items-center justify-center md:flex-row md:max-w-xl">
          <div>
            <div className="p-5">
              <h2 className="font-extrabold text-xl">
                Wanna eat hot & spicy{" "}
                <span className="text-yellowColor">Pizza?</span>
              </h2>
              <p className="text-xs leading-4 text-gray-500">
                Pair up with a friend and enjoy the hot and crispy pizza pops.
                Try it with the best deals.
              </p>

              <button className="bg-gradient-to-r from-yellowColor to-orangeColor shadow-md shadow-yellowColor text-white text-xs px-4 py-2 mt-7 rounded-md flex items-center font-bold">
                PROCEED TO ORDER
                <AiOutlineRight className="" />
              </button>
            </div>
          </div>

          <div className="">
            <img
              src={best3}
              alt="deals"
              className="h-[16.5rem] w-[64rem] rounded-b-lg md:rounded-r-lg"
            />
          </div>
        </div>
      </div>

      <div className="relative min-w-full mt-20">
        <img src={order} alt="order" className="h-64 object-cover"/>
        <div class="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="font-extrabold text-2xl text-white text-center md:text-lg">
                Are you ready to order with <br />the best deals?
            </h1>
            <button className="bg-orangeColor text-white text-xs font-bold px-4 py-2 mt-7 rounded-md flex items-center">
                PROCEED TO ORDER
                <AiOutlineRight className="" />
            </button>
            </div>
           
      </div>
    </>
  );
}

export default BestDeals;
