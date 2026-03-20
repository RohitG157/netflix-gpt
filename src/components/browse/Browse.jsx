import { useSelector } from "react-redux";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import GptSearch from "../gpt/GptSearch";
import Header from "../common/Header";
import MainContainer from "./main/MainContainer";
import SecondaryContainer from "./moviesList/SecondaryContainer";

const Browse = () => {
  const gptSearch = useSelector((store) => store.gptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {gptSearch.showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
