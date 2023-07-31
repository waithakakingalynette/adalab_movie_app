import React, { useState } from 'react';

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const BASE_URL = process.env.REACT_APP_BASE_URL;


const Search =()=>{
  <div className="search_button">
          <input
            value={searchValue}
            onChange={handleInput}
            type="text"
            placeholder="Search"
          />
          <button onClick={handleSearch} className="search-button">Search</button>
        </div>
}
  
export default Search;