import { useEffect, useState } from "react";
import style from "./Loader.module.css";

export default function Loader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 6000); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={style.container}>
            {loading ? <div className={style.subcontainer}></div> : null}
        </div>
    );
}
