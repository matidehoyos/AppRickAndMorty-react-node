import style from "./Filters.module.css";
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";


export default function Filters() {
    const dispatch = useDispatch();

   const handleOrder = (e) => {
         dispatch(orderCards(e.target.value));
       }
   
    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value));
    }
   
   return (
   <div className={style.filters}>
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

)}
