import React from "react";
import MovieCard from "./MovieCard";
import {Link} from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies && movies[0] ? (
        movies.map((el) => { return ( 
      <Link to={el.lien}>
        < MovieCard key={el.id} film={el} />
      </Link>
        )}
    ) ): (
        <h1>Oups No result :'(</h1>
      )}
    </div>
  );
};

export default MovieList;
