import React from "react";
import Header from "../components/header";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";

const MainLayout = () => {
  const [sidebarVisible, setSidebarVisible] = React.useState(true);
  const toggleSidebar = () => setSidebarVisible(!sidebarVisible);
  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex bg-[#f5f8fa] min-h-screen gap-5 justify-between items-start">
        <Sidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
        <div className="w-full md:p-5 p-2 main-screen overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
