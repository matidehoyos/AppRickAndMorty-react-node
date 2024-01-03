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
               <h2>{props.name}</h2>  
               <h4>Id: {props.id}</h4>
               <h4>Status: {props.status}</h4>
               <h4>Species: {props.species}</h4>
               <h4>Gender: {props.gender}</h4>
               <h4>Origin: {props.origin}</h4>
               <Link to={`/detail/${props.id}`} >
                     <img src={props.image} alt={props.name} />
               </Link>
      </div>
   );
}
