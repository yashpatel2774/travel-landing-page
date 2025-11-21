import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <footer className="px-6 md:px-16 lg:px-20 py-16 bg-white text-center">

      <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-16">

        <div className="md:w-1/4 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#181E4B]">Jadoo.</h1>
          <p className="text-[#5E6282] mt-4 leading-relaxed text-sm md:text-base">
            Book your trip in minutes, get full control for much longer.
          </p>
        </div>

        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-10 md:gap-16 lg:gap-24 text-sm md:text-base">

          <div>
            <h3 className="font-bold text-lg md:text-xl text-[#080809]">Company</h3>
            <ul className="mt-4 space-y-2 text-[#5E6282]">
              <li className="hover:cursor-pointer">About</li>
              <li className="hover:cursor-pointer">Careers</li>
              <li className="hover:cursor-pointer">Mobile</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg md:text-xl text-[#080809]">Contact</h3>
            <ul className="mt-4 space-y-2 text-[#5E6282]">
              <li className="hover:cursor-pointer">Help/FAQ</li>
              <li className="hover:cursor-pointer">Press</li>
              <li className="hover:cursor-pointer">Affiliates</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg md:text-xl text-[#080809]">More</h3>
            <ul className="mt-4 space-y-2 text-[#5E6282]">
              <li className="hover:cursor-pointer">Airline Fees</li>
              <li className="hover:cursor-pointer">Airline</li>
              <li className="hover:cursor-pointer">Low Fare Tips</li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col items-center md:items-end gap-4 md:gap-6 w-full md:w-auto">

          <div className="flex space-x-4">
            {[
              { icon: <FaFacebookF /> },
              { icon: <FaInstagram /> },
              { icon: <FaTwitter /> },
            ].map(({ icon }, index) => (
              <button
                key={index}
                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-500 hover:text-white transition transform hover:scale-110 text-base md:text-lg"
              >
                {icon}
              </button>
            ))}
          </div>

          <p className="text-[#5E6282] font-medium text-sm md:text-base mt-1">
            Discover our app
          </p>

          <div className="flex gap-4 md:gap-6">
            <img
              src={assets.play_store}
              alt="Google Play"
              className="w-28 md:w-36 lg:w-44 rounded-xl cursor-pointer hover:scale-105 transition"
            />

            <img
              src={assets.app_store}
              alt="App Store"
              className="w-28 md:w-36 lg:w-44 rounded-xl cursor-pointer hover:scale-105 transition"
            />
          </div>

        </div>

      </div>

      <p className="text-[#5E6282] mt-12 text-center text-sm md:text-base">
        All rights reserved@jadoo.co
      </p>
    </footer>
  );
}

export default Footer;
