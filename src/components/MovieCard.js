import React from "react";
import { IMAGE_URL } from "../utils/constants";

const MovieCard = ({ poster }) => {
  return (
    <div className="w-48 pr-4">
      <img src={IMAGE_URL + poster} alt="poster" />
    </div>
  );
};

export default MovieCard;
