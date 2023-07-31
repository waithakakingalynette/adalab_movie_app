import React, { useState, useEffect } from "react";
import getMovies from "../../Utils/utilities";
import ImageContainer from "../../Atoms/ImageContainer";
import './style.css';

const GetMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const movies = await getMovies();
      setLoading(false);
      setMovies(movies.results);
    })();
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  if (loading) {
    return <h1>Loading movies...</h1>;
  }

  return (
    <div className="container">
      {movies && movies.length > 0 && movies.map((movie) => (
        <ImageContainer
          key={movie.id}
          props={movie}
          onClick={() => handleMovieClick(movie)} 
        />
      ))}
      {movies && movies.length === 0 && (<h1>No movies</h1>)}

    </div>
  );
};

export default GetMovies;