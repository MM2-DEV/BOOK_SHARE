import React from "react";
import Header from "../Header";
import { Navigate, Outlet } from "react-router-dom";
import DashboardSidebar from "../dashboard/DashboardSidebar.jsx";
import { getLocalStorageItem } from "../../utils/utils.js";

const DashboardLayout = () => {
  const localStorageAuthData = getLocalStorageItem("user");

  if (localStorageAuthData) {
    if (
      localStorageAuthData.roleId === 1 ||
      localStorageAuthData.roleId === 2
    ) {
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
    } else {
      return <Navigate to="/" />;
    }
  } else {
    return <Navigate to="sing-in" />;
  }
};

export default DashboardLayout;
