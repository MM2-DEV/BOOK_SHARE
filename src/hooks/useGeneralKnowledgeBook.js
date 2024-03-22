import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGeneralKnowledgeBookList } from "../store/actions/allBooks/allBooksActionHandlers";

const useGeneralKnowledgeBook = () => {
  const generalKnowledgeBookState = useSelector((store) => store.allBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGeneralKnowledgeBookList());
  }, []);
  return generalKnowledgeBookState;
};

export default useGeneralKnowledgeBook;
