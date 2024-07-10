import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  return (
    <div>
      <MoviesList title={"Now Playing"} movies={movies} />
      <MoviesList title={"Horror"} movies={movies} />
      <MoviesList title={"Sci Fi"} movies={movies} />
      <MoviesList title={"Top TV Shows"} movies={movies} />
      <MoviesList title={"Drama"} movies={movies} />
    </div>
  );
};

export default SecondaryContainer;
