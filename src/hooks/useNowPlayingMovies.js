import { useEffect } from "react";
import { API_ENDPOINTS, API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(API_ENDPOINTS.NOW_PLAYING_MOVIES, API_OPTIONS.GET);
    const json = await data.json();

    const movies = json?.results;
    dispatch(addNowPlayingMovies(movies));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
