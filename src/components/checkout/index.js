import React, { useEffect, useState } from "react";
import Congra from '../congratulation'
import './stylecheck.css';
import Axios from "axios";
import Content from "../content";

export default function Carrito() {

  const [prods, setprods] = useState("");
  const [total, settotal] = useState("");
  const [cart, setcart] = useState("");

  const [Nombre, setnombre] = useState("");
  const [email, setemail] = useState("");
  const [direccion, setdirec] = useState("");
  const [ciudad, setciudad] = useState("");
  const [estado, setestado] = useState("");
  const [cp, setcp] = useState("");
  const [nombef, setnombef] = useState("");
  const [numtar, setnumtar] = useState("");
  const [vence, setvence] = useState("");
  const [año, setaño] = useState("");
  const [ccv, setcvv] = useState("");
  const [id, setid] = useState("");

  const deleteitem = (Id) => {
    console.log(Id);
    Axios.post("https://api-colmena.herokuapp.com/deleteitem", {
      Id: Id
    }).then((response) => {
      if (response.data.message) {
        alert(" " + response.data.message)
      }
    })
  }

  const Direccion = () => {
    Axios.post("https://api-colmena.herokuapp.com/Direccion", {
      Nombre: Nombre,
      email: email,
      direccion: direccion,
      ciudad: ciudad,
      estado: estado,
      cp: cp,
      nombef: nombef,
      numtar: numtar,
      vence: vence,
      año: año,
      ccv: ccv,
    }).then((response) => {
      if (response.data.message) {
        alert(" " + response.data.message)
        window.location.href = "/Congratulation";
      }
    });
  }

  useEffect(() => {
    Axios.get("https://api-colmena.herokuapp.com/Total", {
    }).then((response) => {
      settotal(response.data);
    });
    Axios.get("https://api-colmena.herokuapp.com/Cart", {
    }).then((response) => {
      setcart(response.data);
    });


  }, []);
  console.log(total);
  console.log(cart);


  return (

    <div class="row">
      <div class="col-50">
        <div class="container">
          <h4>Carrito
        <span class="price" style={{ color: 'black' }}>
              <i class="fa fa-shopping-cart"></i>
              <b>Agregados:</b>
            </span>
          </h4>
          {Object.values(cart).map(elemento => (
            <div class="content" key={elemento.Id}>

              <div class="btn-group btn-group-lg">
                <button
                  onClick={() => deleteitem(elemento.Id)}
                  class="btn btn-danger"
                  
                ><i class="fa fa-trash-o" >
                </i>Eliminar
                  </button>
              </div>
              <input
                value={elemento.Id}
                type="hidden"
                onChange={(e) => { setid(e.target.value); }}
              />
              <span
                class="badge badge-pill badge-warning">
                {elemento.cantidad}
              </span>
              <a href="#">{elemento.Nombre}</a>
<a>(${elemento.precio} Precio unitario)</a>
              <span class="price">${elemento.Totall}</span>

            </div>
          )
          )}
          <hr />
          {Object.values(total).map(elemento => (
            <p>Total <span class="price" style={{ color: 'black' }}><b>$ {elemento.Total}</b></span></p>

          ))}
        </div>
      </div>

      <div class="col-75">
        <div class="container">
          {/* <form action="/congratulation"> */}

          <div class="row">
            <div class="col-50">
              <h3>Direccion de envio</h3>
              <label for="fname"><i class="fa fa-user"></i> Nombre</label>
              <input type="text" id="fname" name="firstname" placeholder="Juan Bautista" onChange={(e) => { setnombre(e.target.value); }} required />
              <label for="email"><i class="fa fa-envelope"></i> Email</label>
              <input type="text" id="email" name="email" placeholder="john@uthh.edu.mx" className={`form-control ${email.touched && email.invalid ? 'has-error' : ''}`} onChange={(e) => { setemail(e.target.value); }} required />
              <label for="adr"><i class="fa fa-address-card-o"></i> Direccion</label>
              <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" onChange={(e) => { setdirec(e.target.value); }} required />
              <label for="city"><i class="fa fa-institution"></i> Ciudad</label>
              <input type="text" id="city" name="city" placeholder="Huejutla de Reyes" onChange={(e) => { setciudad(e.target.value); }} required />

              <div class="row">
                <div class="col-50">
                  <label for="state">Estado</label>
                  <input type="text" id="state" name="state" placeholder="Hidalgo" onChange={(e) => { setestado(e.target.value); }} required />
                </div>
                <div class="col-50">
                  <label for="zip">CP</label>
                  <input type="text" id="zip" name="zip" placeholder="43000" onChange={(e) => { setcp(e.target.value); }} required />
                </div>
              </div>
            </div>

            <div class="col-50">
              <h3>Pago</h3>
              <label for="fname">Tarjeta Aceptada</label>
              <div class="icon-container">
                <i class="fa fa-cc-visa" style={{ color: 'navy' }}></i>
                <i class="fa fa-cc-amex" style={{ color: 'blue' }}></i>
                <i class="fa fa-cc-mastercard" style={{ color: 'red' }}></i>
                <i class="fa fa-cc-discover" style={{ color: 'orange' }}></i>
              </div>
              <label for="cname">Nombre del beneficiario</label>
              <input type="text" id="cname" name="cardname" placeholder="Juan Bautista Hernandez" onChange={(e) => { setnombef(e.target.value); }} required="required" />
              <label for="ccnum">Numero de la Tarjeta</label>
              <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" onChange={(e) => { setnumtar(e.target.value); }} required maxLength="16" />
              <label for="expmonth">vence</label>
              <input type="text" id="expmonth" name="expmonth" placeholder="05" onChange={(e) => { setvence(e.target.value); }} required />

              <div class="row">
                <div class="col-50">
                  <label for="expyear">Año</label>
                  <input type="text" id="expyear" name="expyear" placeholder="2054" onChange={(e) => { setaño(e.target.value); }} required maxLength="4" />
                </div>
                <div class="col-50">
                  <label for="cvv">CVV</label>
                  <input type="text" id="cvv" name="cvv" placeholder="352" onChange={(e) => { setcvv(e.target.value); }} required maxLength="3" />
                </div>
              </div>
            </div>

          </div>
          <label>
            <input type="checkbox" checked="checked" name="sameadr" />
Recuerdame en la proxima compra.
        </label>
          <input onClick={Direccion} value="Pagar y Continuar" class="btn" />

          {/* </form> */}
        </div>
      </div>


    </div>
  );
}



