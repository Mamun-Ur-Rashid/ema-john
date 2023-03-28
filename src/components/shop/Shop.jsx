import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import Product from '../Product/product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handlerBtn = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }
    return (
        <div className='container'>
            <div className="items-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handlerBtn={handlerBtn}></Product>)
                }
            </div>
            <div className="cart-container">
                <div className='order-summary'>
                    <h5>Order Summary</h5>
                    <p>Selected items : {cart.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;