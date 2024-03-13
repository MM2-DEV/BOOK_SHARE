import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewList } from "../store/actions/reviews/reviewsActionHandlers";

const useReviewList = () => {
  const reviewState = useSelector((store) => store.reviews);
  const dispatch = useDispatch();
  console.log("reviewState:", reviewState)

  const {isDeleteSuccess} = reviewState

  useEffect(() => {
    dispatch(getReviewList());
  }, [isDeleteSuccess]);

  return reviewState;
};

export default useReviewList;

