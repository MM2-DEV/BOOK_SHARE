import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookList } from "../store/actions/book/bookActionHandler";

const useBookList = () => {
  const bookList = useSelector((store) => store.book);
  const dispatch = useDispatch();
  console.log("bookList:", bookList)

  useEffect(() => {
    dispatch(getBookList());
  }, []);

  return bookList;
};

export default useBookList;
