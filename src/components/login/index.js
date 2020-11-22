import React, { useState } from "react";
import Axios from 'axios';
import './style.scss';

export default function Login() {

    const [Usuario, setUsuario] = useState("");
    const [Contra, setContra] = useState("");
    const Acceder = () => {
        Axios.post("https://api-colmena.herokuapp.com/login", {
            Usuario: Usuario,
            Contra: Contra,
        }).then((response) => {
            if (response.data.message) {
                alert(" " + response.data.message);

            } else {
                alert("Bienvenido");
                window.location.href = "/";
            }
        });
    };
    return (
        <div>
            <input type="text" placeholder="Usuario" onChange={(e) => {
                setUsuario(e.target.value);
            }} />
            <input type="password" placeholder="Contraseña" onChange={(e) => {
                setContra(e.target.value);
            }} />
            <button onClick={Acceder}>Acceder</button>
        </div>

    );

}

