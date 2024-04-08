import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/6303a59fab1b900654aad3c6.png";
import { IoSearch } from "react-icons/io5";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useAuth()

  return (
    <nav className="container mx-auto">
      <div className="flex items-center py-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black sm:hidden"
        >
          {isOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>
        <div className="flex flex-1 items-center pl-2">
          <img className="h-5 md:h-8  w-auto" src={logo} alt="dribble" />
          <div className="hidden md:ml-6 md:flex items-center">
            <li className="px-2 py-2 cursor-pointer list-none text-black text-sm font-medium">
              Inspiration
            </li>
            <li className="px-2 py-2 cursor-pointer text-black list-none text-sm font-medium">
              Find Work
            </li>
            <li className="px-2 py-2 cursor-pointer text-black list-none text-sm font-medium">
              Learn Design
            </li>
            <li className="px-2 py-2 cursor-pointer text-black list-none text-sm font-medium">
              Go Pro
            </li>
            <li className="px-2 py-2 cursor-pointer text-black list-none text-sm font-medium">
              hire Designers
            </li>
          </div>
        </div>
        <div className="flex items-center gap-2 pr-2">
          <span className="block lg:hidden">
            <IoSearch size={22} />
          </span>
          <div className="relative hidden lg:block">
            <span className="absolute left-2 top-2.5 text-[#9CA3AF]">
              <IoSearch />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="bg-[#F3F6F5] w-36 rounded pl-8 py-1.5"
            />
          </div>
          <img src={user?.photoURL} className="gw-7 h-7 rounded-full" alt="" />
          <button className="bg-[#EA4B8A] text-xs md:text-base px-3 py-1.5 rounded-md text-white">
            Upload
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden shadow-xl rounded-b-md transition-all duration-300`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <li className="px-3 py-2 cursor-pointer list-none text-black block text-sm font-medium">
            Inspiration
          </li>
          <li className="px-3 py-2 cursor-pointer text-black list-none block text-sm font-medium">
            Find Work
          </li>
          <li className="px-3 py-2 cursor-pointer text-black list-none block text-sm font-medium">
            Learn Design
          </li>
          <li className="px-3 py-2 cursor-pointer text-black list-none block text-sm font-medium">
            Go Pro
          </li>
          <li className="px-3 py-2 cursor-pointer text-black list-none block text-sm font-medium">
            hire Designers
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
