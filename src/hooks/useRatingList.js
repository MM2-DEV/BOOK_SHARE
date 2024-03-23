import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRatingList } from "../store/actions/ratings/ratingsActionHandler";

const useRatingList = () => {

  const ratingState = useSelector((store) => store.ratings);

  const dispatch = useDispatch();

  const {isDeleteSuccess} = ratingState

  useEffect(() => {

    dispatch(getRatingList());

  }, [isDeleteSuccess]);

  return ratingState;
};

export default useRatingList;

