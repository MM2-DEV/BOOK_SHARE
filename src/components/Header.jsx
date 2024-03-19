import { useState } from "react";
import React from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-teal-500">
      <div className="container flex justify-between items-center px-0 text-white">
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
          <li className="p-4">
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isActive ? "border-b-2" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="p-4">
            <NavLink
              to={"/dashboard"}
              className={({ isActive, isPending }) =>
                isActive ? "border-b-2" : ""
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li className="p-4">
            <NavLink
              to={"/contact"}
              className={({ isActive, isPending }) =>
                isActive ? "border-b-2" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={`${
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-1 border-r-white bg-[#6ea76e] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }  md:hidden`}
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
            <li className="p-4">
              <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                  isActive ? "border-b-2" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="p-4">
              <NavLink
                to={"/dashboard"}
                className={({ isActive, isPending }) =>
                  isActive ? "border-b-2" : ""
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li className="p-4">
              <NavLink
                to={"/about"}
                className={({ isActive, isPending }) =>
                  isActive ? "border-b-2" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li className="p-4">
              <NavLink
                to={"/contact"}
                className={({ isActive, isPending }) =>
                  isActive ? "border-b-2" : ""
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
