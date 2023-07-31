import React from "react";
import Navigation from './Navigation';
import GetMovies from "./Components/getMovies";
import Movies from "./Carousel";

const App = () => {
  return (
      <div>
        <Navigation/>
        <Movies/>
        <GetMovies/> 
      </div>
  );
};

export default App;
