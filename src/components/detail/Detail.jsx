import axios from "axios";
import { useParams } from "react-router-dom";
import { cloneElement, useEffect, useState } from "react";
import style from "./Detail.module.css";

export default function Detail(props) {

    const {id} = useParams();

    const [character,setCharacter] = useState({});

    useEffect(() => {
    axios(`https://rym2.up.railway.app/api/character/${id}?key=henrystaff`).then(
        ({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        }
    );
    return setCharacter({});
    }, [id]);


    return (
        <div className={style.container}>
        <h3>Detail</h3>
            <div className={style.txtContainer}> 
                <div className={style.txt}> 
                    <h2>{character.name}</h2>
                    <h4>Status: <span>{character.status}</span></h4>
                    <h4>Specie: <span>{character.species}</span></h4>
                    <h4>Gender: <span>{character.gender}</span></h4>
                    <h4>Origin: <span>{character.origin?.name}</span></h4>
                    <h4>Location: <span>{character.location?.name}</span></h4>
                </div>
                <img src={character.image} alt={character.name} />
            </div>
        </div>
    )
}