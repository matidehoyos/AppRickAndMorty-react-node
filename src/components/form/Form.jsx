import React, { useState } from "react";
import validation from "../../utils/validation";
import style from "./Form.module.css";



export default function Form(props) {

    const [userData, setUserData] = useState({email: "", password: ""});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
        setErrors(validation({
            ...userData,
            [name]: value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData);
    }

    const [errors, setErrors] = useState({});
    
    return (
        <div 
            className={style.container}>
            <form className={style.form}>
                <label>Email: </label>
                <input 
                type="text"
                key="email"
                name="email"
                value={userData.email}
                placeholder="ingrese su email.."
                onChange={handleChange}
                />
                <p className={style.error}>{ errors.email && errors.email }</p>
                <label>Password: </label>
                <input 
                type="passsword"
                key="password"
                name="password"
                value={userData.password}
                placeholder="ingrese su password"
                onChange={handleChange}
                />
                <p className={style.error}>{ errors.password && errors.password }</p>
                <button 
                className={style.submit}
                type="submit"
                disabled={errors.email || errors.password}
                onClick={handleSubmit}>Entrar</button>
            </form>
        </div>
    )
}