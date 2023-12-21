import { Link } from "react-router-dom";
import style from "./Card.module.css";

export default function Card(props) {
   return (
      <div className={style.container} >
               <button className={style.botonCerrar} onClick={() => props.onClose(props.id)}>X</button>
               <h2>{props.name}</h2>  
               <h4>Id: {props.id}</h4>
               <h4>Status: {props.status}</h4>
               <h4>Specie: {props.species}</h4>
               <h4>Gender: {props.gender}</h4>
               <h4>Origin: {props.origin}</h4>
         <Link to={`/detail/${props.id}`} >
         <img src={props.image} alt={props.name} />
         </Link>
      </div>
   );
}
