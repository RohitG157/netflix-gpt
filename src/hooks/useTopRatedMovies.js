import { useDispatch, useSelector } from "react-redux";
import { API_ENDPOINTS, API_OPTIONS } from "../utils/constant";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const getTopRated = async () => {
    const data = await fetch(API_ENDPOINTS.TOP_RATED_MOVIES, API_OPTIONS.GET);
    const json = await data.json();

    const movies = json?.results;
    dispatch(addTopRatedMovies(movies));
  };
  useEffect(() => {
    !topRatedMovies && getTopRated();
  }, []);
};

export default useTopRatedMovies;
