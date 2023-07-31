import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ImageContainer from '../Atoms/ImageContainer';
import {getCategories} from '../Utils/utilities';

const Movies = () => {
const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(false);
useEffect(() => {
  (async () => {
    setLoading(true);
    const movies = await getCategories();
    setMovies(movies.results);
    setLoading(false);
  })();
}, []);

if (loading) {
  return <h1>Loading movies...</h1>;
}


const limit = 6;
const moviesLimit = movies.slice(0, limit);
const sliderSettings = {
  arrow: true,
  infinite: true,
  speed: 400,
  slidesToShow: 6,
  slidesToScroll: 1,
};

return (
  <div className="movies-slider">
    <Carousel {...sliderSettings}>
      {moviesLimit.map((item) => (
        <div key={item.id} >
          <ImageContainer props={item} useBackgroundImage={true} className="movie-slide" />
        </div>
      ))}
    </Carousel>
  </div>
   );
 } ; 

export default Movies;