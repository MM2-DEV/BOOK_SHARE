import React from "react";
import { useForm } from "react-hook-form";

const CreateBook = () => {
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
        <h2 className="text-xl">Add Book</h2>
        <p className="text-xs">Add new book to this virtual library</p>
      </div>

      <div className="mt-5 bg-slate-100 p-3 rounded-lg">
        <div>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-col md:flex-row">
              <label className="basis-full md:basis-1/3 p-1 text-sm">
                Name in English
              </label>
              <div className="p-1 basis-full md:basis-3/3">
                <input
                  type="text"
                  name="nameEn"
                  {...register("nameEn")}
                  className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                  placeholder="Enter Name in English"
                  onChange={inputChangeHandler}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <label className="basis-full md:basis-1/3 p-1 text-sm">
                Name in Bangla
              </label>
              <div className="p-1 basis-full md:basis-3/3">
                <input
                  type="text"
                  name="nameBn"
                  {...register("nameBn")}
                  className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                  placeholder="Enter Name in Bangla"
                  onChange={inputChangeHandler}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <label className="basis-full md:basis-1/3 p-1 text-sm">
                Image
              </label>
              <div className="p-1 basis-full md:basis-3/3">
                <input
                  type="file"
                  name="image"
                  {...register("image")}
                  className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                  placeholder="Enter Image"
                  onChange={inputChangeHandler}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row text-sm">
              <label className="basis-full md:basis-1/3 p-1">
                Total Available
              </label>
              <div className="p-1 basis-full md:basis-3/3">
                <input
                  type="number"
                  name="totalAvailable"
                  {...register("totalAvailable")}
                  className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                  placeholder="Enter Total Available"
                  onChange={inputChangeHandler}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row text-sm">
              <label className="basis-full md:basis-1/3 p-1">Edition</label>
              <div className="p-1 basis-full md:basis-3/3">
                <input
                  type="number"
                  name="edition"
                  {...register("edition")}
                  className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                  placeholder="Enter Edition "
                  onChange={inputChangeHandler}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row text-sm">
              <label className="basis-full md:basis-1/3 p-1">Genre</label>
              <div className="p-1 basis-full md:basis-3/3">
                <select
                  {...register("genre")}
                  className="w-full bg-white p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                >
                  <option value="">Select</option>
                  <option value="mystery">Mystery</option>
                  <option value="poetry">Poetry</option>
                  <option value="thriller">Thriller</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col md:flex-row text-sm">
              <label className="basis-full md:basis-1/3 p-1">Writer</label>
              <div className="p-1 basis-full md:basis-3/3">
                <select
                  {...register("writer")}
                  className="w-full bg-white p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col md:flex-row text-sm">
              <label className="basis-full md:basis-1/3 p-1">Quantity</label>
              <div className="p-1 basis-full md:basis-3/3">
                <input
                  type="number"
                  name="buyQty"
                  {...register("buyQty")}
                  className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                  placeholder="Enter Quantity "
                  onChange={inputChangeHandler}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row text-sm">
              <label className="basis-full md:basis-1/3 p-1">
                Donate or Buy
              </label>
              <div className="p-1 basis-full md:basis-3/3">
                <input
                  type="checkbox"
                  name="isDonateOrBuy"
                  {...register("isDonateOrBuy")}
                  className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                  onChange={inputChangeHandler}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row text-sm">
              <label className="basis-full md:basis-1/3 p-1">Donor</label>
              <div className="p-1 basis-full md:basis-3/3">
                <select
                  {...register("donor")}
                  className="w-full bg-white p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col md:flex-row text-sm">
              <label className="basis-full md:basis-1/3 p-1">Donate Date</label>
              <div className="p-1 basis-full md:basis-3/3">
                <input
                  type="date"
                  name="donateDate"
                  {...register("donateDate")}
                  className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                  onChange={inputChangeHandler}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row text-sm">
              <label className="basis-full md:basis-1/3 p-1">Price</label>
              <div className="p-1 basis-full md:basis-3/3">
                <input
                  type="number"
                  name="price"
                  {...register("price")}
                  className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                  placeholder="Enter Price "
                  onChange={inputChangeHandler}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row text-sm">
              <label className="basis-full md:basis-1/3 p-1">
                Purchase Date
              </label>
              <div className="p-1 basis-full md:basis-3/3">
                <input
                  type="date"
                  name="purchaseDate"
                  {...register("purchaseDate")}
                  className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
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

export default CreateBook;
