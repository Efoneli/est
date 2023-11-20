import React from "react";
import { featuredDatas } from "../Assets/data/featuredDatas";
import FeaturedResCard from "./FeaturedResCard";
import { AiOutlineRight } from "react-icons/ai";

function FeaturedList() {
  return (
    <>
      <h1 className="font-extrabold text-2xl text-center mt-[60px >m-5">Featured Restuarants</h1>
      <div className="grid grid-cols-1 place-items-center place-content-center gap-5 phone:grid-cols-4 ">
        {featuredDatas.map((featuredData) => (
          <FeaturedResCard key={featuredData.id} featuredData={featuredData} />
        ))}
      </div>

      <div className="flex items-center justify-center m-4 mb-5">
        <button className="bg-gradient-to-r from-yellow-400 to-yellowColor text-white text-xs px-4 py-2 rounded-md flex items-center font-bold">
          View All
          <AiOutlineRight />
        </button>
      </div>
    </>
  );
}

export default FeaturedList;
