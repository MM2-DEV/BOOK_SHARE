import React from "react";
import { useForm } from "react-hook-form";

const CreateBook = () => {
  const { register, handleSubmit } = useForm();

  const inputChangeHandler = (data) => {
    console.log("inputChangeHandler:");
  };

  const submitHandler = (data) => {
    console.log("submit handler :", data);
  };

  return (
    <div className="w-full">
      <div className="bg-slate-100 p-3 rounded-lg">
        <h2 className="text-xl">Add Book</h2>
        <p className="text-xs">Add new book to this virtual library</p>
      </div>

      <div className="mt-5 bg-slate-100 p-3 rounded-lg">
        <div>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-col md:flex-row">
              <label className="basis-full md:basis-1/3 p-1 text-sm">
                User Name
              </label>
              <div className="p-1 basis-full md:basis-3/3">
                <input
                  type="text"
                  name="name"
                  {...register("name")}
                  className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                  placeholder="Enter Username"
                  onChange={inputChangeHandler}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <label className="basis-full md:basis-1/3 p-1 text-sm">
                Password
              </label>
              <div className="p-1 basis-full md:basis-3/3">
                <input
                  type="password"
                  name="pwd"
                  {...register("password")}
                  className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                  placeholder="Enter Password"
                  onChange={inputChangeHandler}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row text-sm">
              <label className="basis-full md:basis-1/3 p-1">Email</label>
              <div className="p-1 basis-full md:basis-3/3">
                <input
                  type="email"
                  name="email"
                  {...register("email")}
                  className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                  placeholder="Enter Email"
                  onChange={inputChangeHandler}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row text-sm">
              <label className="basis-full md:basis-1/3 p-1">
                Select Gender
              </label>
              <div className="p-1 basis-full md:basis-3/3">
                <select
                  {...register("gender")}
                  className="w-full bg-white p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>

            <div className="w-full pt-2 px-1 text-right">
              <button
                type="submit"
                className="px-3 rounded-md py-1 border border-green-600 text-sm"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
