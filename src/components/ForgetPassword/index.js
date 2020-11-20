import React  from "react";
import Home from '../content';
import MobileTypeInput from '../../components/UI/MobileTypeInput';
import SubmitGradientButton from '../../components/UI/SubmitGradientButton';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import '../login/style.scss'


export class ChangeP extends React.Component{
    state = {
        email: ''
    }
    constructor(props){
            super(props);
        }
        render(){
            return(
                <div className="base-container">
                <div className="header">
                    <h3>Restablecer Contraseña</h3>
                </div>
                
                <div className="content">
                    <form onSubmit={this.forgetPasswordHandler} autoComplete="off">

                        <MobileTypeInput 
                            type="text"
                            placeholder="Email"
                            value={this.state.email}
                            textHandler={this.textHandler}
                            name="email"
                        />
                        <SubmitGradientButton 
                            label="enviar"
                            style={{marginTop: '30px'}}
                        />
                    </form>
                </div>
                <div>
                    
                    <Link to="/login">Login</Link>
                </div>
                
                
            </div>
            )
            
        }
    }
    
    export default ChangeP;