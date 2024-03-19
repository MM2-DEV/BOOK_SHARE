import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="bg-slate-100">
        <div className="container w-full">
          <div className="w-full bg-white p-4 min-h-screen">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
