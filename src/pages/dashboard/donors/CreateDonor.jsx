import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaRegPaperPlane } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  createDonor,
  updateDonor,
} from "../../../store/actions/donors/donorsActionHandlers";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import useDonor from "../../../hooks/useDonor";

const CreateDonor = () => {
  const { register, handleSubmit, setValue } = useForm();

  const navigate = useNavigate();

  const donorState = useDonor();

  const params = useParams();

  const dispatch = useDispatch();

  const { isCreateSuccess, isSingleSuccess, singleData, isUpdateSuccess } =
    donorState;

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
      dispatch(updateDonor({ requestBody: requestBody, id: params.id }));
    } else {
      dispatch(createDonor(requestBody));
    }
  };

  useEffect(() => {
    if (isUpdateSuccess) {
      navigate("/dashboard/donors");
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
      navigate("/Dashboard/donors");
    }
  }, [isCreateSuccess]);

  return (
    <div className="w-full">
      <div className="bg-slate-100 p-3 rounded-lg">
        <h2 className="text-xl">Add Donor</h2>
        <p className="text-xs">Add new donor to this virtual library</p>
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
                  {...register("image")}
                  className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                  placeholder="Enter Image"
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

export default CreateDonor;
