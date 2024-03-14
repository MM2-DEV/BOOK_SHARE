import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaRegPaperPlane } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  createWriter,
  updateWriter,
} from "../../../store/actions/writers/writersActionHandlers";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import useWriter from "../../../hooks/useWriter";

const CreateWriter = () => {

  const params = useParams();
  const { register, handleSubmit, setValue } = useForm();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const writerState = useWriter();

  const { isCreateSuccess, isUpdateSuccess, isSingleSuccess, singleData } = writerState;

  console.log("singleData", singleData)

  const inputChangeHandler = (data) => {
    console.log("inputChangeHandler:");
  };

  const submitHandler = (data) => {
    console.log("submit handler :", data);


    const requestBody = {
      id: uuidv4(),
      name: data.name,
      dob: data.dob,
      phone: data.phone,
      gmail: data.gmail,
    };

    if (params.id) {
      dispatch(updateWriter({ requestBody: requestBody, id: params.id }));
    } else {
      dispatch(createWriter(requestBody));
      
    }
  };

  useEffect(() => {
    if (isUpdateSuccess) {
      navigate("/dashboard/writers");
    }
  }, [isUpdateSuccess]);

  useEffect(() => {
    if (isSingleSuccess && singleData) {
      setValue("name", singleData.name);
      setValue("dob", singleData.dob);
      setValue("phone", singleData.phone);
      setValue("gmail", singleData.gmail);
    }
  }, [isSingleSuccess, singleData]);


  useEffect(() => {
    if (isCreateSuccess) {
      navigate("/Dashboard/writers");
    }
  }, [isCreateSuccess]);

  return (
    <div className="w-full">
      <div className="bg-slate-100 p-3 rounded-lg">
        <h2 className="text-xl">Add Writer</h2>
        <p className="text-xs">Add new writer to this virtual library</p>
      </div>

      <div className="mt-5 bg-slate-100 p-3 rounded-lg">
        <div>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-col md:flex-row">
              <label className="basis-full md:basis-1/3 p-1 text-sm">
                User Name
              </label>
              <div className="p-1 basis-full md:basis-3/3">
                <input
                  type="text"
                  name="name"
                  {...register("name")}
                  className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                  placeholder="Enter Username"
                  onChange={inputChangeHandler}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <label className="basis-full md:basis-1/3 p-1 text-sm">
                Date of Birth
              </label>
              <div className="p-1 basis-full md:basis-3/3">
                <input
                  type="date"
                  name="dob"
                  {...register("dob")}
                  className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                  placeholder="Enter Date of Birth"
                  onChange={inputChangeHandler}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row text-sm">
              <label className="basis-full md:basis-1/3 p-1">Phone</label>
              <div className="p-1 basis-full md:basis-3/3">
                <input
                  type="number"
                  name="phone"
                  {...register("phone")}
                  className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                  placeholder="Enter Phone Number"
                  onChange={inputChangeHandler}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row text-sm">
              <label className="basis-full md:basis-1/3 p-1">Email</label>
              <div className="p-1 basis-full md:basis-3/3">
                <input
                  type="email"
                  name="email"
                  {...register("gmail")}
                  className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                  placeholder="Enter Email"
                  onChange={inputChangeHandler}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row text-sm">
              <label className="basis-full md:basis-1/3 p-1">Image</label>
              <div className="p-1 basis-full md:basis-3/3">
                <input
                  type="file"
                  name="image"
                  {...register("images")}
                  className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                  placeholder="Enter Image"
                  onChange={inputChangeHandler}
                />
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

export default CreateWriter;
