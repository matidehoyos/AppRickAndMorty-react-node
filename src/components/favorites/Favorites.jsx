import style from "./Favorites.module.css";
import { useSelector } from "react-redux";
import Filters from "../filters/Filters";
import Cards from "../cards/Cards";


const Favorites = () => {
   const myFavorites = useSelector(state => state.myFavorites);

    return (
        <div className={style.container}>
            { !myFavorites.length ? 
            (  <div className={style.notContainer}>
                  <h3>THERE ARE NOT FAVORITES YET...</h3>
               </div>
            ) : (
               <div className={style.cardsContainer}>
                  { myFavorites.length && <Filters /> }
                  <Cards characters={myFavorites} />
               </div>
            )}  
      </div>
  );
}


export default Favorites;