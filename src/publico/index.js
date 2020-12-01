import React, { Component, useEffect, useState } from 'react';
import logo from './../login.svg';
import FPass from './../components/ForgetPassword'
import './../App.css';
import Login from './../components/login/';
import Register from './../components/signup';
import CartPrice from './../components/Cart';
import Home from './../components/content';
import NosotrosL from './../components/nosotros';
import Booking from './../components/contacto';
import Acerca from './../components/acerca';
import Congra from './../components/congratulation'
import { Nosotros } from './../pages';
import Cart from './../components/CartPrice';
import Checkout from './../components/checkout';
import PlaceOrder from './../components/PlaceOrder';
import UpUs from './../components/updateuser'
import HPay from './../components/historialpay';
import Header from './../components/header';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Check from './../components/checkout';
import Axios from "axios";



export default function App() {

    return (
        <Router>
            <div>
                {/* empieza headedddddddddddddddddddddddddddddddddddddddddddddddddddddddr */}
                <header id="header">
                    <div class="header_top">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="contactinfo">
                                        <ul class="nav nav-pills">
                                            <li><a href="#"><i class="fa fa-phone"></i> +52 1 771 243 05 61</a></li>
                                            <li><a href="#"><i class="fa fa-envelope"></i> 20171051@uthh.edu.mx</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="social-icons pull-right">
                                        <ul class="nav navbar-nav">
                                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                            <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                </header>
                {/* terminadddddddddddddddddddddddddddddddddddddddddddddddddddddd header */}
                <Switch >
                    <div id="sportswear" class="panel ">
                        <Route path="/contacto" component={Booking}>
                            <Booking />
                        </Route>
                    </div>
                    <Route path="/content" component={Home}></Route>
                </Switch>
                <Switch >
                    <Route path="/nosotros" component={NosotrosL}>
                        <NosotrosL />
                    </Route>
                    <Route path="/checkout" component={Check}>
                        <Check />
                    </Route>
                    <Route path="/congratulation" component={Congra}>
                        <Congra />
                    </Route>
                    <Route path="/updateuser" component={UpUs}>
                        <UpUs />
                    </Route>
                    <Route path="/historialpay" component={HPay}>
                        <HPay />
                    </Route>
                </Switch>


                {/*---------------------------------------Menus----------------------------------------------------------------------*/}

                <Route exact path='/PlaceOrder' component={PlaceOrder} />
                <Route exact path='/CartPrice' component={CartPrice} />
                <Route exact path='/ForgetPassword' component={FPass} />
                <Route exact path='/' component={Home} />
                {/*-------------------------------------------------------------------------------------------------------------*/}

                <footer id="footer">
                    <div class="footer-widget">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-2">
                                    <div class="single-widget">
                                        <h2>Servicios</h2>
                                        <ul class="nav nav-pills nav-stacked">
                                            <li><a href="#">Miel de calidad</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <div class="single-widget">
                                        <h2>Productos</h2>
                                        <ul class="nav nav-pills nav-stacked">
                                            <li><a href="#">Miel</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <div class="single-widget">
                                        <h2>Politicas</h2>
                                        <ul class="nav nav-pills nav-stacked">
                                            <li><a href="#">Terminos de uso</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <div class="single-widget">
                                        <h2>Acerda de</h2>
                                        <ul class="nav nav-pills nav-stacked">
                                            <li><a href="#">inf. de la Empresa</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-3 col-sm-offset-1">
                                    <div class="single-widget">
                                        <h2>Suscribirse</h2>
                                        <form action="#" class="searchform">
                                            <input type="text" placeholder="Escribe tu email" />
                                            <button type="submit" class="btn btn-default"><i class="fa fa-arrow-circle-o-right"></i></button>
                                            <p>Consigue promociones <br />directamente en tu correo</p>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="footer-bottom">
                        <div class="container">
                            <div class="row">
                                <p class="pull-left">Copyright © 2020 La colmena.</p>

                            </div>
                        </div>
                    </div>

                </footer>

            </div>
        </Router>
    )
}


