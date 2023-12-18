import { useState } from "react";

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
      <div>
          <input 
            type='text'
            name='search'
            id='search'
            value={id}
            onChange={handleChange} 
         />
          <button onClick={handleClick}>Agregar</button> 
          <button onClick={handleRandon}>Random</button>
      </div>
   );
}
