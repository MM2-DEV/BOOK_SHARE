import React, { useState } from "react";

const SignIn = () => {

  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    setUser(()=>{
      return{
        
      }
    })
  };

  const inputChangeHandler = () => {
    setUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="mt-8">
      <div className="w-[40%] shadow-xl p-4 rounded-md mx-auto bg-gray-400 ">
        <h1 className="text-2xl font-bold text-center">Sign in</h1>
        <form onSubmit={submitHandler}>
          <div className="flex flex-col">
            <label>Username</label>
            <input
              type="text"
              name="name"
              className="p-2 border rounded-md border-gray-400"
              placeholder="Enter Username"
              value={user.name}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="flex flex-col mt-2">
            <label>Password</label>
            <input
              type="text"
              name="pwd"
              className="p-2 border rounded-md border-gray-400"
              placeholder="Enter Password"
              value={user.pwd}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="mt-4 text-center">
            <button
              type="submit"
              className="w-[80px] text-white p-2 border rounded-md bg-[#154a54]"
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

export default SignIn;
