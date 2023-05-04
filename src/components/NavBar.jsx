import React, { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import logo from "../imgs/logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const handelMenue = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between px-[8%] py-3 w-full bg-[#1c1c1c]">
      <Link to="/">
        <img src={logo} alt="Logo" className="w-16 h-12 object-contain" />
      </Link>
      <div className="w-full flex items-center sm:hidden">
        <div className="text-sm flex items-center w-full gap-6 pl-3">
          <Link to="/" className=" text-gray-200 hover:text-white ">
            Home
          </Link>
          <Link to="/" className=" text-gray-200 hover:text-white ">
            Example
          </Link>
          <Link to="/" className=" text-gray-200 hover:text-white ">
            Blog
          </Link>
        </div>
        <div>
          <Link
            to="/"
            className="px-6 duration-200 py-[6px] text-sm font-semibold rounded-3xl text-white border-2 border-red-600 bg-red-600 hover:border-transparent hover:text-red-500 hover:bg-white"
          >
            Login
          </Link>
        </div>
      </div>
      <button
        onClick={handelMenue}
        className="sm:block hidden border border-[#ccc] rounded px-2 py-1"
      >
        <HiBars3 color="#fff" size={20} />
      </button>
      {isOpen && (
        <div className="w-full flex flex-col absolute left-0 right-0 top-16 bg-[#1c1c1c]  items-center gap-6 py-7">
          <div className="text-sm flex flex-col gap-4 text-center w-full">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            >
              Home
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            >
              Examples
            </a>
            <a
              href="#responsive-header"
              className="text-gray-200 hover:text-white relative right-2"
            >
              Blog
            </a>
          </div>
          <div>
            <a
              href="2"
              className="px-4 duration-200 py-[8px]  rounded-xl text-white border-2 border-white hover:border-transparent hover:text-gray-800 hover:bg-white"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
