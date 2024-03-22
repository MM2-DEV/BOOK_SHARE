import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaRegPaperPlane } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import { createContactSchema } from "../validation/dashboard/contact";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import useContact from "../hooks/useContact";
import { v4 as uuidv4 } from "uuid";
import {
  createContactRequest,
  updateContactRequest,
} from "../store/actions/contact/contactActionHandlers";
import { toast } from "react-toastify";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createContactSchema),
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const contactState = useContact();

  const params = useParams();

  const {
    isCreateSuccess,
    isSingleSuccess,
    singleData,
    isUpdateSuccess,
    isCreateError,
    isUpdateError,
  } = contactState;

  const inputChangeHandler = (data) => {};

  const submitHandler = (data) => {
    const requestBody = {
      id: uuidv4(),
      name: data.name,
      email: data.email,
      title: data.title,
      message: data.message,
    };

    if (params.id) {
      dispatch(
        updateContactRequest({ requestBody: requestBody, id: params.id })
      );
    } else {
      dispatch(createContactRequest(requestBody));
    }
  };

  useEffect(() => {
    if (isCreateSuccess) {
      toast.success("Contact request created successfully.", {
        position: "top-right",
      });

      navigate("/dashboard/contact-requests");
    }

    if (isCreateError) {
      toast.error("Contact request was not created.", {
        position: "top-right",
      });
    }
  }, [isCreateSuccess, isCreateError]);

  useEffect(() => {
    if (isUpdateSuccess) {
      toast.success("Contact request updated successfully.", {
        position: "top-right",
      });
      navigate("/dashboard/contact-requests");
    }

    if (isUpdateError) {
      toast.success("Contact request was not updated.", {
        position: "top-right",
      });
    }
  }, [isUpdateSuccess, isUpdateError]);

  useEffect(() => {
    if (isSingleSuccess && singleData) {
      setValue("name", singleData.name);
      setValue("email", singleData.email);
      setValue("message", singleData.message);
    }
  }, [isSingleSuccess, singleData]);

  return (
    <div>
      <div className="w-full p-4 rounded-md bg-slate-100">
        <div className="w-full h-[300px] flex items-center justify-center">
          <h2 className="text-5xl">Contact With Us</h2>
        </div>
      </div>

      <div className="p-4 mt-4 bg-slate-100 rounded-md">
        <div className="flex justify-between flex-wrap">
          <div className="basis-full md:basis-1/4 p-4 rounded-md "></div>

          <div className="basis-full md:basis-3/4 p-4 rounded-md">
            <div className="bg-white p-4 rounded-md">
              <div className="mt-5 bg-slate-100 p-3 rounded-lg">
                <div className="mt-4">
                  <form onSubmit={handleSubmit(submitHandler)}>
                    <div className="flex flex-col md:flex-row text-sm">
                      <label className="basis-full md:basis-1/3 p-1">
                        Name
                      </label>
                      <div className="p-1 basis-full md:basis-3/3">
                        <input
                          type="text"
                          name="name"
                          {...register("name")}
                          className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                          placeholder="Name"
                          onChange={inputChangeHandler}
                        />
                        <p className=" text-red-600">{errors?.name?.message}</p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row text-sm">
                      <label className="basis-full md:basis-1/3 p-1">
                        Email
                      </label>
                      <div className="p-1 basis-full md:basis-3/3">
                        <input
                          type="email"
                          name="email"
                          {...register("email")}
                          className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                          placeholder="Email"
                          onChange={inputChangeHandler}
                        />
                        <p className=" text-red-600">
                          {errors?.email?.message}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row text-sm">
                      <label className="basis-full md:basis-1/3 p-1">
                        Message
                      </label>
                      <div className="p-1 basis-full md:basis-3/3">
                        <textarea
                          cols="30"
                          rows="5"
                          className="w-full p-2 border rounded-md focus:border-green-900 focus:outline-none placeholder:text-sm"
                          {...register("message")}
                          placeholder="Message"
                        ></textarea>
                        <p className=" text-red-600">
                          {errors?.message?.message}
                        </p>
                      </div>
                    </div>

                    <div className="w-full pt-2 px-1 text-right">
                      <button
                        type="submit"
                        className="px-3 rounded-md py-1 border border-green-600 text-sm flex items-center justify-center ml-auto"
                      >
                        Send <FaRegPaperPlane size={15} className="ml-2" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
