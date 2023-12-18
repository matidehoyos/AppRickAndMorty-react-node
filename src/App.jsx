import axios from 'axios';
import { useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import NotFound from './components/notFound/notfound.jsx';


function App() {

  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

   function onSearch(id) {
      const characterId = characters.filter(
         char => char.id === Number(id)
      );
      if(characterId.length){
         return alert(`${characterId[0].name} ya existe`);
      } 

          axios(`https://rym2.up.railway.app/api/character/${id}?key=henrystaff`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters([...characters, data]);
            } else {
               window.alert('¡El id debe ser un numero entre 1 y 826!');
            }
         } 
         ); 
         navigate('/home');
   }

   function onClose(id) {
      setCharacters(characters.filter(char => char.id !== Number(id)));
     
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes>
            <Route
               path='/home'
               element={<Cards characters={characters} onClose={onClose} />}>
            </Route>
            <Route
               path='/about'
               element={<About />}>
            </Route>
            <Route
               path='/detail/:id'
               element={<Detail />}>
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
