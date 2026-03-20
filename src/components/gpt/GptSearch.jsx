import { BODY_IMG_URL } from "../../utils/constant";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div className="">
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover md:h-auto md:object-contain"
          src={BODY_IMG_URL}
          alt="body logo"
        />
      </div>
      <div className="w-screen">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;
