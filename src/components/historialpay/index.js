import React, { useState, useEffect } from 'react';
import Checkout from '../checkout';
import '../login/style.scss';
import Axios from "axios";

export default function Historial() {
  const [total, settotal] = useState("");
  const [dir, setdir] = useState("");
  const [cart, setcart] = useState("");

  useEffect(() => {
    Axios.get("https://api-colmena.herokuapp.com/Total", {
    }).then((response) => {
      settotal(response.data);
    });
    Axios.get("https://api-colmena.herokuapp.com/Historial", {
    }).then((response) => {
      setdir(response.data);
    });
    Axios.get("https://api-colmena.herokuapp.com/Cart", {
    }).then((response) => {
      setcart(response.data);
    });
  }, []);
  console.log(total);
  console.log(dir);
  console.log(cart);

  return (

    <div class="container">
      <h3 style={{ color: '#fa7c04' }}>Mis Pedidos</h3>
      <div class="row">
        <div class="col">

          <button type="button" class="btn btn-secondary">1 Mes</button>
        </div>
        <div class="col">

          <button type="button" class="btn btn-secondary">2 Meses</button>
        </div>
        <div class="col">

          <button type="button" class="btn btn-secondary">Todos</button>
        </div>
        <hr />
      </div>
      <div class="container">
        <hr />
        <div class="row">
          <hr />
          <div class="col-4">
            <h1 class="pull-left">Estado:</h1>
            <p><strong>Entrega:</strong> En camino.</p>
          </div>
          <div class="col-4">
            <hr />

          </div>
          <div class="col-4">
            <h1>Enviado por:</h1>
            <p class="pull-right">
              <strong>Paqueteria:</strong> FeDex</p>
          </div>
          <div class="col-4">
            <button type="button" class="btn btn-secondary">Rastrear Pedido</button>
          </div>
        </div>
      </div>
      <hr />
      <div class="container">
        <div class="row">
          {Object.values(total).map(elemento => (
            <div class="col-4">

              <h1>Datos</h1>
              
              <p><strong>Pedido y fecha:</strong> </p>
              <p><strong>Metodo de pago: </strong>Tarjeta de Debito</p>
              <p><strong>Total: </strong>${elemento.Total}</p>
              {Object.values(dir).map(elemento => (
                <p><strong>Enviado a: </strong>{elemento.Nombre}</p>
              ))}
               <div class="col-4">
            <button type="button" class="btn btn-secondary"><i class="fa fa-download">
                              </i> Facturar</button>
          </div>
            </div>
          ))}
          <p>----------------</p>
          <div class="col-4">
            <h1>Producto pedido</h1>
            {Object.values(cart).map(elemento => (
              <div class="content">
                <p>
                  <span class="badge badge-pill badge-warning">{elemento.cantidad}</span>
                  <a href="#">{elemento.Nombre}</a>
                  <span class="price">${elemento.Totall}</span>

                </p>
              </div>

            ))}
          </div>

        </div>
        <hr />
      </div>
    </div>


  )
}