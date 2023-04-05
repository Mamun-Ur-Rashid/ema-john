import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props.price)
    const {cart} = props;
    // total add function
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        if(product.quantity === 0){
            product.quantity = quantity + 1;
        }
        // console.log(product.price)
        quantity = quantity + product.quantity;
      total = total + product.price * product.quantity;
      shipping = shipping + product.shipping * product.quantity;
    }
    const tax = total *7 /100;
    const grandTotal = total + tax;
    return (
        <div>
            <h5>Order Summary</h5>
            <p>Selected items : {cart.length}</p>
            <p>Total Price: ${total} </p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h6>Grand Total : ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;