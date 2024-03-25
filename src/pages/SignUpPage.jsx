import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { signUpSchema } from "../validation/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../store/actions/authentication/authActionHandlers";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(signUpSchema),
  });

  const authState = useSelector((store) => store.auth);
  const { isCreateSignUpError, isCreateSignUpSuccess } = authState;

  const dispatch = useDispatch();

  const inputChangeHandler = (data) => {};

  const submitHandler = (data) => {
    const requestBody = {
      id: uuidv4(),
      name: data.name,
      email: data.email,
      password: data.password,
      session: data.session,
      semester: data.semester,
      studentId: data.studentId,
      roleId: 1,
      dob: data.dob,
    };

    dispatch(signUp(requestBody));
  };

  useEffect(() => {
    if (isCreateSignUpSuccess) {
      toast.success("Sign Up successfully.", {
        position: "top-right",
      });

      navigate("/sign-in");
    }

    if (isCreateSignUpError) {
      toast.error("Account was not created.", {
        position: "top-right",
      });
    }
  }, [isCreateSignUpSuccess, isCreateSignUpError]);

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
              {errors.name && (
                <p className=" text-red-600">{errors?.name?.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label>Email</label>
              <input
                type="email"
                name="email"
                {...register("email")}
                className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm bg-white"
                placeholder="Enter Email"
                onChange={inputChangeHandler}
              />
              {errors.email && (
                <p className=" text-red-600">{errors?.email?.message}</p>
              )}
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
              {errors.password && (
                <p className=" text-red-600">{errors?.password?.message}</p>
              )}
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
              {errors.session && (
                <p className=" text-red-600">{errors?.session?.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <label>Semester</label>
              <input
                type="text"
                name="semester"
                {...register("semester")}
                className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm bg-white"
                placeholder="Enter Semester"
                onChange={inputChangeHandler}
              />
              {errors.semester && (
                <p className=" text-red-600">{errors?.semester?.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <label>Student ID</label>
              <input
                type="text"
                name="studentId"
                {...register("studentId")}
                className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm bg-white"
                placeholder="Enter Student ID"
                onChange={inputChangeHandler}
              />
              {errors.studentId && (
                <p className=" text-red-600">{errors?.studentId?.message}</p>
              )}
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
              {errors.dob && (
                <p className=" text-red-600">{errors?.dob?.message}</p>
              )}
            </div>

            <div className=" mt-2">
              <span className="underline ml-2">
                Have you already an account ?
              </span>
              <span className="underline ml-2">
                <Link to="/sign-in">Sign in</Link>
              </span>
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
