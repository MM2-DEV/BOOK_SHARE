import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-3 rounded-md">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <div className="mt-4 p-3 bg-slate-100 rounded-md flex flex-row flex-wrap">
        <div className=" basis-full lg:basis-1/2 xl:basis-1/3  p-3">
          <div className="bg-white border border-teal-500 p-3 min-h-[130px] rounded">
            <h2 className="text-2xl font-bold">Total Users</h2>
            <h2 className="text-md font-bold">{123}</h2>
            <div className="mt-5 text-white text-right">
              <button
                className=" mr-2 py-2 px-4 rounded-lg border border-teal-500 bg-teal-500"
                onClick={() => {
                  navigate("/dashboard/users");
                }}
              >
                View
              </button>
            </div>
          </div>
        </div>
        <div className=" basis-full lg:basis-1/2 xl:basis-1/3  p-3">
          <div className="bg-white border border-teal-500 p-3 min-h-[130px] rounded">
            <h2 className="text-2xl font-bold">Total Writers</h2>
            <h2 className="text-md font-bold">{123}</h2>
            <div className="mt-5 text-white text-right">
              <button
                className=" mr-2 py-2 px-4 rounded-lg border border-teal-500 bg-teal-500"
                onClick={() => {
                  navigate("/dashboard/writers");
                }}
              >
                View
              </button>
            </div>
          </div>
        </div>
        <div className=" basis-full lg:basis-1/2 xl:basis-1/3  p-3">
          <div className="bg-white border border-teal-500 p-3 min-h-[130px] rounded">
            <h2 className="text-2xl font-bold">Total Books</h2>
            <h2 className="text-md font-bold">{123}</h2>
            <div className="mt-5 text-white text-right">
              <button
                className=" mr-2 py-2 px-4 rounded-lg border border-teal-500 bg-teal-500"
                onClick={() => {
                  navigate("/dashboard/books");
                }}
              >
                View
              </button>
            </div>
          </div>
        </div>
        <div className=" basis-full lg:basis-1/2 xl:basis-1/3  p-3">
          <div className="bg-white border border-teal-500 p-3 min-h-[130px] rounded">
            <h2 className="text-2xl font-bold">Total Genres</h2>
            <h2 className="text-md font-bold">{123}</h2>
            <div className="mt-5 text-white text-right">
              <button
                className=" mr-2 py-2 px-4 rounded-lg border border-teal-500 bg-teal-500"
                onClick={() => {
                  navigate("/dashboard/genres");
                }}
              >
                View
              </button>
            </div>
          </div>
        </div>
        <div className=" basis-full lg:basis-1/2 xl:basis-1/3  p-3">
          <div className="bg-white border border-teal-500 p-3 min-h-[130px] rounded">
            <h2 className="text-2xl font-bold">Total Donors</h2>
            <h2 className="text-md font-bold">{123}</h2>
            <div className="mt-5 text-white text-right">
              <button
                className=" mr-2 py-2 px-4 rounded-lg border border-teal-500 bg-teal-500"
                onClick={() => {
                  navigate("/dashboard/donors");
                }}
              >
                View
              </button>
            </div>
          </div>
        </div>
        <div className=" basis-full lg:basis-1/2 xl:basis-1/3  p-3">
          <div className="bg-white border border-teal-500 p-3 min-h-[130px] rounded">
            <h2 className="text-2xl font-bold">Total Borrowed</h2>
            <h2 className="text-md font-bold">{123}</h2>
            <div className="mt-5 text-white text-right">
              <button
                className=" mr-2 py-2 px-4 rounded-lg border border-teal-500 bg-teal-500"
                onClick={() => {
                  navigate("/dashboard/borrow-requests");
                }}
              >
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
