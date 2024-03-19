import React from "react";
import { useForm } from "react-hook-form";
import { FaRegPaperPlane } from "react-icons/fa";

const ContactPage = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const inputChangeHandler = (data) => {
    console.log("inputChangeHandler:");
  };

  const submitHandler = (data) => {
    console.log("submit handler :", data);
  };

  return (
    <div>
      <div className="w-full p-4 rounded-md bg-slate-100">
        <div className="w-full h-[300px] flex items-center justify-center">
          <h2 className="text-5xl">Contact With Us</h2>
        </div>
      </div>

      <div className="p-4 mt-4 bg-slate-100 rounded-md">
        <div className="flex justify-between flex-wrap">
          <div className="basis-full md:basis-1/4 p-4 rounded-md ">
            
          </div>

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
