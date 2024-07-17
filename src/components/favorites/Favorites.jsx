import style from "./Favorites.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import Card from "../card/Card";




const Favorites = ({onClose}) => {


   const dispatch = useDispatch();


    const myFavorites = useSelector(state => state.myFavorites);

    const handleOrder = (e) => {
      dispatch(orderCards(e.target.value));
    }

    const handleFilter = (e) => {
      dispatch(filterCards(e.target.value));
    }


    return (
        <div className={style.container}>
         {
            myFavorites.length ? (
                     <div>
                        <select name="order"
                              onChange={handleOrder}>
                                 <option value="A">Ascendente</option>
                                 <option value="D">Descendiente</option>
                        </select>
                        <select name="filter"
                                 onChange={handleFilter}>
                                 <option value="all">All</option>
                                 <option value="Male">Male</option>
                                 <option value="Female">Female</option>
                                 <option value="Genderless">Genderless</option>
                                 <option value="unknown">unknown</option>
                        </select>
                     </div>
            ) 
            : null
         }
         <div className={style.cardsContainer}>
            {
               !myFavorites.length
               ? <h2 className={style.aviso}>THERE ARE NOT FAVORITES YET...</h2>
               : myFavorites.map(myFavorite => (
                  <Card
                     key={myFavorite.id}
                     id={myFavorite.id}
                     name={myFavorite.name}
                     status={myFavorite.status}
                     species={myFavorite.species}
                     gender={myFavorite.gender}
                     origin={myFavorite.origin}
                     image={myFavorite.image}
                     onClose={onClose}
                  />
               ))
            }
         </div>
      </div>
  );
}


export default Favorites;