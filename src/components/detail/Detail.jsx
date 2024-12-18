import style from "./Detail.module.css";
import { useEffect, useState } from "react";
import charsProvider from "../../utils/charsProvider";

export default function Detail({id, setDetalle}) {
    const [character,setCharacter] = useState({});
    const [loading, setLoading] = useState(true);

    const getChar = async () => {
        const char = await charsProvider.getCharById(id);
        setCharacter(char)
    }

    useEffect(() => {
        getChar()
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); 
        return () => clearTimeout(timer);
      }, []);


    return (
        <div className={style.container} style={{opacity: loading ? '0' : '1'}}>
                <div className={style.image}>
                     <img src={character.image} alt={character.name} />
                </div>
                <div className={style.texto}>
                     <h3 className={style.titu}>{character.name}</h3>
                    <div className={style.info}>
                        <p>Specie: <span>{character.species}</span></p>
                        <p>Gender: <span>{character.gender}</span></p>
                        <p>Origin: <span>{character.origin?.name}</span></p>
                        <p>Location: <span>{character.location?.name}</span></p>
                        <p>Status: <span>{character.status}</span></p>
                        <button className={style.cierre} onClick={() => setDetalle(false)}>Go BACK</button>
                    </div>
                </div>
        </div>
    )
}