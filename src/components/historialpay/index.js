import React from 'react';
import Checkout from '../checkout';
import '../login/style.scss';



const CartPrice = props => {

    return (
        <div class="container">
            <h3 style={{    color: '#fa7c04'}}>Mis Pedidos</h3>
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
                <hr/>
            </div>
            <div class="container">
            <hr/>
  <div class="row">
  <hr/>
    <div class="col-4">
    <h1 class="pull-left">Estado:</h1>
    <p>Entrega:</p>
    </div>
    <div class="col-4">
      <hr/>
      
    </div>
    <div class="col-4">
      <h1>Enviado por:</h1>
      <p class="pull-right">Paqueteria:</p>
    </div>
    <div class="col-4">
    <button type="button" class="btn btn-secondary">Rastrear Pedido</button>
    </div>
  </div>
</div>
            <hr/>
            <div class="container">
  <div class="row">
    <div class="col-4">
       
    <h1>Datos</h1>
    <p><strong>Pedido y fecha:</strong> </p>
    <p><strong>Metodo de pago:</strong></p>
    <p><strong>Total:</strong></p>
    <p><strong>Enviado a:</strong></p>
    </div>
    
    <div class="col-4">
      <h1>Producto pedido</h1>
    </div>

  </div>
  <hr/>
</div>
        </div>  
         
        
    )
}

export default CartPrice;