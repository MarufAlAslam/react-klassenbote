import React from "react";
import { NavLink } from "react-router-dom";
import { IoHomeOutline, IoStatsChartSharp } from "react-icons/io5";
import { BsBox2 } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";
import { HiBars3CenterLeft, HiOutlineServer } from "react-icons/hi2";
import { FiCreditCard } from "react-icons/fi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { TiCogOutline } from "react-icons/ti";
import { GoInbox } from "react-icons/go";

const Sidebar = ({ sidebarVisible, toggleSidebar, screenWidth }) => {
  return (
    <aside
      className={`sidebar bg-white md:w-[300px] overflow-y-auto w-full py-3 transition-[0.8s] pr-3 ${
        sidebarVisible ? "translate-x-0" : "translate-x-[-100%]"
      }`}
    >
      <ul className="flex flex-col gap-2">
        <li>
          <NavLink
            onClick={screenWidth < 767 && toggleSidebar}
            to="/"
            className="text-gray-500 font-semibold p-3 rounded-r-md hover:bg-[#f5f8fa] border-l-[3px] border-l-transparent hover:border-l-blue-500 text-xs gap-2 flex items-center"
          >
            <IoHomeOutline className="text-xl" />
            <span className="text-black">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={screenWidth < 767 && toggleSidebar}
            to="/alle-schulen"
            className="text-gray-500 font-semibold p-3 rounded-r-md hover:bg-[#f5f8fa] border-l-[3px] border-l-transparent hover:border-l-blue-500 text-xs gap-2 flex items-center"
          >
            <IoStatsChartSharp className="text-xl" />
            <span className="text-black">Alle Schulen</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={screenWidth < 767 && toggleSidebar}
            to="/schule-hinzufügen"
            className="text-gray-500 font-semibold p-3 rounded-r-md hover:bg-[#f5f8fa] border-l-[3px] border-l-transparent hover:border-l-blue-500 text-xs gap-2 flex items-center"
          >
            <IoStatsChartSharp className="text-xl" />
            <span className="text-black">Schule hinzufügen</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={screenWidth < 767 && toggleSidebar}
            to="/dokumenten-bibliotek"
            className="text-gray-500 font-semibold p-3 rounded-r-md hover:bg-[#f5f8fa] border-l-[3px] border-l-transparent hover:border-l-blue-500 text-xs gap-2 flex items-center"
          >
            <BsBox2 className="text-xl" />
            <span className="text-black">Dokumenten Bibliotek</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={screenWidth < 767 && toggleSidebar}
            to="/vereinbarungen"
            className="text-gray-500 font-semibold p-3 rounded-r-md hover:bg-[#f5f8fa] border-l-[3px] border-l-transparent hover:border-l-blue-500 text-xs gap-2 flex items-center"
          >
            <FaRegFileAlt className="text-xl" />
            <span className="text-black">Vereinbarungen</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={screenWidth < 767 && toggleSidebar}
            to="/email-log"
            className="text-gray-500 font-semibold p-3 rounded-r-md hover:bg-[#f5f8fa] border-l-[3px] border-l-transparent hover:border-l-blue-500 text-xs gap-2 flex items-center"
          >
            <HiBars3CenterLeft className="text-xl" />
            <span className="text-black">E-Mail Log</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/system-log"
            onClick={screenWidth < 767 && toggleSidebar}
            className="text-gray-500 font-semibold p-3 rounded-r-md hover:bg-[#f5f8fa] border-l-[3px] border-l-transparent hover:border-l-blue-500 text-xs gap-2 flex items-center"
          >
            <HiBars3CenterLeft className="text-xl" />
            <span className="text-black">System Log</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/zahlungen"
            onClick={screenWidth < 767 && toggleSidebar}
            className="text-gray-500 font-semibold p-3 rounded-r-md hover:bg-[#f5f8fa] border-l-[3px] border-l-transparent hover:border-l-blue-500 text-xs gap-2 flex items-center"
          >
            <FiCreditCard className="text-xl" />
            <span className="text-black">Zahlungen</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/backup"
            onClick={screenWidth < 767 && toggleSidebar}
            className="text-gray-500 font-semibold p-3 rounded-r-md hover:bg-[#f5f8fa] border-l-[3px] border-l-transparent hover:border-l-blue-500 text-xs gap-2 flex items-center"
          >
            <HiOutlineServer className="text-xl" />
            <span className="text-black">Backup</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/broadcaster"
            onClick={screenWidth < 767 && toggleSidebar}
            className="text-gray-500 font-semibold p-3 rounded-r-md hover:bg-[#f5f8fa] border-l-[3px] border-l-transparent hover:border-l-blue-500 text-xs gap-2 flex items-center"
          >
            <IoIosInformationCircleOutline className="text-xl" />
            <span className="text-black">Broadcaster</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={screenWidth < 767 && toggleSidebar}
            to="/ticketsysteme"
            className="text-gray-500 font-semibold p-3 rounded-r-md hover:bg-[#f5f8fa] border-l-[3px] border-l-transparent hover:border-l-blue-500 text-xs gap-2 flex items-center"
          >
            <GoInbox className="text-xl" />
            <span className="text-black">Ticketsystem</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={screenWidth < 767 && toggleSidebar}
            to="/settings"
            className="text-gray-500 font-semibold p-3 rounded-r-md hover:bg-[#f5f8fa] border-l-[3px] border-l-transparent hover:border-l-blue-500 text-xs gap-2 flex items-center"
          >
            <TiCogOutline className="text-xl" />
            <span className="text-black">Settings</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
