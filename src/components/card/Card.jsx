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
               <h2>{props.name}</h2>  
               <h4>Id: <span>{props.id}</span></h4>
               <h4>Status: <span>{props.status}</span></h4>
               <h4>Species: <span>{props.species}</span></h4>
               <h4>Gender: <span>{props.gender}</span></h4>
               <h4>Origin: <span>{props.origin}</span></h4>
                     <img src={props.image} alt={props.name} />
               </Link>
      </div>
   );
}
