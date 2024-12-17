import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import style from "./Nav.module.css";

export default function Nav({setSearched}) {
    return (
       <div className={style.container}>
            <Link to='/'>
              <div className={style.logo}>
                  <img src="./logo.png" alt="logo" />
              </div>
            </Link>
            <SearchBar setSearched={setSearched}/>
            <div className={style.menu}>
              <Link to='/' className={style.home}>
                <button className={style.menuBoton}>Home</button> 
              </Link>
              <Link to='/favorites' className={style.favorites}>
                <button className={style.menuBoton}>Favorites</button> 
              </Link>
              <Link to='/favorites' className={style.favoritesMov}>
                <button className={style.menuBoton}>Favs</button> 
              </Link>
           </div> 
       </div>
    );
 }