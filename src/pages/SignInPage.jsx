import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      password: "",
    },
  });

  const inputChangeHandler = (data) => {};

  const submitHandler = (data) => {};

  return (
    <div className="container w-full">
      <div className="w-full bg-white p-4 min-h-screen flex justify-center items-center">
        <div className="w-full md:w-[40%] shadow-xl p-8 rounded-md border bg-slate-100">
          <h1 className="text-2xl font-bold text-center">Sign in</h1>

          <form onSubmit={handleSubmit(submitHandler)} className="p-2">
            <div className="flex flex-col gap-2">
              <label className="text-md">Username</label>
              <input
                type="text"
                name="name"
                {...register("name")}
                className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm bg-white"
                placeholder="Enter Username"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="flex flex-col gap-2 mt-8">
              <label className="text-md">Password</label>
              <input
                type="password"
                name="pwd"
                {...register("password")}
                className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm bg-white"
                placeholder="Enter Password"
                onChange={inputChangeHandler}
              />
            </div>
            <div className=" mt-2">
              <span className="underline ml-2">
                <Link to="#">Forget password?</Link>
              </span>
              <span className="underline ml-2">
                <Link to="/sign-up">Sign up</Link>
              </span>
            </div>
            <div className="mt-8 text-right">
              <button
                type="submit"
                className="px-8 py-2 text-md text-white rounded-full border border-teal-500 bg-teal-500 hover:bg-teal-400 hover:border-teal-400"
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

export default SignInPage;
