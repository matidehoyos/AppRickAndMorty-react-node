import React from "react";
import style from "./About.module.css";

export default function About(props) {

  return (
     <div className={style.container}>
        <div className={style.txtAbout}>
          <div className={style.txt}>
              <h3>About me</h3>   
              <p className={style.parrafo}>Visita mi  
                <a
                  href="https://github.com/matidehoyos"
                  target="_blank"
                > GitHub</a>
              </p>
          </div>
        <img src="src/assets/matias.jpg" alt="sobre mi"/> 
        </div>
     </div>
  );
}