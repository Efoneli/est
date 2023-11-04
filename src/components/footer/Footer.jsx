import React from "react";
import { HiMail } from "react-icons/hi";

function Footer() {
  return (
    <div className="bg-[#212121] text-white p-10 text-xs">
      <div className="mx-10">
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
        <div className="flex justify-around items-center">
          <div className="mx-4">
            <h1 className="font-bold mb-6">Company</h1>
            <p>About us</p>
            <p>Team</p>
            <p>Careers</p>
            <p>Blog</p>
          </div>
          <div className="mx-4">
            <h1 className="font-bold mb-2">Contact</h1>
            <p>Help & Support</p>
            <p>Partner with us</p>
            <p>Ride with us</p>
          </div>
          <div className="mx-4">
            <h1 className="font-bold mb-2">Legal</h1>
            <p>Terms & Conditions</p>
            <p>Refund & Cancellation</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>

        <div>
          <h1>FOLLOW US</h1>
          <div></div>
          <p>Receive exlusive offers in your mailbox</p>

          <form>
            <div className="relative">
              <input
                placeholder="Enter your Email"
                type="email"
                id="email"
                name="email"
                className="pl-10 py-2 px-4 rounded-lg bg-gray-600"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiMail />
              </div>
            </div>
            <button className="py-2 px-4 rounded bg-gradient-to-r from-[#FFB800] to-[#FF8A00] shadow-md shadow-[#FF8A00]">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      </div>
     
    </div>
  );
}

export default Footer;
