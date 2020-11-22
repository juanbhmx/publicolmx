
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
<div class="header-bottom">
              <div class="container">
                <div class="row">
                  <div class="col-sm-9">
                    <div class="navbar-header">
                      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                    </div>
                    <div class="mainmenu pull-left">
                      <ul class="nav navbar-nav collapse navbar-collapse">
                        <li><a href="/" class="">Home</a></li>

                        <li class="dropdown"><a href="/">Productos<i class="fa fa-angle-down"></i></a>
                          <ul role="menu" class="sub-menu">

                            <li><a href="#">Shampoo</a></li>
                            <li><a href="#">Dulces</a></li>
                            <li><a href="#">Galletas</a></li>
                            <li><a href="#">Miel</a></li>
                          </ul>
                        </li>
                        <li class="dropdown"><a href="/nosotros">Nosotros</a></li>
                        <li><a href="/contacto">Contacto</a></li>
                        <li><a href="/acerca">Acerca de:</a></li>

                        <li class="/"><a class="nav-link disabled" href="/">Cuenta<i class="fa fa-angle-down"></i></a>
                          <ul role="menu" class="sub-menu">

                            <li><a href="/historialpay">Historial de Compras</a></li>
                            <li><a href="/updateuser">Configurar Cuenta</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="content">
                    <div class="search_box pull-right">
                      <input type="text" placeholder="Productos" />
                    </div>
                  </div>
                  <Route path="/acerca" component={Acerca}>
                    <Acerca />
                  </Route>
                </div>
              </div>
            </div>
    )
  }
}
export default header;
