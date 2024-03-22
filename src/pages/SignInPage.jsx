import React from "react";
import { useForm } from "react-hook-form";

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
    <div className="mt-8">
      <div className="w-[40%] shadow-xl p-4 rounded-md mx-auto bg-gray-400 ">
        <h1 className="text-2xl font-bold text-center">Sign in</h1>
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
          <div className="mt-4 text-center">
            <button
              type="submit"
              className="w-[80px] text-white p-2 border rounded-md bg-[#154a54] hover:bg-[#4b8c99]"
            >
              Submit
            </button>
          </div>
          <p className="text-center underline mt-2">
            Forget password ? Sign up
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
