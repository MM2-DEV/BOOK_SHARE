import React from "react";

const SignUpPage = () => {
  return (
    <div className="mt-8">
      <div className="w-[40%] shadow-xl p-4 rounded-md mx-auto bg-[#9FE2BF] ">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form>
          <div className="flex flex-col">
            <label>Username</label>
            <input
              type="text"
              name="name"
              className="p-2 border rounded-md border-gray-400"
              placeholder="Enter Username"
            />
          </div>
          <div className="flex flex-col mt-2">
            <label>Password</label>
            <input
              type="text"
              name="pwd"
              className="p-2 border rounded-md border-gray-400"
              placeholder="Enter Password"
            />
          </div>
          <div className="flex flex-col mt-2">
            <label>Session</label>
            <input
              type="text"
              name="session"
              className="p-2 border rounded-md border-gray-400"
              placeholder="Enter Session"
            />
          </div>
          <div className="flex flex-col mt-2">
            <label>Date of Birth</label>
            <input
              type="date"
              name="birthday"
              className="p-2 border rounded-md border-gray-400"
            />
          </div>
          <div className="flex flex-col mt-2">
            <label>Phone</label>
            <input
              type="number"
              name="phone"
              className="p-2 border rounded-md border-gray-400"
              placeholder="Enter Phone Number"
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
