import React from "react";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      password: "",
      session: "",
      dob: "",
      phone: "",
    },
  });

  const inputChangeHandler = (data) => {};

  const submitHandler = (data) => {};

  return (
    <div className="container w-full">
      <div className="w-full bg-white p-4 min-h-screen flex justify-center items-center">
        <div className="w-full md:w-[40%] shadow-xl p-8 rounded-md border bg-slate-100">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form onSubmit={handleSubmit(submitHandler)} className="p-2">
          <div className="flex flex-col gap-2">
            <label>Username</label>
            <input
              type="text"
              name="name"
              {...register("name")}
              className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm bg-white"
              placeholder="Enter Username"
              onChange={inputChangeHandler}
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label>Password</label>
            <input
              type="password"
              name="pwd"
              {...register("password")}
              className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm bg-white"
              placeholder="Enter Password"
              onChange={inputChangeHandler}
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label>Session</label>
            <input
              type="text"
              name="session"
              {...register("session")}
              className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm bg-white"
              placeholder="Enter Session"
              onChange={inputChangeHandler}
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              {...register("dob")}
              className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm bg-white"
              placeholder="Enter Date of Birth"
              onChange={inputChangeHandler}
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label>Phone</label>
            <input
              type="number"
              name="phone"
              {...register("phone")}
              className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm bg-white"
              placeholder="Enter Phone Number"
              onChange={inputChangeHandler}
            />
          </div>
          <div className="mt-8 text-right">
          <button
            type="submit"
            className="px-8 py-2 text-md text-white rounded-full border border-teal-500 bg-teal-500 hover:bg-teal-400 hover:border-teal-400"
          >
            Create Account
          </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default SignUpPage;
