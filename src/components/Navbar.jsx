import { useState } from "react";
import { IoChevronDown, IoMenu, IoClose } from "react-icons/io5";

function Navbar() {
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 sm:px-10 md:px-20 py-6 md:py-8 relative z-20 bg-white shadow-sm">
   
      <h1 className="text-3xl font-extrabold font-serif tracking-wide text-[#181E4B]">
        Jadoo
      </h1>

      <div className="hidden md:flex items-center gap-10 text-[18px] text-gray-700">
        <p className="hover:text-orange-500 cursor-pointer">Destinations</p>
        <p className="hover:text-orange-500 cursor-pointer">Hotels</p>
        <p className="hover:text-orange-500 cursor-pointer">Flights</p>
        <p className="hover:text-orange-500 cursor-pointer">Bookings</p>
        <p className="hover:text-orange-500 cursor-pointer">Login</p>
        <button className="border cursor-pointer border-gray-600 px-6 py-2 rounded-xl hover:bg-gray-100 transition">
          Sign Up
        </button>

        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1 text-[18px] hover:cursor-pointer"
          >
            EN <IoChevronDown />
          </button>

          {langOpen && (
            <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg w-24 py-2">
              <p className="px-3 py-1 hover:bg-gray-100 cursor-pointer">HN</p>
              <p className="px-3 py-1 hover:bg-gray-100 cursor-pointer">FR</p>
              <p className="px-3 py-1 hover:bg-gray-100 cursor-pointer">RS</p>
            </div>
          )}
        </div>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-gray-700"
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-6 md:hidden">
          <p className="hover:text-orange-500 cursor-pointer">Destinations</p>
          <p className="hover:text-orange-500 cursor-pointer">Hotels</p>
          <p className="hover:text-orange-500 cursor-pointer">Flights</p>
          <p className="hover:text-orange-500 cursor-pointer">Bookings</p>
          <p className="hover:text-orange-500 cursor-pointer">Login</p>
          <button className="border cursor-pointer border-gray-600 px-6 py-2 rounded-xl hover:bg-gray-100 transition">
            Sign Up
          </button>

          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-[18px] hover:cursor-pointer"
            >
              EN <IoChevronDown />
            </button>

            {langOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border rounded-lg shadow-lg w-24 py-2">
                <p className="px-3 py-1 hover:bg-gray-100 cursor-pointer">HN</p>
                <p className="px-3 py-1 hover:bg-gray-100 cursor-pointer">FR</p>
                <p className="px-3 py-1 hover:bg-gray-100 cursor-pointer">RS</p>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
