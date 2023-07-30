import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetMovies from './Components/getMovies';
import Navigation from './Navigation';

function App() {
  return (
      <div>
      <Navigation/>
      <GetMovies/>
      </div>
      );
}

export default App;