import axios from "axios";
import { useParams } from "react-router-dom";
import { cloneElement, useEffect, useState } from "react";

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
        <div>
            <h1>Detail</h1>
            <h2>Name: {character.name}</h2>
            <img src={character.image} alt={character.name} />
            <h4>Status: {character.status}</h4>
            <h4>Specie: {character.species}</h4>
            <h4>Gender: {character.gender}</h4>
            <h4>Origin: {character.origin?.name}</h4>
            <h4>Location: {character.location?.name}</h4>
            
        </div>
    )
}