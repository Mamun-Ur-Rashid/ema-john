import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props.price)
    const {cart} = props;
    // total add function
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        // console.log(product.price)
      total = total + product.price;
      shipping = shipping + product.shipping;
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