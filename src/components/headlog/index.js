
import React, { Component } from 'react';
import '../../App.css';
import Acerca from '../acerca';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class header extends React.Component {

  render() {

    return (

        <div class="header-middle">
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <div class="logo pull-left item">
                <img className="logo" src={logo} />
              </div>
            </div>
            <div class="col-sm-8">
              <div class="shop-menu pull-right">
                <ul class="nav navbar-nav">
                  <li><a href="/login"><i class="fa fa-user"></i> Iniciar Sesion </a></li>
                  <li>
                    <hr />
                    <Switch class="row">
                      <Route path="/login" component={Login}>
                        <Login />
                      </Route>
                    </Switch>
                  </li>
                  <li>                          
                    <a href="/checkout">
                    <span class="badge badge-pill badge-warning">$6,565</span>
                    <i class="fa fa-shopping-cart"></i> Carrito</a></li>
                  <li>
                    <hr />
                  </li>
                  <li>
                    <hr />
                  </li>
                  <li><a href="/register" ><i class="fa fa-lock"></i> Registrarme</a></li>
                  <li>
                    <hr />
                    <Switch >
                      <Route path="/register" component={Register}>
                        <Register />
                      </Route>
                    </Switch>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default header;
