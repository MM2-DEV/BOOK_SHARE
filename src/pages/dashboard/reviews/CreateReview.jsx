import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaRegPaperPlane } from "react-icons/fa";
import useBookList from "../../../hooks/useBookList";
import { useDispatch } from "react-redux";
import {
  createReview,
  updateReview,
} from "../../../store/actions/reviews/reviewsActionHandlers";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import useReview from "../../../hooks/useReview";
import { yupResolver } from "@hookform/resolvers/yup";
import { createReviewSchema } from "../../../validation/dashboard/review";
import { toast } from "react-toastify";

const CreateReview = () => {
  const params = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createReviewSchema),
  });

  const navigate = useNavigate();

  const reviewState = useReview();

  const {
    isCreateSuccess,
    isSingleSuccess,
    isUpdateSuccess,
    singleData,
    isCreateError,
    isUpdateError,
  } = reviewState;

  const { isListLoading, listError, listData } = useBookList();

  const dispatch = useDispatch();

  const inputChangeHandler = (data) => {};

  const submitHandler = (data) => {
    const requestBody = {
      id: uuidv4(),
      bookId: Number(data.book),
      userId: 1,
      reviewContent: data.reviewContent,
      date: data.date,
    };

    console.log("requestBody",requestBody)

    if (params.id) {
      dispatch(updateReview({ requestBody: requestBody, id: params.id }));
    } else {
      dispatch(createReview(requestBody));
    }
  };

  useEffect(() => {
    if (isCreateSuccess) {
      toast.success("Review created successfully.", {
        position: "top-right",
      });

      navigate("/dashboard/reviews");
    }

    if (isCreateError) {
      toast.error("Review was not created.", {
        position: "top-right",
      });
    }
  }, [isCreateSuccess, isCreateError]);

  useEffect(() => {
    if (isUpdateSuccess) {
      toast.success("Review updated successfully.", {
        position: "top-right",
      });
      navigate("/dashboard/reviews");
    }

    if (isUpdateError) {
      toast.success("Review was not updated.", {
        position: "top-right",
      });
    }
  }, [isUpdateSuccess, isUpdateError]);

  useEffect(() => {
    if (isSingleSuccess && singleData) {
      setValue("book", singleData.book);
      setValue("reviewContent", singleData.reviewContent);
      setValue("date", singleData.date);
    }
  }, [isSingleSuccess, singleData]);

  return (
    <div className="w-full">
      <div className="bg-slate-100 p-3 rounded-lg">
        <h2 className="text-xl">Add Review</h2>
        <p className="text-xs">Add new review to this virtual library</p>
      </div>

      <div className="mt-5 bg-slate-100 p-3 rounded-lg">
        <div>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-col md:flex-row text-sm">
              <label className="basis-full md:basis-1/3 p-1">Book</label>
              <div className="p-1 basis-full md:basis-3/3">
                <select
                  {...register("book")}
                  className="w-full bg-white p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                >
                  <option value="">Select</option>
                  {listData
                    ? listData.map((item, index) => {
                        return <option value={item.id} key={index}>{item.nameEn}</option>;
                      })
                    : ""}
                </select>
                <p className=" text-red-600">{errors?.book?.message}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row  mt-2">
              <label className="basis-full md:basis-1/3 p-1 text-sm">
                Review
              </label>
              <div className="p-1 basis-full md:basis-3/3">
                <textarea
                  cols="30"
                  rows="3"
                  {...register("reviewContent")}
                  className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                  placeholder="Enter Review"
                ></textarea>
                <p className=" text-red-600">
                  {errors?.reviewContent?.message}
                </p>
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
                className="px-3 rounded-md py-1 border border-green-600 ml-auto text-sm flex items-center justify-center"
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

export default CreateReview;
