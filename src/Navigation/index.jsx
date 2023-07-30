import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li>
          <a className="movie" href="/">
            Moovie
          </a>
        </li>
        <li className="nav-item search-bar">
          <input
            className="search-button"
            type="text"
            placeholder="Search movies and TV shows"
          />
          {/* <button className="search-button">Search</button> */}
        </li>
        <li >
          <a href="/home" className="yellow-link">Home</a>
        </li>
        <li className="list">
          <h4>My List</h4>
        </li>
        <li>
          <button className="sign-in-button">Sign In</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

// import React from 'react';
// import './Navigation.css'

// const Navigation = () => {
//   return (
//     <nav className="navigation">
//       <ul className="nav-list">
//         <li className="movie">
//           <a>Moovie</a>
//         </li>
//         <li className="nav-item">
//           <a>
//             <input type="text" placeholder="Search movies and TV shows" />
//           </a>
//         </li>
//         <li className="yellow_link">
//           <a href="/home">Home</a>
//         </li>
//         <li className="LIST">
//           <a href="/mylist">My List</a>
//         </li>
//         <li className="nav-item">
//           <a>
//             <button className="sign-in-button">Sign In</button>
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// };export default Navigation;