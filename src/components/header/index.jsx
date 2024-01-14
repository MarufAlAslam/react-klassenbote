import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoWarningSharp } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { GoChevronDown } from "react-icons/go";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="p-[20px] shadow-md flex justify-between items-center gap-2 relative z-100">
      <div className="search w-[40%] flex items-center gap-2">
        <Link to="/" className="text-xl font-bold mr-6">
          <img src={logo} className="logo w-[200px]" alt="" />
        </Link>
        <CiSearch className="text-xl" />
        <input
          type="text"
          placeholder="Suchen"
          className="border-0 w-[200px] outline-none text-sm"
          name=""
          id=""
        />
      </div>
      <div className="w-[20%] flex justify-center items-center">
        <button className="bg-red-600 flex justify-center items-center gap-4 text-xs text-white px-4 py-1 rounded-[2px]">
          <IoWarningSharp />
          <span>HINWEIS TEXT</span>
        </button>
      </div>
      <div className="actions w-[40%] flex justify-end items-center gap-4">
        <AiOutlineMessage className="text-xl text-gray-500" />
        <div className="notification relative">
          <FaRegBell className="text-xl text-gray-500" />
          <div className="new bg-red-500 w-[8px] h-[8px] absolute top-0 right-0 rounded-full"></div>
        </div>
        <div className="flex justify-start items-center gap-2">
          <RxAvatar className="text-2xl text-gray-500" />
          <Link to="/" className="text-gray-500 text-xs flex items-center">
            <span className="text-gray-500 text-xs">Admin Name</span>
            <GoChevronDown className="text-xl" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
