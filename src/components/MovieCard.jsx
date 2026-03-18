import React from "react";
import { IMG_CDN_URL, BG_POSTER_MOVIES } from "../utils/constant";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-48 pr-4">
      <img
        alt="movie poster"
        src={poster_path ? IMG_CDN_URL + poster_path : BG_POSTER_MOVIES}
      />
    </div>
  );
};

export default MovieCard;
