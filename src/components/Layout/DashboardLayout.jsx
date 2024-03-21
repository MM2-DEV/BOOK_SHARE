import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../dashboard/DashboardSidebar.jsx";

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <div className="bg-slate-100">
        <div className="container flex flex-row min-h-screen">
          <div className="basis-1/4 shrink-0 self-start p-3 bg-green-50">
            <div className="w-full">
              <DashboardSidebar />
            </div>
          </div>
          <div className="basis-3/4 shrink-0 px-4 overflow-x-hidden">
            <div className="bg-white p-4 min-h-screen">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
