import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <img src={logo} className="h-8 w-8" alt="restro logo" />
        <h1 className="text-lg font-semibold text-[#f5f5f5]">Restro</h1>
      </div>

      {/* SEARCH */}
      <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-5 py-2 w-[500px]">
        <FaSearch className="text-[#f5f5f5]" />
        <input 
          type="text" 
          placeholder="Search..." 
          className="bg-transparent outline-none text-[#f5f5f5] w-full"
        />
      </div>

      {/* ICONS (الأيقونات المستوردة في الأعلى ولم تظهر بالصورة) */}
      <div className="flex items-center gap-4">
        <FaBell className="text-[#f5f5f5] text-xl cursor-pointer" />
        <FaUserCircle className="text-[#f5f5f5] text-2xl cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;