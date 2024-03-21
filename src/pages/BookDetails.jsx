import React from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

const BookDetails = () => {
  return (
    <div>
      <div className="w-full p-4 rounded-md bg-slate-100">
        <div className="w-full h-[300px] flex items-center justify-center">
          <h2 className="text-5xl">Book Details</h2>
        </div>
      </div>

      <div className="p-4 mt-4 bg-slate-100 rounded-md">
        <div className="flex justify-between flex-wrap">
          <div className="basis-full md:basis-1/4 p-4 rounded-md ">
            <div className="w-full h-full bg-white rounded-md p-4 ">
              <h1 className="text-xl font-bold text-center">Summary</h1>
              <h6 className="mt-5">Writer: {"munna"}</h6>
              <h6>Edition: {"2"}</h6>
              <h6>Publisher: {"Prothoma Prokashoni"}</h6>
              <h6>Loves: {"20"}</h6>
              <h6>Genre: {"Story"}</h6>
              <div className="mt-4 rounded-md overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPC1JLXPpNK4ih8jPVg863e7GI74N2-STRyfGzYMrZZ5tbcu7RXmF1BP-iUExyq_04VGY&usqp=CAU"
                  alt=""
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="basis-full md:basis-3/4 p-4 rounded-md">
            <div className="bg-white p-4 rounded-md">
              <div className="flex items-center">
                <h1 className="flex-grow  font-bold text-2xl pr-5">
                  Title: {"Hajar Bochor Dhore."}
                </h1>
                <button>
                  {false ? (
                    <IoMdHeartEmpty size={30} />
                  ) : (
                    <IoMdHeart size={30} className="text-red-500" />
                  )}
                </button>
              </div>
              <h3 className="font-bold text-lg mt-3">Description: </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                optio dolores, aperiam alias vero cum culpa, laborum quae cumque
                fugiat consequatur amet architecto facilis ea odio explicabo
                vitae magni, eligendi soluta? Culpa a veniam, repellat
              </p>

              <div className="mt-8 bg-slate-100 p-4 rounded-md">
                <div>
                  {[
                    { user: "munna", review: "nice book" },
                    { user: "munna", review: "nice book" },
                    { user: "munna", review: "nice book" },
                    { user: "munna", review: "nice book" },
                  ].map((item, index) => (
                    <div key={index} className="mb-4 flex items-start">
                      <img
                        src="https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Koyekti_Mritu-Jahir_Rayhan-23265-7662.jpg"
                        alt=""
                        className="w-[50px] h-[50px] rounded-full mr-5 flex-none"
                      />
                      <div className="basis-auto border grow bg-white p-4 rounded-md">
                        <h2 className="font-bold">{item.user}</h2>
                        <p>
                          {item.review} Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Libero, ea! Lorem ipsum dolor sit,
                          amet consectetur adipisicing elit. Vel debitis
                          accusamus perspiciatis eos animi quo nihil, facere
                          ratione iste explicabo vitae minus quod quasi, sequi
                          veritatis quam ipsam nostrum. Ipsam nostrum officiis
                          dolorum fuga illum{" "}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <label className="text-sm">Add Review</label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    className="w-full border rounded-lg mt-2 "
                  ></textarea>
                </div>
                <div className="w-full pt-2 px-1 text-right">
                  <button
                    type="submit"
                    className="px-3 rounded-md py-1 border border-green-600 text-sm flex items-center justify-center ml-auto"
                  >
                    Submit <FaRegPaperPlane size={15} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
