import React from 'react'
import { useForm } from "react-hook-form";

const CreateReader = () => {
    const { register, handleSubmit } = useForm();

    const inputChangeHandler = (data) => {
      
    };
  
    const submitHandler = (data) => {
      
    };
  
    return (
      <div className="w-full">
        <div className="bg-slate-100 p-3 rounded-lg">
          <h2 className="text-xl">Add Reader</h2>
          <p className="text-xs">Add new reader to this virtual library</p>
        </div>
  
        <div className="mt-5 bg-slate-100 p-3 rounded-lg">
          <div>
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className="flex flex-col md:flex-row text-sm">
                <label className="basis-full md:basis-1/3 p-1">Book Name</label>
                <div className="p-1 basis-full md:basis-3/3">
                  <select
                    {...register("bookName")}
                    className="w-full bg-white p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                  >
                    <option value="">Select</option>
                    <option value="Bela furabar age">Bela furabar age</option>
                    <option value="Message">Message</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </div>
  
              <div className="flex flex-col md:flex-row text-sm">
                <label className="basis-full md:basis-1/3 p-1">
                  Rating Value
                </label>
                <div className="p-1 basis-full md:basis-3/3">
                  <input
                    type="number"
                    name="ratingValue"
                    {...register("ratingValue")}
                    className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                    placeholder="Enter Rating Value "
                    onChange={inputChangeHandler}
                  />
                </div>
              </div>
  
              <div className="flex flex-col md:flex-row text-sm">
                <label className="basis-full md:basis-1/3 p-1">Date</label>
                <div className="p-1 basis-full md:basis-3/3">
                  <input
                    type="date"
                    name="date"
                    {...register("date")}
                    className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                    placeholder="Enter Date"
                    onChange={inputChangeHandler}
                  />
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


export default CreateReader