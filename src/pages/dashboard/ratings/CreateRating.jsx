import React from "react";
import { useForm } from "react-hook-form";
import { FaRegPaperPlane } from "react-icons/fa";
import useBookList from "../../../hooks/useBookList";
import { useDispatch } from "react-redux";
import { createRating } from "../../../store/actions/ratings/ratingsActionHandler";

const CreateRating = () => {
  const { register, handleSubmit } = useForm();

  const { isListLoading, listError, listData } = useBookList();

  const dispatch = useDispatch();

  const inputChangeHandler = (data) => {
    console.log("inputChangeHandler:");
  };

  const submitHandler = (data) => {
    console.log("submit handler :", data);

    const requestBody = {
      id: 2,
      bookId: Number(data.book),
      userId: 1,
      ratingValue: data.ratingValue,
      date: data.date,
    };

    dispatch(createRating(requestBody));
  };

  return (
    <div className="w-full">
      <div className="bg-slate-100 p-3 rounded-lg">
        <h2 className="text-xl">Add Rating</h2>
        <p className="text-xs">Add new rating to this virtual library</p>
      </div>

      <div className="mt-5 bg-slate-100 p-3 rounded-lg">
        <div>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-col md:flex-row text-sm">
              <label className="basis-full md:basis-1/3 p-1">Book Name</label>
              <div className="p-1 basis-full md:basis-3/3">
                <select
                  {...register("book")}
                  className="w-full bg-white p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                >
                  <option value="">Select</option>
                  {listData
                    ? listData.map((item, index) => {
                        return <option value={item.id}>{item.nameEn}</option>;
                      })
                    : ""}
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
                className="px-3 rounded-md py-1 border border-green-600 text-sm flex items-center justify-center ml-auto"
              >
                Submit <FaRegPaperPlane size={15} className="ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateRating;
