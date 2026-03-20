import { useSelector } from "react-redux";
import MovieList from "../browse/moviesList/MovieList";

const GptMovieSuggestion = () => {
  const { moviesName, moviesResult } = useSelector((store) => store.gptSearch);
  if (!moviesName) return null;

  console.log(moviesResult);
  console.log(moviesName);
  return (
    <div className="p-4 m-4 bg-black/80 text-white">
      <div>
        {moviesName &&
          moviesName.map((movie, index) => (
            <MovieList key={movie} title={movie} movies={moviesResult[index]} />
          ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
