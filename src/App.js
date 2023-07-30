import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetMovies from './Components/getMovies';
import Navigation from './Navigation';
import Search from './Navigation/Search';
import Home from './Navigation/Home';
import MyList from './Navigation/MyList';
import SignIn from './Navigation/SignIn';

function App() {
  return (
    <Router>
      <div>
      <Navigation />
        <GetMovies />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mylist" element={<MyList />} />
          <Route path="/search" element={<Search />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;