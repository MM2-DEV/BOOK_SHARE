import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRating,
  getRatingList,
} from "../store/actions/ratings/ratingsActionHandler";
import { useParams } from "react-router-dom";

const useRating = () => {
  const params = useParams();

  const ratingState = useSelector((store) => store.ratings);

  const dispatch = useDispatch();

  useEffect(() => {
    if (params.id) {
      dispatch(getRating(params.id));
    }
  }, []);

  return ratingState;
};

export default useRating;
