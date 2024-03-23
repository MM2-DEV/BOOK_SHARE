import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenreList } from "../store/actions/genres/genresActionHandlers";

const useGenreList = () => {
  const genreState = useSelector((store) => store.genres);

  const { isDeleteSuccess } = genreState;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenreList());
  }, [isDeleteSuccess]);

  return genreState;
};

export default useGenreList;
