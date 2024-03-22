import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegPaperPlane } from "react-icons/fa";

import useGenreList from "../../../hooks/useGenreList";
import useWriterList from "../../../hooks/useWriterList";
import useDonorList from "../../../hooks/useDonorList";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  createBook,
  updateBook,
} from "../../../store/actions/book/bookActionHandler";
import useBook from "../../../hooks/useBook";
import { yupResolver } from "@hookform/resolvers/yup";
import { createBookSchema } from "../../../validation/dashboard/book";
import { toast } from "react-toastify";

const CreateBook = () => {
  const {
    isListLoading: isGenreListLoading,
    listError: genreListError,
    listData: genreListData,
  } = useGenreList();

  const {
    isListLoading: isWriterListLoading,
    listError: writerListError,
    listData: writerListData,
  } = useWriterList();

  const { isListLoading, listError, listData } = useDonorList();

  const [isDonateOrBuy, setIsDonateOrBuy] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(createBookSchema),
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const params = useParams();

  const bookState = useBook();

  const {
    isCreateSuccess,
    isSingleSuccess,
    isUpdateSuccess,
    singleData,
    isCreateError,
    isUpdateError,
  } = bookState;

  const inputChangeHandler = (event) => {
    if (event.target.name === "isDonateOrBuy") {
      setIsDonateOrBuy(event.target.checked);
    }
  };

  const submitHandler = (data) => {
    console.log("submit handler :", data);

    const requestBody = {
      id: uuidv4(),
      nameEn: data.nameEn,
      nameBn: data.nameBn,
      image: data.image,
      isDonateOrBuy: data.isDonateOrBuy,
      totalAvailable: data.totalCount,
      totalCount: data.totalCount,
      totalReaders: [],
      edition: data.edition,
      genreId: Number(data.genreId) || "",
      writerId: Number(data.writerId) || "",
      bookDonorId: isDonateOrBuy ? Number(data.donorId) || "" : "",
      donateDate: isDonateOrBuy ? data.donateDate || "" : "",
      price: isDonateOrBuy ? 0 : data.price,
      purchaseDate: isDonateOrBuy ? "" : data.purchaseDate || "",
      isBorrowRequest: false,
      isShared: false,
    };

    if (params.id) {
      dispatch(updateBook({ requestBody: requestBody, id: params.id }));
    } else {
      dispatch(createBook(requestBody));
    }
  };

  useEffect(() => {
    if (isCreateSuccess) {
      toast.success("Book created successfully.", {
        position: "top-right",
      });

      navigate("/dashboard/books");
    }

    if (isCreateError) {
      toast.error("Book was not created.", {
        position: "top-right",
      });
    }
  }, [isCreateSuccess, isCreateError]);

  useEffect(() => {
    if (isUpdateSuccess) {
      toast.success("Book updated successfully.", {
        position: "top-right",
      });
      navigate("/dashboard/books");
    }

    if (isUpdateError) {
      toast.success("Book was not updated.", {
        position: "top-right",
      });
    }
  }, [isUpdateSuccess, isUpdateError]);

  useEffect(() => {
    if (isSingleSuccess && singleData) {
      setValue("nameEn", singleData.nameEn);
      setValue("nameBn", singleData.nameBn);
      setValue("image", singleData.image);
      setValue("totalCount", singleData.totalCount);
      setValue("edition", singleData.edition);
      setValue("genreId", singleData.genreId);
      setValue("writerId", singleData.writerId);
      setValue("donorId", singleData.bookDonorId);
      setValue("donateDate", singleData.donateDate);
      setValue("price", singleData.price);
      setValue("purchaseDate", singleData.purchaseDate);
      setValue("isDonateOrBuy", singleData.isDonateOrBuy);

      setIsDonateOrBuy(singleData.isDonateOrBuy);
    }
  }, [isSingleSuccess, singleData]);

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

                <p className=" text-red-600">{errors?.nameEn?.message}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <label className="basis-full md:basis-1/3 p-1 text-sm">
                Name in Bengali
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
                <p className=" text-red-600">{errors?.nameBn?.message}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <label className="basis-full md:basis-1/3 p-1 text-sm">
                Image
              </label>
              <div className="p-1 basis-full md:basis-3/3">
                <input
                  type="url"
                  name="image"
                  {...register("image")}
                  className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                  placeholder="Enter Valid Image Url"
                  onChange={inputChangeHandler}
                />
                <p className=" text-red-600">{errors?.image?.message}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row text-sm">
              <label className="basis-full md:basis-1/3 p-1">Quantity</label>
              <div className="p-1 basis-full md:basis-3/3">
                <input
                  type="number"
                  name="totalCount"
                  {...register("totalCount")}
                  className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                  placeholder="Enter Quantity"
                  onChange={inputChangeHandler}
                />
                <p className=" text-red-600">{errors?.totalCount?.message}</p>
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
                  placeholder="Enter Edition"
                  onChange={inputChangeHandler}
                />
                <p className=" text-red-600">{errors?.edition?.message}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row text-sm">
              <label className="basis-full md:basis-1/3 p-1">Genre</label>
              <div className="p-1 basis-full md:basis-3/3">
                <select
                  {...register("genreId")}
                  className="w-full bg-white p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                >
                  <option value="">Select</option>
                  {genreListData
                    ? genreListData.map((item, index) => {
                        return (
                          <option key={index} value={item.id}>
                            {item.name}
                          </option>
                        );
                      })
                    : ""}
                </select>
                <p className=" text-red-600">{errors?.genreId?.message}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row text-sm">
              <label className="basis-full md:basis-1/3 p-1">Writer</label>
              <div className="p-1 basis-full md:basis-3/3">
                <select
                  {...register("writerId")}
                  className="w-full bg-white p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                >
                  <option value="">Select</option>
                  {writerListData
                    ? writerListData.map((item, index) => {
                        return (
                          <option key={index} value={item.id}>
                            {item.name}
                          </option>
                        );
                      })
                    : ""}
                </select>
                <p className=" text-red-600">{errors?.writerId?.message}</p>
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
                  onChange={(event) => inputChangeHandler(event)}
                />
                <p className=" text-red-600">
                  {errors?.isDonateOrBuy?.message}
                </p>
              </div>
            </div>

            {isDonateOrBuy ? (
              <>
                {" "}
                <div className="flex flex-col md:flex-row text-sm">
                  <label className="basis-full md:basis-1/3 p-1">Donor</label>
                  <div className="p-1 basis-full md:basis-3/3">
                    <select
                      {...register("donorId")}
                      className="w-full bg-white p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                    >
                      <option value="">Select</option>
                      {listData
                        ? listData.map((item, index) => {
                            return (
                              <option key={index} value={item.id}>
                                {item.name}
                              </option>
                            );
                          })
                        : ""}
                    </select>
                    <p className=" text-red-600">{errors?.donorId?.message}</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row text-sm">
                  <label className="basis-full md:basis-1/3 p-1">
                    Donate Date
                  </label>
                  <div className="p-1 basis-full md:basis-3/3">
                    <input
                      type="date"
                      name="donateDate"
                      {...register("donateDate")}
                      className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                      onChange={inputChangeHandler}
                    />
                    <p className=" text-red-600">
                      {errors?.donateDate?.message}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
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
                    <p className=" text-red-600">{errors?.price?.message}</p>
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
                    <p className=" text-red-600">
                      {errors?.purchaseDate?.message}
                    </p>
                  </div>
                </div>
              </>
            )}

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

export default CreateBook;
