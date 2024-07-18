import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { addFav, removeFav } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Card(props) {

   const dispatch = useDispatch();
   
   const [ isFav, setIsFav ] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         dispatch(removeFav(props.id));
      } else {
         setIsFav(true);
         dispatch(addFav(props))
      }
   }
   
   const mapDispatchToProps = (character) => {
      return function(dispatch){
        return dispatch(addFav(character));
      }
   }

   const myFavorites = useSelector(state => state.myFavorites);
      useEffect(() => {
         myFavorites.forEach((fav) => {
            if (fav.id === props.id) {
               setIsFav(true);
            }
         });
      }, [myFavorites]);

      const background = props.image;
      console.log(background);
  
    return (
         <div className={style.container} >
            <div className={style.botones}>
                  {
                     isFav ? (
                        <button className={style.corazon} onClick={handleFavorite}>❤️</button>
                     ) : (
                        <button className={style.corazon} onClick={handleFavorite}>🤍</button>
                     )
                  }
                  <button className={style.botonCerrar} onClick={() => props.onClose(props.id)}>X</button> 
              </div>
               <Link to={`/detail/${props.id}`} >
                     <div className={style.image}>
                           <img src={props.image} alt={props.name} />
                     </div>
                     <div className={style.box}></div>
                     <h2>{props.name}</h2>  
                     <div className={style.info}>
                        <p>Id: <span>{props.id}</span></p>
                        <p>Status: <span>{props.status}</span></p>
                        <p>Species: <span>{props.species}</span></p>
                        <p>Gender: <span>{props.gender}</span></p>
                        <p>Origin: <span>{props.origin}</span></p>
                     </div>
               </Link>
      </div>
   );
}
