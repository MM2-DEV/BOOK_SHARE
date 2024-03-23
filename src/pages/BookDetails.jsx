import React, { useEffect, useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import useBook from "../hooks/useBook";
import { useParams } from "react-router-dom";
import { getLocalStorageItem } from "../utils/utils";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../store/actions/reviews/reviewsActionHandlers";

const BookDetails = () => {
  const bookState = useBook();

  const params = useParams();

  const dispatch = useDispatch();

  const { isCreateLoading, isCreateError, isCreateSuccess, createError } =
    useSelector((store) => store.reviews);

  const [reviewContent, setReviewContent] = useState("");

  const {
    isSingleLoading,
    isSingleError,
    isSingleSuccess,
    singleError,
    singleData,
  } = bookState;

  console.log("bookState", bookState);

  const submitHandler = () => {
    const userData = getLocalStorageItem("user");

    const requestBody = {
      id: uuidv4(),
      bookId: Number(params.id),
      userId: userData?.id || "",
      userName: userData?.name || "",
      reviewContent: reviewContent,
      date: new Date(),
    };

    dispatch(createReview(requestBody));
  };

  useEffect(() => {
    if (isCreateSuccess) {
      toast.success("Review created successfully.", {
        position: "top-right",
      });
      setReviewContent("");
    }

    if (isCreateError) {
      toast.error("Review was not created.", {
        position: "top-right",
      });
    }
  }, [isCreateSuccess, isCreateError]);

  return (
    <div>
      <div className="w-full p-4 rounded-md bg-slate-100">
        <div className="w-full h-[300px] flex items-center justify-center">
          <h2 className="text-5xl">Book Details</h2>
        </div>
      </div>

      <div className="p-4 mt-4 bg-slate-100 rounded-md">
        {isSingleLoading && <h4 className="text-center">Loading...</h4>}
        {!isSingleLoading && singleError && (
          <h4 className="text-center text-red-400">Error</h4>
        )}
        {!isSingleLoading && !singleError && singleData ? (
          <div className="flex justify-between flex-wrap">
            <div className="basis-full md:basis-1/4 p-4 rounded-md ">
              <div className="w-full h-full bg-white rounded-md p-4 ">
                <h1 className="text-xl font-bold text-center">Summary</h1>
                <h6 className="mt-5">Writer: {singleData.writer?.name}</h6>
                <h6>Edition: {singleData.edition}</h6>
                <h6>Publisher: {"N/A"}</h6>
                {/* <h6>Loves: {singleData.loves || 0}</h6> */}
                <h6>Genre: {singleData.genre?.name}</h6>
                <div className="mt-4 rounded-md overflow-hidden">
                  <img
                    src={singleData.image}
                    alt={singleData.nameEn}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="basis-full md:basis-3/4 p-4 rounded-md">
              <div className="bg-white p-4 rounded-md">
                <div className="flex items-center">
                  <h1 className="flex-grow  font-bold text-2xl pr-5">
                    Title: {singleData.nameEn}
                  </h1>
                  {/* <button>
                    {false ? (
                      <IoMdHeartEmpty size={30} />
                    ) : (
                      <IoMdHeart size={30} className="text-red-500" />
                    )}
                  </button> */}
                </div>
                <h3 className="font-bold text-lg mt-3">Description:</h3>
                <p>{singleData.description}</p>

                <div className="mt-8 bg-slate-100 p-4 rounded-md">
                  <div>
                    {singleData.reviews?.length > 0 ? (
                      singleData.reviews?.map((item, index) => (
                        <div key={index} className="mb-4 flex items-start">
                          <img
                            src={singleData.image}
                            alt={singleData.nameEn}
                            className="w-[30px] h-[30px] rounded-full mr-5 flex-none"
                          />
                          <div className="basis-auto border grow bg-white p-4 rounded-md">
                            <h2 className="font-bold">{item.userName}</h2>
                            <p>{item.reviewContent}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <h4 className="text-center bg-white p-2">
                        No review found
                      </h4>
                    )}
                  </div>

                  <div className="mt-8">
                    <label className="text-sm">Add Review</label>
                    <textarea
                      name="reviewContent"
                      id=""
                      cols="30"
                      rows="5"
                      value={reviewContent}
                      onChange={(event) => setReviewContent(event.target.value)}
                      className="w-full border rounded-lg mt-2 "
                    ></textarea>
                  </div>
                  <div className="w-full pt-2 px-1 text-right">
                    <button
                      onClick={submitHandler}
                      type="button"
                      className="px-3 rounded-md py-1 border border-green-600 text-sm flex items-center justify-center ml-auto"
                    >
                      Submit <FaRegPaperPlane size={15} className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h4 className="text-center text-red-400">Data Not Found</h4>
        )}
      </div>
    </div>
  );
};

export default BookDetails;
