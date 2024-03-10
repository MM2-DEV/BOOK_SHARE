import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRatingList } from "../store/actions/ratings/ratingsActionHandler";

const useRatingList = () => {
  const ratingList = useSelector((store) => store.ratings);
  const dispatch = useDispatch();
  console.log("ratingList:", ratingList)

  useEffect(() => {
    dispatch(getRatingList());
  }, []);

  return ratingList;
};

export default useRatingList;

