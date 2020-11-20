import React from 'react';
import Checkout from '../checkout';
import '../login/style.scss';
import {

    MDBBtn
  } from "mdbreact";
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const CartPrice = props => {

    return (
        <div className="PriceWrapper">
            {/* show price */}
            <div className="CardTitle">
            
                <h3>Detalles Compra</h3>
            </div>
            <div className="CardBody">
                <div className="FinalBilling">
                    <div className="Row">
                        <p>Precio ({"Nombre Producto"})</p>
                        <p>${800}</p>
                    </div>
                    <div className="Row">
                        <p>Delivery</p>
                        <p>$50</p>
                    </div>
                    <hr />
                    <div className="Row">
                        <h4>Total a Pagar:</h4>
                        <h4>${800}</h4>
                    </div>
                    <div className="text-center mt-4">
                <MDBBtn color="deep-orange" className="mb-3" type="submit">
                <Route>
                <Link to="/checkout"><i className="fas fa-shopping-cart">Pagar</i>({props.cartCount})</Link>
                </Route>
                </MDBBtn>
              </div>
                </div>
                
            </div>
        </div>
    );


}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default CartPrice;