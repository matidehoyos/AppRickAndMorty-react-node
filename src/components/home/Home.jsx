import { useEffect, useState } from "react";
import Cards from "../cards/Cards";
import style from "./Home.module.css";
import Searched from "../searched/Searched";
import axios from 'axios';
import Loader from "../loader/Loader";
const serverUrl = import.meta.env.VITE_SERVER_URL;



export default function Home({searched, setSearched}) {
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);


    const fetchCharacters = async () => {
        try {
            const { data } = await axios.get(`${serverUrl}/characters?page=${currentPage}`);
            setCharacters(data.results); 
            setTotalPages(data.info.pages); 
        } catch (error) {
            console.error("Error fetching characters:", error.message);
        }
    };

    useEffect(() => {
        fetchCharacters(currentPage);
    }, [currentPage]);


    return (
        <div className={style.container}>
            <Loader/>
            { searched && <Searched character={searched} setSearched={setSearched}/>}
            <Cards characters={characters} totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
    )
}