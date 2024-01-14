import React from "react";
import Header from "../components/header";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="flex bg-[#f5f8fa] min-h-screen gap-5 justify-between items-start">
        <Sidebar />
        <div className="w-full p-5 main-screen overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
