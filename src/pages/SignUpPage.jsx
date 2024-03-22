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
    <div className="mt-8">
      <div className="w-[40%] shadow-xl p-4 rounded-md mx-auto bg-[#9FE2BF] ">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="flex flex-col">
            <label>Username</label>
            <input
              type="text"
              name="name"
              {...register("name")}
              className="p-2 border rounded-md border-gray-400"
              placeholder="Enter Username"
              onChange={inputChangeHandler}
            />
          </div>
          <div className="flex flex-col mt-2">
            <label>Password</label>
            <input
              type="password"
              name="pwd"
              {...register("password")}
              className="p-2 border rounded-md border-gray-400"
              placeholder="Enter Password"
              onChange={inputChangeHandler}
            />
          </div>
          <div className="flex flex-col mt-2">
            <label>Session</label>
            <input
              type="text"
              name="session"
              {...register("session")}
              className="p-2 border rounded-md border-gray-400"
              placeholder="Enter Session"
              onChange={inputChangeHandler}
            />
          </div>
          <div className="flex flex-col mt-2">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              {...register("dob")}
              className="p-2 border rounded-md border-gray-400"
              placeholder="Enter Date of Birth"
              onChange={inputChangeHandler}
            />
          </div>
          <div className="flex flex-col mt-2">
            <label>Phone</label>
            <input
              type="number"
              name="phone"
              {...register("phone")}
              className="p-2 border rounded-md border-gray-400"
              placeholder="Enter Phone Number"
              onChange={inputChangeHandler}
            />
          </div>
          <button
            type="submit"
            className="w-full border rounded-md bg-[#000080] hover:bg-[#7575cf] text-white mt-4 p-2"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
