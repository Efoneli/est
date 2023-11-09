import React from "react";
import { HiMail } from "react-icons/hi";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillHeart,
} from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";

function Footer() {
  return (
    <div className="bg-[#212121] text-white text-center pt-20 p-10 text-xs">
      <h1 className="font-bold ml-8">Our top cities</h1>
      <div className="grid gap-4 grid-cols-1 phone:grid-cols-3 justify-around items-center m-5 laptop:grid-cols-5">
        <div className=" ">
          <p>San Francisco</p>
          <p>Miami</p>
          <p>San Diegi</p>
          <p>East Bay</p>
          <p>Long Beach</p>
        </div>

        <div>
          <p>Los Angeles</p>
          <p>Washinton DC</p>
          <p>Seatle</p>
          <p>Portland</p>
          <p>Nashville</p>
        </div>

        <div>
          <p>New York City</p>
          <p>Orange County</p>
          <p>Atlanta</p>
          <p>Charlotte</p>
          <p>Denver</p>
        </div>

        <div>
          <p>Chicago</p>
          <p>Pheonix</p>
          <p>Las Vegas</p>
          <p>Sacramento</p>
          <p>Oklahoma City</p>
        </div>

        <div>
          <p>Columbus</p>
          <p>New Mexico</p>
          <p>Albuquerque</p>
          <p>Sacramento</p>
          <p>New Orleans</p>
        </div>
      </div>

      <hr />

      <div className="grid gap-4 grid-cols-1 phone:grid-cols-2 justify-around items-center m-5 laptop:grid-cols-4">
        <div className="">
          <h1 className="font-bold mb-6">Company</h1>
          <p>About us</p>
          <p>Team</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>
        <div className="">
          <h1 className="font-bold mb-2">Contact</h1>
          <p>Help & Support</p>
          <p>Partner with us</p>
          <p>Ride with us</p>
        </div>
        <div className="">
          <h1 className="font-bold mb-2">Legal</h1>
          <p>Terms & Conditions</p>
          <p>Refund & Cancellation</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>

{/* social media */}
        <div>
          <h1 className="pb-2">FOLLOW US</h1>
          <div className="flex justify-center items-center py-2 text-gray-500">
            <AiOutlineInstagram  className="mr-1"/>
            <BiLogoFacebookCircle  className="mx-1"/>
            <AiOutlineTwitter className="mx-1" />
          </div>

          {/* form for email offers */}
          <p className="py-2">Receive exlusive offers in your mailbox</p>

          <form className="flex justify-between items-center py-3">
            <div className="relative mr-2">
              <input
                placeholder="Enter your Email"
                type="email"
                id="email"
                name="email"
                className="pl-10 py-2 px-4 rounded-lg bg-gray-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiMail />
              </div>
            </div>
            <button className="py-2 px-4 rounded-lg bg-gradient-to-r from-[#FFB800] to-[#FF8A00] shadow-md shadow-[#FF8A00]">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <hr />

{/* footnote */}
      <div className="flex flex-col justify-between items-center mt-3 phone:flex-row ">
        <p>All rights Reserved &#169; foodwagon, 2023</p>
        <p className="flex justify-around">
          Made with <AiFillHeart className="text-yellowColor" /> by Efoneli
        </p>
      </div>
    </div>
  );
}

export default Footer;
