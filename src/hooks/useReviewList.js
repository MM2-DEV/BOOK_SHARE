import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewList } from "../store/actions/reviews/reviewsActionHandlers";

const useReviewList = () => {
  const reviewList = useSelector((store) => store.reviews);
  const dispatch = useDispatch();
  console.log("reviewList:", reviewList)

  useEffect(() => {
    dispatch(getReviewList());
  }, []);

  return reviewList;
};

export default useReviewList;

