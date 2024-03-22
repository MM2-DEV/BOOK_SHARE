import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaRegPaperPlane } from "react-icons/fa";
import useBookList from "../../../hooks/useBookList";
import { useDispatch } from "react-redux";
import {
  createRating,
  updateRating,
} from "../../../store/actions/ratings/ratingsActionHandler";
import { useNavigate, useParams } from "react-router-dom";
import useRating from "../../../hooks/useRating";
import { v4 as uuidv4 } from 'uuid';
import { yupResolver } from "@hookform/resolvers/yup";
import { createRatingSchema } from "../../../validation/dashboard/rating";
import { toast } from "react-toastify";



const CreateRating = () => {
  const { register, handleSubmit, setValue, formState: {errors} } = useForm({
    resolver: yupResolver(createRatingSchema),
  });

  const navigate = useNavigate();

  const ratingState = useRating();

  const params = useParams();

  const { isCreateSuccess, isSingleSuccess,  isUpdateSuccess, singleData, isCreateError, isUpdateError } = ratingState;

  const { isListLoading, listError, listData } = useBookList();

  const dispatch = useDispatch();

  const inputChangeHandler = (data) => {
    
  };

  const submitHandler = (data) => {
 

    const requestBody = {
      id: uuidv4(),
      bookId: Number(data.book),
      userId: 1,
      ratingValue: data.ratingValue,
      date: data.date,
    };

    if (params.id) {
      dispatch(updateRating({ requestBody: requestBody, id: params.id }));
    } else {
      dispatch(createRating(requestBody));
    }
  };

  useEffect(() => {
    if (isCreateSuccess) {
      toast.success("Rating created successfully.", {
        position: "top-right",
      });

      navigate("/dashboard/ratings");
    }

    if (isCreateError) {
      toast.error("Rating was not created.", {
        position: "top-right",
      });
    }
  }, [isCreateSuccess, isCreateError]);

  useEffect(() => {
    if (isUpdateSuccess) {
      toast.success("Rating updated successfully.", {
        position: "top-right",
      });
      navigate("/dashboard/ratings");
    }

    if (isUpdateError) {
      toast.success("Rating was not updated.", {
        position: "top-right",
      });
    }
  }, [isUpdateSuccess, isUpdateError]);


  useEffect(() => {
    if (isSingleSuccess && singleData) {
      setValue("book", singleData.book);
      setValue("ratingValue", singleData.ratingValue);
      setValue("date", singleData.date);
    }
  }, [isSingleSuccess, singleData]);

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
                <p className=" text-red-600">{errors?.book?.message}</p>

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
                <p className=" text-red-600">{errors?.ratingValue?.message}</p>

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
                <p className=" text-red-600">{errors?.date?.message}</p>

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
