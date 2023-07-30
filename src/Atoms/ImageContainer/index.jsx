import React, { useState } from "react";
import './style.css'

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
const DEFAULT_POSTER = "/default-poster.jpg"; 

const ImageContainer = ({ props }) => {
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="image-container">
      <img
        src={`${IMAGE_BASE_URL}${props.poster_path || DEFAULT_POSTER}`}
        alt={props.title || "Movie Poster"}
        onClick={handleImageClick}
      />
      {props.title && <p className="movie-title">{props.title}</p>}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>{props.title}</h2>
            {/* Add other movie details, trailer, and cast members here */}
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageContainer;


// import React from "react";
// import './style.css'
// const IMAGE_BASE_URL=process.env.REACT_APP_IMAGE_BASE_URL

// const ImageContainer=({props})=>{
//     return(
//         <div className="image-container">
//                 <img src={`${IMAGE_BASE_URL}${props.poster_path}`} alt={props.title}/>
//                 </div>
//     )
// }

// export default ImageContainer
