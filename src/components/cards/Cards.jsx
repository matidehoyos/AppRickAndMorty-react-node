import { useState } from "react";
import Card from "../card/Card";
import style from "./Cards.module.css";
import Detail from "../detail/Detail";
import Paginator from "../paginator/Paginator";


export default function Cards({characters, totalPages, currentPage, setCurrentPage}) {
   const [ detalle, setDetalle ] = useState(false);
   const [ id, setId ] = useState('');

   return (
   <div className={style.container}>   
      { detalle &&  <Detail id={id} detalle={detalle} setDetalle={setDetalle} /> }      
      <div className={style.cardsContainer}>
            { characters.map(char => (
               <Card key={char.id} char={char} setDetalle={setDetalle} detalle={detalle} setId={setId} />
            ))}
      </div> 
      <Paginator totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
   </div>

)}
