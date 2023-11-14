import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image5 from "../components/Assets/images/Image5.png";
import Image6 from "../components/Assets/images/Image6.png";
import Image7 from "../components/Assets/images/Image7.png";
import Image8 from "../components/Assets/images/Image8.png";
import Image9 from "../components/Assets/images/Image9.png";
import { FaLocationDot } from "react-icons/fa6";

const PopularItems = () => {
  return (
    <div className=" pl-[40px] mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={5}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
           1624: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="text-sm gap-[13px]">
              <img src={Image5} className="rounded-lg" alt="" />
              <h4 className="py-2 font-bold text-sm">Alex Johnson</h4>
              <div className="flex items-center text-yellowColor">
                <FaLocationDot className="pr-2" />
                <p className="font">Burger Arena</p>
              </div>
              <p className="font-bold">$3.88</p>
              <button className="w-[290px] my-2 px-6 py-3 text-white text-sm font-bold rounded-lg bg-orangeColor shadow-md shadow-orangeColor">
                Order Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="text-sm gap-[13px]">
              <img src={Image6} className="rounded-lg" alt="" />
              <h4 className="py-2 font-bold text-sm">Alex Johnson</h4>
              <div className="flex items-center text-yellowColor">
                <FaLocationDot className="pr-2" />
                <p className="font">Top Sticks</p>
              </div>
              <p className="font-bold">$4.00</p>
              <button className="w-[290px] my-2 px-6 py-3 text-white text-sm font-bold rounded-lg bg-orangeColor shadow-md shadow-orangeColor">
                Order Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="text-sm gap-[13px]">
              <img src={Image7} className="rounded-lg" alt="" />
              <h4 className="py-2 font-bold text-sm">Alex Johnson</h4>
              <div className="flex items-center text-yellowColor">
                <FaLocationDot className="pr-2" />
                <p className="font">Cake World</p>
              </div>
              <p className="font-bold">$3.00</p>
              <button className="w-[290px] my-2 px-6 py-4 text-white text-sm font-bold rounded-lg bg-orangeColor shadow-md shadow-orangeColor">
                Order Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="text-sm gap-[13px]">
              <img src={Image8} className="rounded-lg" alt="" />
              <h4 className="py-2 font-bold text-sm">Alex Johnson</h4>
              <div className="flex items-center text-yellowColor">
                <FaLocationDot className="pr-2" />
                <p className="font">Fastfood Dine</p>
              </div>
              <p className="font-bold">$3.00</p>
              <button className="w-[290px] my-2 px-6 py-3 text-white text-sm font-bold rounded-lg bg-orangeColor shadow-md shadow-orangeColor">
                Order Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="text-sm gap-[13px]">
              <img src={Image9} className="rounded-lg" alt="" />
              <h4 className="py-2 font-bold text-sm">Alex Johnson</h4>
              <div className="flex items-center text-yellowColor">
                <FaLocationDot className="pr-2" />
                <p className="font">Foody man</p>
              </div>
              <p className="font-bold">$2.79</p>
              <button className="w-[290px] my-2 px-6 py-3 text-white text-sm font-bold rounded-lg bg-orangeColor shadow-md shadow-orangeColor">
                Order Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="text-sm gap-[13px]">
              <img src={Image5} className="rounded-lg" alt="" />
              <h4 className="py-2 font-bold text-sm">Alex Johnson</h4>
              <div className="flex items-center text-yellowColor">
                <FaLocationDot className="pr-2" />
                <p className="font">Burger Arena</p>
              </div>
              <p className="font-bold">$3.88</p>
              <button className="w-[290px] my-2 px-6 py-3 text-white text-sm font-bold rounded-lg bg-orangeColor shadow-md shadow-orangeColor">
                Order Now
              </button>
            </div>
          </div>
        </SwiperSlide>

       
      </Swiper>

      {/* <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button> */}
    </div>
  );
};

export default PopularItems;
