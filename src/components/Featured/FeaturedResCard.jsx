import React from "react";
import Image10 from "../Assets/images/Image10.png";
import badge1 from "../Assets/images/badge1.png";
import { BsTagFill } from "react-icons/bs";
import { BiSolidTimeFive } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

function FeaturedResCard({ featuredData }) {
  const { discount, badge, star, badgeFast, openTime, photo, resName } =
    featuredData;
  return (
    <>
      <div className="mx-8 my-3">
        <div className="relative ">
          <img src={photo} alt="..." className="h-[200px] rounded-xl" />
          <div className="absolute top-0 left-0 right-0px-4 py-2 px-2 flex items-center">
            <button className="flex items-center text-white text-xs bg-orangeColor rounded-md mx-1 px-3 py-1">
              <BsTagFill />
              {discount}
            </button>
            <button className="flex items-center text-white text-xs bg-yellowColor rounded-md mx-1 px-3 py-1">
              {" "}
              <BiSolidTimeFive />
              {badgeFast}
            </button>
          </div>
        </div>

        <div className="flex items-center my-2 text-xs">
          <img src={badge} alt="..." className="h-[30px] mr-1" />
          <div className="mx-1">
            <p className="font-extrabold text-gray-600">{resName}</p>
            <div className="flex items-center text-yellowColor">
              <AiFillStar />
              <p className="">{star}</p>
            </div>
          </div>
        </div>

        <button className="py-1 px-2 text-xs font-bold bg-[#f6ddcf] text-orangeColor rounded-md">
          {openTime}
        </button>
      </div>
    </>
  );
}

export default FeaturedResCard;
