import { useState } from "react";
import style from "./SearchBar.module.css"
import { FaSearch } from "react-icons/fa";
import charsProvider from "../../utils/charsProvider";
import { useNavigate } from "react-router-dom";

export default function SearchBar({setSearched}) {
   const [name, setName] = useState("");
   const navigate = useNavigate();
   
   const handleChange = event => {
   const {value} = event.target; 
   setName(value);
   }

   const handleClick = async (e) => {
      e.preventDefault();
      const searched = await charsProvider.getCharByName(name);
      setSearched(searched);
      setName("");
      navigate('/')
   }


   return (
      <label className={style.container} >
          <input 
            type='text'
            name='search'
            id='search'
            value={name}
            onChange={handleChange} 
            placeholder="Insert name..."
         />
          <button onClick={handleClick} className={style.botonSearch}><FaSearch /></button> 
      </label>
   );
}
