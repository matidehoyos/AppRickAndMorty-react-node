import './App.css';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Nav from './components/nav/Nav.jsx';
import Home from './components/home/Home.jsx';
import Favorites from './components/favorites/Favorites.jsx';
import NotFound from './components/notFound/NotFound.jsx';


function App() {
   const [searched, setSearched] = useState(null)

   return (
      <div className='App'>
         <Nav setSearched={setSearched} /> 
         <Routes>
            <Route
               path='/'
               element={ <Home searched={searched} setSearched={setSearched} />}>
            </Route>
            <Route
               path='/favorites'
               element={<Favorites />}>
            </Route>
            <Route 
               path='*'
               element={<NotFound />}>
            </Route>
         </Routes>
         
      </div>
   );
}

export default App;
