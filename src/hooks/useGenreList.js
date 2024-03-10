import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenreList } from "../store/actions/genres/genresActionHandlers";


const useGenreList = () => {
  const genreList = useSelector((store) => store.genres);
  const dispatch = useDispatch();
  console.log("genreList:", genreList)

  useEffect(() => {
    dispatch(getGenreList());
  }, []);

  return genreList;
};

export default useGenreList;
