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

  console.log("isDonateOrBuy", isDonateOrBuy);

  const { register, handleSubmit, setValue } = useForm();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const params = useParams();

  const bookState = useBook();

  const { isCreateSuccess, isSingleSuccess, isUpdateSuccess, singleData } =
    bookState;

  const inputChangeHandler = (event) => {
    console.log("inputChangeHandler:", event.target.checked);

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
      isDonateOrBuy: data.isDonateOrBuy,
      totalAvailable: Number(data.totalAvailable),
      totalCount: Number(data.totalCount),
      edition: Number(data.edition),
      genreId: Number(data.genreId),
      writerId: Number(data.writerId),
      bookDonorId: Number(data.writerId),
      donateDate: data.donateDate,
      purchaseDate: data.purchaseDate,
      price: Number(data.price),
    };

    if (params.id) {
      dispatch(updateBook({ requestBody: requestBody, id: params.id }));
    } else {
      dispatch(createBook(requestBody));
    }
  };

  useEffect(() => {
    if (isUpdateSuccess) {
      navigate("/dashboard/books");
    }
  }, [isUpdateSuccess]);

  useEffect(() => {
    if (isSingleSuccess && singleData) {
      setValue("nameEn", singleData.nameEn);
      setValue("nameBn", singleData.nameBn);
      setValue("totalCount", singleData.totalCount);
      setValue("edition", singleData.edition);
      setValue("genre", singleData.genre);
      setValue("writer", singleData.writer);
      setValue("donor", singleData.donor);
      setValue("donateDate", singleData.donateDate);
      setValue("price", singleData.price);
      setValue("purchaseDate", singleData.purchaseDate);
    }
  }, [isSingleSuccess, singleData]);

  useEffect(() => {
    if (isCreateSuccess) {
      navigate("/dashboard/books");
    }
  }, [isCreateSuccess]);

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
                  {genreListData
                    ? genreListData.map((item, index) => {
                        return <option value={item.id}>{item.name}</option>;
                      })
                    : ""}
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
                  {writerListData
                    ? writerListData.map((item, index) => {
                        return <option value={item.id}>{item.name}</option>;
                      })
                    : ""}
                </select>
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
              </div>
            </div>

            {isDonateOrBuy ? (
              <>
                {" "}
                <div className="flex flex-col md:flex-row text-sm">
                  <label className="basis-full md:basis-1/3 p-1">Donor</label>
                  <div className="p-1 basis-full md:basis-3/3">
                    <select
                      {...register("donor")}
                      className="w-full bg-white p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                    >
                      <option value="">Select</option>
                      {listData
                        ? listData.map((item, index) => {
                            return <option value={item.id}>{item.name}</option>;
                          })
                        : ""}
                    </select>
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
