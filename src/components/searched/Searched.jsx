import style from "./Searched.module.css";

export default function Searched ({character, setSearched}) {

    return (
        <div className={style.container}>
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
                        <button className={style.cierre} onClick={() => setSearched(null)}>Go BACK</button>
                    </div>
                </div>
        </div>
    )
}