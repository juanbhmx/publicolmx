import React, { useState } from "react";
import Axios from 'axios';
import './../../App.css';

export default function Footer() {

    return (
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

    );

}
