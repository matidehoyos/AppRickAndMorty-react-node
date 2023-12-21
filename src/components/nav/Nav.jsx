import { NavLink } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import style from "./Nav.module.css";

export default function Nav(props) {
    return (
       <div className={style.container}>
            <SearchBar onSearch={props.onSearch} />
            <div className={style.menu}>
              <NavLink to='/home'>
                <button className={style.menuBoton}>Home</button> 
              </NavLink>
              <NavLink to='/about'>
                <button className={style.menuBoton}>About</button> 
              </NavLink> 
            <button className={style.menuBoton}  onClick={props.logout}>Log out</button> 
           </div> 
       </div>
    );
 }