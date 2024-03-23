import React from "react";
import Header from "../Header";
import { Navigate, Outlet } from "react-router-dom";
import { getLocalStorageItem } from "../../utils/utils";

const MainLayout = () => {
  const localStorageAuthData = getLocalStorageItem("user");

  if (localStorageAuthData) {
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
  } else {
    return <Navigate to="/sign-in" />;
  }
};

export default MainLayout;
