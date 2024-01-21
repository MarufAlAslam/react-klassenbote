import React, { useEffect } from "react";
import Header from "../components/header";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";

const MainLayout = () => {
  const [sidebarVisible, setSidebarVisible] = React.useState(true);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleSidebar = () => setSidebarVisible(!sidebarVisible);

  useEffect(() => {
    if (screenWidth < 768) {
      setSidebarVisible(false);
    } else {
      setSidebarVisible(true);
    }
  }, [screenWidth]);
  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex bg-[#f5f8fa] min-h-screen gap-5 justify-between items-start">
        <Sidebar
          sidebarVisible={sidebarVisible}
          toggleSidebar={toggleSidebar}
          screenWidth={screenWidth}
        />
        <div className="w-full md:p-5 p-2 pt-5 main-screen overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
