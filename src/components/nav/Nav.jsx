import { NavLink, Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import style from "./Nav.module.css";

export default function Nav(props) {
    return (
       <div className={style.container}>
          <Link to='/home'>
            <div className={style.logo}>
                <img src="./logo.png" alt="" />
            </div>
          </Link>
            <SearchBar onSearch={props.onSearch} />
            <div className={style.menu}>
              <NavLink to='/home'>
                <button className={style.menuBoton}>Home</button> 
              </NavLink>
              <NavLink to='/favorites'>
                <button className={style.menuBoton} >Favorites</button> 
              </NavLink>
           </div> 
       </div>
    );
 }