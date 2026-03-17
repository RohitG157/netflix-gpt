import { useDispatch } from "react-redux";
import { API_ENDPOINTS, API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(API_ENDPOINTS.POPULAR_MOVIES, API_OPTIONS.GET);
    const json = await data.json();

    const movies = json?.results;
    dispatch(addPopularMovies(movies));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
