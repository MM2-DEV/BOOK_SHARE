import React from "react";
import { useForm } from "react-hook-form";

const CreateGenre = () => {
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
        <h2 className="text-xl">Add Genre</h2>
        <p className="text-xs">Add new genre to this virtual library</p>
      </div>

      <div className="mt-5 bg-slate-100 p-3 rounded-lg">
        <div>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-col md:flex-row">
              <label className="basis-full md:basis-1/3 p-1 text-sm">
                Name
              </label>
              <div className="p-1 basis-full md:basis-3/3">
                <input
                  type="text"
                  name="name"
                  {...register("name")}
                  className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                  placeholder="Enter Name"
                  onChange={inputChangeHandler}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row  mt-2">
              <label className="basis-full md:basis-1/3 p-1 text-sm">
                Description
              </label>
              <textarea
                cols="30"
                rows="3"
                className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                placeholder="Enter Description"
              ></textarea>
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

export default CreateGenre;
