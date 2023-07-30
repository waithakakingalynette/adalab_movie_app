import React, { useEffect, useState } from "react";
import './style.css';

const BASE_URL=process.env.REACT_APP_IMAGE_BASE_URL;
const ACCESS_TOKEN=process.env.REACT_APP_ACCESS_TOKEN

const MovieDetails = ({ movie, onClose }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`${BASE_URL}/3/movie/{movie_id}=${ACCESS_TOKEN}`);
        if (!response.ok) {
          throw new Error('No details fetched');
        }
        const data = await response.json();
        setMovieDetails(data);

        const castResponse = await fetch(`${BASE_URL}/3/movie/{movie_id}/credits=${ACCESS_TOKEN}`);
        if (castResponse.ok) {
          const castData = await castResponse.json();
          setCast(castData.cast);
        }
      } catch (error) {
        console.error('Error in fetching cast:', error);
      }
    };

    if (movie) {
      fetchMovieDetails();
    }
  }, [movie]);

};

export default MovieDetails;


// import React from "react";
// import './style.css';

// const MovieDetails = ({ movie, onClose }) => {
//   return (
//     <div className="movie-details">
//       <div className="movie-details-header">
//         <h2>{movie.title}</h2>
//         <button onClick={onClose} className="close-button">Close</button>
//       </div>
//       <div className="movie-details-content">
//         <img src={movie.imageUrl} alt={movie.title} />
//         <p>{movie.overview}</p>
//         {/* Add other movie details, trailer, and cast information here */}
//       </div>
//     </div>
//   );
// };

// export default MovieDetails;
