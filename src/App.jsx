import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import NotFound from './components/notFound/notfound.jsx';
import Form from './components/form/Form.jsx';


function App() {

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const EMAIL = 'ejemplo@gmail.com';
  const PASSWORD = '123456';

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      } else {
         alert("Credenciales incorrectas");
      }
   }

   function logout(userData) {
         setAccess(false);
   }
      useEffect(() => {
      // !access && navigate('/');
       !access && navigate('/home');
      }, [access]);
  

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

         {
            location.pathname !== "/" ? <Nav onSearch={onSearch} logout={logout} /> : null
         }
         
         <Routes>
            <Route
               path='/'
               element={<Form login={login} />}>
            </Route>
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
