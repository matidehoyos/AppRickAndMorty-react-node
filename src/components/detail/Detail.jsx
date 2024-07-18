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
                window.alert('There are no personajes with that ID');
            }
        }
    );
    return setCharacter({});
    }, [id]);


    return (
        <div className={style.container}>
            <div className={style.bg}></div>
            <div className={style.box}> 
                <img src={character.image} alt={character.name} />
                <div className={style.texto}>
                     <h6 className={style.titu}>{character.name}</h6>
                    <div className={style.info}>
                        <p>Specie: <span>{character.species}</span></p>
                        <p>Gender: <span>{character.gender}</span></p>
                        <p>Origin: <span>{character.origin?.name}</span></p>
                        <p>Location: <span>{character.location?.name}</span></p>
                        <p>Status: <span>{character.status}</span></p>
                    </div>
                </div>
          </div>
        </div>
    )
}