import React , {useState} from "react";
import Axios from 'axios';
import loginImg from "../../login.svg";
import Home from '../content';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import FPass from '../ForgetPassword'
import './style.scss'
import signup from '../signup/register';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { Button } from "semantic-ui-react";


export default function Login (){

    const[Usuario,setUsuario] = useState("");
    const[Contra,setContra] = useState("");
    const Acceder = () => {
        Axios.post("https://api-colmena.herokuapp.com/login",{
            Usuario:Usuario,
            Contra:Contra,
        }).then((response)=>{
            if (response.data.message){
                alert(" " + response.data.message);

            }else{
                alert("Redireciona");
                //Window.location.href="/paginaxxx";
            }
        });
    };
            return(
                <div>
                    <input type="text" placeholder="Usuario" onChange={(e) =>{
                        setUsuario(e.target.value);
                    }}/>
                    <input type="text" placeholder="Contraseña" onChange={(e) =>{
                        setContra(e.target.value);
                    }}/>
                    <button onClick = {Acceder}>Acceder</button>
                </div>
            
            );
        }
