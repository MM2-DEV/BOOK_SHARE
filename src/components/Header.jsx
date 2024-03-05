import { useState } from "react";
import React from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 px-4 text-white bg-[#00fd9a]">
      <h1 className="w-full text-3xl font-bold text-white">Book Share App</h1>
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
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-white bg-[#6ea76e] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-white m-8">
          Book Share App
        </h1>
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
