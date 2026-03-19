import { useDispatch, useSelector } from "react-redux";
import { API_ENDPOINTS, API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerMovie = useSelector((store) => store.movies.trailerVideo);

  const fetchVideos = async () => {
    const url = API_ENDPOINTS.VIDEOS(movieId);
    const data = await fetch(url, API_OPTIONS.GET);
    const json = await data.json();

    const videos = json.results.filter((video) => video.type === "Trailer");

    const trailerVideo = videos.length ? videos[0] : json.results[0];
    dispatch(addTrailerVideo(trailerVideo));
  };
  useEffect(() => {
    !trailerMovie && fetchVideos();
  }, []);
};

export default useMovieTrailer;
