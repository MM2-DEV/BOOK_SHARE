import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStoryBookList } from "../store/actions/allBooks/allBooksActionHandlers";
const useStoryBook = () => {
  const storyBookState = useSelector((store) => store.allBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStoryBookList());
  }, []);

  return storyBookState;
};

export default useStoryBook;
