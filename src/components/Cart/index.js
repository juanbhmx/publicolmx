import React, { Component } from 'react';
import './style.css';
import CartItem from './CartItem';



import CartPrice from '../../components/CartPrice';

class Cart extends Component{

    state = {
        cartItems: []
    }

    decreaseQuantity = (e, productId) => {
        this.updateCart(productId, -1);
    }

    increaseQuantity = (e, productId) => {
        this.updateCart(productId, 1);
    }

    updateCart = async (productId, quantity) => {
        try{
            const auth = this.props.auth;
            let product = this.state.cartItems.find(item => item.product === productId);
            product = {
                productId: product.product,
                quantity: parseInt(product.quantity) + parseInt(quantity),
                newQuantity: quantity,
                price: product.price,
                total: parseFloat(product.total) + parseFloat( product.price * quantity )
            }
            if(product.quantity <= 0){
                return;
            }
            const response = await this.props.updateCart(auth.token, auth.user.userId, product);
            if(response.ok == 1){
                const {cartItems} = this.state;
                this.setState({
                    cartItems: cartItems.map(item => item.product === productId ? 
                        {...item, quantity: item.quantity + quantity, total: item.total + (item.price * quantity)}: item)
                })
            }
        }catch(error){
            console.log(error);
        }
        
    }

    changeQuantity = (e, productId) => {

        // console.log(e.target.value);

        // if(isNaN(e.target.value)){
        //     return;
        // }

        // const firstDigit = parseInt(e.target.value.split("")[0]);
        // if(firstDigit === 0){
        //     return;
        // }

        // //alert(e.target.value);

        // this.updateCart(productId, parseInt(e.target.value));
    }

  /* componentDidMount() {
        if(!this.props.auth.isAuthenticated){
            this.props.getToken()
            .then(result => {
                if(result){
                    const cartItems = this.props.getCartItems(this.props.auth.token, this.props.auth.user.userId);
                    return cartItems;
                }
                return [];
            })
            .then(cartItems => {
                if(cartItems.cart.length > 0){

                    console.log(this.props.cart)

                    this.setState({
                        cartItems: this.props.cart.cartItem
                    })
                }
            })
            .catch(error => {
                console.log(error);
            })
        }else{
            this.setState({
                cartItems: this.props.cart.cartItem
            })
        }
    } */

    render (){

        return (
            <React.Fragment>
                
                <div className="Content">
                    <div className="CartWrapper">
                        <div className="CartDetails">
                            {/* List cart items */}
                            <div className="CardTitle">
                                <h3>Mi Carrito</h3>
                            </div>
                            <div className="CardBody">

                                {
                                    this.state.cartItems.map(product => 
                                        <CartItem
                                            key={product.product}
                                            productId={product.product}
                                            name={product.name}
                                            image={product.image}
                                            price={product.price}
                                            quantity={product.quantity}
                                            total={product.total}
                                            //name="quantity" 
                                            changeQuantity={this.changeQuantity}
                                            increaseQuantity={this.increaseQuantity}
                                            decreaseQuantity={this.decreaseQuantity}
                                    />)
                                }
                                

                                <div className="PlaceOrder">
                                    <button className="PlaceOrderButton" onClick={() => this.props.history.push('/PlaceOrder')}>Realizar Pedido</button>
                                </div>

                            </div>
                        </div>
                        
                        <CartPrice />

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        cart: state.cart
    }
}


export default (Cart);