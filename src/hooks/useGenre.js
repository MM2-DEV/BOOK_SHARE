import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenre, getGenreList } from "../store/actions/genres/genresActionHandlers";
import { useParams } from "react-router-dom";

const useGenre = () => {
  const params = useParams();

  const genreState = useSelector((store) => store.genres);

  const dispatch = useDispatch();

  useEffect(() => {
    if (params.id) {
      dispatch(getGenre(params.id));
    }
  }, []);

  return genreState;
};

export default useGenre;
