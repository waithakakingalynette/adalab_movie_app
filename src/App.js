import React from "react";
import Navigation from './Navigation';
import GetMovies from "./Components/getMovies";
import Movies from "./Carousel";
import Category from "./Components/Category";
import MovieCategory from "./Components/Category/movieCategory";

const App = () => {
  return (
      <div>
        <Navigation/>
        <Movies/>
        <Category/>
        <MovieCategory/>
        <GetMovies/> 
      </div>
  );
};

export default App;
