import { useDispatch } from "react-redux";
import { API_ENDPOINTS, API_OPTIONS } from "../utils/constant";
import { addTopRatedMovies, addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(API_ENDPOINTS.UPCOMING_MOVIES, API_OPTIONS.GET);
    const json = await data.json();

    const movies = json?.results;
    dispatch(addUpcomingMovies(movies));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
