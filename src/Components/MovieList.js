import React, { useState } from "react";
import Filter from "./Filter";
import MovieCard from "./MovieCard";

const MovieList = ({ movie }) => {
  const [text, settext] = useState("");
  const [rate, setrate] = useState("");
  const filterText = (txt) => {
    settext(txt);
  };
  const filterRate = (rt) => {
    setrate(rt);
  };
  return (
    <div>
      <Filter filterText={filterText} filterRate={filterRate} />

      <div
        className="movieStyle"
        style={{
          background: "black",
          color: "white",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: "auto",
        }}
      >
        {movie
          .filter(
            (movie) =>
              movie.name.toLowerCase().includes(text.toLowerCase()) &&
              movie.rating >= rate
          )
          .map((el) => <MovieCard element={el} />)
          .reverse()}
      </div>
    </div>
  );
};

export default MovieList;
