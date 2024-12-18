import style from "./Card.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";

export default function Card({char, detalle, setDetalle, setId}) {
   const [loading, setLoading] = useState(true);
   const [ isFav, setIsFav ] = useState(false);
   const dispatch = useDispatch();

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         dispatch(removeFav(char.id));
      } else {
         setIsFav(true);
         dispatch(addFav(char))
      }
   }
   
   const myFavorites = useSelector(state => state.myFavorites);
      useEffect(() => {
         myFavorites.forEach((fav) => {
            if (fav.id === char.id) {
               setIsFav(true);
            }
         });
      }, [myFavorites]);


   const handleClick = (id) => {
      setId(id)
      setDetalle(!detalle);
   }


   useEffect(() => {
      const timer = setTimeout(() => {
          setLoading(false);
      }, 600); 
      return () => clearTimeout(timer);
    }, []);

  
    return (
         <div className={style.container} style={{opacity: loading ? '0' : '1'}}>
               <button className={style.corazon} onClick={handleFavorite}>{ isFav ? '❤️' : '🤍' }</button>
               <button className={style.link} onClick={() => handleClick(char.id)} >
                     <div className={style.image}>
                           <img src={char.image} alt={char.name} />
                     </div>
                     <h2>{char.name}</h2>  
               </button>
         </div>
   );
}
