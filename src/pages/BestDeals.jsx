import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import best1 from "../components/Assets/images/best1.png";
import best2 from "../components/Assets/images/best2.png";
import best3 from "../components/Assets/images/best3.png";

function BestDeals() {
  return (
    <>
      <div className="bg-white m-5">
        <div className="max-w-2xl border border-gray-400 shadow-lg rounded-lg flex items-center justify-center">
          <div className="">
            <h2>
              Best deals <span>Crispy Sandwiches</span>
            </h2>
            <p>
              Enjoy the large size of sandwiches. Complete perfect slice of
              sandwiches.
            </p>

            <button className="bg-gradient-to-r from-yellow-400 to-yellowColor text-white text-xs px-4 py-2 rounded-md flex items-center font-bold">
              PROCEED TO ORDER
              <AiOutlineRight className="" />
            </button>
          </div>
          <div>
          <img src={best1} alt="deals" className="rounded-lg" />
          </div>
        </div>


      </div>
    </>
  );
}

export default BestDeals;
