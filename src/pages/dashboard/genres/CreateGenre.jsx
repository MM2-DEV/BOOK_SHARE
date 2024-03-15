import React, { useEffect } from "react";
import { appendErrors, useForm } from "react-hook-form";
import { FaRegPaperPlane } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  createGenre,
  updateGenre,
} from "../../../store/actions/genres/genresActionHandlers";
import { useNavigate, useParams } from "react-router-dom";
import useGenre from "../../../hooks/useGenre";
import { yupResolver } from "@hookform/resolvers/yup";
import { createGenreSchema } from "../../../validation/dashboard/genre";
import { toast } from "react-toastify";

const CreateGenre = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createGenreSchema),
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const genreState = useGenre();

  const params = useParams();

  const {
    isCreateSuccess,
    isSingleSuccess,
    singleData,
    isUpdateSuccess,
    isCreateError,
    isUpdateError,
  } = genreState;

  console.log("isSingleSuccess", isSingleSuccess);
  console.log("singleData", singleData);

  const inputChangeHandler = (data) => {
    console.log("inputChangeHandler:");
  };

  const submitHandler = (data) => {
    console.log("submit handler :", data);

    const requestBody = {
      id: 11,
      name: data.name,
      description: data.description,
      date: data.date,
    };

    if (params.id) {
      dispatch(updateGenre({ requestBody: requestBody, id: params.id }));
    } else {
      dispatch(createGenre(requestBody));
    }
  };

  useEffect(() => {
    if (isCreateSuccess) {
      toast.success("Genre created successfully.", {
        position: "top-right",
      });

      navigate("/dashboard/genres");
    }

    if (isCreateError) {
      toast.error("Genre was not created.", {
        position: "top-right",
      });
    }
  }, [isCreateSuccess, isCreateError]);

  useEffect(() => {
    if (isUpdateSuccess) {
      toast.success("Genre updated successfully.", {
        position: "top-right",
      });
      navigate("/dashboard/genres");
    }

    if (isUpdateError) {
      toast.success("Genre was not updated.", {
        position: "top-right",
      });
    }
  }, [isUpdateSuccess, isUpdateError]);

  useEffect(() => {
    if (isSingleSuccess && singleData) {
      setValue("name", singleData.name);
      setValue("description", singleData.description);
      setValue("date", singleData.date);
    }
  }, [isSingleSuccess, singleData]);

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
                <p className=" text-red-600">{errors?.name?.message}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row  mt-2">
              <label className="basis-full md:basis-1/3 p-1 text-sm">
                Description
              </label>
              <div className="p-1 basis-full md:basis-3/3">
                <textarea
                  cols="30"
                  rows="3"
                  {...register("description")}
                  className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                  placeholder="Enter Description"
                ></textarea>
                <p className=" text-red-600">{errors?.description?.message}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <label className="basis-full md:basis-1/3 p-1 text-sm">
                Date
              </label>
              <div className="p-1 basis-full md:basis-3/3">
                <input
                  type="date"
                  name="date"
                  {...register("date")}
                  className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                  onChange={inputChangeHandler}
                />
                <p className="text-red-600">{errors?.date?.message}</p>
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

export default CreateGenre;
