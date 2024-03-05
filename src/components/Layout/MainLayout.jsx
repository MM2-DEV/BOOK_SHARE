import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="bg-slate-100">
        <div className="container flex flex-row">
          <div className="basis-1/4 self-start p-4 bg-green-50">
            <div className="">sidebar</div>
          </div>
          <div className="basis-3/4 px-4">
            <div className="bg-white p-4 min-h-screen">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
