import React from 'react';
import Checkout from '../checkout';
import '../login/style.scss';


const CartPrice = props => {

    return (
        <header class="masthead d-flex">
        <div class="container text-center my-auto">
          <h1 class="mb-1">Compra Exitosa</h1>
          <h3 class="mb-5">
            <em>Gracias por su preferencia!</em>
          </h3>
          <a class="btn btn-primary btn-xl js-scroll-trigger" href="/">Ver Mas productos</a>
        </div>
        <div class="overlay"></div>
      </header>
    )
}

export default CartPrice;