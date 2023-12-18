import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';


function App() {

  const [characters, setCharacters] = useState([]);

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
   }

   function onClose(id) {
      setCharacters(characters.filter(char => char.id !== Number(id)));
     
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
