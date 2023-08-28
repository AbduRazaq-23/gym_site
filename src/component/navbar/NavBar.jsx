import React, { useState } from "react";
import { NavMenu } from "./NavMenu";
import { Link, NavLink } from "react-router-dom";
import ar3 from "../../assets/ar3.png";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState();
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <nav className="bg-[#333] text-gray-200 h-24 flex items-center justify-between p-4  ">
      <div className=" items-center">
        <NavLink to="/">
          {" "}
          <img className="w-20 h-20" src={ar3} alt="" />
        </NavLink>
      </div>
      <div>
        <ul className="hidden md:flex space-x-5 ">
          {NavMenu.map((menu, index) => {
            return (
              <NavLink
                className={({ isActive }) => (isActive ? "text-white " : "")}
                key={index}
                to={menu.path}
              >
                <li>{menu.title}</li>
              </NavLink>
            );
          })}
        </ul>
      </div>

      <div className="hidden sm:block">
        <input
          type="text"
          placeholder="search"
          className=" px-4 py-1 rounded-l-2xl"
        />
        <button className="bg-[#FFA500] px-4 py-1 rounded-r-2xl text-white">
          Search
        </button>
      </div>

      {/* Mobile Menu  */}
      <div onClick={handleClick} className="md:hidden z-20">
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "md:hidden  fixed  right-0 mt-24   w-[50%]   bg-[#333] rounded-br-3xl text-gray-300 pt-20  py-5 z-10"
        }
      >
        {NavMenu.map((menu, index) => {
          return (
            <Link key={index} to={menu.path}>
              <li className="text-lg font-semibold pl-3 py-2">{menu.title}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
