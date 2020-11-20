import React , {useState} from "react";
import Axios from 'axios';

export default function Registro (){

    const[Nombre,setNombre] = useState("");
    const[Ap,setAp] = useState("");
    const[Am,setAm] = useState("");
    const[Dir,setDir] =useState("");
    const[Correo,setCorreo]=useState("");
    const[Tel,setTel]=useState("");
    const[Usuario,setUsuario] = useState("");
    const[Contra,setContra] = useState("");
    
    const Registrar = () => {
        Axios.post("https://api-colmena.herokuapp.com/registro",{
            Ap:Ap,
            Am,Am,
            Nombre:Nombre,
            Dir:Dir,
            Correo:Correo,
            Tel:Tel,
            Usuario:Usuario,
            Contra:Contra,
        }).then((response)=>{
            if (response.data.message){
                alert(" " + response.data.message);
            }
        });
    };
            return(
                <div>
                    <input type="text" placeholder="Nombre" onChange={(e) =>{
                        setNombre(e.target.value);
                    }}/>
                    <input type="text" placeholder="Apellido P." onChange={(e) =>{
                        setAp(e.target.value);
                    }}/>
                    <input type="text" placeholder="Apellido M." onChange={(e) =>{
                        setAm(e.target.value);
                    }}/>
                     <input type="text" placeholder="Dirección" onChange={(e) =>{
                        setDir(e.target.value);
                    }}/>
                    <input type="text" placeholder="Email" onChange={(e) =>{
                        setCorreo(e.target.value);
                    }}/>
                    <input type="text" placeholder="Telefono" onChange={(e) =>{
                        setTel(e.target.value);
                    }}/>
                    <input type="text" placeholder="Usuario" onChange={(e) =>{
                        setUsuario(e.target.value);
                    }}/>
                    <input type="password" placeholder="Contraseña" onChange={(e) =>{
                        setContra(e.target.value);
                    }}/>
                    <button onClick = {Registrar}>Registrarme</button>
                </div>
            
            );
        }
