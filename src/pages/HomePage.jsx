import React, { useEffect } from "react";

import HeroSlider from "../components/Home/HeroSlider";
import QuotesSlider from "../components/Home/QuotesSlider";
import StoryBooks from "../components/Home/books/StoryBooks";
import AcademicBooks from "../components/Home/books/AcademicBooks";
import GeneralKnowledgeBooks from "../components/Home/books/GeneralKnowledgeBooks";
import AllBooks from "../components/Home/books/AllBooks";
import { useDispatch, useSelector } from "react-redux";
import { createRequest } from "../store/actions/borrowRequest/requestsActionHandlers";
import { v4 as uuidv4 } from "uuid";
import { getLocalStorageItem } from "../utils/utils";
import { toast } from "react-toastify";

const HomePage = () => {
  const dispatch = useDispatch();

  const { isCreateLoading, isCreateError, isCreateSuccess, createError } =
  useSelector((store) => store.requests);

  const createBorrowHandler = (id) => {
    const userData = getLocalStorageItem("user");
    const requestBody = {
      id: uuidv4(),
      date: new Date(),
      bookId: Number(id),
      userId: Number(userData.id),
      requestStatus: true,
      borrowedStatus: false,
    };
    dispatch(createRequest(requestBody));
  };

  
  useEffect(() => {
    if (!isCreateLoading && isCreateSuccess) {
      toast.success("Borrow request created successfully.", {
        position: "top-right",
      });
    }

    if (!isCreateLoading && isCreateError) {
      toast.error("Borrow request was not created.", {
        position: "top-right",
      });
    }
  }, [isCreateLoading, isCreateSuccess, isCreateError]);

  return (
    <div className="w-full">
      <HeroSlider />
      <QuotesSlider />
      <StoryBooks createBorrowHandler={createBorrowHandler} />
      <AcademicBooks createBorrowHandler={createBorrowHandler} />
      <GeneralKnowledgeBooks createBorrowHandler={createBorrowHandler} />
      <AllBooks createBorrowHandler={createBorrowHandler} />
    </div>
  );
};

export default HomePage;
