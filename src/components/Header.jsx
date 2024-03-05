import { useState } from "react";
import React from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center px-4 text-white bg-[#6ea76e]">
      <div className="flex items-center">
        <img
          src="/images/bookShare.jpg"
          className="w-[30px] h-[30px] rounded"
        />
        <h1 className="w-full text-3xl font-bold text-white ms-2">
          Book Share
        </h1>
      </div>

      <ul className="hidden md:flex text-xl">
        <li className="p-4">Home</li>
        <li className="p-4">Dashboard</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          `${nav
            ? "fixed left-0 top-0 w-[60%] h-full border-1 border-r-white bg-[#6ea76e] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"}  md:hidden`
        }
      >
        <div className="flex items-center m-8">
          <img
            src="/images/bookShare.jpg"
            className="w-[30px] h-[30px] rounded"
          />
          <h1 className="w-full text-xl font-bold text-white ms-2">
            Book Share
          </h1>
        </div>
        <ul className="pt-4 uppercase p-4">
          <li className="p-4 border-b">Home</li>
          <li className="p-4 border-b">Dashboard</li>
          <li className="p-4 border-b">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
