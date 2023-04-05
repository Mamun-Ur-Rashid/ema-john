import React, { useState } from 'react';
import Cart from '../cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../reviewItem/ReviewItem';
import './Orders.css'
import { removeFromDb } from '../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    // console.log(cart)
    const [cart, setCart] = useState(savedCart);

    const handleRemoveCart = (id) =>{
        const remainig = cart.filter(product => product.id !== id);
        setCart(remainig);
        removeFromDb(id);
    }
    return (
        <div className='container'>
            <div className="reviw-container">
                {
                   cart.map(product => <ReviewItem
                   key={product.id}
                   product={product}
                   handleRemoveCart={handleRemoveCart}
                   ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <div className='order-summary'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;