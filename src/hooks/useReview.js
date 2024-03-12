import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getReview } from "../store/actions/reviews/reviewsActionHandlers";

const useReview = () => {
  const params = useParams();

  const reviewState = useSelector((store) => store.reviews);

  const dispatch = useDispatch();

  useEffect(() => {
    if (params.id) {
      dispatch(getReview(params.id));
    }
  });
  return useReview;
};

export default useReview;
