import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signInSchema } from "../validation/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../store/actions/authentication/authActionHandlers";
import { toast } from "react-toastify";
import { getLocalStorageItem, setLocalStorage } from "../utils/utils";

const SignInPage = () => {
  const navigate = useNavigate();

  const localStorageAuthData = getLocalStorageItem("user");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(signInSchema),
  });

  const authState = useSelector((store) => store.auth);
  
  const {
    isCreateSignInLoading,
    isCreateSignInError,
    isCreateSignInSuccess,
    createSignInError,
    createSignInData,
  } = authState;

  const dispatch = useDispatch();

  const submitHandler = (data) => {
    dispatch(signIn(data));
  };

  useEffect(() => {
    if (!isCreateSignInLoading && isCreateSignInSuccess && createSignInData) {
      toast.success("Sign in successfully.", {
        position: "top-right",
      });

      setLocalStorage("user", createSignInData);

      navigate("/");
    }

    if (!isCreateSignInLoading && isCreateSignInError && isCreateSignInError) {
      toast.error(`${createSignInError.message}`, {
        position: "top-right",
      });
    }
  }, [
    isCreateSignInLoading,
    isCreateSignInSuccess,
    isCreateSignInError,
    createSignInError,
    createSignInData,
  ]);

  if (localStorageAuthData) {
    return <Navigate to="/" />;
  } else {
    return (
      <div className="container w-full">
        <div className="w-full bg-white p-4 min-h-screen flex justify-center items-center">
          <div className="w-full md:w-[40%] shadow-xl p-8 rounded-md border bg-slate-100">
            <h1 className="text-2xl font-bold text-center">Sign in</h1>

            <form onSubmit={handleSubmit(submitHandler)} className="p-2">
              <div className="flex flex-col gap-2">
                <label className="text-md">Email</label>
                <input
                  type="email"
                  name="email"
                  {...register("email")}
                  className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm bg-white"
                  placeholder="Enter Email"
                />
                {errors.email && (
                  <p className=" text-red-600">{errors?.email?.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-2 mt-8">
                <label className="text-md">Password</label>
                <input
                  type="password"
                  name="password"
                  {...register("password")}
                  className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm bg-white"
                  placeholder="Enter Password"
                />
                {errors.password && (
                  <p className=" text-red-600">{errors?.password?.message}</p>
                )}
              </div>
              <div className=" mt-2">
                <span className="underline ml-2">
                  <Link to="#">Forgot password?</Link>
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
  }
};

export default SignInPage;
