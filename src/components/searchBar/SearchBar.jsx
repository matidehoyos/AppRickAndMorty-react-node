import { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar(props) {

   const [id, setId] = useState("");
   
   const handleChange = event => {
   const {value} = event.target; 
   setId(value);
   }

   const handleClick = event => {
      event.preventDefault();
      props.onSearch(id);
      setId("");
   }

   const handleRandon = () => {
         const randomNumber = Math.floor(Math.random() * 826) + 1;
         props.onSearch(randomNumber);
   }

   return (
      <div className={style.container} >
          <input 
            type='text'
            name='search'
            id='search'
            value={id}
            onChange={handleChange} 
            placeholder="Ingrese n° id (1-626)"
         />
          <button onClick={handleClick} className={style.botonSearch}>Add Character</button> 
          <button onClick={handleRandon} className={style.botonSearch}>Random</button>
      </div>
   );
}
