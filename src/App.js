import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import GetMovies from './Components/getMovies';
import Navigation from './Navigation';

function App() {
  return (
    
      <div>
     <Navigation/>
     <GetMovies/>
      <BrowserRouter>
      <Routes>
        {/* <Route index element={<Login/>}/> */}
        <Route path='/home' element={<GetMovies/>}/>
        {/* <Route path='/product' element={<Products/>}/>
        <Route path='/productdetails/:productId' element={<Productdetails/>}/> */}
      </Routes>
      </BrowserRouter>
      </div>
  
  );
}

export default App;

// import './App.css';
// import NavigationBar from './Navigation/search-bar';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import GetMovies from './Components/GetMovies';function App() {
//   return (
//     <div>
//     <NavigationBar/>
//     <GetMovies/>
//       <BrowserRouter>
//       <Routes>
//         {/* <Route index element={<Login/>}/> */}
//         <Route path='/home' element={<GetMovies/>}/>
//         {/* <Route path='/product' element={<Products/>}/>
//         <Route path='/productdetails/:productId' element={<Productdetails/>}/> */}
//       </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }export default App;